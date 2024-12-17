System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, instantiate, Label, Node, NodePool, Prefab, Slider, ItemComp, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, ScrollComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemComp(extras) {
    _reporterNs.report("ItemComp", "./ItemComp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      Slider = _cc.Slider;
    }, function (_unresolved_2) {
      ItemComp = _unresolved_2.ItemComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab043XmVOdF5rueGZgZjY1i", "ScrollComp", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'instantiate', 'Label', 'macro', 'Node', 'NodePool', 'Prefab', 'Slider', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScrollComp", ScrollComp = (_dec = ccclass("ScrollComp"), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(), _dec5 = property({
        group: {
          name: "Time Slider"
        },
        type: Slider
      }), _dec6 = property({
        group: {
          name: "Time Slider"
        },
        type: Label
      }), _dec7 = property({
        group: {
          name: "Time Slider"
        },
        type: Slider
      }), _dec8 = property({
        group: {
          name: "Time Slider"
        },
        type: Label
      }), _dec9 = property({
        group: {
          name: "Time Slider"
        },
        type: CCFloat
      }), _dec10 = property({
        group: {
          name: "Time Slider"
        },
        type: CCFloat
      }), _dec(_class = (_class2 = class ScrollComp extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "itemSpacing", _descriptor3, this);

          this.snapSpeed = 3000;

          _initializerDefineProperty(this, "timeAddSlider", _descriptor4, this);

          _initializerDefineProperty(this, "timeAddInfoLabel", _descriptor5, this);

          _initializerDefineProperty(this, "timeRemoveSlider", _descriptor6, this);

          _initializerDefineProperty(this, "timeRemoveInfoLabel", _descriptor7, this);

          _initializerDefineProperty(this, "timeMin", _descriptor8, this);

          _initializerDefineProperty(this, "timeMultiply", _descriptor9, this);

          this.countData = 0;
          this.itemTotal = 0;
          this.pool = null;
          this.yOffset = 0;
          this.actionIdx = 0;
          this.nextActions = [this.triggerRemove.bind(this), this.triggerAdd.bind(this)];
        }

        onLoad() {
          this.pool = new NodePool();
        }

        start() {
          this.init();
        }

        update(dt) {
          if (this.yOffset == 0) return;
          this.snapSpeed = this.itemSpacing / this.getTime(this.timeRemoveSlider);
          var offset = Math.min(Math.abs(this.yOffset), dt * this.snapSpeed);
          this.contentNode.children.forEach(child => {
            child.setPosition(child.position.x, child.position.y - offset);
          });
          this.yOffset += offset;
        }

        init() {
          var initTotal = 20;

          for (var i = 0; i < initTotal; i++) {
            var newItem = this.createItem();
            this.addItemToTop(newItem);
          }

          this.updateSliderInfo();
        }

        createNode() {
          var item = null;
          if (this.pool.size() > 0) item = this.pool.get();else {
            item = instantiate(this.itemPrefab);
          }
          return item;
        }

        deleteNode(item) {
          this.pool.put(item);
        }

        createItem() {
          this.countData++;
          var newNode = this.createNode();
          newNode.getComponent(_crd && ItemComp === void 0 ? (_reportPossibleCrUseOfItemComp({
            error: Error()
          }), ItemComp) : ItemComp).setData(this.countData);
          return newNode;
        }

        addItemToTop(newNode) {
          newNode.setSiblingIndex(this.itemTotal);
          var y = 0;
          var childCount = this.contentNode.children.length;
          var topChild = this.contentNode.children[childCount - 1];

          if (topChild) {
            y = topChild.position.y + this.itemSpacing;
          }

          newNode.setParent(this.contentNode);
          newNode.setPosition(0, y, 0);
          this.itemTotal++;
        }

        deleteItem(item) {
          this.itemTotal--;
          this.deleteNode(item);
        }

        triggerAdd() {
          var newItem = this.createItem();
          this.addItemToTop(newItem);
        }

        triggerRemove() {
          var bot = this.contentNode.children[0];
          this.deleteItem(bot);
          this.yOffset -= this.itemSpacing;
        }

        getTime(slider) {
          return Math.max(this.timeMin, slider.progress * this.timeMultiply);
        }

        doSchedule() {
          var times = [this.getTime(this.timeAddSlider), this.getTime(this.timeRemoveSlider)];
          this.scheduleOnce(() => {
            this.nextActions[this.actionIdx]();
            this.actionIdx++;
            this.actionIdx %= 2;
            this.doSchedule();
          }, times[this.actionIdx]);
        }

        updateSliderInfo() {
          this.timeAddInfoLabel.string = Math.round(this.getTime(this.timeAddSlider) * 1000) + "ms";
          this.timeRemoveInfoLabel.string = Math.round(this.getTime(this.timeRemoveSlider) * 1000) + "ms";
        }

        onClick() {
          this.unscheduleAllCallbacks();
          this.doSchedule();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemSpacing", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timeAddSlider", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "timeAddInfoLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "timeRemoveSlider", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "timeRemoveInfoLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "timeMin", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.001;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "timeMultiply", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39f9d9e8b32ed58cae0168fa6ea9288de860bb63.js.map