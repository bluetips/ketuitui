(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/socialMediaShare/socialMediaShare" ], {
    47: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(48), i = n(50);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n(52);
        var s = n(13), a = Object(s.default)(i.default, o.render, o.staticRenderFns, !1, null, null, null);
        a.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/socialMediaShare/socialMediaShare.vue", 
        e.default = a.exports;
    },
    48: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(49);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    49: function(t, e, n) {
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
    50: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(51), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    51: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                data: function() {
                    return {
                        poster: "http://statictest.pipacode.cn/2f66d201904111521438259.png",
                        qrCode: "http://statictest.pipacode.cn/a309320181221113930891.jpg",
                        posterSelect: 0,
                        qrcodeSelect: 0
                    };
                },
                computed: {
                    btnDisable: function() {
                        return !this.posterSelect && !this.qrcodeSelect;
                    }
                },
                methods: {
                    showImage: function(e) {
                        var n = [ this.poster, this.qrCode ];
                        "poster" == e && (n = [ this.qrCode, this.poster ]), t.previewImage({
                            indicator: "number",
                            loop: !0,
                            urls: n
                        });
                    },
                    download: function() {
                        (this.posterSelect || this.qrcodeSelect) && (this.posterSelect && (console.log("poster"), 
                        this.downloadImage(this.poster).then(function(e) {
                            t.saveImageToPhotosAlbum({
                                filePath: e,
                                success: function() {
                                    t.showToast({
                                        title: "海报保存成功",
                                        duration: 2e3
                                    });
                                }
                            });
                        }, function() {
                            t.showToast({
                                title: "海报保存失败",
                                duration: 2e3
                            });
                        })), this.qrcodeSelect && this.downloadImage(this.qrCode).then(function(e) {
                            t.saveImageToPhotosAlbum({
                                filePath: e,
                                success: function() {
                                    t.showToast({
                                        title: "二维码保存成功",
                                        duration: 2e3
                                    });
                                }
                            });
                        }, function() {
                            t.showToast({
                                title: "二维码保存失败",
                                duration: 2e3
                            });
                        }));
                    },
                    downloadImage: function(e) {
                        return console.log("image"), console.log(e), new Promise(function(n, o) {
                            t.downloadFile({
                                url: e,
                                success: function(t) {
                                    200 === t.statusCode ? n(t.tempFilePath) : o();
                                }
                            });
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n(1).default);
    },
    52: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(53), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    53: function(t, e, n) {}
}, [ [ 46, "common/runtime", "common/vendor" ] ] ]);