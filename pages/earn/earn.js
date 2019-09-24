(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/earn/earn" ], {
    86: function(t, i, n) {
        "use strict";
        n.r(i);
        var s = n(87), e = n(89);
        for (var a in e) "default" !== a && function(t) {
            n.d(i, t, function() {
                return e[t];
            });
        }(a);
        n(91);
        var o = n(13), r = Object(o.default)(e.default, s.render, s.staticRenderFns, !1, null, null, null);
        r.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/earn/earn.vue", 
        i.default = r.exports;
    },
    87: function(t, i, n) {
        "use strict";
        n.r(i);
        var s = n(88);
        n.d(i, "render", function() {
            return s.render;
        }), n.d(i, "staticRenderFns", function() {
            return s.staticRenderFns;
        });
    },
    88: function(t, i, n) {
        "use strict";
        n.r(i), n.d(i, "render", function() {
            return s;
        }), n.d(i, "staticRenderFns", function() {
            return e;
        });
        var s = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(i) {
                t.showRule = 1;
            }, t.e1 = function(i) {
                t.showRule = 0;
            }, t.e2 = function(i) {
                t.keyword = "";
            });
        }, e = [];
        s._withStripped = !0;
    },
    89: function(t, i, n) {
        "use strict";
        n.r(i);
        var s = n(90), e = n.n(s);
        for (var a in s) "default" !== a && function(t) {
            n.d(i, t, function() {
                return s[t];
            });
        }(a);
        i.default = e.a;
    },
    90: function(t, i, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var s, e = (s = n(8)) && s.__esModule ? s : {
                default: s
            }, a = {
                components: {
                    uniSegmentedControl: function() {
                        return n.e("node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control").then(n.bind(null, 197));
                    }
                },
                data: function() {
                    return {
                        items: [ "收益", "粉丝/会员" ],
                        current: 0,
                        showList: [ {
                            type: "",
                            label: "全部"
                        }, {
                            type: -2,
                            label: "失联",
                            cls: "c-red"
                        }, {
                            type: 1,
                            label: "有效"
                        }, {
                            type: 0,
                            label: "确认中"
                        }, {
                            type: -1,
                            label: "无效"
                        } ],
                        showListFans: [ {
                            type: "",
                            label: "全部"
                        }, {
                            type: 0,
                            label: "普通粉丝"
                        }, {
                            type: 1,
                            label: "会员"
                        } ],
                        initCommiss: !1,
                        initFans: !1,
                        activeItemIndex: 0,
                        earning: "",
                        showRule: 0,
                        limit: 10,
                        commissionList: [],
                        pageIndex: 0,
                        max: 0,
                        tabListTop: "",
                        tabFixStatus: 0,
                        activeItemIndexFans: 0,
                        fansList: [],
                        pageIndexFans: 0,
                        maxFans: 0,
                        tabFixStatusFans: 0,
                        firstFans: 0,
                        fansFirst: 0,
                        fansSecond: 0,
                        keyword: ""
                    };
                },
                onPullDownRefresh: function() {
                    t.showLoading(), this.getCounts(), 1 == this.current ? (this.activeItemIndexFans = 0, 
                    this.fansList = "", this.pageIndexFans = 0, this.maxFans = 0, this.getFansList(0)) : (this.activeItemIndex = 0, 
                    this.commissionList = "", this.pageIndex = 0, this.max = 0, this.getCommissionList(0)), 
                    t.stopPullDownRefresh();
                },
                onReachBottom: function() {
                    1 == this.current ? 0 == this.maxFans && 0 !== this.fansList.length && this.getFansList(this.activeItemIndexFans) : 0 == this.max && 0 !== this.commissionList.length && this.getCommissionList(this.activeItemIndex);
                },
                onPageScroll: function(t) {
                    t.scrollTop >= this.tabListTop ? this.tabFixStatus = 1 : this.tabFixStatus = 0, 
                    t.scrollTop >= this.tabListTop ? this.tabFixStatusFans = 1 : this.tabFixStatusFans = 0;
                },
                onLoad: function() {
                    this.getGeneralizeEarnings(0);
                },
                methods: {
                    search: function() {
                        this.fansList = "", this.pageIndexFans = 0, this.maxFans = 0, this.getFansList(this.activeItemIndexFans);
                    },
                    viewUserDetail: function(i) {
                        t.navigateTo({
                            url: "/pages/buyRecord/buyRecord?uid=" + i
                        });
                    },
                    copyNickname: function(i) {
                        t.setClipboardData({
                            data: i,
                            success: function() {
                                t.showToast({
                                    title: "昵称已经复制",
                                    duration: 2e3
                                });
                            }
                        });
                    },
                    getGeneralizeEarnings: function(t) {
                        this.getCounts(), 1 == t ? (this.initFans = !0, this.getFansList(0)) : (this.initCommiss = !0, 
                        this.getCommissionList(0));
                    },
                    getCounts: function() {
                        var i = this;
                        e.default.getGeneralizeEarnings().then(function(t) {
                            i.$set(i, "earning", t.data.data);
                        }, function() {
                            t.showToast({
                                title: "参数错误",
                                duration: 2e3
                            });
                        });
                    },
                    onClickItem: function(t) {
                        this.current !== t && (this.current = t), 1 == this.current ? this.initFans || (this.initFans = !0, 
                        this.activeItemIndexFans = 0, this.fansList = "", this.pageIndexFans = 0, this.maxFans = 0, 
                        this.getFansList(0)) : this.initCommiss || (this.initCommiss = !0, this.activeItemIndex = 0, 
                        this.commissionList = "", this.pageIndex = 0, this.max = 0, this.getCommissionList(0));
                    },
                    selectItem: function(t) {
                        this.activeItemIndex !== t && (this.activeItemIndex = t, this.commissionList = "", 
                        this.pageIndex = 0, this.max = 0, this.getCommissionList(this.activeItemIndex));
                    },
                    selectItemFans: function(t) {
                        this.activeItemIndexFans !== t && (this.activeItemIndexFans = t, this.fansList = "", 
                        this.pageIndexFans = 0, this.maxFans = 0, this.getFansList(this.activeItemIndexFans));
                    },
                    getCommissionList: function(i) {
                        var n = this;
                        e.default.getUserCommissionList({
                            type: n.showList[i].type,
                            limit: n.limit,
                            first: n.pageIndex * n.limit
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
                    },
                    getFansList: function(i) {
                        var n = this;
                        this.api.getSpreadList({
                            type: n.showListFans[i].type,
                            limit: n.limit,
                            first: n.pageIndexFans * n.limit,
                            keyword: this.keyword
                        }).then(function(t) {
                            if (n.fansList && 0 == t.data.data.list.length) return n.maxFans = 1;
                            n.fansList.length > 0 ? n.fansList = n.fansList.concat(t.data.data.list) : n.fansList = t.data.data.list, 
                            n.fansFirst = t.data.data.first, n.fansSecond = t.data.data.second, n.pageIndexFans++;
                        }, function() {
                            t.showToast({
                                title: "参数错误",
                                duration: 2e3
                            });
                        });
                    }
                },
                onReady: function() {
                    var i = this, n = setInterval(function() {
                        t.createSelectorQuery().select(".detail-earn-show-list1").boundingClientRect(function(t) {
                            t && (i.tabListTop = t.top, clearInterval(n));
                        }).exec();
                    }, 50);
                },
                onShareAppMessage: function(t) {
                    return this.api.onXcxShare(t);
                }
            };
            i.default = a;
        }).call(this, n(1).default);
    },
    91: function(t, i, n) {
        "use strict";
        n.r(i);
        var s = n(92), e = n.n(s);
        for (var a in s) "default" !== a && function(t) {
            n.d(i, t, function() {
                return s[t];
            });
        }(a);
        i.default = e.a;
    },
    92: function(t, i, n) {}
}, [ [ 85, "common/runtime", "common/vendor" ] ] ]);