System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RotateAroundComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d757SxYTVC0ICP3nxYnMco", "RotateAroundComp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RotateAroundComp", RotateAroundComp = (_dec = ccclass("RotateAroundComp"), _dec2 = property(Node), _dec3 = property(), _dec4 = property(), _dec(_class = (_class2 = class RotateAroundComp extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "originNode", _descriptor, this);

          _initializerDefineProperty(this, "radius", _descriptor2, this);

          _initializerDefineProperty(this, "angleRotateSpeed", _descriptor3, this);

          this.isRotate = false;
          this.angle = 0;
          this.originPos = void 0;
        }

        start() {
          this.init();
        }

        init() {
          this.isRotate = false;
          var startPos = this.node.worldPosition;
          this.originPos = this.originNode.worldPosition;
          this.angle = Math.atan2(startPos.y - this.originPos.y, startPos.x - this.originPos.x);
        }

        rotate(dt) {
          this.angle += this.angleRotateSpeed * dt * Math.PI / 180;
          var newX = this.originPos.x + this.radius * Math.cos(this.angle);
          var newY = this.originPos.y + this.radius * Math.sin(this.angle);
          this.node.setWorldPosition(newX, newY, this.node.worldPosition.z);
        }

        update(deltaTime) {
          if (this.isRotate) this.rotate(deltaTime);
        }

        switRotateStatus() {
          this.isRotate = !this.isRotate;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "originNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "angleRotateSpeed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24ac7d0537e523d6c1d5a67c336cca62fc54d372.js.map