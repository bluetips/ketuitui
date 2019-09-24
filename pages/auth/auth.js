(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/auth/auth" ], {
    102: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t(103), r = t(105);
        for (var i in r) "default" !== i && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(i);
        t(107);
        var o = t(13), u = Object(o.default)(r.default, a.render, a.staticRenderFns, !1, null, null, null);
        u.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/auth/auth.vue", 
        n.default = u.exports;
    },
    103: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t(104);
        t.d(n, "render", function() {
            return a.render;
        }), t.d(n, "staticRenderFns", function() {
            return a.staticRenderFns;
        });
    },
    104: function(e, n, t) {
        "use strict";
        t.r(n), t.d(n, "render", function() {
            return a;
        }), t.d(n, "staticRenderFns", function() {
            return r;
        });
        var a = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        a._withStripped = !0;
    },
    105: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t(106), r = t.n(a);
        for (var i in a) "default" !== i && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        n.default = r.a;
    },
    106: function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a, r = (a = t(8)) && a.__esModule ? a : {
                default: a
            }, i = {
                data: function() {
                    return {};
                },
                methods: {
                    h5Login: function(n) {
                        e.setStorageSync("token", "9C523B7DC56ABCAA34639B89DF79ED26"), e.reLaunch({
                            url: "/pages/index/index"
                        });
                    },
                    getUserInfo: function(n) {
                        var t = this, a = n.detail.userInfo, i = e.getStorageSync("spid");
                        e.login({
                            provider: "weixin",
                            success: function(o) {
                                o.code && (a.code = o.code, i && (a.spid = i), r.default.login({
                                    info: a,
                                    iv: n.detail.iv,
                                    encryptedData: n.detail.encryptedData
                                }).then(function(n) {
                                    if (e.setStorageSync("token", n.data.data.token), t.$store.commit("setUserInfo", n.data.data), 
                                    n.data.data.phone) {
                                        var a = e.getStorageSync("start_path");
                                        e.reLaunch({
                                            url: a || "/pages/index/index"
                                        });
                                    } else e.redirectTo({
                                        url: "/pages/my/myDetail/bind/bind"
                                    });
                                }, function(e) {
                                    console.log(e);
                                }));
                            }
                        });
                    },
                    appGetUserInfo: function(n) {
                        var t = this;
                        e.login({
                            provider: "weixin",
                            success: function(n) {
                                e.getUserInfo({
                                    provider: "weixin",
                                    success: function(n) {
                                        r.default.login({
                                            info: n.userInfo
                                        }).then(function(n) {
                                            200 == n.data.code ? (e.setStorageSync("token", n.data.data.token), t.$store.commit("setUserInfo", n.data.data), 
                                            e.reLaunch({
                                                url: "/pages/index/index"
                                            })) : e.reLaunch({
                                                url: "/pages/auth/auth"
                                            });
                                        }).catch(function(e) {});
                                    },
                                    fail: function(e) {}
                                });
                            }
                        });
                    }
                },
                onReady: function() {}
            };
            n.default = i;
        }).call(this, t(1).default);
    },
    107: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t(108), r = t.n(a);
        for (var i in a) "default" !== i && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        n.default = r.a;
    },
    108: function(e, n, t) {}
}, [ [ 101, "common/runtime", "common/vendor" ] ] ]);