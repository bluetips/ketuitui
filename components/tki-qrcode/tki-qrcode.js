(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/tki-qrcode/tki-qrcode" ], {
    232: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(233), o = n(235);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        n(238);
        var r = n(13), c = Object(r.default)(o.default, i.render, i.staticRenderFns, !1, null, null, null);
        c.options.__file = "birdy/HBuilderProjects/uni-app_generalize/components/tki-qrcode/tki-qrcode.vue", 
        e.default = c.exports;
    },
    233: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(234);
        n.d(e, "render", function() {
            return i.render;
        }), n.d(e, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    234: function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "render", function() {
            return i;
        }), n.d(e, "staticRenderFns", function() {
            return o;
        });
        var i = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        i._withStripped = !0;
    },
    235: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(236), o = n.n(i);
        for (var u in i) "default" !== u && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(u);
        e.default = o.a;
    },
    236: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i, o, u = (i = n(237)) && i.__esModule ? i : {
                default: i
            }, r = {
                name: "tki-qrcode",
                props: {
                    size: {
                        type: Number,
                        default: 200
                    },
                    unit: {
                        type: String,
                        default: "upx"
                    },
                    show: {
                        type: Boolean,
                        default: !0
                    },
                    val: {
                        type: String,
                        default: ""
                    },
                    background: {
                        type: String,
                        default: "#ffffff"
                    },
                    foreground: {
                        type: String,
                        default: "#000000"
                    },
                    pdground: {
                        type: String,
                        default: "#000000"
                    },
                    icon: {
                        type: String,
                        default: ""
                    },
                    iconSize: {
                        type: Number,
                        default: 40
                    },
                    lv: {
                        type: Number,
                        default: 3
                    },
                    onval: {
                        type: Boolean,
                        default: !1
                    },
                    loadMake: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        result: ""
                    };
                },
                methods: {
                    _makeCode: function() {
                        var e = this;
                        this._empty(this.val) ? t.showToast({
                            title: "二维码内容不能为空",
                            icon: "none",
                            duration: 2e3
                        }) : o = new u.default({
                            context: e,
                            text: e.val,
                            size: e.cpSize,
                            background: e.background,
                            foreground: e.foreground,
                            pdground: e.pdground,
                            correctLevel: e.lv,
                            image: e.icon,
                            imageSize: e.iconSize,
                            cbResult: function(t) {
                                e._result(t);
                            }
                        });
                    },
                    _clearCode: function() {
                        this._result(""), o.clear();
                    },
                    _saveCode: function() {
                        "" != this.result && t.saveImageToPhotosAlbum({
                            filePath: this.result,
                            success: function() {
                                t.showToast({
                                    title: "二维码保存成功",
                                    icon: "success",
                                    duration: 2e3
                                });
                            }
                        });
                    },
                    _result: function(t) {
                        t != this.result && (this.result = t, this.$emit("result", t));
                    },
                    _empty: function(t) {
                        var e = typeof t, n = !1;
                        return "number" == e && "" == String(t) ? n = !0 : "undefined" == e ? n = !0 : "object" == e ? "{}" != JSON.stringify(t) && "[]" != JSON.stringify(t) && null != t || (n = !0) : "string" == e ? "" != t && "undefined" != t && "null" != t && "{}" != t && "[]" != t || (n = !0) : "function" == e && (n = !1), 
                        n;
                    }
                },
                watch: {
                    size: function(t, e) {
                        var n = this;
                        t == e || this._empty(t) || (this.cSize = t, this._empty(this.val) || setTimeout(function() {
                            n._makeCode();
                        }, 100));
                    },
                    val: function(t, e) {
                        var n = this;
                        this.onval && (t == e || this._empty(t) || setTimeout(function() {
                            n._makeCode();
                        }, 0));
                    }
                },
                computed: {
                    cpSize: function() {
                        return "upx" == this.unit ? t.upx2px(this.size) : this.size;
                    }
                },
                mounted: function() {
                    var t = this;
                    this.loadMake && (this._empty(this.val) || setTimeout(function() {
                        t._makeCode();
                    }, 0));
                }
            };
            e.default = r;
        }).call(this, n(1).default);
    },
    238: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(239), o = n.n(i);
        for (var u in i) "default" !== u && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(u);
        e.default = o.a;
    },
    239: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/tki-qrcode/tki-qrcode-create-component", {
    "components/tki-qrcode/tki-qrcode-create-component": function(t, e, n) {
        n("1").createComponent(n(232));
    }
}, [ [ "components/tki-qrcode/tki-qrcode-create-component" ] ] ]);