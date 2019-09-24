(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown" ], {
    247: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e(248), u = e(250);
        for (var i in u) "default" !== i && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(i);
        e(252);
        var r = e(13), d = Object(r.default)(u.default, o.render, o.staticRenderFns, !1, null, null, null);
        d.options.__file = "birdy/HBuilderProjects/uni-app_generalize/node_modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue", 
        t.default = d.exports;
    },
    248: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e(249);
        e.d(t, "render", function() {
            return o.render;
        }), e.d(t, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    },
    249: function(n, t, e) {
        "use strict";
        e.r(t), e.d(t, "render", function() {
            return o;
        }), e.d(t, "staticRenderFns", function() {
            return u;
        });
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
        o._withStripped = !0;
    },
    250: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e(251), u = e.n(o);
        for (var i in o) "default" !== i && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        t.default = u.a;
    },
    251: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "UniCountdown",
            props: {
                showDay: {
                    type: Boolean,
                    default: !0
                },
                showColon: {
                    type: Boolean,
                    default: !0
                },
                backgroundColor: {
                    type: String,
                    default: "#FFFFFF"
                },
                borderColor: {
                    type: String,
                    default: "#000000"
                },
                color: {
                    type: String,
                    default: "#000000"
                },
                splitorColor: {
                    type: String,
                    default: "#000000"
                },
                day: {
                    type: Number,
                    default: 0
                },
                hour: {
                    type: Number,
                    default: 0
                },
                minute: {
                    type: Number,
                    default: 0
                },
                second: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    timer: null,
                    d: "00",
                    h: "00",
                    i: "00",
                    s: "00",
                    leftTime: 0,
                    seconds: 0
                };
            },
            created: function(n) {
                var t = this;
                this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second), this.countDown(), 
                this.timer = setInterval(function() {
                    t.seconds--, t.seconds < 0 ? t.timeUp() : t.countDown();
                }, 1e3);
            },
            beforeDestroy: function() {
                clearInterval(this.timer);
            },
            methods: {
                toSeconds: function(n, t, e, o) {
                    return 60 * n * 60 * 24 + 60 * t * 60 + 60 * e + o;
                },
                timeUp: function() {
                    clearInterval(this.timer), this.$emit("timeup");
                },
                countDown: function() {
                    var n = this.seconds, t = 0, e = 0, o = 0, u = 0;
                    n > 0 ? (t = Math.floor(n / 86400), e = Math.floor(n / 3600) - 24 * t, o = Math.floor(n / 60) - 24 * t * 60 - 60 * e, 
                    u = Math.floor(n) - 24 * t * 60 * 60 - 60 * e * 60 - 60 * o) : this.timeUp(), t < 10 && (t = "0" + t), 
                    e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), u < 10 && (u = "0" + u), this.d = t, 
                    this.h = e, this.i = o, this.s = u;
                }
            }
        };
        t.default = o;
    },
    252: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e(253), u = e.n(o);
        for (var i in o) "default" !== i && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        t.default = u.a;
    },
    253: function(n, t, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown-create-component", {
    "node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown-create-component": function(n, t, e) {
        e("1").createComponent(e(247));
    }
}, [ [ "node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown-create-component" ] ] ]);