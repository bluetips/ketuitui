(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/vip" ], {
    144: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e(145), i = e(147);
        for (var a in i) "default" !== a && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        e(149);
        var s = e(13), r = Object(s.default)(i.default, o.render, o.staticRenderFns, !1, null, null, null);
        r.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/my/vip.vue", 
        n.default = r.exports;
    },
    145: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e(146);
        e.d(n, "render", function() {
            return o.render;
        }), e.d(n, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    146: function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "render", function() {
            return o;
        }), e.d(n, "staticRenderFns", function() {
            return i;
        });
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(n) {
                t.showBox = !1;
            });
        }, i = [];
        o._withStripped = !0;
    },
    147: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e(148), i = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = i.a;
    },
    148: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = a(e(9)), i = a(e(8));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var s = {
                components: {
                    uniCard: function() {
                        return e.e("node-modules/@dcloudio/uni-ui/lib/uni-card/uni-card").then(e.bind(null, 254));
                    }
                },
                data: function() {
                    return {
                        promote_level: -1,
                        promote_status: 0,
                        paybox: !1,
                        pid: 156,
                        showBox: !1,
                        promote_sn: "",
                        binging: !1,
                        step: 1,
                        is_tips: !1,
                        tips: "",
                        inviter: null,
                        userInfo: null,
                        platform: "",
                        prodInfo: {
                            store_name: "会员",
                            price: "0.00",
                            description: "loading"
                        }
                    };
                },
                onShow: function() {
                    this.platform = t.getSystemInfoSync().system.toLocaleLowerCase().substring(0, 3), 
                    this.checkVip(!0);
                },
                onPullDownRefresh: function() {
                    this.checkVip(!1), t.stopPullDownRefresh();
                },
                methods: {
                    goTaskDetail: function() {
                        t.redirectTo({
                            url: "/pages/my/task/detail?task_id=1"
                        });
                    },
                    checkPromoteSn: function() {
                        var n = this;
                        if (!this.binging) if (this.binging = !0, this.promote_sn = this.promote_sn.trim().toUpperCase(), 
                        /^1\d{10}$/.test(this.promote_sn) || /^[A-Z0-9a-z]{8}$/.test(this.promote_sn)) {
                            var e = {
                                promote_sn: this.promote_sn,
                                try_use: 1
                            };
                            this.api.checkPromoteSn(e).then(function(t) {
                                n.binging = !1, n.step = 2, n.inviter = t.data.data.inviter, n.is_tips = t.data.data.is_tips, 
                                n.tips = t.data.data.tips;
                            }, function(e) {
                                n.binging = !1, 202 == e.data.code ? t.showModal({
                                    content: e.data.msg,
                                    confirmText: "复制微信",
                                    success: function(n) {
                                        n.confirm && t.setClipboardData({
                                            data: e.data.data.weixin,
                                            success: function() {
                                                t.showToast({
                                                    title: "微信号已复制，打开微信搜索添加即可",
                                                    icon: "none",
                                                    duration: 2e3
                                                });
                                            }
                                        });
                                    }
                                }) : t.showModal({
                                    content: e.data.msg,
                                    showCancel: !1
                                });
                            });
                        } else this.binging = !1, t.showToast({
                            title: "邀请码或者手机号码格式不对",
                            duration: 2e3,
                            icon: "none"
                        });
                    },
                    bindPromoteSn: function() {
                        if (!this.binging) if (this.is_tips) {
                            var n = this;
                            t.showModal({
                                content: this.tips,
                                success: function(t) {
                                    t.confirm && n._bindPromoteSn();
                                }
                            });
                        } else this._bindPromoteSn();
                    },
                    _bindPromoteSn: function() {
                        var n = this;
                        this.binging = !0, this.api.bindPromoteSn({
                            promote_sn: this.promote_sn,
                            try_use: 1
                        }).then(function(e) {
                            n.binging = !1, n.step = 3, o.default.state.userInfo.promote_level = 1, o.default.state.userInfo.promote_status = 0, 
                            n.$store.commit("setUserInfo", o.default.state.userInfo), n.promote_level = 1, n.promote_status = 0, 
                            t.showToast({
                                title: "试用会员开通成功",
                                duration: 2e3
                            });
                        }, function(e) {
                            n.binging = !1, 202 == e.data.code ? t.showModal({
                                content: e.data.msg,
                                confirmText: "复制微信",
                                success: function(n) {
                                    n.confirm && t.setClipboardData({
                                        data: e.data.data.weixin,
                                        success: function() {
                                            t.showToast({
                                                title: "微信号已复制，打开微信搜索添加即可",
                                                icon: "none",
                                                duration: 2e3
                                            });
                                        }
                                    });
                                }
                            }) : t.showModal({
                                content: e.data.msg,
                                showCancel: !1
                            });
                        });
                    },
                    checkVip: function(t) {
                        var n = this;
                        i.default.getpersonal().then(function(e) {
                            n.userInfo = e.data.data, n.promote_level = n.userInfo.promote_level, n.promote_status = n.userInfo.promote_status, 
                            n.inviter = n.userInfo.inviter, n.userInfo.promote_status > 0 && n.inviter && (n.step = 3), 
                            t && n.getProductInfo();
                        });
                    },
                    getProductInfo: function() {
                        var n = this;
                        i.default.getProdInfo({
                            productId: this.pid
                        }).then(function(t) {
                            var e = t.data.data.description.replace(/\<img/gi, '<img class="rich-img" style="width:100%;"');
                            e = (e = e.replace(/src=\"\/\//g, 'src="https://')).replace(/src=\"\/public/g, 'src="' + i.default.API_HOST + "/public"), 
                            t.data.data.description = e, n.prodInfo = t.data.data;
                        }, function(n) {
                            t.hideLoading(), t.showToast({
                                title: n.data.msg,
                                icon: "none",
                                duration: 1e3
                            });
                        });
                    },
                    buyVipXcx: function(n) {
                        var e = this;
                        t.showLoading({
                            title: "订单创建中~",
                            mask: !0
                        }), i.default.now_buy({
                            productId: 156
                        }).then(function(a) {
                            i.default.confirm_order({
                                cartId: a.data.data.cartId
                            }).then(function(a) {
                                var s = {
                                    servise_type: 100,
                                    formId: n.detail.formId,
                                    couponId: 0,
                                    payType: "weixin",
                                    useIntegral: 0,
                                    bargainId: 0,
                                    combinationId: 0,
                                    pinkId: 0,
                                    seckill_id: 0,
                                    mark: "购买课推推合伙人",
                                    key: a.data.data.orderKey
                                };
                                i.default.buyVip(s).then(function(n) {
                                    var i = n.data.data.result.jsConfig;
                                    t.requestPayment({
                                        provider: "wxpay",
                                        timeStamp: i.timeStamp,
                                        nonceStr: i.nonceStr,
                                        package: i.package,
                                        signType: i.signType,
                                        paySign: i.paySign,
                                        success: function(n) {
                                            t.hideLoading(), wx.showToast({
                                                title: "支付成功",
                                                icon: "success",
                                                duration: 1e3
                                            }), o.default.state.userInfo.promote_level = 1, e.$store.commit("setUserInfo", o.default.state.userInfo), 
                                            e.promote_level = 1;
                                        },
                                        fail: function(n) {
                                            t.hideLoading(), wx.showToast({
                                                title: "支付失败",
                                                icon: "none",
                                                duration: 1500
                                            }), console.log("fail:" + JSON.stringify(n));
                                        }
                                    });
                                }, function(n) {
                                    t.hideLoading(), t.showToast({
                                        title: n.data.msg,
                                        icon: "none",
                                        duration: 1e3
                                    });
                                });
                            }, function(n) {
                                t.hideLoading(), t.showToast({
                                    title: n.data.msg,
                                    icon: "none",
                                    duration: 1e3
                                });
                            });
                        }, function(n) {
                            t.hideLoading(), t.showToast({
                                title: n.data.msg,
                                icon: "none",
                                duration: 1e3
                            });
                        }), console.log(n);
                    }
                },
                onShareAppMessage: function(t) {
                    return this.api.onXcxShare(t);
                }
            };
            n.default = s;
        }).call(this, e(1).default);
    },
    149: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e(150), i = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = i.a;
    },
    150: function(t, n, e) {}
}, [ [ 143, "common/runtime", "common/vendor" ] ] ]);