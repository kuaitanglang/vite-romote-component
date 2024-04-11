(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.button = factory(global.Vue));
})(this, (function (vue) { 'use strict';

  async function platform() {
    return new Promise((resolve) => {
      if(typeof uni !== 'undefined' && typeof uni.getSystemInfo !== 'undefined'){
        uni.getSystemInfo({
          success: (res) => {
            resolve(res.uniPlatform);
          },
          fail: (err) => {
            resolve("web");
          }
        });
      } else {
        resolve("html5");
      }
    });
  }
  var platform$1 = platform();

  const isDef = (val) => val !== void 0 && val !== null;
  const isFunction = (val) => typeof val === "function";
  const isObject = (val) => val !== null && typeof val === "object";
  const isNumeric = (val) => typeof val === "number" || /^\d+(\.\d+)?$/.test(val);
  const isIOS = () => inBrowser$1 ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;

  const extend = Object.assign;
  const inBrowser$1 = typeof window !== "undefined";
  function get(object, path) {
    const keys = path.split(".");
    let result = object;
    keys.forEach((key) => {
      var _a;
      result = isObject(result) ? (_a = result[key]) != null ? _a : "" : "";
    });
    return result;
  }

  const numericProp = [Number, String];
  const truthProp = {
    type: Boolean,
    default: true
  };
  const makeStringProp = (defaultVal) => ({
    type: String,
    default: defaultVal
  });

  // src/utils.ts
  var inBrowser = typeof window !== "undefined";
  var width;
  var height;
  function useWindowSize() {
    if (!width) {
      width = vue.ref(0);
      height = vue.ref(0);
      if (inBrowser) {
        const update = () => {
          width.value = window.innerWidth;
          height.value = window.innerHeight;
        };
        update();
        window.addEventListener("resize", update, { passive: true });
        window.addEventListener("orientationchange", update, { passive: true });
      }
    }
    return { width, height };
  }

  isIOS();
  const stopPropagation = (event) => event.stopPropagation();
  function preventDefault(event, isStopPropagation) {
    if (typeof event.cancelable !== "boolean" || event.cancelable) {
      event.preventDefault();
    }
    if (isStopPropagation) {
      stopPropagation(event);
    }
  }
  useWindowSize();

  function addUnit(value) {
    if (isDef(value)) {
      return isNumeric(value) ? `${value}px` : String(value);
    }
    return void 0;
  }
  function getSizeStyle(originSize) {
    if (isDef(originSize)) {
      if (Array.isArray(originSize)) {
        return {
          width: addUnit(originSize[0]),
          height: addUnit(originSize[1])
        };
      }
      const size = addUnit(originSize);
      return {
        width: size,
        height: size
      };
    }
  }
  const camelizeRE = /-(\w)/g;
  const camelize = (str) => str.replace(camelizeRE, (_, c) => c.toUpperCase());
  const kebabCase = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");

  const { hasOwnProperty } = Object.prototype;
  function assignKey(to, from, key) {
    const val = from[key];
    if (!isDef(val)) {
      return;
    }
    if (!hasOwnProperty.call(to, key) || !isObject(val)) {
      to[key] = val;
    } else {
      to[key] = deepAssign(Object(to[key]), val);
    }
  }
  function deepAssign(to, from) {
    Object.keys(from).forEach((key) => {
      assignKey(to, from, key);
    });
    return to;
  }

  var stdin_default$5 = {
    name: "\u59D3\u540D",
    tel: "\u7535\u8BDD",
    save: "\u4FDD\u5B58",
    clear: "\u6E05\u7A7A",
    cancel: "\u53D6\u6D88",
    confirm: "\u786E\u8BA4",
    delete: "\u5220\u9664",
    loading: "\u52A0\u8F7D\u4E2D...",
    noCoupon: "\u6682\u65E0\u4F18\u60E0\u5238",
    nameEmpty: "\u8BF7\u586B\u5199\u59D3\u540D",
    addContact: "\u6DFB\u52A0\u8054\u7CFB\u4EBA",
    telInvalid: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",
    vanCalendar: {
      end: "\u7ED3\u675F",
      start: "\u5F00\u59CB",
      title: "\u65E5\u671F\u9009\u62E9",
      weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
      monthTitle: (year, month) => `${year}\u5E74${month}\u6708`,
      rangePrompt: (maxRange) => `\u6700\u591A\u9009\u62E9 ${maxRange} \u5929`
    },
    vanCascader: {
      select: "\u8BF7\u9009\u62E9"
    },
    vanPagination: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    vanPullRefresh: {
      pulling: "\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",
      loosing: "\u91CA\u653E\u5373\u53EF\u5237\u65B0..."
    },
    vanSubmitBar: {
      label: "\u5408\u8BA1:"
    },
    vanCoupon: {
      unlimited: "\u65E0\u95E8\u69DB",
      discount: (discount) => `${discount}\u6298`,
      condition: (condition) => `\u6EE1${condition}\u5143\u53EF\u7528`
    },
    vanCouponCell: {
      title: "\u4F18\u60E0\u5238",
      count: (count) => `${count}\u5F20\u53EF\u7528`
    },
    vanCouponList: {
      exchange: "\u5151\u6362",
      close: "\u4E0D\u4F7F\u7528",
      enable: "\u53EF\u7528",
      disabled: "\u4E0D\u53EF\u7528",
      placeholder: "\u8F93\u5165\u4F18\u60E0\u7801"
    },
    vanAddressEdit: {
      area: "\u5730\u533A",
      areaEmpty: "\u8BF7\u9009\u62E9\u5730\u533A",
      addressEmpty: "\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",
      addressDetail: "\u8BE6\u7EC6\u5730\u5740",
      defaultAddress: "\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"
    },
    vanAddressList: {
      add: "\u65B0\u589E\u5730\u5740"
    }
  };

  const lang = vue.ref("zh-CN");
  const messages = vue.reactive({
    "zh-CN": stdin_default$5
  });
  const Locale = {
    messages() {
      return messages[lang.value];
    },
    use(newLang, newMessages) {
      lang.value = newLang;
      this.add({ [newLang]: newMessages });
    },
    add(newMessages = {}) {
      deepAssign(messages, newMessages);
    }
  };
  var stdin_default$4 = Locale;

  function createTranslate(name) {
    const prefix = camelize(name) + ".";
    return (path, ...args) => {
      const messages = stdin_default$4.messages();
      const message = get(messages, prefix + path) || get(messages, path);
      return isFunction(message) ? message(...args) : message;
    };
  }
  function genBem(name, mods) {
    if (!mods) {
      return "";
    }
    if (typeof mods === "string") {
      return ` ${name}--${mods}`;
    }
    if (Array.isArray(mods)) {
      return mods.reduce(
        (ret, item) => ret + genBem(name, item),
        ""
      );
    }
    return Object.keys(mods).reduce(
      (ret, key) => ret + (mods[key] ? genBem(name, key) : ""),
      ""
    );
  }
  function createBEM(name) {
    return (el, mods) => {
      if (el && typeof el !== "string") {
        mods = el;
        el = "";
      }
      el = el ? `${name}__${el}` : name;
      return `${el}${genBem(el, mods)}`;
    };
  }
  function createNamespace(name) {
    const prefixedName = `van-${name}`;
    return [
      prefixedName,
      createBEM(prefixedName),
      createTranslate(prefixedName)
    ];
  }

  const BORDER = "van-hairline";
  const BORDER_SURROUND = `${BORDER}--surround`;

  function withInstall(options) {
    options.install = (app) => {
      const { name } = options;
      if (name) {
        app.component(name, options);
        app.component(camelize(`-${name}`), options);
      }
    };
    return options;
  }

  const routeProps = {
    to: [String, Object],
    url: String,
    replace: Boolean
  };
  function route({
    to,
    url,
    replace,
    $router: router
  }) {
    if (to && router) {
      router[replace ? "replace" : "push"](to);
    } else if (url) {
      replace ? location.replace(url) : location.href = url;
    }
  }
  function useRoute() {
    const vm = vue.getCurrentInstance().proxy;
    return () => route(vm);
  }

  const [name$4, bem$4] = createNamespace("badge");
  const badgeProps = {
    dot: Boolean,
    max: numericProp,
    tag: makeStringProp("div"),
    color: String,
    offset: Array,
    content: numericProp,
    showZero: truthProp,
    position: makeStringProp("top-right")
  };
  var stdin_default$3 = vue.defineComponent({
    name: name$4,
    props: badgeProps,
    setup(props, {
      slots
    }) {
      const hasContent = () => {
        if (slots.content) {
          return true;
        }
        const {
          content,
          showZero
        } = props;
        return isDef(content) && content !== "" && (showZero || content !== 0 && content !== "0");
      };
      const renderContent = () => {
        const {
          dot,
          max,
          content
        } = props;
        if (!dot && hasContent()) {
          if (slots.content) {
            return slots.content();
          }
          if (isDef(max) && isNumeric(content) && +content > +max) {
            return `${max}+`;
          }
          return content;
        }
      };
      const getOffsetWithMinusString = (val) => val.startsWith("-") ? val.replace("-", "") : `-${val}`;
      const style = vue.computed(() => {
        const style2 = {
          background: props.color
        };
        if (props.offset) {
          const [x, y] = props.offset;
          const {
            position
          } = props;
          const [offsetY, offsetX] = position.split("-");
          if (slots.default) {
            if (typeof y === "number") {
              style2[offsetY] = addUnit(offsetY === "top" ? y : -y);
            } else {
              style2[offsetY] = offsetY === "top" ? addUnit(y) : getOffsetWithMinusString(y);
            }
            if (typeof x === "number") {
              style2[offsetX] = addUnit(offsetX === "left" ? x : -x);
            } else {
              style2[offsetX] = offsetX === "left" ? addUnit(x) : getOffsetWithMinusString(x);
            }
          } else {
            style2.marginTop = addUnit(y);
            style2.marginLeft = addUnit(x);
          }
        }
        return style2;
      });
      const renderBadge = () => {
        if (hasContent() || props.dot) {
          return vue.createVNode("div", {
            "class": bem$4([props.position, {
              dot: props.dot,
              fixed: !!slots.default
            }]),
            "style": style.value
          }, [renderContent()]);
        }
      };
      return () => {
        if (slots.default) {
          const {
            tag
          } = props;
          return vue.createVNode(tag, {
            "class": bem$4("wrapper")
          }, {
            default: () => [slots.default(), renderBadge()]
          });
        }
        return renderBadge();
      };
    }
  });

  const Badge = withInstall(stdin_default$3);

  const setGlobalZIndex = (val) => {
  };

  const [name$3, bem$3] = createNamespace("config-provider");
  const CONFIG_PROVIDER_KEY = Symbol(name$3);
  const configProviderProps = {
    tag: makeStringProp("div"),
    theme: makeStringProp("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    iconPrefix: String
  };
  function mapThemeVarsToCSSVars(themeVars) {
    const cssVars = {};
    Object.keys(themeVars).forEach((key) => {
      cssVars[`--van-${kebabCase(key)}`] = themeVars[key];
    });
    return cssVars;
  }
  vue.defineComponent({
    name: name$3,
    props: configProviderProps,
    setup(props, {
      slots
    }) {
      const style = vue.computed(() => mapThemeVarsToCSSVars(extend({}, props.themeVars, props.theme === "dark" ? props.themeVarsDark : props.themeVarsLight)));
      if (inBrowser$1) {
        const addTheme = () => {
          document.documentElement.classList.add(`van-theme-${props.theme}`);
        };
        const removeTheme = (theme = props.theme) => {
          document.documentElement.classList.remove(`van-theme-${theme}`);
        };
        vue.watch(() => props.theme, (newVal, oldVal) => {
          if (oldVal) {
            removeTheme(oldVal);
          }
          addTheme();
        }, {
          immediate: true
        });
        vue.onActivated(addTheme);
        vue.onDeactivated(removeTheme);
        vue.onBeforeUnmount(removeTheme);
      }
      vue.provide(CONFIG_PROVIDER_KEY, props);
      vue.watchEffect(() => {
        if (props.zIndex !== void 0) {
          setGlobalZIndex(props.zIndex);
        }
      });
      return () => vue.createVNode(props.tag, {
        "class": bem$3(),
        "style": style.value
      }, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    }
  });

  const [name$2, bem$2] = createNamespace("icon");
  const isImage = (name2) => name2 == null ? void 0 : name2.includes("/");
  const iconProps = {
    dot: Boolean,
    tag: makeStringProp("i"),
    name: String,
    size: numericProp,
    badge: numericProp,
    color: String,
    badgeProps: Object,
    classPrefix: String
  };
  var stdin_default$2 = vue.defineComponent({
    name: name$2,
    props: iconProps,
    setup(props, {
      slots
    }) {
      const config = vue.inject(CONFIG_PROVIDER_KEY, null);
      const classPrefix = vue.computed(() => props.classPrefix || (config == null ? void 0 : config.iconPrefix) || bem$2());
      return () => {
        const {
          tag,
          dot,
          name: name2,
          size,
          badge,
          color
        } = props;
        const isImageIcon = isImage(name2);
        return vue.createVNode(Badge, vue.mergeProps({
          "dot": dot,
          "tag": tag,
          "class": [classPrefix.value, isImageIcon ? "" : `${classPrefix.value}-${name2}`],
          "style": {
            color,
            fontSize: addUnit(size)
          },
          "content": badge
        }, props.badgeProps), {
          default: () => {
            var _a;
            return [(_a = slots.default) == null ? void 0 : _a.call(slots), isImageIcon && vue.createVNode("img", {
              "class": bem$2("image"),
              "src": name2
            }, null)];
          }
        });
      };
    }
  });

  const Icon = withInstall(stdin_default$2);

  const [name$1, bem$1] = createNamespace("loading");
  const SpinIcon = Array(12).fill(null).map((_, index) => vue.createVNode("i", {
    "class": bem$1("line", String(index + 1))
  }, null));
  const CircularIcon = vue.createVNode("svg", {
    "class": bem$1("circular"),
    "viewBox": "25 25 50 50"
  }, [vue.createVNode("circle", {
    "cx": "50",
    "cy": "50",
    "r": "20",
    "fill": "none"
  }, null)]);
  const loadingProps = {
    size: numericProp,
    type: makeStringProp("circular"),
    color: String,
    vertical: Boolean,
    textSize: numericProp,
    textColor: String
  };
  var stdin_default$1 = vue.defineComponent({
    name: name$1,
    props: loadingProps,
    setup(props, {
      slots
    }) {
      const spinnerStyle = vue.computed(() => extend({
        color: props.color
      }, getSizeStyle(props.size)));
      const renderIcon = () => {
        const DefaultIcon = props.type === "spinner" ? SpinIcon : CircularIcon;
        return vue.createVNode("span", {
          "class": bem$1("spinner", props.type),
          "style": spinnerStyle.value
        }, [slots.icon ? slots.icon() : DefaultIcon]);
      };
      const renderText = () => {
        var _a;
        if (slots.default) {
          return vue.createVNode("span", {
            "class": bem$1("text"),
            "style": {
              fontSize: addUnit(props.textSize),
              color: (_a = props.textColor) != null ? _a : props.color
            }
          }, [slots.default()]);
        }
      };
      return () => {
        const {
          type,
          vertical
        } = props;
        return vue.createVNode("div", {
          "class": bem$1([type, {
            vertical
          }]),
          "aria-live": "polite",
          "aria-busy": true
        }, [renderIcon(), renderText()]);
      };
    }
  });

  const Loading = withInstall(stdin_default$1);

  const [name, bem] = createNamespace("button");
  const buttonProps = extend({}, routeProps, {
    tag: makeStringProp("button"),
    text: String,
    icon: String,
    type: makeStringProp("default"),
    size: makeStringProp("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: makeStringProp("button"),
    loadingSize: numericProp,
    loadingText: String,
    loadingType: String,
    iconPosition: makeStringProp("left")
  });
  var stdin_default = vue.defineComponent({
    name,
    props: buttonProps,
    emits: ["click"],
    setup(props, {
      emit,
      slots
    }) {
      const route = useRoute();
      const renderLoadingIcon = () => {
        if (slots.loading) {
          return slots.loading();
        }
        return vue.createVNode(Loading, {
          "size": props.loadingSize,
          "type": props.loadingType,
          "class": bem("loading")
        }, null);
      };
      const renderIcon = () => {
        if (props.loading) {
          return renderLoadingIcon();
        }
        if (slots.icon) {
          return vue.createVNode("div", {
            "class": bem("icon")
          }, [slots.icon()]);
        }
        if (props.icon) {
          return vue.createVNode(Icon, {
            "name": props.icon,
            "class": bem("icon"),
            "classPrefix": props.iconPrefix
          }, null);
        }
      };
      const renderText = () => {
        let text;
        if (props.loading) {
          text = props.loadingText;
        } else {
          text = slots.default ? slots.default() : props.text;
        }
        if (text) {
          return vue.createVNode("span", {
            "class": bem("text")
          }, [text]);
        }
      };
      const getStyle = () => {
        const {
          color,
          plain
        } = props;
        if (color) {
          const style = {
            color: plain ? color : "white"
          };
          if (!plain) {
            style.background = color;
          }
          if (color.includes("gradient")) {
            style.border = 0;
          } else {
            style.borderColor = color;
          }
          return style;
        }
      };
      const onClick = (event) => {
        if (props.loading) {
          preventDefault(event);
        } else if (!props.disabled) {
          emit("click", event);
          route();
        }
      };
      return () => {
        const {
          tag,
          type,
          size,
          block,
          round,
          plain,
          square,
          loading,
          disabled,
          hairline,
          nativeType,
          iconPosition
        } = props;
        const classes = [bem([type, size, {
          plain,
          block,
          round,
          square,
          loading,
          disabled,
          hairline
        }]), {
          [BORDER_SURROUND]: hairline
        }];
        return vue.createVNode(tag, {
          "type": nativeType,
          "class": classes,
          "style": getStyle(),
          "disabled": disabled,
          "onClick": onClick
        }, {
          default: () => [vue.createVNode("div", {
            "class": bem("content")
          }, [iconPosition === "left" && renderIcon(), renderText(), iconPosition === "right" && renderIcon()])]
        });
      };
    }
  });

  const Button = withInstall(stdin_default);

  var options = {
    "width": {
      "type": "string",
      "editEl": "input",
      "value": "100%",
      "info": ""
    },
    "height": {
      "type": "string",
      "editEl": "input",
      "value": "100%",
      "info": ""
    },
    "margin": {
      "type": "string",
      "editEl": "input",
      "value": "0 auto",
      "info": ""
    },
    "padding": {
      "type": "string",
      "editEl": "input",
      "value": "20px",
      "info": ""
    },
    "background": {
      "type": "string",
      "editEl": "input",
      "value": "",
      "info": ""
    },
    "styles": {
      "type": "string",
      "editEl": "input",
      "value": "background: #ff0000",
      "info": ""
    },
    "event": {
      "type": "string",
      "editEl": "input",
      "value": "function test(){console.log(count.value)};test()",
      "info": ""
    }
  };

  var script = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      options: {
        type: Object,
        default: () => {
          return options;
        }
      }
    },
    setup(__props) {
      const props = __props;
      const styles = `
  width: ${props.options.width.value};
  height: ${props.options.height.value};
  margin: ${props.options.margin.value};
  padding: ${props.options.padding.value};
  ${props.options.styles.value}
`;
      let count = vue.ref(0);
      async function customEvent() {
        console.log(await platform$1);
        count.value++;
        if (props.options.event.value) {
          eval(props.options.event.value);
        }
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createElementVNode(
            "button",
            {
              class: "custom-style",
              onClick: customEvent,
              style: styles
            },
            " click times " + vue.toDisplayString(vue.unref(count)),
            1
            /* TEXT */
          ),
          vue.createVNode(vue.unref(Button), { type: "primary" }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u4E3B\u8981\u6309\u94AE")
            ]),
            _: 1
            /* STABLE */
          })
        ]);
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

  var css_248z = ".custom-style[data-v-2ca3eff0]{background:#747bff;color:#fff;font-size:14px;font-weight:bolder;height:40px;width:200px}";
  styleInject(css_248z);

  script.__scopeId = "data-v-2ca3eff0";
  script.__file = "components/button/index.vue";

  return script;

}));
