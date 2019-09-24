(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/lessonPoster/lessonPoster" ], {
    31: function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n(32), i = n(34);
        for (var o in i) "default" !== o && function(t) {
            n.d(a, t, function() {
                return i[t];
            });
        }(o);
        n(36);
        var s = n(13), r = Object(s.default)(i.default, e.render, e.staticRenderFns, !1, null, null, null);
        r.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/lessonPoster/lessonPoster.vue", 
        a.default = r.exports;
    },
    32: function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n(33);
        n.d(a, "render", function() {
            return e.render;
        }), n.d(a, "staticRenderFns", function() {
            return e.staticRenderFns;
        });
    },
    33: function(t, a, n) {
        "use strict";
        n.r(a), n.d(a, "render", function() {
            return e;
        }), n.d(a, "staticRenderFns", function() {
            return i;
        });
        var e = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(a) {
                t.showtab = 1;
            }, t.e1 = function(a) {
                t.showtab = 2;
            }, t.e2 = function(a) {
                t.sharebox = !1;
            });
        }, i = [];
        e._withStripped = !0;
    },
    34: function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n(35), i = n.n(e);
        for (var o in e) "default" !== o && function(t) {
            n.d(a, t, function() {
                return e[t];
            });
        }(o);
        a.default = i.a;
    },
    35: function(t, a, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var e, i = (e = n(8)) && e.__esModule ? e : {
                default: e
            }, o = t.createCanvasContext("myCanvas"), s = {
                components: {
                    tkiQrcode: function() {
                        return Promise.all([ n.e("common/vendor"), n.e("components/tki-qrcode/tki-qrcode") ]).then(n.bind(null, 232));
                    }
                },
                data: function() {
                    return {
                        showUserInfo: !0,
                        switchUserInfoText: "显示用户信息",
                        showOption: !1,
                        id: 0,
                        pid: 0,
                        unit: "upx",
                        lv: 3,
                        onval: !0,
                        loadMake: !0,
                        src: "",
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
                        createIng: !1
                    };
                },
                onLoad: function(a) {
                    this.id = a.id, this.pid = a.pid, this.showUserInfo = "0" !== t.getStorageSync("showUserInfo"), 
                    this.setUserInfo(this.showUserInfo), this.startCreate();
                },
                methods: {
                    startCreate: function() {
                        var a = this, n = this;
                        i.default.getposter({
                            id: this.id,
                            pid: this.pid
                        }).then(function(e) {
                            n.hdUrl = "/pages/hdPrinting/hdPrinting?id=" + a.id + "&pid=" + a.pid, n.showOption = !1, 
                            t.showLoading({
                                title: "海报生成中...",
                                mask: !0
                            });
                            var i = e.data.data, o = e.data.data.code_data;
                            t.setStorageSync("poster", JSON.stringify(i)), /^http:\/\//.test(o.avatar_info.avatar) && (o.avatar_info.avatar = o.avatar_info.avatar.replace("http:", "https:")), 
                            n.posterimg = i.background_pic, n.canvaswidth = i.width, n.canvasheight = i.height, 
                            n.qrposX = o.xcx_code.start_x, n.qrposY = o.xcx_code.start_y, n.qrwidth = o.xcx_code.width, 
                            n.qrheight = o.xcx_code.height, n.qrurl = o.xcx_code.pic, n.avator = o.avatar_info.avatar, 
                            n.avatorbead = o.avatar_info.avatar_bead, n.avatorx = o.avatar_info.avatar_x, n.avatory = o.avatar_info.avatar_y, 
                            n.avatarwidth = o.avatar_info.avatar_width, n.nicknames = o.nickname_info.nickname, 
                            n.namecolor = o.nickname_info.nickname_color, n.namesize = o.nickname_info.nickname_size, 
                            n.namex = o.nickname_info.nickname_x, n.namey = o.nickname_info.nickname_y, n.shareinfo = o.share_info.share_title;
                        }, function(a) {
                            t.showToast({
                                title: a.data.msg,
                                icon: "none",
                                duration: 1e3
                            });
                        });
                    },
                    setUserInfo: function(a, n) {
                        this.switchUserInfoText = a ? "显示用户信息" : "隐藏用户信息", this.showUserInfo = a, n && t.setStorageSync("showUserInfo", a ? "1" : "0");
                    },
                    switchUserInfo: function(t) {
                        this.savedImgUrl = "", this.setUserInfo(t.target.value, !0), this.startCreate(), 
                        this.createposter();
                    },
                    copyinfo: function(a) {
                        t.setClipboardData({
                            data: this.shareinfo,
                            success: function(n) {
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
                    showTips: function() {
                        t.showToast({
                            icon: "none",
                            title: "功能开发中~"
                        });
                    },
                    sharecircle: function() {
                        var a = this;
                        t.setClipboardData({
                            data: a.shareinfo,
                            success: function(t) {}
                        }), t.share({
                            provider: "weixin",
                            scene: "WXSenceTimeline",
                            type: 2,
                            imageUrl: a.savedImgUrl,
                            success: function(t) {
                                a.sharebox = !1, console.log("success:" + JSON.stringify(t));
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
                                a.saveCanvasToLocal("myCanvas").then(function(n) {
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
                                            success: function(n) {
                                                a.savedImgUrl = n.tempFilePath, t.hideLoading(), a.showOption = !0;
                                            },
                                            fail: function(n) {
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
                        return new Promise(function(n, e) {
                            t.getImageInfo({
                                src: a.posterimg,
                                success: function(t) {
                                    o.drawImage(t.path, 0, 0, a.canvaswidth, a.canvasheight), n();
                                },
                                fail: function(t) {
                                    e(t);
                                }
                            });
                        });
                    },
                    saveCanvasToLocal: function(a) {
                        return new Promise(function(n, e) {
                            t.canvasToTempFilePath({
                                canvasId: a,
                                success: function(t) {
                                    "" !== t.tempFilePath && n(t.tempFilePath);
                                },
                                fail: function(t) {
                                    e(t);
                                }
                            });
                        });
                    },
                    drawAvatar: function() {
                        var a = this;
                        return this.showUserInfo ? new Promise(function(n, e) {
                            t.getImageInfo({
                                src: a.avator,
                                success: function(t) {
                                    a.drawCircleImg(o, t.path, a.avatorx, a.avatory, a.avatorbead), n();
                                },
                                fail: function(t) {
                                    e(t);
                                }
                            });
                        }) : void 0;
                    },
                    drawCircleImg: function(t, a, n, e, i) {
                        var o = this.avatarwidth, s = this.avatarwidth;
                        t.save(), t.beginPath(), t.arc(n + i, e + i, i, Math.PI, 3 * Math.PI / 2), t.lineTo(o - i + n, e), 
                        t.arc(o - i + n, i + e, i, 3 * Math.PI / 2, 2 * Math.PI), t.lineTo(o + n, s + e - i), 
                        t.arc(o - i + n, s - i + e, i, 0, 1 * Math.PI / 2), t.lineTo(i + n, s + e), t.arc(i + n, s - i + e, i, 1 * Math.PI / 2, Math.PI), 
                        t.closePath(), t.clip(), t.drawImage(a, n, e, this.avatarwidth, this.avatarwidth), 
                        t.restore();
                    },
                    canvasFillText: function(t) {
                        if (this.showUserInfo) {
                            var a = this.namesize + " Arial", n = this.namex, e = this.namey;
                            t.font = "bold " + a, t.fillStyle = this.namecolor, t.lineWidth = 1, t.strokeStyle = "#fff", 
                            t.textAlign = "left", t.fillText(this.nicknames, n, e), t.strokeText(this.nicknames, n, e);
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
                    }
                }
            };
            a.default = s;
        }).call(this, n(1).default);
    },
    36: function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n(37), i = n.n(e);
        for (var o in e) "default" !== o && function(t) {
            n.d(a, t, function() {
                return e[t];
            });
        }(o);
        a.default = i.a;
    },
    37: function(t, a, n) {}
}, [ [ 30, "common/runtime", "common/vendor" ] ] ]);