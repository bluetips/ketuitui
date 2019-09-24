(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/my" ], {
    110: function(t, n, o) {
        "use strict";
        o.r(n);
        var i = o(111), e = o(113);
        for (var a in e) "default" !== a && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(a);
        o(115);
        var s = o(13), r = Object(s.default)(e.default, i.render, i.staticRenderFns, !1, null, null, null);
        r.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/my/my.vue", 
        n.default = r.exports;
    },
    111: function(t, n, o) {
        "use strict";
        o.r(n);
        var i = o(112);
        o.d(n, "render", function() {
            return i.render;
        }), o.d(n, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    112: function(t, n, o) {
        "use strict";
        o.r(n), o.d(n, "render", function() {
            return i;
        }), o.d(n, "staticRenderFns", function() {
            return e;
        });
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(n) {
                t.showBox = !0;
            }, t.e1 = function(n) {
                t.showBox = !1;
            });
        }, e = [];
        i._withStripped = !0;
    },
    113: function(t, n, o) {
        "use strict";
        o.r(n);
        var i = o(114), e = o.n(i);
        for (var a in i) "default" !== a && function(t) {
            o.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = e.a;
    },
    114: function(t, n, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = {
                components: {
                    uniCountdown: function() {
                        return o.e("node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown").then(o.bind(null, 247));
                    },
                    utag: function() {
                        return o.e("components/uni-tag/uni-tag").then(o.bind(null, 211));
                    }
                },
                data: function() {
                    return {
                        userInfo: "",
                        smprice: "",
                        bigprice: "",
                        can_draw: "",
                        showBox: !1,
                        promote_sn: "",
                        binging: !1,
                        step: 1,
                        is_tips: !1,
                        tips: "",
                        inviter: null,
                        tasks: []
                    };
                },
                methods: {
                    goTask: function() {
                        t.switchTab({
                            url: "/pages/my/task/task"
                        });
                    },
                    goToTaskDetail: function(n) {
                        t.navigateTo({
                            url: "/pages/my/task/detail?task_id=" + n
                        });
                    },
                    checkPromoteSn: function() {
                        var n = this;
                        if (!this.binging) if (this.binging = !0, this.promote_sn = this.promote_sn.trim().toUpperCase(), 
                        /^1\d{10}$/.test(this.promote_sn) || /^[A-Z0-9a-z]{8}$/.test(this.promote_sn)) {
                            var o = {
                                promote_sn: this.promote_sn
                            };
                            this.api.checkPromoteSn(o).then(function(t) {
                                n.binging = !1, n.step = 2, n.inviter = t.data.data.inviter, n.is_tips = t.data.data.is_tips, 
                                n.tips = t.data.data.tips;
                            }, function(o) {
                                n.binging = !1, 201 == o.data.code ? t.showModal({
                                    content: o.data.msg,
                                    confirmText: "免费开通",
                                    success: function(n) {
                                        n.confirm && t.navigateTo({
                                            url: "/pages/my/vip"
                                        });
                                    }
                                }) : 202 == o.data.code ? t.showModal({
                                    content: o.data.msg,
                                    confirmText: "复制微信",
                                    success: function(n) {
                                        n.confirm && t.setClipboardData({
                                            data: o.data.data.weixin,
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
                                    content: o.data.msg,
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
                            promote_sn: this.promote_sn
                        }).then(function(o) {
                            n.binging = !1, n.step = 3, t.showToast({
                                title: "绑定成功",
                                duration: 2e3
                            });
                        }, function(o) {
                            n.binging = !1, 201 == o.data.code ? t.showModal({
                                content: o.data.msg,
                                confirmText: "免费开通",
                                success: function(n) {
                                    n.confirm && t.navigateTo({
                                        url: "/pages/my/vip"
                                    });
                                }
                            }) : 202 == o.data.code ? t.showModal({
                                content: o.data.msg,
                                confirmText: "复制微信",
                                success: function(n) {
                                    n.confirm && t.setClipboardData({
                                        data: o.data.data.weixin,
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
                                content: o.data.msg,
                                showCancel: !1
                            });
                        });
                    },
                    copySn: function(n) {
                        t.setClipboardData({
                            data: n,
                            success: function() {
                                t.showToast({
                                    title: "邀请码已经复制",
                                    duration: 2e3
                                });
                            }
                        });
                    },
                    getSn: function() {
                        var n = this;
                        this.api.getPromoteSn().then(function(o) {
                            n.userInfo.promote_sn = o.data.data.promote_sn, t.showToast({
                                title: "邀请码获取成功",
                                duration: 2e3
                            });
                        }, function(n) {
                            t.showModal({
                                content: n.data.msg,
                                showCancel: !1
                            });
                        });
                    },
                    onGotUserInfo: function(t) {
                        console.log(t.detail.errMsg), console.log(t.detail.userInfo), console.log(t.detail.rawData);
                    },
                    gotowithdraw: function(n) {
                        1 == n.currentTarget.dataset.isgo ? t.navigateTo({
                            url: "/pages/withdraw/withdraw"
                        }) : t.showModal({
                            title: "您的账号暂时无法提现",
                            content: this.userInfo.draw_tips,
                            showCancel: !1
                        });
                    },
                    getpersondata: function() {
                        var t = this;
                        this.api.getpersonal({
                            inviter: 1,
                            task: 1
                        }).then(function(n) {
                            var o = n.data.data.now_money.split(".");
                            t.bigprice = o[0], t.smprice = o[1], t.userInfo = n.data.data, t.inviter = t.userInfo.inviter, 
                            t.tasks = n.data.data.tasks, t.userInfo.promote_status > 0 && t.inviter && (t.step = n.data.data.step);
                        });
                    }
                },
                onShow: function() {
                    this.getpersondata();
                },
                onShareAppMessage: function(t) {
                    return this.api.onXcxShare(t);
                }
            };
            n.default = i;
        }).call(this, o(1).default);
    },
    115: function(t, n, o) {
        "use strict";
        o.r(n);
        var i = o(116), e = o.n(i);
        for (var a in i) "default" !== a && function(t) {
            o.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = e.a;
    },
    116: function(t, n, o) {}
}, [ [ 109, "common/runtime", "common/vendor" ] ] ]);