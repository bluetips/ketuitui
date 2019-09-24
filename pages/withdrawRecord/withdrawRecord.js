(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/withdrawRecord/withdrawRecord" ], {
    69: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e(70), i = e(72);
        for (var u in i) "default" !== u && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(u);
        e(74);
        var o = e(13), a = Object(o.default)(i.default, r.render, r.staticRenderFns, !1, null, null, null);
        a.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/withdrawRecord/withdrawRecord.vue", 
        n.default = a.exports;
    },
    70: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e(71);
        e.d(n, "render", function() {
            return r.render;
        }), e.d(n, "staticRenderFns", function() {
            return r.staticRenderFns;
        });
    },
    71: function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "render", function() {
            return r;
        }), e.d(n, "staticRenderFns", function() {
            return i;
        });
        var r = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        r._withStripped = !0;
    },
    72: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e(73), i = e.n(r);
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        n.default = i.a;
    },
    73: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = {
                components: {
                    uniSegmentedControl: function() {
                        return e.e("node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control").then(e.bind(null, 197));
                    }
                },
                data: function() {
                    return {
                        items: [ "提现", "提现记录" ],
                        current: 1,
                        withDrawList: null
                    };
                },
                onShow: function() {
                    var t = this;
                    this.api.getUserExtractList().then(function(n) {
                        n.data.data.length > 0 && (t.withDrawList = n.data.data);
                    });
                },
                methods: {
                    onClickItem: function(n) {
                        0 == n && (this.current = 1, t.redirectTo({
                            url: "/pages/withdraw/withdraw"
                        }));
                    }
                }
            };
            n.default = r;
        }).call(this, e(1).default);
    },
    74: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e(75), i = e.n(r);
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        n.default = i.a;
    },
    75: function(t, n, e) {}
}, [ [ 68, "common/runtime", "common/vendor" ] ] ]);