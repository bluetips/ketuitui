(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/myDetail/bind/bind" ], {
    126: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(127), i = n(129);
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        n(133);
        var r = n(13), a = Object(r.default)(i.default, o.render, o.staticRenderFns, !1, null, null, null);
        a.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/my/myDetail/bind/bind.vue", 
        e.default = a.exports;
    },
    127: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(128);
        n.d(e, "render", function() {
            return o.render;
        }), n.d(e, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    128: function(t, e, n) {
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
    129: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(130), i = n.n(o);
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = i.a;
    },
    130: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o, i = (o = n(8)) && o.__esModule ? o : {
                default: o
            }, s = {
                data: function() {
                    return {
                        phone: "",
                        code: "",
                        password: "",
                        userInfo: this.$store.state.userInfo,
                        sendcode: !0,
                        auth_time: "",
                        sendAuthCode: !0,
                        sms_id: "SMS5ce4ae1e94cdb729421",
                        pwdType: "password",
                        openeye: n(131)
                    };
                },
                mounted: function() {
                    t.showToast({
                        title: "课推推需要绑定手机号码后才能使用",
                        icon: "none",
                        duration: 2e3
                    });
                },
                methods: {
                    changeType: function() {
                        this.pwdType = "password" === this.pwdType ? "text" : "password", this.openeye = this.openeye == n(132) ? n(131) : n(132);
                    },
                    checkcodes: function() {
                        var e, n = this, o = !0;
                        if ("" == this.phone ? e = "请输入手机号码" : this.checkPhone(this.phone) ? o = !1 : e = "请输入正确手机号", 
                        1 == o) return t.showToast({
                            title: e,
                            icon: "none",
                            duration: 1e3
                        }), !1;
                        i.default.getcheckcode({
                            mobile: this.phone
                        }).then(function(e) {
                            console.log(e.data), n.sendAuthCode = !1, n.auth_time = 60;
                            var o = setInterval(function() {
                                n.auth_time--, n.auth_time <= 0 && (n.sendAuthCode = !0, clearInterval(o));
                            }, 1e3);
                            t.showToast({
                                title: e.data.msg,
                                icon: "none",
                                duration: 1e3
                            }), n.sms_id = e.data.data.sms_id;
                        }, function(e) {
                            console.log(e.data), t.showToast({
                                title: e.data.msg,
                                icon: "none",
                                duration: 1e3
                            });
                        });
                    },
                    submit: function() {
                        if (!this.checkPhone(this.phone)) return t.showToast({
                            title: "手机号码格式不正确",
                            duration: 2e3,
                            icon: "none"
                        });
                        if (!this.sms_id) return t.showToast({
                            title: "请先获取验证码",
                            duration: 2e3,
                            icon: "none"
                        });
                        if (!this.checkCode(this.code)) return t.showToast({
                            title: "请输入验证码",
                            duration: 2e3,
                            icon: "none"
                        });
                        if (!this.password) return t.showToast({
                            title: "请输入密码",
                            duration: 2e3,
                            icon: "none"
                        });
                        var e = {
                            mobile: this.phone,
                            code: this.code,
                            sms_id: this.sms_id,
                            pwd: this.password
                        };
                        i.default.nowbind(e).then(function(e) {
                            t.showToast({
                                title: e.data.msg,
                                icon: "none",
                                duration: 1e3
                            }), setTimeout(function() {
                                var e = t.getStorageSync("start_path");
                                t.reLaunch({
                                    url: e || "/pages/index/index"
                                });
                            }, 1500);
                        }, function(e) {
                            t.showToast({
                                title: e.data.msg,
                                icon: "none",
                                duration: 1e3
                            });
                        });
                    },
                    checkPhone: function(t) {
                        return /^[1][3,4,5,6,7,8,9][0-9]{9}$/g.test(t);
                    },
                    checkCode: function(t) {
                        return 0 !== t.length;
                    },
                    checkPassword: function(t) {
                        return /^\w*$/g.test(t);
                    }
                }
            };
            e.default = s;
        }).call(this, n(1).default);
    },
    133: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(134), i = n.n(o);
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = i.a;
    },
    134: function(t, e, n) {}
}, [ [ 125, "common/runtime", "common/vendor" ] ] ]);