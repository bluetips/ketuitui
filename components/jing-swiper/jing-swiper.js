(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/jing-swiper/jing-swiper" ], {
    204: function(n, e, t) {
        "use strict";
        t.r(e);
        var i = t(205), r = t(207);
        for (var o in r) "default" !== o && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(o);
        t(209);
        var s = t(13), u = Object(s.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
        u.options.__file = "birdy/HBuilderProjects/uni-app_generalize/components/jing-swiper/jing-swiper.vue", 
        e.default = u.exports;
    },
    205: function(n, e, t) {
        "use strict";
        t.r(e);
        var i = t(206);
        t.d(e, "render", function() {
            return i.render;
        }), t.d(e, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    206: function(n, e, t) {
        "use strict";
        t.r(e), t.d(e, "render", function() {
            return i;
        }), t.d(e, "staticRenderFns", function() {
            return r;
        });
        var i = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        i._withStripped = !0;
    },
    207: function(n, e, t) {
        "use strict";
        t.r(e);
        var i = t(208), r = t.n(i);
        for (var o in i) "default" !== o && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(o);
        e.default = r.a;
    },
    208: function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = {
                data: function() {
                    return {
                        imgList: [],
                        currentIndex: 0
                    };
                },
                methods: {
                    handleChange: function(n) {
                        this.currentIndex = n.detail.current;
                    },
                    getUrl: function(n) {
                        var e = /(\?id=)(\d*)/.exec(n);
                        return e ? (console.log("/pages/lessonDetail/lessonDetail?id=" + e[2]), 43) : "/pages/index/index";
                    },
                    imageClick: function(e) {
                        var t = /(\?id=)(\d*)/.exec(e);
                        t ? n.navigateTo({
                            url: "/pages/lessonDetail/lessonDetail?id=" + t[2]
                        }) : n.navigateTo({
                            url: e
                        });
                    }
                },
                props: {
                    images: {}
                }
            };
            e.default = t;
        }).call(this, t(1).default);
    },
    209: function(n, e, t) {
        "use strict";
        t.r(e);
        var i = t(210), r = t.n(i);
        for (var o in i) "default" !== o && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(o);
        e.default = r.a;
    },
    210: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/jing-swiper/jing-swiper-create-component", {
    "components/jing-swiper/jing-swiper-create-component": function(n, e, t) {
        t("1").createComponent(t(204));
    }
}, [ [ "components/jing-swiper/jing-swiper-create-component" ] ] ]);