(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], [ , , , , , function(n, t, o) {
    "use strict";
    o.r(t);
    var e = o(6);
    for (var a in e) "default" !== a && function(n) {
        o.d(t, n, function() {
            return e[n];
        });
    }(a);
    o(11);
    var r = o(13), u = Object(r.default)(e.default, void 0, void 0, !1, null, null, null);
    u.options.__file = "birdy/HBuilderProjects/uni-app_generalize/App.vue", t.default = u.exports;
}, function(n, t, o) {
    "use strict";
    o.r(t);
    var e = o(7), a = o.n(e);
    for (var r in e) "default" !== r && function(n) {
        o.d(t, n, function() {
            return e[n];
        });
    }(r);
    t.default = a.a;
}, function(n, t, o) {
    "use strict";
    (function(n) {
        var e;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, (e = o(8)) && e.__esModule;
        var a = {
            onLaunch: function(t) {
                var o = "/" + t.path, e = [];
                for (var a in t.query) e.push(a + "=" + t.query[a]);
                e.length > 0 && (o = o + "?" + e.join("&")), n.setStorageSync("start_path", o);
                try {
                    t.query.spid && n.setStorageSync("spid", t.query.spid), t.query._from ? n.setStorageSync("_from", t.query._from) : n.removeStorageSync("_from");
                    var r = n.getUpdateManager();
                    r.onCheckForUpdate(function(t) {
                        t.hasUpdate && n.showToast({
                            title: "检测到新版本~",
                            icon: "none",
                            position: "bottom"
                        });
                    }), r.onUpdateReady(function(t) {
                        n.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            success: function(n) {
                                n.confirm && r.applyUpdate();
                            }
                        });
                    }), r.onUpdateFailed(function(t) {
                        n.showToast({
                            title: "新版本更新失败，请手动重启应用",
                            icon: "none"
                        });
                    });
                } catch (n) {
                    console.log(n);
                }
            }
        };
        t.default = a;
    }).call(this, o(1).default);
}, , , , function(n, t, o) {
    "use strict";
    o.r(t);
    var e = o(12), a = o.n(e);
    for (var r in e) "default" !== r && function(n) {
        o.d(t, n, function() {
            return e[n];
        });
    }(r);
    t.default = a.a;
}, function(n, t, o) {} ], [ [ 0, "common/runtime", "common/vendor" ] ] ]);