(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.helloWorld = factory(global.Vue));
})(this, (function (vue) { 'use strict';

  const _withScopeId = (n) => (vue.pushScopeId("data-v-301678c4"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = { class: "card" };
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode(
    "p",
    null,
    [
      /* @__PURE__ */ vue.createTextVNode(" Edit "),
      /* @__PURE__ */ vue.createElementVNode("code", null, "components/HelloWorld.vue"),
      /* @__PURE__ */ vue.createTextVNode(" to test HMR ")
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode(
    "p",
    null,
    [
      /* @__PURE__ */ vue.createTextVNode(" Check out "),
      /* @__PURE__ */ vue.createElementVNode("a", {
        href: "https://vuejs.org/guide/quick-start.html#local",
        target: "_blank"
      }, "create-vue"),
      /* @__PURE__ */ vue.createTextVNode(", the official Vue + Vite starter ")
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode(
    "p",
    null,
    [
      /* @__PURE__ */ vue.createTextVNode(" Install "),
      /* @__PURE__ */ vue.createElementVNode("a", {
        href: "https://github.com/vuejs/language-tools",
        target: "_blank"
      }, "Volar"),
      /* @__PURE__ */ vue.createTextVNode(" in your IDE for a better DX ")
    ],
    -1
    /* HOISTED */
  ));
  const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode(
    "p",
    { class: "read-the-docs" },
    "Click on the Vite and Vue logos to learn more",
    -1
    /* HOISTED */
  ));
  var script = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      msg: { type: String, required: true }
    },
    setup(__props) {
      const count = vue.ref(0);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "h1",
              null,
              vue.toDisplayString(__props.msg),
              1
              /* TEXT */
            ),
            vue.createElementVNode("div", _hoisted_1, [
              vue.createElementVNode(
                "button",
                {
                  type: "button",
                  onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
                },
                "count is " + vue.toDisplayString(count.value),
                1
                /* TEXT */
              ),
              _hoisted_2
            ]),
            _hoisted_3,
            _hoisted_4,
            _hoisted_5
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".read-the-docs[data-v-301678c4]{color:#888}";
  styleInject(css_248z);

  script.__scopeId = "data-v-301678c4";
  script.__file = "components/helloWorld/index.vue";

  return script;

}));
