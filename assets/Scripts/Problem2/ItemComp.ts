import {
  _decorator,
  Color,
  Component,
  Label,
  Node,
  random,
  randomRange,
  Sprite,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("ItemComp")
export class ItemComp extends Component {
  @property(Sprite)
  private bgSprite: Sprite = null;

  @property(Label)
  private contentLabel: Label = null;

  setData(numData: number) {
    this.node.name = `item_${numData}`;
    let color = new Color().fromHEX(this.numToColor(numData));
    this.bgSprite.color = color;

    this.contentLabel.string = numData.toString();
  }

  private numToColor(num: number) {
    let clampedNum = Math.abs(num * randomRange(4000, 1000000)) % 0xffffff;
    let hexColor = clampedNum.toString(16).padStart(6, "0");

    return `#${hexColor}`;
  }
}
