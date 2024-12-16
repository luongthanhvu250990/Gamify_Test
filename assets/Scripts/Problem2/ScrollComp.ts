import {
  _decorator,
  Component,
  instantiate,
  macro,
  Node,
  NodePool,
  Prefab,
  UITransform,
  Vec3,
} from "cc";
import { ItemComp } from "./ItemComp";
const { ccclass, property } = _decorator;

@ccclass("ScrollComp")
export class ScrollComp extends Component {
  @property(Node)
  private contentNode: Node = null;

  @property(Prefab)
  private itemPrefab: Prefab = null;

  @property()
  private itemSpacing: number = 50;

  @property()
  private snapSpeed = 3000;

  private contentTrans: UITransform = null;
  private countData: number = 0;
  private itemTotal: number = 0;
  private pool: NodePool = null;

  private yOffset: number = 0;


  protected onLoad(): void {
    this.contentTrans = this.contentNode.getComponent(UITransform);
    this.pool = new NodePool();
  }

  protected start(): void {
    this.init();
  }

  protected update(dt: number): void {
    if (this.yOffset == 0) return;

    let offset = Math.min(Math.abs(this.yOffset), dt * this.snapSpeed);
    this.contentNode.children.forEach((child) => {
      child.setPosition(child.position.x, child.position.y - offset);
    });
    this.yOffset += offset;
  }

  private init() {
    const initTotal = 20;
    for (let i = 0; i < initTotal; i++) {
      let newItem = this.createItem();
      this.addItemToTop(newItem);
    }
  }

  private createNode(): Node {
    let item: Node = null;
    if (this.pool.size() > 0) item = this.pool.get();
    else {
      item = instantiate(this.itemPrefab);
    }
    return item;
  }

  private deleteNode(item: Node) {
    this.pool.put(item);
  }

  private createItem(): Node {
    this.countData++;
    let newNode = this.createNode();

    newNode.getComponent(ItemComp).setData(this.countData);
    return newNode;
  }

  addItemToTop(newNode: Node) {
    newNode.setSiblingIndex(this.itemTotal);

    let y = 0;
    let childCount = this.contentNode.children.length;
    let topChild = this.contentNode.children[childCount - 1];
    if (topChild) {
      y = topChild.position.y + this.itemSpacing;
    }
    newNode.setParent(this.contentNode);
    newNode.setPosition(0, y, 0);

    this.itemTotal++;
  }

  private deleteItem(item: Node) {
    this.itemTotal--;
    this.deleteNode(item);
  }

  triggerAdd() {
    let newItem = this.createItem();
    this.addItemToTop(newItem);
  }

  triggerRemove() {
    let bot = this.contentNode.children[0];
    this.deleteItem(bot);
    this.yOffset -= this.itemSpacing;
  }

  onClick() {
    this.unscheduleAllCallbacks();
    this.schedule(
      this.triggerRemove.bind(this),
      0.1,
      macro.REPEAT_FOREVER,
      0.1
    );
    this.schedule(this.triggerAdd.bind(this), 0.05, macro.REPEAT_FOREVER, 0.05);
  }
}
