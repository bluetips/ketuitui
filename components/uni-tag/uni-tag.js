(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/uni-tag/uni-tag" ], {
    211: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(212), r = e(214);
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        e(216);
        var a = e(13), o = Object(a.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null);
        o.options.__file = "birdy/HBuilderProjects/uni-app_generalize/components/uni-tag/uni-tag.vue", 
        n.default = o.exports;
    },
    212: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(213);
        e.d(n, "render", function() {
            return i.render;
        }), e.d(n, "staticRenderFns", function() {
            return i.staticRenderFns;
        });
    },
    213: function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "render", function() {
            return i;
        }), e.d(n, "staticRenderFns", function() {
            return r;
        });
        var i = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        i._withStripped = !0;
    },
    214: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(215), r = e.n(i);
        for (var u in i) "default" !== u && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(u);
        n.default = r.a;
    },
    215: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            name: "uni-tag",
            props: {
                type: {
                    type: String,
                    default: "default"
                },
                size: {
                    type: String,
                    default: "normal"
                },
                text: String,
                disabled: {
                    type: [ String, Boolean ],
                    defalut: !1
                },
                inverted: {
                    type: [ String, Boolean ],
                    defalut: !1
                },
                circle: {
                    type: [ String, Boolean ],
                    defalut: !1
                }
            },
            methods: {
                onClick: function() {
                    !0 !== this.disabled && "true" !== this.disabled && this.$emit("click");
                }
            }
        };
        n.default = i;
    },
    216: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(217), r = e.n(i);
        for (var u in i) "default" !== u && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(u);
        n.default = r.a;
    },
    217: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/uni-tag/uni-tag-create-component", {
    "components/uni-tag/uni-tag-create-component": function(t, n, e) {
        e("1").createComponent(e(211));
    }
}, [ [ "components/uni-tag/uni-tag-create-component" ] ] ]);