(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/lessonDetail/lessonDetail" ], {
    100: function(t, a, e) {},
    94: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e(95), i = e(97);
        for (var o in i) "default" !== o && function(t) {
            e.d(a, t, function() {
                return i[t];
            });
        }(o);
        e(99);
        var s = e(13), r = Object(s.default)(i.default, n.render, n.staticRenderFns, !1, null, null, null);
        r.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/lessonDetail/lessonDetail.vue", 
        a.default = r.exports;
    },
    95: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e(96);
        e.d(a, "render", function() {
            return n.render;
        }), e.d(a, "staticRenderFns", function() {
            return n.staticRenderFns;
        });
    },
    96: function(t, a, e) {
        "use strict";
        e.r(a), e.d(a, "render", function() {
            return n;
        }), e.d(a, "staticRenderFns", function() {
            return i;
        });
        var n = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        n._withStripped = !0;
    },
    97: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e(98), i = e.n(n);
        for (var o in n) "default" !== o && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(o);
        a.default = i.a;
    },
    98: function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n, i = (n = e(8)) && n.__esModule ? n : {
                default: n
            }, o = t.createCanvasContext("myCanvas"), s = null, r = {
                components: {
                    utag: function() {
                        return e.e("components/uni-tag/uni-tag").then(e.bind(null, 211));
                    },
                    bottomBar: function() {
                        return e.e("components/detailTabBar").then(e.bind(null, 240));
                    },
                    tkiQrcode: function() {
                        return Promise.all([ e.e("common/vendor"), e.e("components/tki-qrcode/tki-qrcode") ]).then(e.bind(null, 232));
                    }
                },
                data: function() {
                    return {
                        id: "",
                        details: "",
                        description: "",
                        showAll: !1,
                        images: [ {
                            selected: !0,
                            src: ""
                        } ],
                        showUserInfo: !0,
                        switchUserInfoText: "显示用户信息",
                        showOption: !1,
                        pid: 0,
                        unit: "upx",
                        lv: 3,
                        onval: !0,
                        loadMake: !0,
                        qsrc: "",
                        qrposX: "",
                        qrposY: "",
                        qrwidth: "",
                        qrheight: "",
                        qrurl: "",
                        avator: "",
                        avatorbead: "",
                        avatorx: "",
                        avatory: "",
                        avatarwidth: "",
                        nicknames: "",
                        namecolor: "",
                        namesize: "",
                        namex: "",
                        namey: "",
                        shareinfo: "",
                        qrcode: "",
                        posterimg: "",
                        canvaswidth: "",
                        canvasheight: "",
                        savedImgUrl: "",
                        sharebox: "",
                        showtab: 1,
                        hdUrl: "",
                        createIng: !1,
                        platform: "",
                        ischeck: !0
                    };
                },
                computed: {
                    detailImgsHeight: function() {
                        return this.showAll ? "auto" : t.upx2px(690) + "px";
                    }
                },
                methods: {
                    recommend: function() {
                        t.navigateTo({
                            url: "/pages/lessonPoster/lessonPoster?id=" + this.details.data.product_id + "&pid=" + this.details.data.id
                        });
                    },
                    detailShow: function() {
                        this.showAll = !this.showAll;
                    },
                    imgSelect: function(t) {
                        this.images[t].selected = !this.images[t].selected;
                    },
                    startCreate: function() {
                        var a = this, e = this;
                        i.default.getposter({
                            id: this.details.data.product_id,
                            pid: this.details.data.id
                        }).then(function(n) {
                            e.hdUrl = "/pages/hdPrinting/hdPrinting?id=" + a.id + "&pid=" + a.pid, e.showOption = !1, 
                            t.showLoading({
                                title: "海报生成中...",
                                mask: !0
                            }), s = setTimeout(function() {
                                t.showModal({
                                    content: "海报生成超时，请重进再试",
                                    showCancel: !1,
                                    success: function() {
                                        t.navigateBack();
                                    }
                                });
                            }, 15e3);
                            var i = n.data.data, o = n.data.data.code_data;
                            /^http:\/\//.test(o.avatar_info.avatar) && (o.avatar_info.avatar = o.avatar_info.avatar.replace("http:", "https:")), 
                            e.posterimg = i.background_pic, e.canvaswidth = i.width, e.canvasheight = i.height, 
                            e.qrposX = o.xcx_code.start_x, e.qrposY = o.xcx_code.start_y, e.qrwidth = o.xcx_code.width, 
                            e.qrheight = o.xcx_code.height, e.qrurl = o.xcx_code.pic, e.avator = o.avatar_info.avatar, 
                            e.avatorbead = o.avatar_info.avatar_bead, e.avatorx = o.avatar_info.avatar_x, e.avatory = o.avatar_info.avatar_y, 
                            e.avatarwidth = o.avatar_info.avatar_width, e.nicknames = o.nickname_info.nickname, 
                            e.namecolor = o.nickname_info.nickname_color, e.namesize = o.nickname_info.nickname_size, 
                            e.namex = o.nickname_info.nickname_x, e.namey = o.nickname_info.nickname_y, e.shareinfo = o.share_info.share_title;
                        }, function(a) {
                            t.showToast({
                                title: a.data.msg,
                                icon: "none",
                                duration: 1e3
                            });
                        });
                    },
                    setUserInfo: function(a, e) {
                        this.switchUserInfoText = a ? "显示用户信息" : "隐藏用户信息", this.showUserInfo = a, e && t.setStorageSync("showUserInfo", a ? "1" : "0");
                    },
                    switchUserInfo: function(t) {
                        this.savedImgUrl = "", this.setUserInfo(t.target.value, !0), this.startCreate(), 
                        this.createposter();
                    },
                    copyinfo: function(a) {
                        t.setClipboardData({
                            data: this.shareinfo,
                            success: function(e) {
                                a && t.showToast({
                                    title: "分享文案已经复制",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    sharefriend: function() {
                        var a = this;
                        this.copyinfo(!1), t.share({
                            provider: "weixin",
                            scene: "WXSceneSession",
                            type: 2,
                            imageUrl: a.savedImgUrl,
                            success: function(t) {
                                a.sharebox = !1;
                            },
                            fail: function(t) {
                                console.log("fail:" + JSON.stringify(t));
                            }
                        });
                    },
                    appshare: function() {
                        this.sharebox = !0;
                    },
                    qrR: function(t) {
                        this.qsrc = t, this.qsrc && !this.createIng && (this.createIng = !0, this.createposter());
                    },
                    createposter: function() {
                        var a = this;
                        a.drawBackgroudImage().then(function() {
                            Promise.all([ a.drawAvatar(), a.canvasFillText(o) ]).then(function() {
                                a.saveCanvasToLocal("myCanvas").then(function(e) {
                                    o.drawImage(a.qsrc, a.qrposX, a.qrposY, a.qrwidth, a.qrwidth), o.draw(!0, setTimeout(function() {
                                        t.canvasToTempFilePath({
                                            x: 0,
                                            y: 0,
                                            width: a.canvaswidth,
                                            height: a.canvasheight,
                                            destWidth: a.canvaswidth,
                                            destHeight: a.canvasheight,
                                            fileType: "png",
                                            canvasId: "myCanvas",
                                            success: function(e) {
                                                a.savedImgUrl = e.tempFilePath, a.images[0].src = e.tempFilePath, t.hideLoading(), 
                                                a.showOption = !0, clearTimeout(s);
                                            },
                                            fail: function(e) {
                                                console.log("fail"), t.hideLoading(), a.showOption = !0, t.showToast({
                                                    title: "生成失败",
                                                    icon: "none",
                                                    duration: 1200
                                                });
                                            }
                                        });
                                    }, 250));
                                });
                            });
                        });
                    },
                    drawBackgroudImage: function() {
                        var a = this;
                        return new Promise(function(e, n) {
                            t.getImageInfo({
                                src: a.posterimg,
                                success: function(t) {
                                    o.drawImage(t.path, 0, 0, a.canvaswidth, a.canvasheight), e();
                                },
                                fail: function(t) {
                                    n(t);
                                }
                            });
                        });
                    },
                    saveCanvasToLocal: function(a) {
                        return new Promise(function(e, n) {
                            t.canvasToTempFilePath({
                                canvasId: a,
                                success: function(t) {
                                    "" !== t.tempFilePath && e(t.tempFilePath);
                                },
                                fail: function(t) {
                                    n(t);
                                }
                            });
                        });
                    },
                    drawAvatar: function() {
                        var a = this;
                        return this.showUserInfo ? new Promise(function(e, n) {
                            t.getImageInfo({
                                src: a.avator,
                                success: function(t) {
                                    a.drawCircleImg(o, t.path, a.avatorx, a.avatory, a.avatorbead), e();
                                },
                                fail: function(t) {
                                    n(t);
                                }
                            });
                        }) : void 0;
                    },
                    drawCircleImg: function(t, a, e, n, i) {
                        var o = this.avatarwidth, s = this.avatarwidth;
                        t.save(), t.beginPath(), t.arc(e + i, n + i, i, Math.PI, 3 * Math.PI / 2), t.lineTo(o - i + e, n), 
                        t.arc(o - i + e, i + n, i, 3 * Math.PI / 2, 2 * Math.PI), t.lineTo(o + e, s + n - i), 
                        t.arc(o - i + e, s - i + n, i, 0, 1 * Math.PI / 2), t.lineTo(i + e, s + n), t.arc(i + e, s - i + n, i, 1 * Math.PI / 2, Math.PI), 
                        t.closePath(), t.clip(), t.drawImage(a, e, n, this.avatarwidth, this.avatarwidth), 
                        t.restore();
                    },
                    canvasFillText: function(t) {
                        if (this.showUserInfo) {
                            var a = this.namesize + " Arial", e = this.namex, n = this.namey;
                            t.font = "bold " + a, t.fillStyle = this.namecolor, t.lineWidth = 1, t.strokeStyle = "#fff", 
                            t.textAlign = "left", t.fillText(this.nicknames, e, n), t.strokeText(this.nicknames, e, n);
                        }
                    },
                    saveImageToPhoto: function() {
                        var a = this;
                        "" != a.savedImgUrl && t.saveImageToPhotosAlbum({
                            filePath: a.savedImgUrl,
                            success: function() {
                                t.hideLoading(), t.setClipboardData({
                                    data: a.shareinfo,
                                    success: function(t) {}
                                }), a.sharebox = !1, t.showModal({
                                    title: "保存成功",
                                    content: "成功保存到相册，\r\n您可以手动分享到朋友圈！",
                                    showCancel: !1
                                });
                            },
                            fail: function(a) {
                                "saveImageToPhotosAlbum:fail cancel" == a.errMsg ? t.showModal({
                                    title: "保存失败",
                                    content: "您已取消保存图片到相册！",
                                    showCancel: !1
                                }) : t.showModal({
                                    title: "提示",
                                    content: "保存图片失败，您可以点击确定设置获取相册权限后再尝试保存！",
                                    complete: function(a) {
                                        a.confirm ? t.openSetting({}) : t.showModal({
                                            title: "保存图片失败",
                                            content: "您已取消保存图片到相册！",
                                            showCancel: !1
                                        });
                                    }
                                });
                            }
                        });
                    },
                    saveImages: function(a) {
                        if (t.showLoading({
                            title: "正在保存图片"
                        }), a) this.EachSaveImages(this.images); else {
                            var e = [];
                            this.images.forEach(function(t) {
                                t.selected && e.push(t);
                            }), this.EachSaveImages(e);
                        }
                    },
                    EachSaveImages: function(a) {
                        if (0 == a.length) return t.hideLoading(), void t.showToast({
                            title: "请选择要保存的图片",
                            icon: "none"
                        });
                        var e = 0, n = 0;
                        a.forEach(function(i) {
                            t.getImageInfo({
                                src: i.src,
                                success: function(i) {
                                    console.log(i), t.saveImageToPhotosAlbum({
                                        filePath: i.path,
                                        success: function() {
                                            e++;
                                        },
                                        fail: function(t) {
                                            n++;
                                        },
                                        complete: function() {
                                            e == a.length ? (t.hideLoading(), t.showToast({
                                                title: "图片保存成功",
                                                icon: "success"
                                            })) : e + n == a.length && (t.hideLoading(), t.showToast({
                                                title: "".concat(e, "张图片保存成功,").concat(n, "张图片保存失败!"),
                                                icon: "none"
                                            }));
                                        }
                                    });
                                },
                                fail: function(t) {
                                    ror_num++;
                                },
                                complete: function() {
                                    n == a.length && (t.hideLoading(), t.showToast({
                                        title: "图片保存失败",
                                        icon: "none"
                                    }));
                                }
                            });
                        });
                    }
                },
                onLoad: function(a) {
                    this.platform = t.getSystemInfoSync().system.toLocaleLowerCase().substring(0, 3);
                    var e = this;
                    this.id = a.id, i.default.getGeneralizeListDetail({
                        id: a.id
                    }).then(function(a) {
                        e.$set(e, "details", a.data.data), e.pid = a.data.data.id, e.startCreate(), e.showUserInfo = "0" !== t.getStorageSync("showUserInfo"), 
                        e.setUserInfo(e.showUserInfo), e.ischeck = a.data.data.ischeck;
                        var n = a.data.data.data.description.replace(/\<img/gi, '<img class="rich-img" style="width:100%;"');
                        n = (n = n.replace(/src=\"\/\//g, 'src="https://')).replace(/src=\"\/public/g, 'src="' + i.default.API_HOST + "/public"), 
                        e.description = n, a.data.data.data.images.forEach(function(t) {
                            e.images.push({
                                selected: !1,
                                src: t
                            });
                        });
                    });
                }
            };
            a.default = r;
        }).call(this, e(1).default);
    },
    99: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e(100), i = e.n(n);
        for (var o in n) "default" !== o && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(o);
        a.default = i.a;
    }
}, [ [ 93, "common/runtime", "common/vendor" ] ] ]);