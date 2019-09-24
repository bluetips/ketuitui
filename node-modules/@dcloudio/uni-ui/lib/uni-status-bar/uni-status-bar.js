(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar" ], {
    268: function(t, n, u) {
        "use strict";
        u.r(n);
        var e = u(269), i = u(271);
        for (var r in i) "default" !== r && function(t) {
            u.d(n, t, function() {
                return i[t];
            });
        }(r);
        u(273);
        var a = u(13), o = Object(a.default)(i.default, e.render, e.staticRenderFns, !1, null, null, null);
        o.options.__file = "birdy/HBuilderProjects/uni-app_generalize/node_modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar.vue", 
        n.default = o.exports;
    },
    269: function(t, n, u) {
        "use strict";
        u.r(n);
        var e = u(270);
        u.d(n, "render", function() {
            return e.render;
        }), u.d(n, "staticRenderFns", function() {
            return e.staticRenderFns;
        });
    },
    270: function(t, n, u) {
        "use strict";
        u.r(n), u.d(n, "render", function() {
            return e;
        }), u.d(n, "staticRenderFns", function() {
            return i;
        });
        var e = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        e._withStripped = !0;
    },
    271: function(t, n, u) {
        "use strict";
        u.r(n);
        var e = u(272), i = u.n(e);
        for (var r in e) "default" !== r && function(t) {
            u.d(n, t, function() {
                return e[t];
            });
        }(r);
        n.default = i.a;
    },
    272: function(t, n, u) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var u = t.getSystemInfoSync().statusBarHeight + "px", e = {
                name: "UniStatusBar",
                data: function() {
                    return {
                        statusBarHeight: u
                    };
                }
            };
            n.default = e;
        }).call(this, u(1).default);
    },
    273: function(t, n, u) {
        "use strict";
        u.r(n);
        var e = u(274), i = u.n(e);
        for (var r in e) "default" !== r && function(t) {
            u.d(n, t, function() {
                return e[t];
            });
        }(r);
        n.default = i.a;
    },
    274: function(t, n, u) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar-create-component", {
    "node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar-create-component": function(t, n, u) {
        u("1").createComponent(u(268));
    }
}, [ [ "node-modules/@dcloudio/uni-ui/lib/uni-status-bar/uni-status-bar-create-component" ] ] ]);