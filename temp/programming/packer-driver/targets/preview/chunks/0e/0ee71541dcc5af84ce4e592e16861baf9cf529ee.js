System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Label, randomRange, Sprite, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ItemComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      randomRange = _cc.randomRange;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35919UG+C5CaKb5PrwKbvEa", "ItemComp", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Node', 'random', 'randomRange', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemComp", ItemComp = (_dec = ccclass("ItemComp"), _dec2 = property(Sprite), _dec3 = property(Label), _dec(_class = (_class2 = class ItemComp extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bgSprite", _descriptor, this);

          _initializerDefineProperty(this, "contentLabel", _descriptor2, this);
        }

        setData(numData) {
          this.node.name = "item_" + numData;
          var color = new Color().fromHEX(this.numToColor(numData));
          this.bgSprite.color = color;
          this.contentLabel.string = numData.toString();
        }

        numToColor(num) {
          var clampedNum = Math.abs(num * randomRange(4000, 1000000)) % 0xffffff;
          var hexColor = clampedNum.toString(16).padStart(6, "0");
          return "#" + hexColor;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ee71541dcc5af84ce4e592e16861baf9cf529ee.js.map