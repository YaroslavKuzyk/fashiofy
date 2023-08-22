import { mergeProps, useSSRContext, defineComponent, unref, ref, computed, withCtx, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { _ as _export_sfc } from "../server.mjs";
import { u as useConfigStore } from "./useConfigStore-9373a123.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
const _sfc_main$h = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "21",
    height: "32",
    viewBox: "0 0 21 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><line x1="1" y1="0.5" x2="1" y2="31.5" stroke="#4C1C20" stroke-width="2"></line><line x1="4" y1="0.5" x2="4" y2="31.5" stroke="#4C1C20" stroke-width="2"></line><line x1="4" y1="1" x2="18" y2="1" stroke="#4C1C20"></line><line x1="4" y1="4.5" x2="21" y2="4.5" stroke="#4C1C20" stroke-width="2"></line><line x1="4" y1="1.5" x2="21" y2="1.5" stroke="#4C1C20" stroke-width="2"></line><line x1="4" y1="11.5" x2="21" y2="11.5" stroke="#4C1C20" stroke-width="2"></line><line x1="4" y1="14.5" x2="21" y2="14.5" stroke="#4C1C20" stroke-width="2"></line></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/LogoIcon.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const LogoIcon = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Logo",
  __ssrInlineRender: true,
  props: {
    text: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "logo" }, _attrs))} data-v-3b9be177>`);
      _push(ssrRenderComponent(unref(LogoIcon), null, null, _parent));
      if (__props.text) {
        _push(`<span class="logo__text" data-v-3b9be177>FASHIOFY</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Logo_vue_vue_type_style_index_0_scoped_3b9be177_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UIKit/Logo.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-3b9be177"]]);
const _sfc_main$f = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M22.2069 20.7929L16.3141 14.8999C17.5655 13.2888 18.1557 11.2614 17.9647 9.23038C17.7737 7.19937 16.8158 5.31752 15.286 3.96799C13.7562 2.61845 11.7696 1.90269 9.73062 1.96645C7.69165 2.0302 5.75363 2.86868 4.31115 4.31115C2.86868 5.75363 2.0302 7.69165 1.96645 9.73062C1.90269 11.7696 2.61845 13.7562 3.96799 15.286C5.31752 16.8158 7.19937 17.7737 9.23038 17.9647C11.2614 18.1557 13.2888 17.5655 14.8999 16.3141L20.7929 22.2069L22.2069 20.7929ZM9.99994 15.9999C8.81325 15.9999 7.65322 15.648 6.66652 14.9888C5.67983 14.3295 4.91079 13.3924 4.45667 12.296C4.00254 11.1997 3.88372 9.99329 4.11523 8.8294C4.34674 7.66551 4.91819 6.59642 5.7573 5.7573C6.59642 4.91819 7.66551 4.34674 8.8294 4.11523C9.99329 3.88372 11.1997 4.00254 12.296 4.45667C13.3924 4.91079 14.3295 5.67983 14.9888 6.66652C15.648 7.65322 15.9999 8.81325 15.9999 9.99994C15.9981 11.5907 15.3654 13.1158 14.2406 14.2406C13.1158 15.3654 11.5907 15.9981 9.99994 15.9999Z" fill="#4C1C20"></path></svg>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/IconSearch.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const IconSearch = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$e = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M13.8903 2.5C13.1105 2.53716 12.3508 2.75972 11.6742 3.14921C10.9976 3.5387 10.4237 4.0839 9.99996 4.73958C9.57621 4.0839 9.00229 3.5387 8.3257 3.14921C7.64912 2.75972 6.88943 2.53716 6.10963 2.5C3.29696 2.5 1.66663 4.666 1.66663 7.33792C1.66663 11.2963 7.04854 16.3543 9.99996 18.3333C12.9514 16.3543 18.3333 11.2963 18.3333 7.33792C18.3333 4.666 16.703 2.5 13.8903 2.5Z" fill="#4C1C20"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/IconHeart.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const IconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$d = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M7.58337 20.5833C7.31554 20.5833 7.05373 20.6627 6.83104 20.8116C6.60835 20.9603 6.43478 21.1718 6.33229 21.4192C6.22979 21.6668 6.20298 21.939 6.25523 22.2017C6.30748 22.4643 6.43645 22.7057 6.62584 22.8951C6.81521 23.0844 7.05651 23.2133 7.31919 23.2657C7.58187 23.3179 7.85415 23.2911 8.10159 23.1886C8.34903 23.0861 8.56053 22.9125 8.70933 22.6899C8.85812 22.4671 8.93754 22.2053 8.93754 21.9375C8.93754 21.5784 8.79487 21.2339 8.54091 20.9799C8.28696 20.726 7.94252 20.5833 7.58337 20.5833ZM19.5 20.5833C19.2322 20.5833 18.9704 20.6627 18.7477 20.8116C18.525 20.9603 18.3515 21.1718 18.2489 21.4192C18.1464 21.6668 18.1197 21.939 18.1719 22.2017C18.2242 22.4643 18.3531 22.7057 18.5425 22.8951C18.7318 23.0844 18.9732 23.2133 19.2358 23.2657C19.4985 23.3179 19.7708 23.2911 20.0183 23.1886C20.2657 23.0861 20.4772 22.9125 20.6259 22.6899C20.7748 22.4671 20.8542 22.2053 20.8542 21.9375C20.8542 21.5784 20.7115 21.2339 20.4576 20.9799C20.2037 20.726 19.8592 20.5833 19.5 20.5833ZM19.5 19.4981V17.873L8.52707 17.8629L8.06296 15.9974L21.6675 13.3935L21.6667 5.41667H5.43133L4.89248 3.25H1.08337V4.875H3.62206L7.25642 19.4868L19.5 19.4981Z" fill="#4C1C20"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/IconBasket.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const IconBasket = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["button", { white: __props.white }]
      }, _attrs))} data-v-1014667f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const Button_vue_vue_type_style_index_0_scoped_1014667f_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UIKit/Button.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-1014667f"]]);
const _sfc_main$b = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M10.3535 2.35348L9.64648 1.64648L5.99998 5.293L2.35348 1.64648L1.64648 2.35348L5.29298 6L1.64648 9.6465L2.35348 10.3535L5.99998 6.707L9.64648 10.3535L10.3535 9.6465L6.70698 6L10.3535 2.35348Z" fill="#F7F7F7"></path></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/IconClose.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "SalesBar",
  __ssrInlineRender: true,
  setup(__props) {
    const configStore = useConfigStore();
    const sales = ref(false);
    const changeSales = () => {
      sales.value = false;
      localStorage.setItem("sales", `${sales.value}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(sales) && unref(configStore).getConfig.sales.active) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "sales-bar" }, _attrs))} data-v-253117a4> Знижки до -${ssrInterpolate(unref(configStore).getConfig.sales.percent)} цієї неділі! `);
        _push(ssrRenderComponent(unref(IconClose), {
          class: "sales-bar__close",
          onClick: changeSales
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const SalesBar_vue_vue_type_style_index_0_scoped_253117a4_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/SalesBar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const SalesBar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-253117a4"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const activeNav = ref("");
    const navList = computed(() => {
      return [
        {
          title: "Бренди",
          link: "/",
          submenu: [
            {
              title: "Бренд 1",
              link: "/"
            },
            {
              title: "Бренд 2",
              link: "/"
            },
            {
              title: "Бренд 3",
              link: "/"
            },
            {
              title: "Бренд 4",
              link: "/"
            },
            {
              title: "Бренд 5",
              link: "/"
            },
            {
              title: "Бренд 6",
              link: "/"
            },
            {
              title: "Бренд 7",
              link: "/"
            },
            {
              title: "Бренд 8",
              link: "/"
            },
            {
              title: "Бренд 9",
              link: "/"
            },
            {
              title: "Бренд 10",
              link: "/"
            },
            {
              title: "Бренд 11",
              link: "/"
            },
            {
              title: "Бренд 12",
              link: "/"
            },
            {
              title: "Бренд 13",
              link: "/"
            },
            {
              title: "Бренд 14",
              link: "/"
            },
            {
              title: "Бренд 15",
              link: "/"
            },
            {
              title: "Бренд 16",
              link: "/"
            },
            {
              title: "Бренд 17",
              link: "/"
            },
            {
              title: "Бренд 18",
              link: "/"
            },
            {
              title: "Бренд 19",
              link: "/"
            },
            {
              title: "Бренд 20",
              link: "/"
            }
          ]
        },
        {
          title: "Одяг",
          link: "/",
          submenu: [
            {
              title: "Одяг 1",
              link: "/"
            },
            {
              title: "Одяг 2",
              link: "/"
            },
            {
              title: "Одяг 3",
              link: "/"
            },
            {
              title: "Одяг 4",
              link: "/"
            },
            {
              title: "Одяг 5",
              link: "/"
            },
            {
              title: "Одяг 6",
              link: "/"
            },
            {
              title: "Одяг 7",
              link: "/"
            },
            {
              title: "Одяг 8",
              link: "/"
            },
            {
              title: "Одяг 9",
              link: "/"
            },
            {
              title: "Одяг 10",
              link: "/"
            },
            {
              title: "Одяг 11",
              link: "/"
            },
            {
              title: "Одяг 12",
              link: "/"
            },
            {
              title: "Одяг 13",
              link: "/"
            },
            {
              title: "Одяг 14",
              link: "/"
            },
            {
              title: "Одяг 15",
              link: "/"
            },
            {
              title: "Одяг 16",
              link: "/"
            },
            {
              title: "Одяг 17",
              link: "/"
            },
            {
              title: "Одяг 18",
              link: "/"
            },
            {
              title: "Одяг 19",
              link: "/"
            },
            {
              title: "Одяг 20",
              link: "/"
            }
          ]
        },
        {
          title: "Взуття",
          link: "/",
          submenu: [
            {
              title: "Взуття 1",
              link: "/"
            },
            {
              title: "Взуття 2",
              link: "/"
            },
            {
              title: "Взуття 3",
              link: "/"
            },
            {
              title: "Взуття 4",
              link: "/"
            },
            {
              title: "Взуття 5",
              link: "/"
            },
            {
              title: "Взуття 6",
              link: "/"
            },
            {
              title: "Взуття 7",
              link: "/"
            },
            {
              title: "Взуття 8",
              link: "/"
            },
            {
              title: "Взуття 9",
              link: "/"
            },
            {
              title: "Взуття 10",
              link: "/"
            },
            {
              title: "Взуття 11",
              link: "/"
            },
            {
              title: "Взуття 12",
              link: "/"
            },
            {
              title: "Взуття 13",
              link: "/"
            },
            {
              title: "Взуття 14",
              link: "/"
            },
            {
              title: "Взуття 15",
              link: "/"
            },
            {
              title: "Взуття 16",
              link: "/"
            },
            {
              title: "Взуття 17",
              link: "/"
            },
            {
              title: "Взуття 18",
              link: "/"
            },
            {
              title: "Взуття 19",
              link: "/"
            },
            {
              title: "Взуття 20",
              link: "/"
            }
          ]
        },
        {
          title: "Сумки",
          link: "/",
          submenu: [
            {
              title: "Сумки 1",
              link: "/"
            },
            {
              title: "Сумки 2",
              link: "/"
            },
            {
              title: "Сумки 3",
              link: "/"
            },
            {
              title: "Сумки 4",
              link: "/"
            },
            {
              title: "Сумки 5",
              link: "/"
            },
            {
              title: "Сумки 6",
              link: "/"
            },
            {
              title: "Сумки 7",
              link: "/"
            },
            {
              title: "Сумки 8",
              link: "/"
            },
            {
              title: "Сумки 9",
              link: "/"
            },
            {
              title: "Сумки 10",
              link: "/"
            },
            {
              title: "Сумки 11",
              link: "/"
            },
            {
              title: "Сумки 12",
              link: "/"
            },
            {
              title: "Сумки 13",
              link: "/"
            },
            {
              title: "Сумки 14",
              link: "/"
            },
            {
              title: "Сумки 15",
              link: "/"
            },
            {
              title: "Сумки 16",
              link: "/"
            },
            {
              title: "Сумки 17",
              link: "/"
            },
            {
              title: "Сумки 18",
              link: "/"
            },
            {
              title: "Сумки 19",
              link: "/"
            },
            {
              title: "Сумки 20",
              link: "/"
            }
          ]
        },
        {
          title: "Аксесуари",
          link: "/",
          submenu: [
            {
              title: "Аксесуари 1",
              link: "/"
            },
            {
              title: "Аксесуари 2",
              link: "/"
            },
            {
              title: "Аксесуари 3",
              link: "/"
            },
            {
              title: "Аксесуари 4",
              link: "/"
            },
            {
              title: "Аксесуари 5",
              link: "/"
            },
            {
              title: "Аксесуари 6",
              link: "/"
            },
            {
              title: "Аксесуари 7",
              link: "/"
            },
            {
              title: "Аксесуари 8",
              link: "/"
            },
            {
              title: "Аксесуари 9",
              link: "/"
            },
            {
              title: "Аксесуари 10",
              link: "/"
            },
            {
              title: "Аксесуари 11",
              link: "/"
            },
            {
              title: "Аксесуари 12",
              link: "/"
            },
            {
              title: "Аксесуари 13",
              link: "/"
            },
            {
              title: "Аксесуари 14",
              link: "/"
            },
            {
              title: "Аксесуари 15",
              link: "/"
            },
            {
              title: "Аксесуари 16",
              link: "/"
            },
            {
              title: "Аксесуари 17",
              link: "/"
            },
            {
              title: "Аксесуари 18",
              link: "/"
            },
            {
              title: "Аксесуари 19",
              link: "/"
            },
            {
              title: "Аксесуари 20",
              link: "/"
            }
          ]
        },
        {
          title: "Прикраси",
          link: "/",
          submenu: [
            {
              title: "Прикраси 1",
              link: "/"
            },
            {
              title: "Прикраси 2",
              link: "/"
            },
            {
              title: "Прикраси 3",
              link: "/"
            },
            {
              title: "Прикраси 4",
              link: "/"
            },
            {
              title: "Прикраси 5",
              link: "/"
            },
            {
              title: "Прикраси 6",
              link: "/"
            },
            {
              title: "Прикраси 7",
              link: "/"
            },
            {
              title: "Прикраси 8",
              link: "/"
            },
            {
              title: "Прикраси 9",
              link: "/"
            },
            {
              title: "Прикраси 10",
              link: "/"
            },
            {
              title: "Прикраси 11",
              link: "/"
            },
            {
              title: "Прикраси 12",
              link: "/"
            },
            {
              title: "Прикраси 13",
              link: "/"
            },
            {
              title: "Прикраси 14",
              link: "/"
            },
            {
              title: "Прикраси 15",
              link: "/"
            },
            {
              title: "Прикраси 16",
              link: "/"
            },
            {
              title: "Прикраси 17",
              link: "/"
            },
            {
              title: "Прикраси 18",
              link: "/"
            },
            {
              title: "Прикраси 19",
              link: "/"
            },
            {
              title: "Прикраси 20",
              link: "/"
            }
          ]
        },
        {
          title: "Косметика",
          link: "/",
          submenu: [
            {
              title: "Косметика 1",
              link: "/"
            },
            {
              title: "Косметика 2",
              link: "/"
            },
            {
              title: "Косметика 3",
              link: "/"
            },
            {
              title: "Косметика 4",
              link: "/"
            },
            {
              title: "Косметика 5",
              link: "/"
            },
            {
              title: "Косметика 6",
              link: "/"
            },
            {
              title: "Косметика 7",
              link: "/"
            },
            {
              title: "Косметика 8",
              link: "/"
            },
            {
              title: "Косметика 9",
              link: "/"
            },
            {
              title: "Косметика 10",
              link: "/"
            },
            {
              title: "Косметика 11",
              link: "/"
            },
            {
              title: "Косметика 12",
              link: "/"
            },
            {
              title: "Косметика 13",
              link: "/"
            },
            {
              title: "Косметика 14",
              link: "/"
            },
            {
              title: "Косметика 15",
              link: "/"
            },
            {
              title: "Косметика 16",
              link: "/"
            },
            {
              title: "Косметика 17",
              link: "/"
            },
            {
              title: "Косметика 18",
              link: "/"
            },
            {
              title: "Косметика 19",
              link: "/"
            },
            {
              title: "Косметика 20",
              link: "/"
            }
          ]
        },
        {
          title: "Білизна",
          link: "/",
          submenu: [
            {
              title: "Білизна 1",
              link: "/"
            },
            {
              title: "Білизна 2",
              link: "/"
            },
            {
              title: "Білизна 3",
              link: "/"
            },
            {
              title: "Білизна 4",
              link: "/"
            },
            {
              title: "Білизна 5",
              link: "/"
            },
            {
              title: "Білизна 6",
              link: "/"
            },
            {
              title: "Білизна 7",
              link: "/"
            },
            {
              title: "Білизна 8",
              link: "/"
            },
            {
              title: "Білизна 9",
              link: "/"
            },
            {
              title: "Білизна 10",
              link: "/"
            },
            {
              title: "Білизна 11",
              link: "/"
            },
            {
              title: "Білизна 12",
              link: "/"
            },
            {
              title: "Білизна 13",
              link: "/"
            },
            {
              title: "Білизна 14",
              link: "/"
            },
            {
              title: "Білизна 15",
              link: "/"
            },
            {
              title: "Білизна 16",
              link: "/"
            },
            {
              title: "Білизна 17",
              link: "/"
            },
            {
              title: "Білизна 18",
              link: "/"
            },
            {
              title: "Білизна 19",
              link: "/"
            },
            {
              title: "Білизна 20",
              link: "/"
            }
          ]
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navigation" }, _attrs))} data-v-c01f8629><ul class="navigation__container" data-v-c01f8629><!--[-->`);
      ssrRenderList(unref(navList), (item, index) => {
        _push(`<li class="navigation__item" data-v-c01f8629>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: item.link
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (unref(activeNav) === item.title.toLowerCase()) {
          _push(`<ul class="${ssrRenderClass([{ right: index > 3 }, "navigation__submenu"])}" data-v-c01f8629><!--[-->`);
          ssrRenderList(item.submenu, (el) => {
            _push(`<li class="navigation__submenu-item" data-v-c01f8629>`);
            _push(ssrRenderComponent(_component_nuxt_link, {
              to: el.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(el.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(el.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const Navigation_vue_vue_type_style_index_0_scoped_c01f8629_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Navigation.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Navigation = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-c01f8629"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-1dfc0475>`);
      _push(ssrRenderComponent(unref(SalesBar), null, null, _parent));
      _push(`<div class="header__container" data-v-1dfc0475><ul class="header__navigation" data-v-1dfc0475><li data-v-1dfc0475>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Жіноче`);
          } else {
            return [
              createTextVNode("Жіноче")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-1dfc0475>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Чоловіче`);
          } else {
            return [
              createTextVNode("Чоловіче")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-1dfc0475>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Дитяче`);
          } else {
            return [
              createTextVNode("Дитяче")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-1dfc0475>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Нейтральне`);
          } else {
            return [
              createTextVNode("Нейтральне")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul>`);
      _push(ssrRenderComponent(unref(Logo), { text: "" }, null, _parent));
      _push(`<div class="header__buttons" data-v-1dfc0475><button class="header__buttons-item" data-v-1dfc0475>`);
      _push(ssrRenderComponent(unref(IconSearch), null, null, _parent));
      _push(`</button><button class="header__buttons-item" data-v-1dfc0475>`);
      _push(ssrRenderComponent(unref(IconHeart), null, null, _parent));
      _push(`</button><button class="header__buttons-item" data-v-1dfc0475>`);
      _push(ssrRenderComponent(unref(IconBasket), null, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(unref(Button), {
        class: "header__buttons-item",
        white: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Вхід`);
          } else {
            return [
              createTextVNode("Вхід")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Button), { class: "header__buttons-item" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Реєстрація`);
          } else {
            return [
              createTextVNode("Реєстрація")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(Navigation), null, null, _parent));
      _push(`</header>`);
    };
  }
});
const Header_vue_vue_type_style_index_0_scoped_1dfc0475_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-1dfc0475"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4225 11.4451L12.5175 11.2276C12.06 11.1751 11.61 11.3326 11.2875 11.6551L9.90753 13.0351C7.78503 11.9551 6.04503 10.2226 4.96503 8.09257L6.35253 6.70507C6.67503 6.38257 6.83253 5.93257 6.78003 5.47507L6.56253 3.58507C6.47253 2.82757 5.83503 2.25757 5.07003 2.25757H3.77253C2.92503 2.25757 2.22003 2.96257 2.27253 3.81007C2.67003 10.2151 7.79253 15.3301 14.19 15.7276C15.0375 15.7801 15.7425 15.0751 15.7425 14.2276V12.9301C15.75 12.1726 15.18 11.5351 14.4225 11.4451Z" fill="white"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/IconPhone.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const IconPhone = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM14.7 6.18748L9.3975 9.50248C9.1575 9.65248 8.8425 9.65248 8.6025 9.50248L3.3 6.18748C3.1125 6.06748 3 5.86498 3 5.64748C3 5.14498 3.5475 4.84498 3.975 5.10748L9 8.24998L14.025 5.10748C14.4525 4.84498 15 5.14498 15 5.64748C15 5.86498 14.8875 6.06748 14.7 6.18748Z" fill="white"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/IconMail.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const IconMail = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.5C6.96312 1.5 6.70813 1.50875 5.90812 1.545C3.18438 1.67 1.67063 3.18125 1.54563 5.9075C1.50875 6.70813 1.5 6.96312 1.5 9C1.5 11.0369 1.50875 11.2925 1.545 12.0925C1.67 14.8162 3.18125 16.33 5.9075 16.455C6.70813 16.4913 6.96312 16.5 9 16.5C11.0369 16.5 11.2925 16.4913 12.0925 16.455C14.8137 16.33 16.3313 14.8187 16.4544 12.0925C16.4913 11.2925 16.5 11.0369 16.5 9C16.5 6.96312 16.4913 6.70813 16.455 5.90812C16.3325 3.18688 14.8194 1.67063 12.0931 1.54563C11.2925 1.50875 11.0369 1.5 9 1.5ZM9 5.14869C6.87313 5.14869 5.14875 6.87307 5.14875 8.99994C5.14875 11.1268 6.87313 12.8518 9 12.8518C11.1269 12.8518 12.8512 11.1274 12.8512 8.99994C12.8512 6.87307 11.1269 5.14869 9 5.14869ZM9 11.4999C7.61937 11.4999 6.5 10.3812 6.5 8.99992C6.5 7.61929 7.61937 6.49992 9 6.49992C10.3806 6.49992 11.5 7.61929 11.5 8.99992C11.5 10.3812 10.3806 11.4999 9 11.4999ZM13.0037 4.09678C12.5062 4.09678 12.1031 4.4999 12.1031 4.99678C12.1031 5.49365 12.5062 5.89678 13.0037 5.89678C13.5006 5.89678 13.9031 5.49365 13.9031 4.99678C13.9031 4.4999 13.5006 4.09678 13.0037 4.09678Z" fill="white"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/IconInstagram.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const IconInstagram = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5V12.5C1.5 14.7091 3.29086 16.5 5.5 16.5H8.91058V11.3683H7.137V9.36847H8.91058V7.89368C8.91058 6.18202 9.98391 5.25 11.5522 5.25C12.3035 5.25 12.9488 5.30466 13.137 5.32896V7.11791L12.0495 7.11847C11.1967 7.11847 11.0317 7.51325 11.0317 8.0919V9.36902H13.0656L12.8008 11.3689H11.0317V16.5H12.5C14.7091 16.5 16.5 14.7091 16.5 12.5V5.5C16.5 3.29086 14.7091 1.5 12.5 1.5H5.5Z" fill="white"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/IconFacebook.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconFacebook = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4.44313C15.9481 4.68813 15.355 4.85312 14.7325 4.9275C15.3681 4.54688 15.8562 3.94375 16.0856 3.225C15.4913 3.5775 14.8325 3.83375 14.1313 3.97188C13.5706 3.37375 12.77 3 11.885 3C9.89812 3 8.43813 4.85375 8.88688 6.77812C6.33 6.65 4.0625 5.425 2.54438 3.56313C1.73812 4.94625 2.12625 6.75562 3.49625 7.67188C2.9925 7.65562 2.5175 7.5175 2.10312 7.28687C2.06937 8.7125 3.09125 10.0462 4.57125 10.3431C4.13812 10.4606 3.66375 10.4881 3.18125 10.3956C3.5725 11.6181 4.70875 12.5075 6.05625 12.5325C4.7625 13.5469 3.1325 14 1.5 13.8075C2.86188 14.6806 4.48 15.19 6.2175 15.19C11.9312 15.19 15.1594 10.3644 14.9644 6.03625C15.5656 5.60187 16.0875 5.06 16.5 4.44313Z" fill="white"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon/IconTwitter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconTwitter = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default: ""
    },
    model: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:model"],
  setup(__props, { emit }) {
    const props = __props;
    const model = computed({
      get: () => props.model,
      set: (value) => emit("update:model", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkbox" }, _attrs))} data-v-64427c4b><input${ssrIncludeBooleanAttr(Array.isArray(unref(model)) ? ssrLooseContain(unref(model), null) : unref(model)) ? " checked" : ""} class="checkbox__input" type="checkbox"${ssrRenderAttr("id", __props.id)} data-v-64427c4b><label class="checkbox__item"${ssrRenderAttr("for", __props.id)} data-v-64427c4b><div class="checkbox__button" data-v-64427c4b>`);
      if (unref(model)) {
        _push(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-64427c4b><path d="M7 14L2 9L3.41 7.58L7 11.17L14.59 3.58L16 5L7 14ZM16 0H2C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 0.89 17.1 0 16 0Z" fill="black" data-v-64427c4b></path></svg>`);
      } else {
        _push(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-64427c4b><path d="M16 0H2C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 0.89 17.1 0 16 0ZM16 2V16H2V2H16Z" fill="black" data-v-64427c4b></path></svg>`);
      }
      _push(`</div><div class="checkbox__text" data-v-64427c4b>`);
      ssrRenderSlot(_ctx.$slots, "text", {}, null, _push, _parent);
      _push(`</div></label></div>`);
    };
  }
});
const Checkbox_vue_vue_type_style_index_0_scoped_64427c4b_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UIKit/Checkbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-64427c4b"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const checkbox = ref(false);
    const email = ref("");
    const getFooterLinks = computed(() => {
      return [
        {
          title: "Fashiofy допоможе",
          links: [
            { title: "Як замовити", link: "/how-to-order" },
            { title: "Доставка", link: "/delivery" },
            { title: "Оплата", link: "/payment" },
            { title: "Повернення", link: "/return" },
            { title: "Розмірна сітка", link: "/size-chart" }
          ]
        },
        {
          title: "Про Fashiofy",
          links: [
            { title: "Про нас", link: "/about" },
            { title: "Контакти", link: "/contacts" },
            { title: "Вакансії", link: "/vacancies" },
            { title: "Партнерство", link: "/partnership" }
          ]
        },
        {
          title: "Fashiofy мережі",
          links: [
            {
              title: "+380999999999",
              component: IconPhone,
              link: "tel:+380999999999"
            },
            { title: "info@fashiofy.store", component: IconMail, link: "mailto:" },
            {
              title: "Instagram",
              component: IconInstagram,
              link: "https://www.instagram.com/fashiofy.ua/"
            },
            {
              title: "Facebook",
              component: IconFacebook,
              link: "https://www.facebook.com/fashiofy.ua/"
            },
            {
              title: "Twitter",
              component: IconTwitter,
              link: "https://twitter.com/fashiofy_ua"
            }
          ]
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-69b7996b><div class="footer__content" data-v-69b7996b><!--[-->`);
      ssrRenderList(unref(getFooterLinks), (item) => {
        _push(`<div class="footer__col" data-v-69b7996b><p class="footer__col-title" data-v-69b7996b>${ssrInterpolate(item.title)}</p><ul class="footer__col-list" data-v-69b7996b><!--[-->`);
        ssrRenderList(item.links, (link) => {
          _push(`<li class="footer__col-item" data-v-69b7996b>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: "/",
            class: "footer__col-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (link.component) {
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(link.component), { class: "footer__col-link" }, null), _parent2, _scopeId);
                } else {
                  _push2(`<!---->`);
                }
                if (link.link) {
                  _push2(`<span data-v-69b7996b${_scopeId}>${ssrInterpolate(link.title)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  link.component ? (openBlock(), createBlock(resolveDynamicComponent(link.component), {
                    key: 0,
                    class: "footer__col-link"
                  })) : createCommentVNode("", true),
                  link.link ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(link.title), 1)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--><div class="footer__col" data-v-69b7996b><div class="footer__col-title footer__col-title--sm" data-v-69b7996b> Не пропустіть розпродаж! </div><div class="footer__col-text" data-v-69b7996b> Підпишіться на стильну розсилку від FASHIOFY, щоб отримати пріоритетний доступ до розпродажу та ексклюзивним новинкам. </div><input${ssrRenderAttr("value", unref(email))} class="footer__col-input" type="text" placeholder="Ваш email" data-v-69b7996b><button class="footer__col-button"${ssrIncludeBooleanAttr(!unref(checkbox) || !unref(email)) ? " disabled" : ""} data-v-69b7996b> Підписатись </button>`);
      _push(ssrRenderComponent(unref(Checkbox), {
        class: "footer__col-checkbox",
        model: unref(checkbox),
        "onUpdate:model": ($event) => isRef(checkbox) ? checkbox.value = $event : null,
        id: "footer"
      }, {
        text: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="footer__col-checkbox--text" data-v-69b7996b${_scopeId}>Я приймаю умови</span>`);
          } else {
            return [
              createVNode("span", { class: "footer__col-checkbox--text" }, "Я приймаю умови")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="footer__bottom" data-v-69b7996b>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Політика конфіденційності`);
          } else {
            return [
              createTextVNode("Політика конфіденційності")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-69b7996b>© Copyright Fashiofy, 2023</span></div></footer>`);
    };
  }
});
const Footer_vue_vue_type_style_index_0_scoped_69b7996b_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-69b7996b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Header), null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(unref(Footer), null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-567e8fbe.js.map
