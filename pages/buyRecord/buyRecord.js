(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/buyRecord/buyRecord" ], {
    160: function(t, n, i) {
        "use strict";
        i.r(n);
        var e = i(161), o = i(163);
        for (var s in o) "default" !== s && function(t) {
            i.d(n, t, function() {
                return o[t];
            });
        }(s);
        i(165);
        var u = i(13), r = Object(u.default)(o.default, e.render, e.staticRenderFns, !1, null, null, null);
        r.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/buyRecord/buyRecord.vue", 
        n.default = r.exports;
    },
    161: function(t, n, i) {
        "use strict";
        i.r(n);
        var e = i(162);
        i.d(n, "render", function() {
            return e.render;
        }), i.d(n, "staticRenderFns", function() {
            return e.staticRenderFns;
        });
    },
    162: function(t, n, i) {
        "use strict";
        i.r(n), i.d(n, "render", function() {
            return e;
        }), i.d(n, "staticRenderFns", function() {
            return o;
        });
        var e = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        e._withStripped = !0;
    },
    163: function(t, n, i) {
        "use strict";
        i.r(n);
        var e = i(164), o = i.n(e);
        for (var s in e) "default" !== s && function(t) {
            i.d(n, t, function() {
                return e[t];
            });
        }(s);
        n.default = o.a;
    },
    164: function(t, n, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e, o = (e = i(8)) && e.__esModule ? e : {
                default: e
            }, s = {
                components: {
                    uniSegmentedControl: function() {
                        return i.e("node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control").then(i.bind(null, 197));
                    }
                },
                data: function() {
                    return {
                        items: [ "消费", "收益" ],
                        current: 0,
                        initBuys: !1,
                        initCommiss: !1,
                        activeItemIndex: 0,
                        earning: "",
                        showRule: 0,
                        limit: 10,
                        buysList: [],
                        pageIndex: 0,
                        max: 0,
                        uid: 0,
                        commissionList: [],
                        pageIndex2: 0,
                        max2: 0,
                        tabFixStatus2: 0,
                        first2: 0
                    };
                },
                onLoad: function(n) {
                    n.uid ? (this.uid = n.uid, this.getCommissionList()) : t.navigateBack();
                },
                onReachBottom: function() {
                    0 == this.max && 0 !== this.commissionList.length && this.getCommissionList();
                },
                methods: {
                    onClickItem: function(t) {
                        this.current !== t && (this.current = t);
                    },
                    getCommissionList: function() {
                        var n = this;
                        o.default.getUserCommissionList({
                            limit: n.limit,
                            first: n.pageIndex * n.limit,
                            uid: this.uid
                        }).then(function(t) {
                            if (n.commissionList && 0 == t.data.data.length) return n.max = 1;
                            n.commissionList.length > 0 ? n.commissionList = n.commissionList.concat(t.data.data) : n.commissionList = t.data.data, 
                            n.pageIndex++;
                        }, function() {
                            t.showToast({
                                title: "参数错误",
                                duration: 2e3
                            });
                        });
                    }
                }
            };
            n.default = s;
        }).call(this, i(1).default);
    },
    165: function(t, n, i) {
        "use strict";
        i.r(n);
        var e = i(166), o = i.n(e);
        for (var s in e) "default" !== s && function(t) {
            i.d(n, t, function() {
                return e[t];
            });
        }(s);
        n.default = o.a;
    },
    166: function(t, n, i) {}
}, [ [ 159, "common/runtime", "common/vendor" ] ] ]);