import {
  _decorator,
  Component,
  instantiate,
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

  private contentTrans: UITransform = null;
  private countData: number = 0;
  private itemTotal: number = 0;
  private pool: NodePool = null;

  protected onLoad(): void {
    this.contentTrans = this.contentNode.getComponent(UITransform);
    this.pool = new NodePool();
  }

  protected start(): void {
    this.init();
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
    newNode.setParent(this.contentNode);

    let y = this.itemTotal * this.itemSpacing;
    newNode.setPosition(0, y, 0);
    this.itemTotal++;
  }

  private deleteItem(item: Node) {
    this.itemTotal--;
    this.deleteNode(item);
  }

  //   setNumberOfItem(num: number) {
  //     this.contentTrans.height = this.itemSpacing * num;
  //     this.totalItem = num;

  //     for (let i = 0; i < num; i++) {
  //       let newNode = this.createNode();
  //       newNode.setParent(this.contentNode);
  //       let y = i * this.itemSpacing;
  //       newNode.setPosition(0, y, 0);
  //     }
  //   }
  triggerAdd() {
    let newItem = this.createItem();
    this.addItemToTop(newItem);
  }

  triggerRemove() {}
}
