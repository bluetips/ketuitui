(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card" ], {
    254: function(n, e, t) {
        "use strict";
        t.r(e);
        var u = t(255), i = t(257);
        for (var r in i) "default" !== r && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(r);
        t(259);
        var o = t(13), d = Object(o.default)(i.default, u.render, u.staticRenderFns, !1, null, null, null);
        d.options.__file = "birdy/HBuilderProjects/uni-app_generalize/node_modules/@dcloudio/uni-ui/lib/uni-card/uni-card.vue", 
        e.default = d.exports;
    },
    255: function(n, e, t) {
        "use strict";
        t.r(e);
        var u = t(256);
        t.d(e, "render", function() {
            return u.render;
        }), t.d(e, "staticRenderFns", function() {
            return u.staticRenderFns;
        });
    },
    256: function(n, e, t) {
        "use strict";
        t.r(e), t.d(e, "render", function() {
            return u;
        }), t.d(e, "staticRenderFns", function() {
            return i;
        });
        var u = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        u._withStripped = !0;
    },
    257: function(n, e, t) {
        "use strict";
        t.r(e);
        var u = t(258), i = t.n(u);
        for (var r in u) "default" !== r && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(r);
        e.default = i.a;
    },
    258: function(n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = {
            name: "UniCard",
            props: {
                title: {
                    type: String,
                    default: ""
                },
                extra: {
                    type: String,
                    default: ""
                },
                note: {
                    type: String,
                    default: ""
                },
                thumbnail: {
                    type: String,
                    default: ""
                },
                isFull: {
                    type: Boolean,
                    default: !1
                }
            },
            methods: {
                onClick: function() {
                    this.$emit("click");
                }
            }
        };
        e.default = u;
    },
    259: function(n, e, t) {
        "use strict";
        t.r(e);
        var u = t(260), i = t.n(u);
        for (var r in u) "default" !== r && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(r);
        e.default = i.a;
    },
    260: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card-create-component", {
    "node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card-create-component": function(n, e, t) {
        t("1").createComponent(t(254));
    }
}, [ [ "node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card-create-component" ] ] ]);