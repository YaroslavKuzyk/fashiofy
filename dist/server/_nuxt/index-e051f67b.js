import { _ as __nuxt_component_0 } from "./nuxt-link-744fccd2.js";
import { defineComponent, unref, mergeProps, createSlots, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext, ref, computed } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { u as useConfigStore } from "./useConfigStore-9373a123.js";
import { Carousel as Carousel$1, Slide, Navigation, Pagination } from "vue3-carousel";
import { _ as _export_sfc } from "../server.mjs";
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
const carousel = "";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    itemsToShow: {
      type: Number,
      default: 1
    },
    sliderItem: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Boolean,
      default: true
    },
    navigation: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(unref(Carousel$1), mergeProps({
        "items-to-show": __props.itemsToShow,
        "wrap-around": true,
        snapAlign: "start"
      }, _attrs), createSlots({
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.sliderItem, (slide) => {
              _push2(ssrRenderComponent(unref(Slide), {
                key: slide.title
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="slide" data-v-75ad17b4${_scopeId2}><img class="slide__image"${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} data-v-75ad17b4${_scopeId2}><div class="slide__content" data-v-75ad17b4${_scopeId2}>`);
                    if (slide.title) {
                      _push3(`<h2 class="slide__title" data-v-75ad17b4${_scopeId2}>${ssrInterpolate(slide.title)}</h2>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (slide.text) {
                      _push3(`<p class="slide__text" data-v-75ad17b4${_scopeId2}>${ssrInterpolate(slide.text)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (slide.link) {
                      _push3(ssrRenderComponent(_component_nuxt_link, {
                        class: "slide__link",
                        to: `/${slide.link}`
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`Детальніше`);
                          } else {
                            return [
                              createTextVNode("Детальніше")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slide" }, [
                        createVNode("img", {
                          class: "slide__image",
                          src: slide.image,
                          alt: slide.title
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "slide__content" }, [
                          slide.title ? (openBlock(), createBlock("h2", {
                            key: 0,
                            class: "slide__title"
                          }, toDisplayString(slide.title), 1)) : createCommentVNode("", true),
                          slide.text ? (openBlock(), createBlock("p", {
                            key: 1,
                            class: "slide__text"
                          }, toDisplayString(slide.text), 1)) : createCommentVNode("", true),
                          slide.link ? (openBlock(), createBlock(_component_nuxt_link, {
                            key: 2,
                            class: "slide__link",
                            to: `/${slide.link}`
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Детальніше")
                            ]),
                            _: 2
                          }, 1032, ["to"])) : createCommentVNode("", true)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.sliderItem, (slide) => {
                return openBlock(), createBlock(unref(Slide), {
                  key: slide.title
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slide" }, [
                      createVNode("img", {
                        class: "slide__image",
                        src: slide.image,
                        alt: slide.title
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "slide__content" }, [
                        slide.title ? (openBlock(), createBlock("h2", {
                          key: 0,
                          class: "slide__title"
                        }, toDisplayString(slide.title), 1)) : createCommentVNode("", true),
                        slide.text ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: "slide__text"
                        }, toDisplayString(slide.text), 1)) : createCommentVNode("", true),
                        slide.link ? (openBlock(), createBlock(_component_nuxt_link, {
                          key: 2,
                          class: "slide__link",
                          to: `/${slide.link}`
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Детальніше")
                          ]),
                          _: 2
                        }, 1032, ["to"])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 2
      }, [
        __props.navigation || __props.pagination ? {
          name: "addons",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.navigation) {
                _push2(ssrRenderComponent(unref(Navigation), null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.pagination) {
                _push2(ssrRenderComponent(unref(Pagination), null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.navigation ? (openBlock(), createBlock(unref(Navigation), { key: 0 })) : createCommentVNode("", true),
                __props.pagination ? (openBlock(), createBlock(unref(Pagination), { key: 1 })) : createCommentVNode("", true)
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});
const Carousel_vue_vue_type_style_index_0_scoped_75ad17b4_lang = "";
const Carousel_vue_vue_type_style_index_1_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UIKit/Carousel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-75ad17b4"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HomeNews",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "short-news" }, _attrs))} data-v-a56f5019><h4 class="short-news__title" data-v-a56f5019>${ssrInterpolate(__props.item.title)}</h4>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/${__props.item.id}`,
        class: "short-news__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Детальніше`);
          } else {
            return [
              createTextVNode("Детальніше")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const HomeNews_vue_vue_type_style_index_0_scoped_a56f5019_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/HomeNews.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HomeNews = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a56f5019"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HomeProduct",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: `/${__props.item.id}`,
        class: "product"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="product__image"${ssrRenderAttr("src", __props.item.image)} data-v-730a6ca1${_scopeId}><h5 class="product__brend" data-v-730a6ca1${_scopeId}>${ssrInterpolate(__props.item.brend)}</h5><h3 class="product__title" data-v-730a6ca1${_scopeId}>${ssrInterpolate(__props.item.title)}</h3><span class="product__price" data-v-730a6ca1${_scopeId}>${ssrInterpolate(__props.item.price)}₴</span><p class="product__category" data-v-730a6ca1${_scopeId}>${ssrInterpolate(__props.item.category)}</p>`);
          } else {
            return [
              createVNode("img", {
                class: "product__image",
                src: __props.item.image
              }, null, 8, ["src"]),
              createVNode("h5", { class: "product__brend" }, toDisplayString(__props.item.brend), 1),
              createVNode("h3", { class: "product__title" }, toDisplayString(__props.item.title), 1),
              createVNode("span", { class: "product__price" }, toDisplayString(__props.item.price) + "₴", 1),
              createVNode("p", { class: "product__category" }, toDisplayString(__props.item.category), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const HomeProduct_vue_vue_type_style_index_0_scoped_730a6ca1_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/HomeProduct.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HomeProduct = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-730a6ca1"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HomeCategory",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: `/${__props.item.id}`,
        class: "category"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="category__image"${ssrRenderAttr("src", __props.item.image)}${ssrRenderAttr("alt", __props.item.title)} data-v-251bd80a${_scopeId}><p class="category__title" data-v-251bd80a${_scopeId}>${ssrInterpolate(__props.item.title)}</p>`);
          } else {
            return [
              createVNode("img", {
                class: "category__image",
                src: __props.item.image,
                alt: __props.item.title
              }, null, 8, ["src", "alt"]),
              createVNode("p", { class: "category__title" }, toDisplayString(__props.item.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const HomeCategory_vue_vue_type_style_index_0_scoped_251bd80a_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/HomeCategory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeCategory = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-251bd80a"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const configStore = useConfigStore();
    const activeTab = ref(1);
    const getNewHomeProducts = computed(() => {
      var _a, _b, _c, _d;
      if (!((_b = (_a = configStore == null ? void 0 : configStore.getConfig) == null ? void 0 : _a.home_products) == null ? void 0 : _b.new))
        ;
      return (_d = (_c = configStore == null ? void 0 : configStore.getConfig) == null ? void 0 : _c.home_products) == null ? void 0 : _d.new;
    });
    const getTopHomeProducts = computed(() => {
      var _a, _b, _c, _d;
      if (!((_b = (_a = configStore == null ? void 0 : configStore.getConfig) == null ? void 0 : _a.home_products) == null ? void 0 : _b.top))
        ;
      return (_d = (_c = configStore == null ? void 0 : configStore.getConfig) == null ? void 0 : _c.home_products) == null ? void 0 : _d.top;
    });
    const getTopCategories = computed(() => {
      var _a, _b;
      if (!((_a = configStore == null ? void 0 : configStore.getConfig) == null ? void 0 : _a.top_categories))
        ;
      return (_b = configStore == null ? void 0 : configStore.getConfig) == null ? void 0 : _b.top_categories;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))} data-v-bec03316><div class="home-slider" data-v-bec03316>`);
      _push(ssrRenderComponent(unref(Carousel), {
        sliderItem: unref(configStore).getConfig.intro
      }, null, _parent));
      _push(`</div><div class="home-short-news" data-v-bec03316><!--[-->`);
      ssrRenderList(unref(configStore).getConfig.short_news, (item, index2) => {
        _push(ssrRenderComponent(unref(HomeNews), {
          key: index2,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="home-tabs" data-v-bec03316><div class="home-tabs__header" data-v-bec03316><button class="${ssrRenderClass([{ "home-tabs__button--active": unref(activeTab) === 1 }, "home-tabs__button"])}" data-v-bec03316> Нове </button><button class="${ssrRenderClass([{ "home-tabs__button--active": unref(activeTab) === 2 }, "home-tabs__button"])}" data-v-bec03316> Топ </button></div><div class="home-tabs__content" data-v-bec03316>`);
      if (unref(activeTab) === 1) {
        _push(`<div class="home-tabs__item" data-v-bec03316><!--[-->`);
        ssrRenderList(unref(getNewHomeProducts), (item, index2) => {
          _push(ssrRenderComponent(unref(HomeProduct), {
            key: index2,
            item
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTab) === 2) {
        _push(`<div class="home-tabs__item" data-v-bec03316><!--[-->`);
        ssrRenderList(unref(getTopHomeProducts), (item, index2) => {
          _push(ssrRenderComponent(unref(HomeProduct), {
            key: index2,
            item
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="home-section" data-v-bec03316><div class="home-section__header" data-v-bec03316><h2 class="home-title" data-v-bec03316>Топ-Категорії</h2>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "home-section__link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Показати більше`);
          } else {
            return [
              createTextVNode("Показати більше")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="home-section__content" data-v-bec03316><!--[-->`);
      ssrRenderList(unref(getTopCategories), (item) => {
        _push(ssrRenderComponent(unref(HomeCategory), {
          key: item.id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="home-section home-section--brends" data-v-bec03316><div class="home-section__header" data-v-bec03316><h2 class="home-title" data-v-bec03316>Наші Бренди</h2></div>`);
      _push(ssrRenderComponent(unref(Carousel), {
        sliderItem: unref(configStore).getConfig.brends,
        itemsToShow: 2,
        pagination: false
      }, null, _parent));
      _push(`</div><div class="home-section home-section--lookbook" data-v-bec03316><div class="home-section__header" data-v-bec03316><h2 class="home-title" data-v-bec03316>Наші Бренди</h2></div><div class="home-section__single-slider" data-v-bec03316>`);
      _push(ssrRenderComponent(unref(Carousel), {
        class: "",
        sliderItem: unref(configStore).getConfig.brends,
        itemsToShow: 1,
        pagination: false
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_bec03316_lang = "";
const index_vue_vue_type_style_index_1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bec03316"]]);
export {
  index as default
};
//# sourceMappingURL=index-e051f67b.js.map
