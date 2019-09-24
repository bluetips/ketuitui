(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/my/task/task" ], {
    182: function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e(183), u = e(185);
        for (var o in u) "default" !== o && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(o);
        e(187);
        var r = e(13), s = Object(r.default)(u.default, i.render, i.staticRenderFns, !1, null, null, null);
        s.options.__file = "birdy/HBuilderProjects/uni-app_generalize/pages/my/task/task.vue", 
        t.default = s.exports;
    },
    183: function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e(184);
        e.d(t, "render", function() {
            return i.render;
        }), e.d(t, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    184: function(n, t, e) {
        "use strict";
        e.r(t), e.d(t, "render", function() {
            return i;
        }), e.d(t, "staticRenderFns", function() {
            return u;
        });
        var i = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
        i._withStripped = !0;
    },
    185: function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e(186), u = e.n(i);
        for (var o in i) "default" !== o && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(o);
        t.default = u.a;
    },
    186: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = {
                components: {
                    uniCountdown: function() {
                        return e.e("node-modules/@dcloudio/uni-ui/lib/uni-countdown/uni-countdown").then(e.bind(null, 247));
                    },
                    uniSegmentedControl: function() {
                        return e.e("node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control").then(e.bind(null, 197));
                    },
                    uniNavBar: function() {
                        return e.e("node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar").then(e.bind(null, 261));
                    }
                },
                data: function() {
                    return {
                        items: [ "限时活动", "晋升任务", "我参与的" ],
                        task_type: 0,
                        lists: []
                    };
                },
                methods: {
                    onClickItem: function(n) {
                        this.task_type = n, this.get_lists();
                    },
                    setend: function(n) {
                        console.log(n);
                    },
                    get_lists: function() {
                        var n = this;
                        this.api.get_task_list({
                            task_type: this.task_type
                        }).then(function(t) {
                            n.lists = t.data.data;
                        });
                    },
                    goDetail: function(t) {
                        n.navigateTo({
                            url: "/pages/my/task/detail?task_id=" + t
                        });
                    },
                    goUser: function() {
                        n.reLaunch({
                            url: "/pages/my/my"
                        });
                    },
                    goHome: function() {
                        n.reLaunch({
                            url: "/pages/index/index"
                        });
                    }
                },
                onLoad: function() {
                    this.get_lists();
                }
            };
            t.default = i;
        }).call(this, e(1).default);
    },
    187: function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e(188), u = e.n(i);
        for (var o in i) "default" !== o && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(o);
        t.default = u.a;
    },
    188: function(n, t, e) {}
}, [ [ 181, "common/runtime", "common/vendor" ] ] ]);