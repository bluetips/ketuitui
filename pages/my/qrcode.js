(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/qrcode" ], {
    152: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(153), i = n(155);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n(157);
        var u = n(13), a = Object(u.default)(i.default, o.render, o.staticRenderFns, !1, null, null, null);
        a.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/my/qrcode.vue", 
        e.default = a.exports;
    },
    153: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(154);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    154: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "render", function() {
            return o;
        }), n.d(e, "staticRenderFns", function() {
            return i;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        o._withStripped = !0;
    },
    155: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(156), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    156: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(n(9)), i = r(n(8));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var u = {
                components: {
                    tkiQrcode: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("components/tki-qrcode/tki-qrcode") ]).then(n.bind(null, 232));
                    }
                },
                data: function() {
                    return {
                        qrcodeUrl: "",
                        savedImgUrl: "",
                        uid: 0,
                        unit: "upx",
                        lv: 3,
                        onval: !0,
                        loadMake: !0
                    };
                },
                mounted: function() {
                    var t = this, e = this;
                    o.default.state.userInfo ? (this.uid = o.default.state.userInfo.uid, this.qrcodeUrl = "https://mall.pipacode.com/?_from=ktt&spid=" + this.uid) : i.default.getUserInfo().then(function(n) {
                        e.uid = o.default.state.userInfo.uid, t.qrcodeUrl = "https://mall.pipacode.com/?_from=ktt&spid=" + e.uid;
                    });
                },
                methods: {
                    qrR: function(e) {
                        this.savedImgUrl = e, t.hideLoading();
                    },
                    saveImageToPhoto: function() {
                        "" != this.savedImgUrl && t.saveImageToPhotosAlbum({
                            filePath: this.savedImgUrl,
                            success: function() {
                                t.hideLoading(), t.showModal({
                                    title: "保存成功",
                                    content: "高清二维码已经保存到手机相册！",
                                    showCancel: !1
                                });
                            },
                            fail: function(e) {
                                "saveImageToPhotosAlbum:fail cancel" == e.errMsg ? t.showModal({
                                    title: "保存失败",
                                    content: "您已取消保存图片到相册！",
                                    showCancel: !1
                                }) : t.showModal({
                                    title: "提示",
                                    content: "保存图片失败，您可以点击确定设置获取相册权限后再尝试保存！",
                                    complete: function(e) {
                                        e.confirm ? t.openSetting({}) : t.showModal({
                                            title: "保存图片失败",
                                            content: "您已取消保存图片到相册！",
                                            showCancel: !1
                                        });
                                    }
                                });
                            }
                        });
                    }
                },
                onShow: function() {
                    t.showLoading({
                        title: "生成中...",
                        mask: !0
                    });
                }
            };
            e.default = u;
        }).call(this, n(1).default);
    },
    157: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(158), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    158: function(t, e, n) {}
}, [ [ 151, "common/runtime", "common/vendor" ] ] ]);