(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/hdPrinting/hdPrinting" ], {
    23: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e(24), i = e(26);
        for (var r in i) "default" !== r && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(r);
        e(28);
        var a = e(13), c = Object(a.default)(i.default, o.render, o.staticRenderFns, !1, null, null, null);
        c.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/hdPrinting/hdPrinting.vue", 
        t.default = c.exports;
    },
    24: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e(25);
        e.d(t, "render", function() {
            return o.render;
        }), e.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    25: function(n, t, e) {
        "use strict";
        e.r(t), e.d(t, "render", function() {
            return o;
        }), e.d(t, "staticRenderFns", function() {
            return i;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        o._withStripped = !0;
    },
    26: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e(27), i = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    27: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                components: {
                    tkiQrcode: function() {
                        return Promise.all([ e.e("common/vendor"), e.e("components/tki-qrcode/tki-qrcode") ]).then(e.bind(null, 232));
                    }
                },
                data: function() {
                    return {
                        imgList: [],
                        currentIndex: 0,
                        savedImgUrl: "",
                        banner: [ {
                            title: "海报",
                            pic: "https://s6.pipacode.cn/3a6bb201904241853281378.jpg"
                        }, {
                            title: "二维码",
                            pic: "https://s6.pipacode.cn/3a6bb201904241853281378.jpg"
                        } ],
                        poster: null,
                        unit: "upx",
                        lv: 3,
                        onval: !0,
                        loadMake: !0
                    };
                },
                methods: {
                    handleChange: function(n) {
                        this.currentIndex = n.detail.current, console.log(this.currentIndex);
                    },
                    qrR: function(t) {
                        this.savedImgUrl = t, n.hideLoading();
                    },
                    saveImageToPhoto: function() {
                        "" != this.savedImgUrl && n.saveImageToPhotosAlbum({
                            filePath: this.savedImgUrl,
                            success: function() {
                                n.hideLoading(), n.showModal({
                                    title: "保存成功",
                                    content: "高清二维码已经保存到手机相册！",
                                    showCancel: !1
                                });
                            },
                            fail: function(t) {
                                "saveImageToPhotosAlbum:fail cancel" == t.errMsg ? n.showModal({
                                    title: "保存失败",
                                    content: "您已取消保存图片到相册！",
                                    showCancel: !1
                                }) : n.showModal({
                                    title: "提示",
                                    content: "保存图片失败，您可以点击确定设置获取相册权限后再尝试保存！",
                                    complete: function(t) {
                                        t.confirm ? n.openSetting({}) : n.showModal({
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
                    var t = n.getStorageSync("poster");
                    t || n.navigateBack(), this.poster = JSON.parse(t), n.showLoading({
                        title: "生成中...",
                        mask: !0
                    });
                }
            };
            t.default = o;
        }).call(this, e(1).default);
    },
    28: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e(29), i = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    29: function(n, t, e) {}
}, [ [ 22, "common/runtime", "common/vendor" ] ] ]);