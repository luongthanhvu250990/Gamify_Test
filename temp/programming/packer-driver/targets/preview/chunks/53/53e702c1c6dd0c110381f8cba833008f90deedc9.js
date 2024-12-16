System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RotateAroundComp;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec0b7I4n21DU583mM7Nzk/p", "RotateAround2Comp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RotateAroundComp", RotateAroundComp = (_dec = ccclass("RotateAroundComp"), _dec2 = property(), _dec(_class = (_class2 = class RotateAroundComp extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "angleRotateSpeed", _descriptor, this);

          this.isRotate = false;
        }

        init() {
          this.isRotate = false;
        }

        rotate(dt) {
          var angle = this.node.eulerAngles;
          this.node.setRotationFromEuler(angle.x, angle.y, angle.z + this.angleRotateSpeed * dt);
        }

        update(deltaTime) {
          if (this.isRotate) this.rotate(deltaTime);
        }

        switRotateStatus() {
          this.isRotate = !this.isRotate;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "angleRotateSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53e702c1c6dd0c110381f8cba833008f90deedc9.js.map