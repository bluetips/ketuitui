(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/myDetail/myDetail" ], {
    118: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e(119), u = e(121);
        for (var o in u) "default" !== o && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(o);
        e(123);
        var a = e(13), i = Object(a.default)(u.default, r.render, r.staticRenderFns, !1, null, null, null);
        i.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/my/myDetail/myDetail.vue", 
        t.default = i.exports;
    },
    119: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e(120);
        e.d(t, "render", function() {
            return r.render;
        }), e.d(t, "staticRenderFns", function() {
            return r.staticRenderFns;
        });
    },
    120: function(n, t, e) {
        "use strict";
        e.r(t), e.d(t, "render", function() {
            return r;
        }), e.d(t, "staticRenderFns", function() {
            return u;
        });
        var r = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(t) {
                0 == n.userInfo.phone_status && n.gotobind();
            });
        }, u = [];
        r._withStripped = !0;
    },
    121: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e(122), u = e.n(r);
        for (var o in r) "default" !== o && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(o);
        t.default = u.a;
    },
    122: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o(e(8)), u = o(e(9));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            var a = {
                data: function() {
                    return {
                        userInfo: "",
                        version: "0.0.0"
                    };
                },
                methods: {
                    checkUpdate: function() {},
                    getpersondata: function() {
                        var n = this;
                        r.default.getpersonal().then(function(t) {
                            n.userInfo = t.data.data;
                        });
                    },
                    gotobind: function() {
                        n.navigateTo({
                            url: "/pages/my/myDetail/bind/bind"
                        });
                    },
                    logout: function() {
                        n.removeStorageSync("token"), u.default.commit("setUserInfo", {}), n.reLaunch({
                            url: "/pages/auth/auth"
                        });
                    }
                },
                onShow: function() {
                    this.version = r.default.APP_VERSION, this.getpersondata();
                }
            };
            t.default = a;
        }).call(this, e(1).default);
    },
    123: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e(124), u = e.n(r);
        for (var o in r) "default" !== o && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(o);
        t.default = u.a;
    },
    124: function(n, t, e) {}
}, [ [ 117, "common/runtime", "common/vendor" ] ] ]);