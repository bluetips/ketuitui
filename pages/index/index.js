(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], [ , , , , , , , , , , , , , , , function(t, n, i) {
    "use strict";
    i.r(n);
    var e = i(16), a = i(18);
    for (var o in a) "default" !== o && function(t) {
        i.d(n, t, function() {
            return a[t];
        });
    }(o);
    i(20);
    var s = i(13), r = Object(s.default)(a.default, e.render, e.staticRenderFns, !1, null, null, null);
    r.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/index/index.vue", 
    n.default = r.exports;
}, function(t, n, i) {
    "use strict";
    i.r(n);
    var e = i(17);
    i.d(n, "render", function() {
        return e.render;
    }), i.d(n, "staticRenderFns", function() {
        return e.staticRenderFns;
    });
}, function(t, n, i) {
    "use strict";
    i.r(n), i.d(n, "render", function() {
        return e;
    }), i.d(n, "staticRenderFns", function() {
        return a;
    });
    var e = function() {
        var t = this;
        t.$createElement;
        t._self._c, t._isMounted || (t.e0 = function(n) {
            t.window = null;
        });
    }, a = [];
    e._withStripped = !0;
}, function(t, n, i) {
    "use strict";
    i.r(n);
    var e = i(19), a = i.n(e);
    for (var o in e) "default" !== o && function(t) {
        i.d(n, t, function() {
            return e[t];
        });
    }(o);
    n.default = a.a;
}, function(t, n, i) {
    "use strict";
    (function(t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var e = o(i(8)), a = o(i(9));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var s = {
            components: {
                jSwiper: function() {
                    return i.e("components/jing-swiper/jing-swiper").then(i.bind(null, 204));
                },
                utag: function() {
                    return i.e("components/uni-tag/uni-tag").then(i.bind(null, 211));
                },
                accredit: function() {
                    return i.e("components/accredit").then(i.bind(null, 218));
                },
                uniSegmentedControl: function() {
                    return i.e("node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control").then(i.bind(null, 197));
                },
                tabList: function() {
                    return i.e("components/tab-list/index").then(i.bind(null, 225));
                }
            },
            computed: {
                showFixTab: function() {
                    return this.tabFixStatus ? "flex" : "none";
                }
            },
            data: function() {
                return {
                    title: "Hello",
                    tabList: "",
                    lists: [],
                    list: [],
                    items: [ "热门", "上新", "高佣" ],
                    activeTabIndex: 0,
                    tabListTop: 0,
                    tabFixStatus: !1,
                    swiperH: "",
                    banner: [],
                    btns: [],
                    scrollx: "",
                    is_promote: null,
                    activeItem: 0,
                    force: !1,
                    platform: "",
                    ischeck: !0,
                    window: null
                };
            },
            onLoad: function() {
                var n = this;
                this.platform = t.getSystemInfoSync().system.toLocaleLowerCase().substring(0, 3), 
                e.default.getindexlist().then(function(n) {
                    this.tabList = [ {
                        id: 0,
                        label_name: "精选"
                    } ], this.tabList = this.tabList.concat(n.data.data.catedata), this.list = n.data.data.list, 
                    this.ischeck = n.data.data.ischeck;
                    var i = n.data.data.window;
                    for (var e in i && t.getStorageSync("last_window_key") != i.key && (this.window = n.data.data.window, 
                    t.setStorageSync("last_window_key", this.window.key)), n.data.data.banner) this.banner.push(n.data.data.banner[e]);
                    this.is_promote = a.default.state.userInfo.promote_level;
                }.bind(this), function(t) {});
                var i = t.createSelectorQuery().in(this).select(".tab-lists");
                setTimeout(function() {
                    i.boundingClientRect(function(t) {
                        n.tabListTop = t.top;
                    }).exec();
                }, 50);
            },
            onPullDownRefresh: function() {
                t.reLaunch({
                    url: "/pages/index/index"
                });
            },
            onPageScroll: function(t) {
                t.scrollTop >= this.tabListTop ? this.tabFixStatus = !0 : this.tabFixStatus = !1;
            },
            methods: {
                gotoUrl: function() {
                    "switch" == this.window.type ? t.switchTab({
                        url: this.window.url
                    }) : "redirect" == this.window.type ? t.redirectTo({
                        url: this.window.url
                    }) : t.navigateTo({
                        url: this.window.url
                    });
                },
                onClickItem: function(n) {
                    1 == n ? (this.force = !0, this.activeItem = n, e.default.getindexlist({
                        label_id: -2
                    }).then(function(n) {
                        this.list = n.data.data.list, this.tabFixStatus && t.pageScrollTo({
                            scrollTop: this.tabListTop,
                            duration: 300
                        });
                    }.bind(this))) : 2 == n ? t.navigateTo({
                        url: "/pages/highprofit/highprofit"
                    }) : (this.activeItem = n, this.tabClick(this.activeTabIndex));
                },
                tabClick: function(n) {
                    var i = this.tabList[n].id;
                    if (this.force || this.tabList[this.activeTabIndex].id !== i) {
                        this.force = !1;
                        var a = {};
                        this.activeTabIndex = n, 0 !== i && (a = {
                            label_id: i
                        }), e.default.getindexlist(a).then(function(n) {
                            this.list = n.data.data.list, this.tabFixStatus && t.pageScrollTo({
                                scrollTop: this.tabListTop,
                                duration: 300
                            });
                        }.bind(this));
                    }
                }
            },
            onShareAppMessage: function(t) {
                return this.api.onXcxShare(t);
            }
        };
        n.default = s;
    }).call(this, i(1).default);
}, function(t, n, i) {
    "use strict";
    i.r(n);
    var e = i(21), a = i.n(e);
    for (var o in e) "default" !== o && function(t) {
        i.d(n, t, function() {
            return e[t];
        });
    }(o);
    n.default = a.a;
}, function(t, n, i) {} ], [ [ 14, "common/runtime", "common/vendor" ] ] ]);