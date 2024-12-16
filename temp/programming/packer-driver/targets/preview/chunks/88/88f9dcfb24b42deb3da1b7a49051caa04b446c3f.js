System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, NodePool, Prefab, UITransform, ItemComp, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ScrollComp;

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
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ItemComp = _unresolved_2.ItemComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab043XmVOdF5rueGZgZjY1i", "ScrollComp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'NodePool', 'Prefab', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScrollComp", ScrollComp = (_dec = ccclass("ScrollComp"), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(), _dec(_class = (_class2 = class ScrollComp extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "itemSpacing", _descriptor3, this);

          this.contentTrans = null;
          this.countData = 0;
          this.itemTotal = 0;
          this.pool = null;
        }

        onLoad() {
          this.contentTrans = this.contentNode.getComponent(UITransform);
          this.pool = new NodePool();
        }

        start() {
          this.init();
        }

        init() {
          var initTotal = 20;

          for (var i = 0; i < initTotal; i++) {
            var newItem = this.createItem();
            this.addItemToTop(newItem);
          }
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
          newNode.setParent(this.contentNode);
          var y = this.itemTotal * this.itemSpacing;
          newNode.setPosition(0, y, 0);
          this.itemTotal++;
        }

        deleteItem(item) {
          this.itemTotal--;
          this.deleteNode(item);
        } //   setNumberOfItem(num: number) {
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
          var newItem = this.createItem();
          this.addItemToTop(newItem);
        }

        triggerRemove() {}

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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88f9dcfb24b42deb3da1b7a49051caa04b446c3f.js.map