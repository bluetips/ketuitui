(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/highprofit/highprofit" ], {
    168: function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e(169), o = e(171);
        for (var u in o) "default" !== u && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        e(173);
        var r = e(13), a = Object(r.default)(o.default, i.render, i.staticRenderFns, !1, null, null, null);
        a.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/highprofit/highprofit.vue", 
        t.default = a.exports;
    },
    169: function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e(170);
        e.d(t, "render", function() {
            return i.render;
        }), e.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    170: function(n, t, e) {
        "use strict";
        e.r(t), e.d(t, "render", function() {
            return i;
        }), e.d(t, "staticRenderFns", function() {
            return o;
        });
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        i._withStripped = !0;
    },
    171: function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e(172), o = e.n(i);
        for (var u in i) "default" !== u && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(u);
        t.default = o.a;
    },
    172: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i, o = (i = e(8)) && i.__esModule ? i : {
                default: i
            }, u = {
                components: {
                    utag: function() {
                        return e.e("components/uni-tag/uni-tag").then(e.bind(null, 211));
                    },
                    uniCountdown: function() {
                        return e.e("node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown").then(e.bind(null, 247));
                    }
                },
                data: function() {
                    return {
                        list: [],
                        isTips: !1,
                        level: 0,
                        platform: "",
                        ischeck: !0
                    };
                },
                onLoad: function() {
                    this.platform = n.getSystemInfoSync().system.toLocaleLowerCase().substring(0, 3), 
                    this.getList();
                },
                onPullDownRefresh: function() {
                    n.showLoading(), this.getList(), n.stopPullDownRefresh();
                },
                methods: {
                    getList: function() {
                        var t = this;
                        o.default.getHighCommissionList().then(function(e) {
                            t.list = e.data.data.data, t.level = e.data.data.level, t.ischeck = e.data.data.ischeck, 
                            !t.isTips && t.level < 1 && n.showModal({
                                content: "您还没有成为课推推会员，无法享受高返权益！",
                                confirmText: "了解会员",
                                cancelText: "返回",
                                success: function(t) {
                                    t.confirm ? n.navigateTo({
                                        url: "/pages/my/vip"
                                    }) : t.cancel && n.navigateBack();
                                },
                                fail: function() {
                                    n.navigateBack();
                                }
                            });
                        });
                    }
                }
            };
            t.default = u;
        }).call(this, e(1).default);
    },
    173: function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e(174), o = e.n(i);
        for (var u in i) "default" !== u && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(u);
        t.default = o.a;
    },
    174: function(n, t, e) {}
}, [ [ 167, "common/runtime", "common/vendor" ] ] ]);