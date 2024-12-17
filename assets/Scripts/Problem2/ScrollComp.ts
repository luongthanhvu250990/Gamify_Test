import {
  _decorator,
  CCFloat,
  Component,
  instantiate,
  Label,
  macro,
  Node,
  NodePool,
  Prefab,
  Slider,
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

  private snapSpeed = 3000;

  @property({ group: { name: "Time Slider" }, type: Slider })
  timeAddSlider: Slider = null;

  @property({ group: { name: "Time Slider" }, type: Label })
  timeAddInfoLabel: Label = null;

  @property({ group: { name: "Time Slider" }, type: Slider })
  timeRemoveSlider: Slider = null;

  @property({ group: { name: "Time Slider" }, type: Label })
  timeRemoveInfoLabel: Label = null;

  @property({ group: { name: "Time Slider" }, type: CCFloat })
  private timeMin: number = 0.001;

  @property({ group: { name: "Time Slider" }, type: CCFloat })
  private timeMultiply: number = 1;

  private countData: number = 0;
  private itemTotal: number = 0;
  private pool: NodePool = null;

  private yOffset: number = 0;
  private actionIdx = 0;

  protected onLoad(): void {
    this.pool = new NodePool();
  }

  protected start(): void {
    this.init();
  }

  protected update(dt: number): void {
    if (this.yOffset == 0) return;

    this.snapSpeed = this.itemSpacing / this.getTime(this.timeRemoveSlider);
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

    this.updateSliderInfo();
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

  private nextActions = [
    this.triggerRemove.bind(this),
    this.triggerAdd.bind(this),
  ];

  getTime(slider: Slider) {
    return Math.max(this.timeMin, slider.progress * this.timeMultiply);
  }

  doSchedule() {
    let times = [
      this.getTime(this.timeAddSlider),
      this.getTime(this.timeRemoveSlider),
    ];

    this.scheduleOnce(() => {
      this.nextActions[this.actionIdx]();
      this.actionIdx++;
      this.actionIdx %= 2;
      this.doSchedule();
    }, times[this.actionIdx]);
  }

  updateSliderInfo() {
    this.timeAddInfoLabel.string = `${Math.round(
      this.getTime(this.timeAddSlider) * 1000
    )}ms`;
    this.timeRemoveInfoLabel.string = `${Math.round(
      this.getTime(this.timeRemoveSlider) * 1000
    )}ms`;
  }

  onClick() {
    this.unscheduleAllCallbacks();
    this.doSchedule();
  }
}
