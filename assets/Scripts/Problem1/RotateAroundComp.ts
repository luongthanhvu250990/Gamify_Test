import { _decorator, Component, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("RotateAroundComp")
export class RotateAroundComp extends Component {
  @property(Node)
  private originNode: Node = null;

  @property()
  radius: number = 200;

  @property()
  private angleRotateSpeed: number = 0;

  private isRotate: boolean = false;
  private angle: number = 0;
  private originPos: Vec3;
  protected start(): void {
    this.init();
  }

  init() {
    this.isRotate = false;

    let startPos = this.node.worldPosition;
    this.originPos = this.originNode.worldPosition;
    this.angle = Math.atan2(
      startPos.y - this.originPos.y,
      startPos.x - this.originPos.x
    );
  }

  private rotate(dt) {
    this.angle += (this.angleRotateSpeed * dt * Math.PI) / 180;

    const newX = this.originPos.x + this.radius * Math.cos(this.angle);
    const newY = this.originPos.y + this.radius * Math.sin(this.angle);

    this.node.setWorldPosition(newX, newY, this.node.worldPosition.z);
  }

  update(deltaTime: number) {
    if (this.isRotate) this.rotate(deltaTime);
  }

  switRotateStatus() {
    this.isRotate = !this.isRotate;
  }
}
