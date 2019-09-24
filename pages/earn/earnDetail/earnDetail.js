(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/earn/earnDetail/earnDetail" ], {
    136: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(137), a = n(139);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n(141);
        var u = n(13), o = Object(u.default)(a.default, i.render, i.staticRenderFns, !1, null, null, null);
        o.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/earn/earnDetail/earnDetail.vue", 
        e.default = o.exports;
    },
    137: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(138);
        n.d(e, "render", function() {
            return i.render;
        }), n.d(e, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    138: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "render", function() {
            return i;
        }), n.d(e, "staticRenderFns", function() {
            return a;
        });
        var i = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        i._withStripped = !0;
    },
    139: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(140), a = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = a.a;
    },
    140: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                computed: {
                    statusText: function() {
                        return -1 == this.detailData.status ? "无效" : [ "确认中", "有效" ][this.detailData.status];
                    }
                },
                data: function() {
                    return {
                        id: "",
                        detailData: "",
                        color: [ "#ff393b", "#47ba42" ]
                    };
                },
                onLoad: function(t) {
                    this.id = t.id, this.getDetail();
                },
                onPullDownRefresh: function() {
                    t.showLoading(), this.getDetail(), t.stopPullDownRefresh();
                },
                methods: {
                    getDetail: function() {
                        var e = this;
                        this.api.getUserCommission({
                            id: this.id
                        }).then(function(n) {
                            e.detailData = n.data.data, t.hideLoading();
                        });
                    },
                    viewUser: function() {
                        t.navigateTo({
                            url: "/pages/buyRecord/buyRecord?uid=" + this.detailData.uid
                        });
                    },
                    copy: function(e) {
                        t.setClipboardData({
                            data: e,
                            success: function(e) {
                                t.showToast({
                                    title: "复制成功",
                                    duration: 2e3
                                });
                            }
                        });
                    }
                },
                onShareAppMessage: function(t) {
                    return this.api.onXcxShare(t);
                }
            };
            e.default = n;
        }).call(this, n(1).default);
    },
    141: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(142), a = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = a.a;
    },
    142: function(t, e, n) {}
}, [ [ 135, "common/runtime", "common/vendor" ] ] ]);