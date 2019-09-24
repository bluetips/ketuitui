(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar" ], {
    261: function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e(262), i = e(264);
        for (var o in i) "default" !== o && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(o);
        e(266);
        var r = e(13), a = Object(r.default)(i.default, u.render, u.staticRenderFns, !1, null, null, null);
        a.options.__file = "birdy/HBuilderProjects/uni-app_generalize/node_modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar.vue", 
        t.default = a.exports;
    },
    262: function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e(263);
        e.d(t, "render", function() {
            return u.render;
        }), e.d(t, "staticRenderFns", function() {
            return u.staticRenderFns;
        });
    },
    263: function(n, t, e) {
        "use strict";
        e.r(t), e.d(t, "render", function() {
            return u;
        }), e.d(t, "staticRenderFns", function() {
            return i;
        });
        var u = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        u._withStripped = !0;
    },
    264: function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e(265), i = e.n(u);
        for (var o in u) "default" !== o && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(o);
        t.default = i.a;
    },
    265: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = {
            name: "UniNavBar",
            components: {
                uniStatusBar: function() {
                    return e.e("node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar").then(e.bind(null, 268));
                },
                uniIcon: function() {
                    return e.e("node-modules/@dcloudio/uni-ui/lib/uni-icon/uni-icon").then(e.bind(null, 275));
                }
            },
            props: {
                title: {
                    type: String,
                    default: ""
                },
                leftText: {
                    type: String,
                    default: ""
                },
                rightText: {
                    type: String,
                    default: ""
                },
                leftIcon: {
                    type: String,
                    default: ""
                },
                rightIcon: {
                    type: String,
                    default: ""
                },
                fixed: {
                    type: Boolean,
                    default: !1
                },
                color: {
                    type: String,
                    default: "#000000"
                },
                backgroundColor: {
                    type: String,
                    default: "#FFFFFF"
                },
                statusBar: {
                    type: Boolean,
                    default: !1
                },
                shadow: {
                    type: Boolean,
                    default: !0
                },
                border: {
                    type: Boolean,
                    default: !0
                }
            },
            methods: {
                onClickLeft: function() {
                    this.$emit("click-left");
                },
                onClickRight: function() {
                    this.$emit("click-right");
                }
            }
        };
        t.default = u;
    },
    266: function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e(267), i = e.n(u);
        for (var o in u) "default" !== o && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(o);
        t.default = i.a;
    },
    267: function(n, t, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar-create-component", {
    "node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar-create-component": function(n, t, e) {
        e("1").createComponent(e(261));
    }
}, [ [ "node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar-create-component" ] ] ]);