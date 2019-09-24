(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/invite/my" ], {
    61: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(62), a = e(64);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        e(66);
        var d = e(13), s = Object(d.default)(a.default, i.render, i.staticRenderFns, !1, null, null, null);
        s.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/invite/my.vue", 
        n.default = s.exports;
    },
    62: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(63);
        e.d(n, "render", function() {
            return i.render;
        }), e.d(n, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    63: function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "render", function() {
            return i;
        }), e.d(n, "staticRenderFns", function() {
            return a;
        });
        var i = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        i._withStripped = !0;
    },
    64: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(65), a = e.n(i);
        for (var r in i) "default" !== r && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(r);
        n.default = a.a;
    },
    65: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            data: function() {
                return {
                    first: 0,
                    second: 0,
                    limit: 7,
                    SprendList: [],
                    pageIndex: 0,
                    max: 0
                };
            },
            onShow: function() {
                var t = this;
                this.api.getSpreadList({
                    limit: t.limit,
                    first: 0
                }).then(function(n) {
                    t.first = n.data.data.first, t.second = n.data.data.second, t.SprendList = n.data.data.list, 
                    t.pageIndex = 1;
                });
            },
            onReachBottom: function() {
                var t = this;
                console.log("dasasd"), 0 == this.max && 0 !== this.SprendList.length && this.api.getSpreadList({
                    limit: t.limit,
                    first: t.pageIndex * t.limit
                }).then(function(n) {
                    0 == n.data.data.list.length && (t.max = 1), t.first = n.data.data.first, t.second = n.data.data.second, 
                    t.SprendList = t.SprendList.concat(n.data.data.list), t.pageIndex++;
                });
            }
        };
        n.default = i;
    },
    66: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(67), a = e.n(i);
        for (var r in i) "default" !== r && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(r);
        n.default = a.a;
    },
    67: function(t, n, e) {}
}, [ [ 60, "common/runtime", "common/vendor" ] ] ]);