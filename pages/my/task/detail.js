(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/task/detail" ], {
    190: function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n(191), i = n(193);
        for (var s in i) "default" !== s && function(t) {
            n.d(a, t, function() {
                return i[t];
            });
        }(s);
        n(195);
        var o = n(13), d = Object(o.default)(i.default, e.render, e.staticRenderFns, !1, null, null, null);
        d.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/my/task/detail.vue", 
        a.default = d.exports;
    },
    191: function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n(192);
        n.d(a, "render", function() {
            return e.render;
        }), n.d(a, "staticRenderFns", function() {
            return e.staticRenderFns;
        });
    },
    192: function(t, a, n) {
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
                t.show_member = !0;
            });
        }, i = [];
        e._withStripped = !0;
    },
    193: function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n(194), i = n.n(e);
        for (var s in e) "default" !== s && function(t) {
            n.d(a, t, function() {
                return e[t];
            });
        }(s);
        a.default = i.a;
    },
    194: function(t, a, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var e, i = (e = n(9)) && e.__esModule ? e : {
                default: e
            }, s = {
                components: {
                    uniCountdown: function() {
                        return n.e("node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown").then(n.bind(null, 247));
                    },
                    uniSegmentedControl: function() {
                        return n.e("node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control").then(n.bind(null, 197));
                    },
                    uniNavBar: function() {
                        return n.e("node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar").then(n.bind(null, 261));
                    }
                },
                data: function() {
                    return {
                        hasPrevPage: !1,
                        task_id: 0,
                        team_id: 0,
                        task: null,
                        current: 0,
                        record: null,
                        is_record: !1,
                        top: null,
                        is_top: !1,
                        items: [ "要求与奖励", "进度与明细", "排行榜" ],
                        show_member: !1
                    };
                },
                methods: {
                    goDetail: function(a) {
                        t.navigateTo({
                            url: "/pages/lessonDetail/lessonDetail?id=" + a
                        });
                    },
                    join_task: function(a) {
                        var n = this;
                        this.api.join_task({
                            team_id: this.team_id,
                            task_id: this.task_id
                        }).then(function(a) {
                            n.task.is_join = 1, n.task.is_take = 1, n.task.timer = a.data.data.timer, t.showToast({
                                title: "加入成功",
                                duration: 2e3
                            });
                        }, function(a) {
                            t.showModal({
                                content: a.data.msg,
                                showCancel: !1
                            });
                        });
                    },
                    get_reward: function() {
                        var a = this;
                        this.api.get_task_reward({
                            task_id: this.task_id
                        }).then(function(n) {
                            a.task.is_reward = 1, t.showModal({
                                content: n.data.msg,
                                showCancel: !1
                            });
                        }, function(a) {
                            t.showModal({
                                content: a.data.msg,
                                showCancel: !1
                            });
                        });
                    },
                    get_top: function() {
                        var t = this, a = {
                            task_id: this.task_id
                        };
                        this.api.get_task_top(a).then(function(a) {
                            t.top = a.data.data;
                        });
                    },
                    get_record: function() {
                        var t = this, a = {
                            task_id: this.task_id
                        };
                        "team_pk" == this.task.ename && (a.team_id = this.task.team_id), this.api.get_task_record(a).then(function(a) {
                            t.record = a.data.data;
                        });
                    },
                    setend: function() {
                        this.task.is_end = 1;
                    },
                    refresh: function() {
                        t.redirectTo({
                            url: "/pages/my/task/detail?task_id=" + this.task_id
                        });
                    },
                    start_task: function() {
                        var a = this;
                        this.api.start_task({
                            task_id: this.task_id
                        }).then(function(n) {
                            a.task.is_take = 1, a.task.timer = n.data.data.timer, t.showToast({
                                title: "报名成功",
                                duration: 2e3
                            });
                        }, function(a) {
                            202 == a.data.code ? t.showModal({
                                content: a.data.msg,
                                confirmText: "复制微信",
                                success: function(n) {
                                    n.confirm && t.setClipboardData({
                                        data: a.data.data.weixin,
                                        success: function() {
                                            t.showToast({
                                                title: "微信号已复制，打开微信搜索添加即可",
                                                icon: "none",
                                                duration: 2e3
                                            });
                                        }
                                    });
                                }
                            }) : 203 == a.data.code ? t.showModal({
                                content: a.data.msg,
                                confirmText: a.data.data.text ? a.data.data.text : "了解详情",
                                showCancel: !!a.data.data.showCancel && a.data.data.showCancel,
                                success: function(n) {
                                    t.redirectTo({
                                        url: a.data.data.url
                                    });
                                }
                            }) : t.showModal({
                                content: a.data.msg,
                                showCancel: !1
                            });
                        });
                    },
                    onClickItem: function(t) {
                        this.current = t, 1 == t ? this.is_record || (this.is_record = !0, this.get_record()) : 2 == t && (this.is_top || (this.is_top = !0, 
                        this.get_top()));
                    },
                    goTaskCenter: function() {
                        t.reLaunch({
                            url: "/pages/my/task/task"
                        });
                    },
                    getTask: function() {
                        var a = this, n = this;
                        n.api.get_task_detail({
                            task_id: n.task_id,
                            team_id: n.team_id
                        }).then(function(e) {
                            n.task = e.data.data, 1 == n.task.is_take && a.onClickItem(1), "team_pk" == n.task.ename && n.team_id > 0 && 0 == n.task.is_join && t.showModal({
                                content: "您的好友，邀请你加入团队",
                                confirmText: "加入战队",
                                cancelText: "了解一下",
                                success: function(t) {
                                    t.confirm && n.join_task();
                                }
                            });
                        }, function(a) {
                            t.showToast({
                                title: a.data.msg,
                                icon: "none",
                                duration: 2e3
                            }), t.reLaunch({
                                url: "/pages/my/my"
                            });
                        });
                    }
                },
                onLoad: function(t) {
                    this.hasPrevPage = this.api.hasPrevPage(), this.task_id = t.task_id, t.hasOwnProperty("team_id") && (this.team_id = t.team_id), 
                    this.getTask();
                },
                onShareAppMessage: function(t) {
                    var a = this.task.share_title ? this.task.share_title : "您的好友邀请你来赚钱", n = "pages/my/task/detail?spid=" + i.default.state.userInfo.uid + "&task_id=" + this.task_id;
                    return this.task && "team_pk" == this.task.ename && this.team_id && (n += "&team_id=" + this.team_id), 
                    {
                        title: a,
                        path: n,
                        imageUrl: this.task.share_img ? this.task.share_img : this.task.banner ? this.task.banner : "https://s6.pipacode.cn/ketuitui.jpg"
                    };
                }
            };
            a.default = s;
        }).call(this, n(1).default);
    },
    195: function(t, a, n) {
        "use strict";
        n.r(a);
        var e = n(196), i = n.n(e);
        for (var s in e) "default" !== s && function(t) {
            n.d(a, t, function() {
                return e[t];
            });
        }(s);
        a.default = i.a;
    },
    196: function(t, a, n) {}
}, [ [ 189, "common/runtime", "common/vendor" ] ] ]);