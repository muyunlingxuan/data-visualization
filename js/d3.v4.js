// https://d3js.org Version 4.8.0. Copyright 2017 Mike Bostock.
(function (t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.d3 = t.d3 || {})
})(this, function (t) {
    "use strict";
    function n(t) {
        return function (n, e) {
            return Rs(t(n), e)
        }
    }

    function e(t, n) {
        return [t, n]
    }

    function r(t, n, e) {
        var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
        return i >= 0 ? (o >= Qs ? 10 : o >= Ks ? 5 : o >= tf ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= Qs ? 10 : o >= Ks ? 5 : o >= tf ? 2 : 1)
    }

    function i(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
        return o >= Qs ? i *= 10 : o >= Ks ? i *= 5 : o >= tf && (i *= 2), n < t ? -i : i
    }

    function o(t) {
        return t.length
    }

    function u(t) {
        return "translate(" + t + ",0)"
    }

    function a(t) {
        return "translate(0," + t + ")"
    }

    function c(t) {
        var n = t.bandwidth() / 2;
        return t.round() && (n = Math.round(n)), function (e) {
            return t(e) + n
        }
    }

    function s() {
        return !this.__axis
    }

    function f(t, n) {
        function e(e) {
            var u = null == o ? n.ticks ? n.ticks.apply(n, i) : n.domain() : o,
                a = null == f ? n.tickFormat ? n.tickFormat.apply(n, i) : xf : f, g = Math.max(l, 0) + p, y = n.range(),
                m = y[0] + .5, x = y[y.length - 1] + .5, b = (n.bandwidth ? c : xf)(n.copy()),
                w = e.selection ? e.selection() : e, M = w.selectAll(".domain").data([null]),
                T = w.selectAll(".tick").data(u, n).order(), S = T.exit(),
                N = T.enter().append("g").attr("class", "tick"), k = T.select("line"), E = T.select("text");
            M = M.merge(M.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), T = T.merge(N), k = k.merge(N.append("line").attr("stroke", "#000").attr(r + "2", d * l).attr(v + "1", .5).attr(v + "2", .5)), E = E.merge(N.append("text").attr("fill", "#000").attr(r, d * g).attr(v, .5).attr("dy", t === bf ? "0em" : t === Mf ? "0.71em" : "0.32em")), e !== w && (M = M.transition(e), T = T.transition(e), k = k.transition(e), E = E.transition(e), S = S.transition(e).attr("opacity", Sf).attr("transform", function (t) {
                return isFinite(t = b(t)) ? _(t) : this.getAttribute("transform")
            }), N.attr("opacity", Sf).attr("transform", function (t) {
                var n = this.parentNode.__axis;
                return _(n && isFinite(n = n(t)) ? n : b(t))
            })), S.remove(), M.attr("d", t === Tf || t == wf ? "M" + d * h + "," + m + "H0.5V" + x + "H" + d * h : "M" + m + "," + d * h + "V0.5H" + x + "V" + d * h), T.attr("opacity", 1).attr("transform", function (t) {
                return _(b(t))
            }), k.attr(r + "2", d * l), E.attr(r, d * g).text(a), w.filter(s).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === wf ? "start" : t === Tf ? "end" : "middle"), w.each(function () {
                this.__axis = b
            })
        }

        var r, i = [], o = null, f = null, l = 6, h = 6, p = 3, d = t === bf || t === Tf ? -1 : 1,
            v = t === Tf || t === wf ? (r = "x", "y") : (r = "y", "x"), _ = t === bf || t === Mf ? u : a;
        return e.scale = function (t) {
            return arguments.length ? (n = t, e) : n
        }, e.ticks = function () {
            return i = mf.call(arguments), e
        }, e.tickArguments = function (t) {
            return arguments.length ? (i = null == t ? [] : mf.call(t), e) : i.slice()
        }, e.tickValues = function (t) {
            return arguments.length ? (o = null == t ? null : mf.call(t), e) : o && o.slice()
        }, e.tickFormat = function (t) {
            return arguments.length ? (f = t, e) : f
        }, e.tickSize = function (t) {
            return arguments.length ? (l = h = +t, e) : l
        }, e.tickSizeInner = function (t) {
            return arguments.length ? (l = +t, e) : l
        }, e.tickSizeOuter = function (t) {
            return arguments.length ? (h = +t, e) : h
        }, e.tickPadding = function (t) {
            return arguments.length ? (p = +t, e) : p
        }, e
    }

    function l(t) {
        return f(bf, t)
    }

    function h(t) {
        return f(wf, t)
    }

    function p(t) {
        return f(Mf, t)
    }

    function d(t) {
        return f(Tf, t)
    }

    function v() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r)throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new _(r)
    }

    function _(t) {
        this._ = t
    }

    function g(t, n) {
        return t.trim().split(/^|\s+/).map(function (t) {
            var e = "", r = t.indexOf(".");
            if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t))throw new Error("unknown type: " + t);
            return {type: t, name: e}
        })
    }

    function y(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r)if ((e = t[r]).name === n)return e.value
    }

    function m(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r)if (t[r].name === n) {
            t[r] = Nf, t = t.slice(0, r).concat(t.slice(r + 1));
            break
        }
        return null != e && t.push({name: n, value: e}), t
    }

    function x(t) {
        return function () {
            var n = this.ownerDocument, e = this.namespaceURI;
            return e === kf && n.documentElement.namespaceURI === kf ? n.createElement(t) : n.createElementNS(e, t)
        }
    }

    function b(t) {
        return function () {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
    }

    function w() {
        return new M
    }

    function M() {
        this._ = "@" + (++zf).toString(36)
    }

    function T(t, n, e) {
        return t = S(t, n, e), function (n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }

    function S(n, e, r) {
        return function (i) {
            var o = t.event;
            t.event = i;
            try {
                n.call(this, this.__data__, e, r)
            } finally {
                t.event = o
            }
        }
    }

    function N(t) {
        return t.trim().split(/^|\s+/).map(function (t) {
            var n = "", e = t.indexOf(".");
            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {type: t, name: n}
        })
    }

    function k(t) {
        return function () {
            var n = this.__on;
            if (n) {
                for (var e, r = 0, i = -1,
                         o = n.length; r < o; ++r)e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                ++i ? n.length = i : delete this.__on
            }
        }
    }

    function E(t, n, e) {
        var r = Uf.hasOwnProperty(t.type) ? T : S;
        return function (i, o, u) {
            var a, c = this.__on, s = r(n, o, u);
            if (c)for (var f = 0,
                           l = c.length; f < l; ++f)if ((a = c[f]).type === t.type && a.name === t.name)return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = s, a.capture = e), void(a.value = n);
            this.addEventListener(t.type, s, e), a = {
                type: t.type,
                name: t.name,
                value: n,
                listener: s,
                capture: e
            }, c ? c.push(a) : this.__on = [a]
        }
    }

    function A(n, e, r, i) {
        var o = t.event;
        n.sourceEvent = t.event, t.event = n;
        try {
            return e.apply(r, i)
        } finally {
            t.event = o
        }
    }

    function C() {
    }

    function z() {
        return []
    }

    function P(t, n) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
    }

    function L(t, n, e, r, i, o) {
        for (var u, a = 0, c = n.length,
                 s = o.length; a < s; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new P(t, o[a]);
        for (; a < c; ++a)(u = n[a]) && (i[a] = u)
    }

    function R(t, n, e, r, i, o, u) {
        var a, c, s, f = {}, l = n.length, h = o.length, p = new Array(l);
        for (a = 0; a < l; ++a)(c = n[a]) && (p[a] = s = Zf + u.call(c, c.__data__, a, n), s in f ? i[a] = c : f[s] = c);
        for (a = 0; a < h; ++a)s = Zf + u.call(t, o[a], a, o), (c = f[s]) ? (r[a] = c, c.__data__ = o[a], f[s] = null) : e[a] = new P(t, o[a]);
        for (a = 0; a < l; ++a)(c = n[a]) && f[p[a]] === c && (i[a] = c)
    }

    function q(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }

    function U(t) {
        return function () {
            this.removeAttribute(t)
        }
    }

    function D(t) {
        return function () {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function O(t, n) {
        return function () {
            this.setAttribute(t, n)
        }
    }

    function F(t, n) {
        return function () {
            this.setAttributeNS(t.space, t.local, n)
        }
    }

    function I(t, n) {
        return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
        }
    }

    function Y(t, n) {
        return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
    }

    function B(t) {
        return function () {
            this.style.removeProperty(t)
        }
    }

    function j(t, n, e) {
        return function () {
            this.style.setProperty(t, n, e)
        }
    }

    function H(t, n, e) {
        return function () {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
        }
    }

    function X(t) {
        return function () {
            delete this[t]
        }
    }

    function V(t, n) {
        return function () {
            this[t] = n
        }
    }

    function $(t, n) {
        return function () {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e
        }
    }

    function W(t) {
        return t.trim().split(/^|\s+/)
    }

    function Z(t) {
        return t.classList || new G(t)
    }

    function G(t) {
        this._node = t, this._names = W(t.getAttribute("class") || "")
    }

    function J(t, n) {
        for (var e = Z(t), r = -1, i = n.length; ++r < i;)e.add(n[r])
    }

    function Q(t, n) {
        for (var e = Z(t), r = -1, i = n.length; ++r < i;)e.remove(n[r])
    }

    function K(t) {
        return function () {
            J(this, t)
        }
    }

    function tt(t) {
        return function () {
            Q(this, t)
        }
    }

    function nt(t, n) {
        return function () {
            (n.apply(this, arguments) ? J : Q)(this, t)
        }
    }

    function et() {
        this.textContent = ""
    }

    function rt(t) {
        return function () {
            this.textContent = t
        }
    }

    function it(t) {
        return function () {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n
        }
    }

    function ot() {
        this.innerHTML = ""
    }

    function ut(t) {
        return function () {
            this.innerHTML = t
        }
    }

    function at(t) {
        return function () {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n
        }
    }

    function ct() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function st() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function ft() {
        return null
    }

    function lt() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function ht(t, n, e) {
        var r = cl(t), i = r.CustomEvent;
        i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
    }

    function pt(t, n) {
        return function () {
            return ht(this, t, n)
        }
    }

    function dt(t, n) {
        return function () {
            return ht(this, t, n.apply(this, arguments))
        }
    }

    function vt(t, n) {
        this._groups = t, this._parents = n
    }

    function _t() {
        return new vt([[document.documentElement]], bl)
    }

    function gt() {
        t.event.stopImmediatePropagation()
    }

    function yt(t, n) {
        var e = t.document.documentElement, r = wl(t).on("dragstart.drag", null);
        n && (r.on("click.drag", Nl, !0), setTimeout(function () {
            r.on("click.drag", null)
        }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
    }

    function mt(t, n, e, r, i, o, u, a, c, s) {
        this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = s
    }

    function xt() {
        return !t.event.button
    }

    function bt() {
        return this.parentNode
    }

    function wt(n) {
        return null == n ? {x: t.event.x, y: t.event.y} : n
    }

    function Mt(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n)e[r] = n[r];
        return e
    }

    function Tt() {
    }

    function St(t) {
        var n;
        return t = (t + "").trim().toLowerCase(), (n = Rl.exec(t)) ? (n = parseInt(n[1], 16), new Ct(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = ql.exec(t)) ? Nt(parseInt(n[1], 16)) : (n = Ul.exec(t)) ? new Ct(n[1], n[2], n[3], 1) : (n = Dl.exec(t)) ? new Ct(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Ol.exec(t)) ? kt(n[1], n[2], n[3], n[4]) : (n = Fl.exec(t)) ? kt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Il.exec(t)) ? zt(n[1], n[2] / 100, n[3] / 100, 1) : (n = Yl.exec(t)) ? zt(n[1], n[2] / 100, n[3] / 100, n[4]) : Bl.hasOwnProperty(t) ? Nt(Bl[t]) : "transparent" === t ? new Ct(NaN, NaN, NaN, 0) : null
    }

    function Nt(t) {
        return new Ct(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function kt(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new Ct(t, n, e, r)
    }

    function Et(t) {
        return t instanceof Tt || (t = St(t)), t ? (t = t.rgb(), new Ct(t.r, t.g, t.b, t.opacity)) : new Ct
    }

    function At(t, n, e, r) {
        return 1 === arguments.length ? Et(t) : new Ct(t, n, e, null == r ? 1 : r)
    }

    function Ct(t, n, e, r) {
        this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
    }

    function zt(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Rt(t, n, e, r)
    }

    function Pt(t) {
        if (t instanceof Rt)return new Rt(t.h, t.s, t.l, t.opacity);
        if (t instanceof Tt || (t = St(t)), !t)return new Rt;
        if (t instanceof Rt)return t;
        t = t.rgb();
        var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), u = NaN,
            a = o - i, c = (o + i) / 2;
        return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = c > 0 && c < 1 ? 0 : u, new Rt(u, a, c, t.opacity)
    }

    function Lt(t, n, e, r) {
        return 1 === arguments.length ? Pt(t) : new Rt(t, n, e, null == r ? 1 : r)
    }

    function Rt(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function qt(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }

    function Ut(t) {
        if (t instanceof Ot)return new Ot(t.l, t.a, t.b, t.opacity);
        if (t instanceof Xt) {
            var n = t.h * jl;
            return new Ot(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof Ct || (t = Et(t));
        var e = Bt(t.r), r = Bt(t.g), i = Bt(t.b), o = Ft((.4124564 * e + .3575761 * r + .1804375 * i) / Xl),
            u = Ft((.2126729 * e + .7151522 * r + .072175 * i) / Vl);
        return new Ot(116 * u - 16, 500 * (o - u), 200 * (u - Ft((.0193339 * e + .119192 * r + .9503041 * i) / $l)), t.opacity)
    }

    function Dt(t, n, e, r) {
        return 1 === arguments.length ? Ut(t) : new Ot(t, n, e, null == r ? 1 : r)
    }

    function Ot(t, n, e, r) {
        this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
    }

    function Ft(t) {
        return t > Jl ? Math.pow(t, 1 / 3) : t / Gl + Wl
    }

    function It(t) {
        return t > Zl ? t * t * t : Gl * (t - Wl)
    }

    function Yt(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function Bt(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function jt(t) {
        if (t instanceof Xt)return new Xt(t.h, t.c, t.l, t.opacity);
        t instanceof Ot || (t = Ut(t));
        var n = Math.atan2(t.b, t.a) * Hl;
        return new Xt(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }

    function Ht(t, n, e, r) {
        return 1 === arguments.length ? jt(t) : new Xt(t, n, e, null == r ? 1 : r)
    }

    function Xt(t, n, e, r) {
        this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
    }

    function Vt(t) {
        if (t instanceof Wt)return new Wt(t.h, t.s, t.l, t.opacity);
        t instanceof Ct || (t = Et(t));
        var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = (oh * r + rh * n - ih * e) / (oh + rh - ih), o = r - i,
            u = (eh * (e - i) - th * o) / nh, a = Math.sqrt(u * u + o * o) / (eh * i * (1 - i)),
            c = a ? Math.atan2(u, o) * Hl - 120 : NaN;
        return new Wt(c < 0 ? c + 360 : c, a, i, t.opacity)
    }

    function $t(t, n, e, r) {
        return 1 === arguments.length ? Vt(t) : new Wt(t, n, e, null == r ? 1 : r)
    }

    function Wt(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Zt(t, n, e, r, i) {
        var o = t * t, u = o * t;
        return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
    }

    function Gt(t, n) {
        return function (e) {
            return t + e * n
        }
    }

    function Jt(t, n, e) {
        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
            return Math.pow(t + r * n, e)
        }
    }

    function Qt(t, n) {
        var e = n - t;
        return e ? Gt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : dh(isNaN(t) ? n : t)
    }

    function Kt(t) {
        return 1 == (t = +t) ? tn : function (n, e) {
            return e - n ? Jt(n, e, t) : dh(isNaN(n) ? e : n)
        }
    }

    function tn(t, n) {
        var e = n - t;
        return e ? Gt(t, e) : dh(isNaN(t) ? n : t)
    }

    function nn(t) {
        return function (n) {
            var e, r, i = n.length, o = new Array(i), u = new Array(i), a = new Array(i);
            for (e = 0; e < i; ++e)r = At(n[e]), o[e] = r.r || 0, u[e] = r.g || 0, a[e] = r.b || 0;
            return o = t(o), u = t(u), a = t(a), r.opacity = 1, function (t) {
                return r.r = o(t), r.g = u(t), r.b = a(t), r + ""
            }
        }
    }

    function en(t) {
        return function () {
            return t
        }
    }

    function rn(t) {
        return function (n) {
            return t(n) + ""
        }
    }

    function on(t) {
        return "none" === t ? Eh : (uh || (uh = document.createElement("DIV"), ah = document.documentElement, ch = document.defaultView), uh.style.transform = t, t = ch.getComputedStyle(ah.appendChild(uh), null).getPropertyValue("transform"), ah.removeChild(uh), t = t.slice(7, -1).split(","), Ah(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
    }

    function un(t) {
        return null == t ? Eh : (sh || (sh = document.createElementNS("http://www.w3.org/2000/svg", "g")), sh.setAttribute("transform", t), (t = sh.transform.baseVal.consolidate()) ? (t = t.matrix, Ah(t.a, t.b, t.c, t.d, t.e, t.f)) : Eh)
    }

    function an(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " " : ""
        }

        function o(t, r, i, o, u, a) {
            if (t !== i || r !== o) {
                var c = u.push("translate(", null, n, null, e);
                a.push({i: c - 4, x: xh(t, i)}, {i: c - 2, x: xh(r, o)})
            } else(i || o) && u.push("translate(" + i + n + o + e)
        }

        function u(t, n, e, o) {
            t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                i: e.push(i(e) + "rotate(", null, r) - 2,
                x: xh(t, n)
            })) : n && e.push(i(e) + "rotate(" + n + r)
        }

        function a(t, n, e, o) {
            t !== n ? o.push({
                i: e.push(i(e) + "skewX(", null, r) - 2,
                x: xh(t, n)
            }) : n && e.push(i(e) + "skewX(" + n + r)
        }

        function c(t, n, e, r, o, u) {
            if (t !== e || n !== r) {
                var a = o.push(i(o) + "scale(", null, ",", null, ")");
                u.push({i: a - 4, x: xh(t, e)}, {i: a - 2, x: xh(n, r)})
            } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
        }

        return function (n, e) {
            var r = [], i = [];
            return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
                for (var n, e = -1, o = i.length; ++e < o;)r[(n = i[e]).i] = n.x(t);
                return r.join("")
            }
        }
    }

    function cn(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }

    function sn(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2
    }

    function fn(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1)
    }

    function ln(t) {
        return function (n, e) {
            var r = t((n = Lt(n)).h, (e = Lt(e)).h), i = tn(n.s, e.s), o = tn(n.l, e.l), u = tn(n.opacity, e.opacity);
            return function (t) {
                return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = u(t), n + ""
            }
        }
    }

    function hn(t, n) {
        var e = tn((t = Dt(t)).l, (n = Dt(n)).l), r = tn(t.a, n.a), i = tn(t.b, n.b), o = tn(t.opacity, n.opacity);
        return function (n) {
            return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
        }
    }

    function pn(t) {
        return function (n, e) {
            var r = t((n = Ht(n)).h, (e = Ht(e)).h), i = tn(n.c, e.c), o = tn(n.l, e.l), u = tn(n.opacity, e.opacity);
            return function (t) {
                return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = u(t), n + ""
            }
        }
    }

    function dn(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = $t(n)).h, (r = $t(r)).h), o = tn(n.s, r.s), u = tn(n.l, r.l),
                    a = tn(n.opacity, r.opacity);
                return function (t) {
                    return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + ""
                }
            }

            return e = +e, r.gamma = n, r
        }(1)
    }

    function vn() {
        return Vh || (Zh(_n), Vh = Wh.now() + $h)
    }

    function _n() {
        Vh = 0
    }

    function gn() {
        this._call = this._time = this._next = null
    }

    function yn(t, n, e) {
        var r = new gn;
        return r.restart(t, n, e), r
    }

    function mn() {
        vn(), ++Yh;
        for (var t, n = fh; n;)(t = Vh - n._time) >= 0 && n._call.call(null, t), n = n._next;
        --Yh
    }

    function xn() {
        Vh = (Xh = Wh.now()) + $h, Yh = Bh = 0;
        try {
            mn()
        } finally {
            Yh = 0, wn(), Vh = 0
        }
    }

    function bn() {
        var t = Wh.now(), n = t - Xh;
        n > Hh && ($h -= n, Xh = t)
    }

    function wn() {
        for (var t, n, e = fh,
                 r = 1 / 0; e;)e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : fh = n);
        lh = t, Mn(r)
    }

    function Mn(t) {
        if (!Yh) {
            Bh && (Bh = clearTimeout(Bh));
            var n = t - Vh;
            n > 24 ? (t < 1 / 0 && (Bh = setTimeout(xn, n)), jh && (jh = clearInterval(jh))) : (jh || (Xh = Vh, jh = setInterval(bn, Hh)), Yh = 1, Zh(xn))
        }
    }

    function Tn(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > tp)throw new Error("too late");
        return e
    }

    function Sn(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]) || e.state > ep)throw new Error("too late");
        return e
    }

    function Nn(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n]))throw new Error("too late");
        return e
    }

    function kn(t, n, e) {
        function r(t) {
            e.state = np, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay)
        }

        function i(r) {
            var s, f, l, h;
            if (e.state !== np)return u();
            for (s in c)if (h = c[s], h.name === e.name) {
                if (h.state === rp)return Gh(i);
                h.state === ip ? (h.state = up, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete c[s]) : +s < n && (h.state = up, h.timer.stop(), delete c[s])
            }
            if (Gh(function () {
                    e.state === rp && (e.state = ip, e.timer.restart(o, e.delay, e.time), o(r))
                }), e.state = ep, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ep) {
                for (e.state = rp, a = new Array(l = e.tween.length), s = 0, f = -1; s < l; ++s)(h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) && (a[++f] = h);
                a.length = f + 1
            }
        }

        function o(n) {
            for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = op, 1),
                     i = -1, o = a.length; ++i < o;)a[i].call(null, r);
            e.state === op && (e.on.call("end", t, t.__data__, e.index, e.group), u())
        }

        function u() {
            e.state = up, e.timer.stop(), delete c[n];
            for (var r in c)return;
            delete t.__transition
        }

        var a, c = t.__transition;
        c[n] = e, e.timer = yn(r, 0, e.time)
    }

    function En(t, n) {
        var e, r;
        return function () {
            var i = Sn(this, t), o = i.tween;
            if (o !== e) {
                r = e = o;
                for (var u = 0, a = r.length; u < a; ++u)if (r[u].name === n) {
                    r = r.slice(), r.splice(u, 1);
                    break
                }
            }
            i.tween = r
        }
    }

    function An(t, n, e) {
        var r, i;
        if ("function" != typeof e)throw new Error;
        return function () {
            var o = Sn(this, t), u = o.tween;
            if (u !== r) {
                i = (r = u).slice();
                for (var a = {name: n, value: e}, c = 0, s = i.length; c < s; ++c)if (i[c].name === n) {
                    i[c] = a;
                    break
                }
                c === s && i.push(a)
            }
            o.tween = i
        }
    }

    function Cn(t, n, e) {
        var r = t._id;
        return t.each(function () {
            var t = Sn(this, r);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        }), function (t) {
            return Nn(t, r).value[n]
        }
    }

    function zn(t) {
        return function () {
            this.removeAttribute(t)
        }
    }

    function Pn(t) {
        return function () {
            this.removeAttributeNS(t.space, t.local)
        }
    }

    function Ln(t, n, e) {
        var r, i;
        return function () {
            var o = this.getAttribute(t);
            return o === e ? null : o === r ? i : i = n(r = o, e)
        }
    }

    function Rn(t, n, e) {
        var r, i;
        return function () {
            var o = this.getAttributeNS(t.space, t.local);
            return o === e ? null : o === r ? i : i = n(r = o, e)
        }
    }

    function qn(t, n, e) {
        var r, i, o;
        return function () {
            var u, a = e(this);
            return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
        }
    }

    function Un(t, n, e) {
        var r, i, o;
        return function () {
            var u, a = e(this);
            return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a))
        }
    }

    function Dn(t, n) {
        function e() {
            var e = this, r = n.apply(e, arguments);
            return r && function (n) {
                    e.setAttributeNS(t.space, t.local, r(n))
                }
        }

        return e._value = n, e
    }

    function On(t, n) {
        function e() {
            var e = this, r = n.apply(e, arguments);
            return r && function (n) {
                    e.setAttribute(t, r(n))
                }
        }

        return e._value = n, e
    }

    function Fn(t, n) {
        return function () {
            Tn(this, t).delay = +n.apply(this, arguments)
        }
    }

    function In(t, n) {
        return n = +n, function () {
            Tn(this, t).delay = n
        }
    }

    function Yn(t, n) {
        return function () {
            Sn(this, t).duration = +n.apply(this, arguments)
        }
    }

    function Bn(t, n) {
        return n = +n, function () {
            Sn(this, t).duration = n
        }
    }

    function jn(t, n) {
        if ("function" != typeof n)throw new Error;
        return function () {
            Sn(this, t).ease = n
        }
    }

    function Hn(t) {
        return (t + "").trim().split(/^|\s+/).every(function (t) {
            var n = t.indexOf(".");
            return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
        })
    }

    function Xn(t, n, e) {
        var r, i, o = Hn(n) ? Tn : Sn;
        return function () {
            var u = o(this, t), a = u.on;
            a !== r && (i = (r = a).copy()).on(n, e), u.on = i
        }
    }

    function Vn(t) {
        return function () {
            var n = this.parentNode;
            for (var e in this.__transition)if (+e !== t)return;
            n && n.removeChild(this)
        }
    }

    function $n(t, n) {
        var e, r, i;
        return function () {
            var o = cl(this).getComputedStyle(this, null), u = o.getPropertyValue(t),
                a = (this.style.removeProperty(t), o.getPropertyValue(t));
            return u === a ? null : u === e && a === r ? i : i = n(e = u, r = a)
        }
    }

    function Wn(t) {
        return function () {
            this.style.removeProperty(t)
        }
    }

    function Zn(t, n, e) {
        var r, i;
        return function () {
            var o = cl(this).getComputedStyle(this, null).getPropertyValue(t);
            return o === e ? null : o === r ? i : i = n(r = o, e)
        }
    }

    function Gn(t, n, e) {
        var r, i, o;
        return function () {
            var u = cl(this).getComputedStyle(this, null), a = u.getPropertyValue(t), c = e(this);
            return null == c && (this.style.removeProperty(t), c = u.getPropertyValue(t)), a === c ? null : a === r && c === i ? o : o = n(r = a, i = c)
        }
    }

    function Jn(t, n, e) {
        function r() {
            var r = this, i = n.apply(r, arguments);
            return i && function (n) {
                    r.style.setProperty(t, i(n), e)
                }
        }

        return r._value = n, r
    }

    function Qn(t) {
        return function () {
            this.textContent = t
        }
    }

    function Kn(t) {
        return function () {
            var n = t(this);
            this.textContent = null == n ? "" : n
        }
    }

    function te(t, n, e, r) {
        this._groups = t, this._parents = n, this._name = e, this._id = r
    }

    function ne(t) {
        return _t().transition(t)
    }

    function ee() {
        return ++Ap
    }

    function re(t) {
        return +t
    }

    function ie(t) {
        return t * t
    }

    function oe(t) {
        return t * (2 - t)
    }

    function ue(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
    }

    function ae(t) {
        return t * t * t
    }

    function ce(t) {
        return --t * t * t + 1
    }

    function se(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }

    function fe(t) {
        return 1 - Math.cos(t * qp)
    }

    function le(t) {
        return Math.sin(t * qp)
    }

    function he(t) {
        return (1 - Math.cos(Rp * t)) / 2
    }

    function pe(t) {
        return Math.pow(2, 10 * t - 10)
    }

    function de(t) {
        return 1 - Math.pow(2, -10 * t)
    }

    function ve(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
    }

    function _e(t) {
        return 1 - Math.sqrt(1 - t * t)
    }

    function ge(t) {
        return Math.sqrt(1 - --t * t)
    }

    function ye(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    }

    function me(t) {
        return 1 - xe(1 - t)
    }

    function xe(t) {
        return (t = +t) < Up ? Xp * t * t : t < Op ? Xp * (t -= Dp) * t + Fp : t < Yp ? Xp * (t -= Ip) * t + Bp : Xp * (t -= jp) * t + Hp
    }

    function be(t) {
        return ((t *= 2) <= 1 ? 1 - xe(1 - t) : xe(t - 1) + 1) / 2
    }

    function we(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]);)if (!(t = t.parentNode))return Kp.time = vn(), Kp;
        return e
    }

    function Me() {
        t.event.stopImmediatePropagation()
    }

    function Te(t) {
        return {type: t}
    }

    function Se() {
        return !t.event.button
    }

    function Ne() {
        var t = this.ownerSVGElement || this;
        return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
    }

    function ke(t) {
        for (; !t.__brush;)if (!(t = t.parentNode))return;
        return t.__brush
    }

    function Ee(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1]
    }

    function Ae(t) {
        var n = t.__brush;
        return n ? n.dim.output(n.selection) : null
    }

    function Ce() {
        return Pe(fd)
    }

    function ze() {
        return Pe(ld)
    }

    function Pe(n) {
        function e(t) {
            var e = t.property("__brush", a).selectAll(".overlay").data([Te("overlay")]);
            e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", pd.overlay).merge(e).each(function () {
                var t = ke(this).extent;
                wl(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
            }), t.selectAll(".selection").data([Te("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", pd.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
            var i = t.selectAll(".handle").data(n.handles, function (t) {
                return t.type
            });
            i.exit().remove(), i.enter().append("rect").attr("class", function (t) {
                return "handle handle--" + t.type
            }).attr("cursor", function (t) {
                return pd[t.type]
            }), t.each(r).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", u)
        }

        function r() {
            var t = wl(this), n = ke(this).selection;
            n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
                return "e" === t.type[t.type.length - 1] ? n[1][0] - h / 2 : n[0][0] - h / 2
            }).attr("y", function (t) {
                return "s" === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2
            }).attr("width", function (t) {
                return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + h : h
            }).attr("height", function (t) {
                return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + h : h
            })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
        }

        function i(t, n) {
            return t.__brush.emitter || new o(t, n)
        }

        function o(t, n) {
            this.that = t, this.args = n, this.state = t.__brush, this.active = 0
        }

        function u() {
            function e() {
                var t = If(T);
                !U || w || M || (Math.abs(t[0] - O[0]) > Math.abs(t[1] - O[1]) ? M = !0 : w = !0), O = t, b = !0, od(), o()
            }

            function o() {
                var t;
                switch (m = O[0] - D[0], x = O[1] - D[1], N) {
                    case ad:
                    case ud:
                        k && (m = Math.max(P - l, Math.min(R - v, m)), h = l + m, _ = v + m), E && (x = Math.max(L - p, Math.min(q - g, x)), d = p + x, y = g + x);
                        break;
                    case cd:
                        k < 0 ? (m = Math.max(P - l, Math.min(R - l, m)), h = l + m, _ = v) : k > 0 && (m = Math.max(P - v, Math.min(R - v, m)), h = l, _ = v + m), E < 0 ? (x = Math.max(L - p, Math.min(q - p, x)), d = p + x, y = g) : E > 0 && (x = Math.max(L - g, Math.min(q - g, x)), d = p, y = g + x);
                        break;
                    case sd:
                        k && (h = Math.max(P, Math.min(R, l - m * k)), _ = Math.max(P, Math.min(R, v + m * k))), E && (d = Math.max(L, Math.min(q, p - x * E)), y = Math.max(L, Math.min(q, g + x * E)))
                }
                _ < h && (k *= -1, t = l, l = v, v = t, t = h, h = _, _ = t, S in dd && Y.attr("cursor", pd[S = dd[S]])), y < d && (E *= -1, t = p, p = g, g = t, t = d, d = y, y = t, S in vd && Y.attr("cursor", pd[S = vd[S]])), A.selection && (z = A.selection), w && (h = z[0][0], _ = z[1][0]), M && (d = z[0][1], y = z[1][1]), z[0][0] === h && z[0][1] === d && z[1][0] === _ && z[1][1] === y || (A.selection = [[h, d], [_, y]], r.call(T), F.brush())
            }

            function u() {
                if (Me(), t.event.touches) {
                    if (t.event.touches.length)return;
                    c && clearTimeout(c), c = setTimeout(function () {
                        c = null
                    }, 500), I.on("touchmove.brush touchend.brush touchcancel.brush", null)
                } else yt(t.event.view, b), B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                I.attr("pointer-events", "all"), Y.attr("cursor", pd.overlay), A.selection && (z = A.selection), Ee(z) && (A.selection = null, r.call(T)), F.end()
            }

            function a() {
                switch (t.event.keyCode) {
                    case 16:
                        U = k && E;
                        break;
                    case 18:
                        N === cd && (k && (v = _ - m * k, l = h + m * k), E && (g = y - x * E, p = d + x * E), N = sd, o());
                        break;
                    case 32:
                        N !== cd && N !== sd || (k < 0 ? v = _ - m : k > 0 && (l = h - m), E < 0 ? g = y - x : E > 0 && (p = d - x), N = ad, Y.attr("cursor", pd.selection), o());
                        break;
                    default:
                        return
                }
                od()
            }

            function s() {
                switch (t.event.keyCode) {
                    case 16:
                        U && (w = M = U = !1, o());
                        break;
                    case 18:
                        N === sd && (k < 0 ? v = _ : k > 0 && (l = h), E < 0 ? g = y : E > 0 && (p = d), N = cd, o());
                        break;
                    case 32:
                        N === ad && (t.event.altKey ? (k && (v = _ - m * k, l = h + m * k), E && (g = y - x * E, p = d + x * E), N = sd) : (k < 0 ? v = _ : k > 0 && (l = h), E < 0 ? g = y : E > 0 && (p = d), N = cd), Y.attr("cursor", pd[S]), o());
                        break;
                    default:
                        return
                }
                od()
            }

            if (t.event.touches) {
                if (t.event.changedTouches.length < t.event.touches.length)return od()
            } else if (c)return;
            if (f.apply(this, arguments)) {
                var l, h, p, d, v, _, g, y, m, x, b, w, M, T = this, S = t.event.target.__data__.type,
                    N = "selection" === (t.event.metaKey ? S = "overlay" : S) ? ud : t.event.altKey ? sd : cd,
                    k = n === ld ? null : _d[S], E = n === fd ? null : gd[S], A = ke(T), C = A.extent, z = A.selection,
                    P = C[0][0], L = C[0][1], R = C[1][0], q = C[1][1], U = k && E && t.event.shiftKey, D = If(T),
                    O = D, F = i(T, arguments).beforestart();
                "overlay" === S ? A.selection = z = [[l = n === ld ? P : D[0], p = n === fd ? L : D[1]], [v = n === ld ? R : l, g = n === fd ? q : p]] : (l = z[0][0], p = z[0][1], v = z[1][0], g = z[1][1]), h = l, d = p, _ = v, y = g;
                var I = wl(T).attr("pointer-events", "none"), Y = I.selectAll(".overlay").attr("cursor", pd[S]);
                if (t.event.touches) I.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", u, !0); else {
                    var B = wl(t.event.view).on("keydown.brush", a, !0).on("keyup.brush", s, !0).on("mousemove.brush", e, !0).on("mouseup.brush", u, !0);
                    kl(t.event.view)
                }
                Me(), cp(T), r.call(T), F.start()
            }
        }

        function a() {
            var t = this.__brush || {selection: null};
            return t.extent = s.apply(this, arguments), t.dim = n, t
        }

        var c, s = Ne, f = Se, l = v(e, "start", "brush", "end"), h = 6;
        return e.move = function (t, e) {
            t.selection ? t.on("start.brush", function () {
                i(this, arguments).beforestart().start()
            }).on("interrupt.brush end.brush", function () {
                i(this, arguments).end()
            }).tween("brush", function () {
                function t(t) {
                    u.selection = 1 === t && Ee(s) ? null : f(t), r.call(o), a.brush()
                }

                var o = this, u = o.__brush, a = i(o, arguments), c = u.selection,
                    s = n.input("function" == typeof e ? e.apply(this, arguments) : e, u.extent), f = Sh(c, s);
                return c && s ? t : t(1)
            }) : t.each(function () {
                var t = this, o = arguments, u = t.__brush,
                    a = n.input("function" == typeof e ? e.apply(t, o) : e, u.extent), c = i(t, o).beforestart();
                cp(t), u.selection = null == a || Ee(a) ? null : a, r.call(t), c.start().brush().end()
            })
        }, o.prototype = {
            beforestart: function () {
                return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
            }, start: function () {
                return this.starting && (this.starting = !1, this.emit("start")), this
            }, brush: function () {
                return this.emit("brush"), this
            }, end: function () {
                return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
            }, emit: function (t) {
                A(new id(e, t, n.output(this.state.selection)), l.apply, l, [t, this.that, this.args])
            }
        }, e.extent = function (t) {
            return arguments.length ? (s = "function" == typeof t ? t : rd([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), e) : s
        }, e.filter = function (t) {
            return arguments.length ? (f = "function" == typeof t ? t : rd(!!t), e) : f
        }, e.handleSize = function (t) {
            return arguments.length ? (h = +t, e) : h
        }, e.on = function () {
            var t = l.on.apply(l, arguments);
            return t === l ? e : t
        }, e
    }

    function Le(t) {
        return function (n, e) {
            return t(n.source.value + n.target.value, e.source.value + e.target.value)
        }
    }

    function Re() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function qe() {
        return new Re
    }

    function Ue(t) {
        return t.source
    }

    function De(t) {
        return t.target
    }

    function Oe(t) {
        return t.radius
    }

    function Fe(t) {
        return t.startAngle
    }

    function Ie(t) {
        return t.endAngle
    }

    function Ye() {
    }

    function Be(t, n) {
        var e = new Ye;
        if (t instanceof Ye) t.each(function (t, n) {
            e.set(n, t)
        }); else if (Array.isArray(t)) {
            var r, i = -1, o = t.length;
            if (null == n)for (; ++i < o;)e.set(i, t[i]); else for (; ++i < o;)e.set(n(r = t[i], i, t), r)
        } else if (t)for (var u in t)e.set(u, t[u]);
        return e
    }

    function je() {
        return {}
    }

    function He(t, n, e) {
        t[n] = e
    }

    function Xe() {
        return Be()
    }

    function Ve(t, n, e) {
        t.set(n, e)
    }

    function $e() {
    }

    function We(t, n) {
        var e = new $e;
        if (t instanceof $e) t.each(function (t) {
            e.add(t)
        }); else if (t) {
            var r = -1, i = t.length;
            if (null == n)for (; ++r < i;)e.add(t[r]); else for (; ++r < i;)e.add(n(t[r], r, t))
        }
        return e
    }

    function Ze(t) {
        return new Function("d", "return {" + t.map(function (t, n) {
                return JSON.stringify(t) + ": d[" + n + "]"
            }).join(",") + "}")
    }

    function Ge(t, n) {
        var e = Ze(t);
        return function (r, i) {
            return n(e(r), i, t)
        }
    }

    function Je(t) {
        var n = Object.create(null), e = [];
        return t.forEach(function (t) {
            for (var r in t)r in n || e.push(n[r] = r)
        }), e
    }

    function Qe(t, n, e, r) {
        if (isNaN(n) || isNaN(e))return t;
        var i, o, u, a, c, s, f, l, h, p = t._root, d = {data: r}, v = t._x0, _ = t._y0, g = t._x1, y = t._y1;
        if (!p)return t._root = d, t;
        for (; p.length;)if ((s = n >= (o = (v + g) / 2)) ? v = o : g = o, (f = e >= (u = (_ + y) / 2)) ? _ = u : y = u, i = p, !(p = p[l = f << 1 | s]))return i[l] = d, t;
        if (a = +t._x.call(null, p.data), c = +t._y.call(null, p.data), n === a && e === c)return d.next = p, i ? i[l] = d : t._root = d, t;
        do {
            i = i ? i[l] = new Array(4) : t._root = new Array(4), (s = n >= (o = (v + g) / 2)) ? v = o : g = o, (f = e >= (u = (_ + y) / 2)) ? _ = u : y = u
        } while ((l = f << 1 | s) == (h = (c >= u) << 1 | a >= o));
        return i[h] = p, i[l] = d, t
    }

    function Ke(t) {
        var n, e, r, i, o = t.length, u = new Array(o), a = new Array(o), c = 1 / 0, s = 1 / 0, f = -1 / 0, l = -1 / 0;
        for (e = 0; e < o; ++e)isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, r < c && (c = r), r > f && (f = r), i < s && (s = i), i > l && (l = i));
        for (f < c && (c = this._x0, f = this._x1), l < s && (s = this._y0, l = this._y1), this.cover(c, s).cover(f, l), e = 0; e < o; ++e)Qe(this, u[e], a[e], t[e]);
        return this
    }

    function tr(t) {
        for (var n = 0, e = t.length; n < e; ++n)this.remove(t[n]);
        return this
    }

    function nr(t) {
        return t[0]
    }

    function er(t) {
        return t[1]
    }

    function rr(t, n, e) {
        var r = new ir(null == n ? nr : n, null == e ? er : e, NaN, NaN, NaN, NaN);
        return null == t ? r : r.addAll(t)
    }

    function ir(t, n, e, r, i, o) {
        this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
    }

    function or(t) {
        for (var n = {data: t.data}, e = n; t = t.next;)e = e.next = {data: t.data};
        return n
    }

    function ur(t) {
        return t.x + t.vx
    }

    function ar(t) {
        return t.y + t.vy
    }

    function cr(t) {
        return t.index
    }

    function sr(t, n) {
        var e = t.get(n);
        if (!e)throw new Error("missing: " + n);
        return e
    }

    function fr(t) {
        return t.x
    }

    function lr(t) {
        return t.y
    }

    function hr(t) {
        return new pr(t)
    }

    function pr(t) {
        if (!(n = Ev.exec(t)))throw new Error("invalid format: " + t);
        var n, e = n[1] || " ", r = n[2] || ">", i = n[3] || "-", o = n[4] || "", u = !!n[5], a = n[6] && +n[6],
            c = !!n[7], s = n[8] && +n[8].slice(1), f = n[9] || "";
        "n" === f ? (c = !0,
            f = "g") : kv[f] || (f = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = c, this.precision = s, this.type = f
    }

    function dr(n) {
        return Av = Pv(n), t.format = Av.format, t.formatPrefix = Av.formatPrefix, Av
    }

    function vr() {
        this.reset()
    }

    function _r(t, n, e) {
        var r = t.s = n + e, i = r - n, o = r - i;
        t.t = n - o + (e - i)
    }

    function gr(t) {
        return t > 1 ? 0 : t < -1 ? __ : Math.acos(t)
    }

    function yr(t) {
        return t > 1 ? g_ : t < -1 ? -g_ : Math.asin(t)
    }

    function mr(t) {
        return (t = C_(t / 2)) * t
    }

    function xr() {
    }

    function br(t, n) {
        t && q_.hasOwnProperty(t.type) && q_[t.type](t, n)
    }

    function wr(t, n, e) {
        var r, i = -1, o = t.length - e;
        for (n.lineStart(); ++i < o;)r = t[i], n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }

    function Mr(t, n) {
        var e = -1, r = t.length;
        for (n.polygonStart(); ++e < r;)wr(t[e], n, 1);
        n.polygonEnd()
    }

    function Tr() {
        F_.point = Nr
    }

    function Sr() {
        kr(Dv, Ov)
    }

    function Nr(t, n) {
        F_.point = kr, Dv = t, Ov = n, t *= b_, n *= b_, Fv = t, Iv = S_(n = n / 2 + y_), Yv = C_(n)
    }

    function kr(t, n) {
        t *= b_, n *= b_, n = n / 2 + y_;
        var e = t - Fv, r = e >= 0 ? 1 : -1, i = r * e, o = S_(n), u = C_(n), a = Yv * u, c = Iv * o + a * S_(i),
            s = a * r * C_(i);
        D_.add(T_(s, c)), Fv = t, Iv = o, Yv = u
    }

    function Er(t) {
        return [T_(t[1], t[0]), yr(t[2])]
    }

    function Ar(t) {
        var n = t[0], e = t[1], r = S_(e);
        return [r * S_(n), r * C_(n), C_(e)]
    }

    function Cr(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function zr(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function Pr(t, n) {
        t[0] += n[0], t[1] += n[1], t[2] += n[2]
    }

    function Lr(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }

    function Rr(t) {
        var n = P_(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n
    }

    function qr(t, n) {
        Gv.push(Jv = [Bv = t, Hv = t]), n < jv && (jv = n), n > Xv && (Xv = n)
    }

    function Ur(t, n) {
        var e = Ar([t * b_, n * b_]);
        if (Zv) {
            var r = zr(Zv, e), i = [r[1], -r[0], 0], o = zr(i, r);
            Rr(o), o = Er(o);
            var u, a = t - Vv, c = a > 0 ? 1 : -1, s = o[0] * x_ * c, f = w_(a) > 180;
            f ^ (c * Vv < s && s < c * t) ? (u = o[1] * x_) > Xv && (Xv = u) : (s = (s + 360) % 360 - 180, f ^ (c * Vv < s && s < c * t) ? (u = -o[1] * x_) < jv && (jv = u) : (n < jv && (jv = n), n > Xv && (Xv = n))), f ? t < Vv ? Br(Bv, t) > Br(Bv, Hv) && (Hv = t) : Br(t, Hv) > Br(Bv, Hv) && (Bv = t) : Hv >= Bv ? (t < Bv && (Bv = t), t > Hv && (Hv = t)) : t > Vv ? Br(Bv, t) > Br(Bv, Hv) && (Hv = t) : Br(t, Hv) > Br(Bv, Hv) && (Bv = t)
        } else Gv.push(Jv = [Bv = t, Hv = t]);
        n < jv && (jv = n), n > Xv && (Xv = n), Zv = e, Vv = t
    }

    function Dr() {
        B_.point = Ur
    }

    function Or() {
        Jv[0] = Bv, Jv[1] = Hv, B_.point = qr, Zv = null
    }

    function Fr(t, n) {
        if (Zv) {
            var e = t - Vv;
            Y_.add(w_(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
        } else $v = t, Wv = n;
        F_.point(t, n), Ur(t, n)
    }

    function Ir() {
        F_.lineStart()
    }

    function Yr() {
        Fr($v, Wv), F_.lineEnd(), w_(Y_) > v_ && (Bv = -(Hv = 180)), Jv[0] = Bv, Jv[1] = Hv, Zv = null
    }

    function Br(t, n) {
        return (n -= t) < 0 ? n + 360 : n
    }

    function jr(t, n) {
        return t[0] - n[0]
    }

    function Hr(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }

    function Xr(t, n) {
        t *= b_, n *= b_;
        var e = S_(n);
        Vr(e * S_(t), e * C_(t), C_(n))
    }

    function Vr(t, n, e) {
        ++Qv, t_ += (t - t_) / Qv, n_ += (n - n_) / Qv, e_ += (e - e_) / Qv
    }

    function $r() {
        H_.point = Wr
    }

    function Wr(t, n) {
        t *= b_, n *= b_;
        var e = S_(n);
        l_ = e * S_(t), h_ = e * C_(t), p_ = C_(n), H_.point = Zr, Vr(l_, h_, p_)
    }

    function Zr(t, n) {
        t *= b_, n *= b_;
        var e = S_(n), r = e * S_(t), i = e * C_(t), o = C_(n),
            u = T_(P_((u = h_ * o - p_ * i) * u + (u = p_ * r - l_ * o) * u + (u = l_ * i - h_ * r) * u), l_ * r + h_ * i + p_ * o);
        Kv += u, r_ += u * (l_ + (l_ = r)), i_ += u * (h_ + (h_ = i)), o_ += u * (p_ + (p_ = o)), Vr(l_, h_, p_)
    }

    function Gr() {
        H_.point = Xr
    }

    function Jr() {
        H_.point = Kr
    }

    function Qr() {
        ti(s_, f_), H_.point = Xr
    }

    function Kr(t, n) {
        s_ = t, f_ = n, t *= b_, n *= b_, H_.point = ti;
        var e = S_(n);
        l_ = e * S_(t), h_ = e * C_(t), p_ = C_(n), Vr(l_, h_, p_)
    }

    function ti(t, n) {
        t *= b_, n *= b_;
        var e = S_(n), r = e * S_(t), i = e * C_(t), o = C_(n), u = h_ * o - p_ * i, a = p_ * r - l_ * o,
            c = l_ * i - h_ * r, s = P_(u * u + a * a + c * c), f = yr(s), l = s && -f / s;
        u_ += l * u, a_ += l * a, c_ += l * c, Kv += f, r_ += f * (l_ + (l_ = r)), i_ += f * (h_ + (h_ = i)), o_ += f * (p_ + (p_ = o)), Vr(l_, h_, p_)
    }

    function ni(t, n) {
        return [t > __ ? t - m_ : t < -__ ? t + m_ : t, n]
    }

    function ei(t, n, e) {
        return (t %= m_) ? n || e ? $_(ii(t), oi(n, e)) : ii(t) : n || e ? oi(n, e) : ni
    }

    function ri(t) {
        return function (n, e) {
            return n += t, [n > __ ? n - m_ : n < -__ ? n + m_ : n, e]
        }
    }

    function ii(t) {
        var n = ri(t);
        return n.invert = ri(-t), n
    }

    function oi(t, n) {
        function e(t, n) {
            var e = S_(n), a = S_(t) * e, c = C_(t) * e, s = C_(n), f = s * r + a * i;
            return [T_(c * o - f * u, a * r - s * i), yr(f * o + c * u)]
        }

        var r = S_(t), i = C_(t), o = S_(n), u = C_(n);
        return e.invert = function (t, n) {
            var e = S_(n), a = S_(t) * e, c = C_(t) * e, s = C_(n), f = s * o - c * u;
            return [T_(c * o + s * u, a * r + f * i), yr(f * r - a * i)]
        }, e
    }

    function ui(t, n, e, r, i, o) {
        if (e) {
            var u = S_(n), a = C_(n), c = r * e;
            null == i ? (i = n + r * m_, o = n - c / 2) : (i = ai(u, i), o = ai(u, o), (r > 0 ? i < o : i > o) && (i += r * m_));
            for (var s, f = i; r > 0 ? f > o : f < o; f -= c)s = Er([u, -a * S_(f), -a * C_(f)]), t.point(s[0], s[1])
        }
    }

    function ai(t, n) {
        n = Ar(n), n[0] -= t, Rr(n);
        var e = gr(-n[1]);
        return ((-n[2] < 0 ? -e : e) + m_ - v_) % m_
    }

    function ci(t, n, e, r) {
        this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
    }

    function si(t) {
        if (n = t.length) {
            for (var n, e, r = 0, i = t[0]; ++r < n;)i.n = e = t[r], e.p = i, i = e;
            i.n = e = t[0], e.p = i
        }
    }

    function fi(t, n, e, r) {
        function i(i, o) {
            return t <= i && i <= e && n <= o && o <= r
        }

        function o(i, o, a, s) {
            var f = 0, l = 0;
            if (null == i || (f = u(i, a)) !== (l = u(o, a)) || c(i, o) < 0 ^ a > 0)do {
                s.point(0 === f || 3 === f ? t : e, f > 1 ? r : n)
            } while ((f = (f + a + 4) % 4) !== l); else s.point(o[0], o[1])
        }

        function u(r, i) {
            return w_(r[0] - t) < v_ ? i > 0 ? 0 : 3 : w_(r[0] - e) < v_ ? i > 0 ? 2 : 1 : w_(r[1] - n) < v_ ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }

        function a(t, n) {
            return c(t.x, n.x)
        }

        function c(t, n) {
            var e = u(t, 1), r = u(n, 1);
            return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }

        return function (u) {
            function c(t, n) {
                i(t, n) && N.point(t, n)
            }

            function s() {
                for (var n = 0, e = 0, i = _.length; e < i; ++e)for (var o, u, a = _[e], c = 1, s = a.length, f = a[0],
                                                                         l = f[0],
                                                                         h = f[1]; c < s; ++c)o = l, u = h, f = a[c], l = f[0], h = f[1], u <= r ? h > r && (l - o) * (r - u) > (h - u) * (t - o) && ++n : h <= r && (l - o) * (r - u) < (h - u) * (t - o) && --n;
                return n
            }

            function f() {
                N = k, v = [], _ = [], S = !0
            }

            function l() {
                var t = s(), n = S && t, e = (v = lf(v)).length;
                (n || e) && (u.polygonStart(), n && (u.lineStart(), o(null, null, 1, u), u.lineEnd()), e && fg(v, a, t, o, u), u.polygonEnd()), N = u, v = _ = g = null
            }

            function h() {
                E.point = d, _ && _.push(g = []), T = !0, M = !1, b = w = NaN
            }

            function p() {
                v && (d(y, m), x && M && k.rejoin(), v.push(k.result())), E.point = c, M && N.lineEnd()
            }

            function d(o, u) {
                var a = i(o, u);
                if (_ && g.push([o, u]), T) y = o, m = u, x = a, T = !1, a && (N.lineStart(), N.point(o, u)); else if (a && M) N.point(o, u); else {
                    var c = [b = Math.max(hg, Math.min(lg, b)), w = Math.max(hg, Math.min(lg, w))],
                        s = [o = Math.max(hg, Math.min(lg, o)), u = Math.max(hg, Math.min(lg, u))];
                    cg(c, s, t, n, e, r) ? (M || (N.lineStart(), N.point(c[0], c[1])), N.point(s[0], s[1]), a || N.lineEnd(), S = !1) : a && (N.lineStart(), N.point(o, u), S = !1)
                }
                b = o, w = u, M = a
            }

            var v, _, g, y, m, x, b, w, M, T, S, N = u, k = ag(),
                E = {point: c, lineStart: h, lineEnd: p, polygonStart: f, polygonEnd: l};
            return E
        }
    }

    function li() {
        gg.point = pi, gg.lineEnd = hi
    }

    function hi() {
        gg.point = gg.lineEnd = xr
    }

    function pi(t, n) {
        t *= b_, n *= b_, W_ = t, Z_ = C_(n), G_ = S_(n), gg.point = di
    }

    function di(t, n) {
        t *= b_, n *= b_;
        var e = C_(n), r = S_(n), i = w_(t - W_), o = S_(i), u = C_(i), a = r * u, c = G_ * e - Z_ * r * o,
            s = Z_ * e + G_ * r * o;
        _g.add(T_(P_(a * a + c * c), s)), W_ = t, Z_ = e, G_ = r
    }

    function vi(t, n) {
        return !(!t || !Mg.hasOwnProperty(t.type)) && Mg[t.type](t, n)
    }

    function _i(t, n) {
        return 0 === bg(t, n)
    }

    function gi(t, n) {
        var e = bg(t[0], t[1]);
        return bg(t[0], n) + bg(n, t[1]) <= e + v_
    }

    function yi(t, n) {
        return !!vg(t.map(mi), xi(n))
    }

    function mi(t) {
        return t = t.map(xi), t.pop(), t
    }

    function xi(t) {
        return [t[0] * b_, t[1] * b_]
    }

    function bi(t, n, e) {
        var r = Js(t, n - v_, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return [t, n]
            })
        }
    }

    function wi(t, n, e) {
        var r = Js(t, n - v_, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return [n, t]
            })
        }
    }

    function Mi() {
        function t() {
            return {type: "MultiLineString", coordinates: n()}
        }

        function n() {
            return Js(N_(o / _) * _, i, _).map(h).concat(Js(N_(s / g) * g, c, g).map(p)).concat(Js(N_(r / d) * d, e, d).filter(function (t) {
                return w_(t % _) > v_
            }).map(f)).concat(Js(N_(a / v) * v, u, v).filter(function (t) {
                return w_(t % g) > v_
            }).map(l))
        }

        var e, r, i, o, u, a, c, s, f, l, h, p, d = 10, v = d, _ = 90, g = 360, y = 2.5;
        return t.lines = function () {
            return n().map(function (t) {
                return {type: "LineString", coordinates: t}
            })
        }, t.outline = function () {
            return {
                type: "Polygon",
                coordinates: [h(o).concat(p(c).slice(1), h(i).reverse().slice(1), p(s).reverse().slice(1))]
            }
        }, t.extent = function (n) {
            return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
        }, t.extentMajor = function (n) {
            return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], c = +n[1][1], o > i && (n = o, o = i, i = n), s > c && (n = s, s = c, c = n), t.precision(y)) : [[o, s], [i, c]]
        }, t.extentMinor = function (n) {
            return arguments.length ? (r = +n[0][0], e = +n[1][0], a = +n[0][1], u = +n[1][1], r > e && (n = r, r = e, e = n), a > u && (n = a, a = u, u = n), t.precision(y)) : [[r, a], [e, u]]
        }, t.step = function (n) {
            return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
        }, t.stepMajor = function (n) {
            return arguments.length ? (_ = +n[0], g = +n[1], t) : [_, g]
        }, t.stepMinor = function (n) {
            return arguments.length ? (d = +n[0], v = +n[1], t) : [d, v]
        }, t.precision = function (n) {
            return arguments.length ? (y = +n, f = bi(a, u, 90), l = wi(r, e, y), h = bi(s, c, 90), p = wi(o, i, y), t) : y
        }, t.extentMajor([[-180, -90 + v_], [180, 90 - v_]]).extentMinor([[-180, -80 - v_], [180, 80 + v_]])
    }

    function Ti() {
        return Mi()()
    }

    function Si() {
        Ag.point = Ni
    }

    function Ni(t, n) {
        Ag.point = ki, J_ = K_ = t, Q_ = tg = n
    }

    function ki(t, n) {
        Eg.add(tg * t - K_ * n), K_ = t, tg = n
    }

    function Ei() {
        ki(J_, Q_)
    }

    function Ai(t, n) {
        t < Cg && (Cg = t), t > Pg && (Pg = t), n < zg && (zg = n), n > Lg && (Lg = n)
    }

    function Ci(t, n) {
        qg += t, Ug += n, ++Dg
    }

    function zi() {
        Hg.point = Pi
    }

    function Pi(t, n) {
        Hg.point = Li, Ci(rg = t, ig = n)
    }

    function Li(t, n) {
        var e = t - rg, r = n - ig, i = P_(e * e + r * r);
        Og += i * (rg + t) / 2, Fg += i * (ig + n) / 2, Ig += i, Ci(rg = t, ig = n)
    }

    function Ri() {
        Hg.point = Ci
    }

    function qi() {
        Hg.point = Di
    }

    function Ui() {
        Oi(ng, eg)
    }

    function Di(t, n) {
        Hg.point = Oi, Ci(ng = rg = t, eg = ig = n)
    }

    function Oi(t, n) {
        var e = t - rg, r = n - ig, i = P_(e * e + r * r);
        Og += i * (rg + t) / 2, Fg += i * (ig + n) / 2, Ig += i, i = ig * t - rg * n, Yg += i * (rg + t), Bg += i * (ig + n), jg += 3 * i, Ci(rg = t, ig = n)
    }

    function Fi(t) {
        this._context = t
    }

    function Ii(t, n) {
        Jg.point = Yi, Vg = Wg = t, $g = Zg = n
    }

    function Yi(t, n) {
        Wg -= t, Zg -= n, Gg.add(P_(Wg * Wg + Zg * Zg)), Wg = t, Zg = n
    }

    function Bi() {
        this._string = []
    }

    function ji(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    function Hi(t) {
        return t.length > 1
    }

    function Xi(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - g_ - v_ : g_ - t[1]) - ((n = n.x)[0] < 0 ? n[1] - g_ - v_ : g_ - n[1])
    }

    function Vi(t) {
        var n, e = NaN, r = NaN, i = NaN;
        return {
            lineStart: function () {
                t.lineStart(), n = 1
            }, point: function (o, u) {
                var a = o > 0 ? __ : -__, c = w_(o - e);
                w_(c - __) < v_ ? (t.point(e, r = (r + u) / 2 > 0 ? g_ : -g_), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0) : i !== a && c >= __ && (w_(e - i) < v_ && (e -= i * v_), w_(o - a) < v_ && (o -= a * v_), r = $i(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a
            }, lineEnd: function () {
                t.lineEnd(), e = r = NaN
            }, clean: function () {
                return 2 - n
            }
        }
    }

    function $i(t, n, e, r) {
        var i, o, u = C_(t - e);
        return w_(u) > v_ ? M_((C_(n) * (o = S_(r)) * C_(e) - C_(r) * (i = S_(n)) * C_(t)) / (i * o * u)) : (n + r) / 2
    }

    function Wi(t, n, e, r) {
        var i;
        if (null == t) i = e * g_, r.point(-__, i), r.point(0, i), r.point(__, i), r.point(__, 0), r.point(__, -i), r.point(0, -i), r.point(-__, -i), r.point(-__, 0), r.point(-__, i); else if (w_(t[0] - n[0]) > v_) {
            var o = t[0] < n[0] ? __ : -__;
            i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
        } else r.point(n[0], n[1])
    }

    function Zi(t) {
        return function (n) {
            var e = new Gi;
            for (var r in t)e[r] = t[r];
            return e.stream = n, e
        }
    }

    function Gi() {
    }

    function Ji(t, n, e) {
        var r = n[1][0] - n[0][0], i = n[1][1] - n[0][1], o = t.clipExtent && t.clipExtent();
        t.scale(150).translate([0, 0]), null != o && t.clipExtent(null), U_(e, t.stream(Rg));
        var u = Rg.result(), a = Math.min(r / (u[1][0] - u[0][0]), i / (u[1][1] - u[0][1])),
            c = +n[0][0] + (r - a * (u[1][0] + u[0][0])) / 2, s = +n[0][1] + (i - a * (u[1][1] + u[0][1])) / 2;
        return null != o && t.clipExtent(o), t.scale(150 * a).translate([c, s])
    }

    function Qi(t, n, e) {
        return Ji(t, [[0, 0], n], e)
    }

    function Ki(t) {
        return Zi({
            point: function (n, e) {
                n = t(n, e), this.stream.point(n[0], n[1])
            }
        })
    }

    function to(t, n) {
        function e(r, i, o, u, a, c, s, f, l, h, p, d, v, _) {
            var g = s - r, y = f - i, m = g * g + y * y;
            if (m > 4 * n && v--) {
                var x = u + h, b = a + p, w = c + d, M = P_(x * x + b * b + w * w), T = yr(w /= M),
                    S = w_(w_(w) - 1) < v_ || w_(o - l) < v_ ? (o + l) / 2 : T_(b, x), N = t(S, T), k = N[0], E = N[1],
                    A = k - r, C = E - i, z = y * A - g * C;
                (z * z / m > n || w_((g * A + y * C) / m - .5) > .3 || u * h + a * p + c * d < iy) && (e(r, i, o, u, a, c, k, E, S, x /= M, b /= M, w, v, _), _.point(k, E), e(k, E, S, x, b, w, s, f, l, h, p, d, v, _))
            }
        }

        return function (n) {
            function r(e, r) {
                e = t(e, r), n.point(e[0], e[1])
            }

            function i() {
                g = NaN, w.point = o, n.lineStart()
            }

            function o(r, i) {
                var o = Ar([r, i]), u = t(r, i);
                e(g, y, _, m, x, b, g = u[0], y = u[1], _ = r, m = o[0], x = o[1], b = o[2], ry, n), n.point(g, y)
            }

            function u() {
                w.point = r, n.lineEnd()
            }

            function a() {
                i(), w.point = c, w.lineEnd = s
            }

            function c(t, n) {
                o(f = t, n), l = g, h = y, p = m, d = x, v = b, w.point = o
            }

            function s() {
                e(g, y, _, m, x, b, l, h, f, p, d, v, ry, n), w.lineEnd = u, u()
            }

            var f, l, h, p, d, v, _, g, y, m, x, b, w = {
                point: r, lineStart: i, lineEnd: u, polygonStart: function () {
                    n.polygonStart(), w.lineStart = a
                }, polygonEnd: function () {
                    n.polygonEnd(), w.lineStart = i
                }
            };
            return w
        }
    }

    function no(t) {
        return eo(function () {
            return t
        })()
    }

    function eo(t) {
        function n(t) {
            return t = f(t[0] * b_, t[1] * b_), [t[0] * _ + a, c - t[1] * _]
        }

        function e(t) {
            return (t = f.invert((t[0] - a) / _, (c - t[1]) / _)) && [t[0] * x_, t[1] * x_]
        }

        function r(t, n) {
            return t = u(t, n), [t[0] * _ + a, c - t[1] * _]
        }

        function i() {
            f = $_(s = ei(b, w, M), u);
            var t = u(m, x);
            return a = g - t[0] * _, c = y + t[1] * _, o()
        }

        function o() {
            return d = v = null, n
        }

        var u, a, c, s, f, l, h, p, d, v, _ = 150, g = 480, y = 250, m = 0, x = 0, b = 0, w = 0, M = 0, T = null,
            S = ty, N = null, k = Ng, E = .5, A = oy(r, E);
        return n.stream = function (t) {
            return d && v === t ? d : d = uy(S(s, A(k(v = t))))
        }, n.clipAngle = function (t) {
            return arguments.length ? (S = +t ? ny(T = t * b_, 6 * b_) : (T = null, ty), o()) : T * x_
        }, n.clipExtent = function (t) {
            return arguments.length ? (k = null == t ? (N = l = h = p = null, Ng) : fi(N = +t[0][0], l = +t[0][1], h = +t[1][0], p = +t[1][1]), o()) : null == N ? null : [[N, l], [h, p]]
        }, n.scale = function (t) {
            return arguments.length ? (_ = +t, i()) : _
        }, n.translate = function (t) {
            return arguments.length ? (g = +t[0], y = +t[1], i()) : [g, y]
        }, n.center = function (t) {
            return arguments.length ? (m = t[0] % 360 * b_, x = t[1] % 360 * b_, i()) : [m * x_, x * x_]
        }, n.rotate = function (t) {
            return arguments.length ? (b = t[0] % 360 * b_, w = t[1] % 360 * b_, M = t.length > 2 ? t[2] % 360 * b_ : 0, i()) : [b * x_, w * x_, M * x_]
        }, n.precision = function (t) {
            return arguments.length ? (A = oy(r, E = t * t), o()) : P_(E)
        }, n.fitExtent = function (t, e) {
            return Ji(n, t, e)
        }, n.fitSize = function (t, e) {
            return Qi(n, t, e)
        }, function () {
            return u = t.apply(this, arguments), n.invert = u.invert && e, i()
        }
    }

    function ro(t) {
        var n = 0, e = __ / 3, r = eo(t), i = r(n, e);
        return i.parallels = function (t) {
            return arguments.length ? r(n = t[0] * b_, e = t[1] * b_) : [n * x_, e * x_]
        }, i
    }

    function io(t) {
        function n(t, n) {
            return [t * e, C_(n) / e]
        }

        var e = S_(t);
        return n.invert = function (t, n) {
            return [t / e, yr(n * e)]
        }, n
    }

    function oo(t, n) {
        function e(t, n) {
            var e = P_(o - 2 * i * C_(n)) / i;
            return [e * C_(t *= i), u - e * S_(t)]
        }

        var r = C_(t), i = (r + C_(n)) / 2;
        if (w_(i) < v_)return io(t);
        var o = 1 + r * (2 * i - r), u = P_(o) / i;
        return e.invert = function (t, n) {
            var e = u - n;
            return [T_(t, w_(e)) / i * z_(e), yr((o - (t * t + e * e) * i * i) / (2 * i))]
        }, e
    }

    function uo(t) {
        var n = t.length;
        return {
            point: function (e, r) {
                for (var i = -1; ++i < n;)t[i].point(e, r)
            }, sphere: function () {
                for (var e = -1; ++e < n;)t[e].sphere()
            }, lineStart: function () {
                for (var e = -1; ++e < n;)t[e].lineStart()
            }, lineEnd: function () {
                for (var e = -1; ++e < n;)t[e].lineEnd()
            }, polygonStart: function () {
                for (var e = -1; ++e < n;)t[e].polygonStart()
            }, polygonEnd: function () {
                for (var e = -1; ++e < n;)t[e].polygonEnd()
            }
        }
    }

    function ao(t) {
        return function (n, e) {
            var r = S_(n), i = S_(e), o = t(r * i);
            return [o * i * C_(n), o * C_(e)]
        }
    }

    function co(t) {
        return function (n, e) {
            var r = P_(n * n + e * e), i = t(r), o = C_(i), u = S_(i);
            return [T_(n * o, r * u), yr(r && e * o / r)]
        }
    }

    function so(t, n) {
        return [t, E_(L_((g_ + n) / 2))]
    }

    function fo(t) {
        function n() {
            var n = __ * a(), u = o(og(o.rotate()).invert([0, 0]));
            return s(null == f ? [[u[0] - n, u[1] - n], [u[0] + n, u[1] + n]] : t === so ? [[Math.max(u[0] - n, f), e], [Math.min(u[0] + n, r), i]] : [[f, Math.max(u[1] - n, e)], [r, Math.min(u[1] + n, i)]])
        }

        var e, r, i, o = no(t), u = o.center, a = o.scale, c = o.translate, s = o.clipExtent, f = null;
        return o.scale = function (t) {
            return arguments.length ? (a(t), n()) : a()
        }, o.translate = function (t) {
            return arguments.length ? (c(t), n()) : c()
        }, o.center = function (t) {
            return arguments.length ? (u(t), n()) : u()
        }, o.clipExtent = function (t) {
            return arguments.length ? (null == t ? f = e = r = i = null : (f = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), n()) : null == f ? null : [[f, e], [r, i]]
        }, n()
    }

    function lo(t) {
        return L_((g_ + t) / 2)
    }

    function ho(t, n) {
        function e(t, n) {
            o > 0 ? n < -g_ + v_ && (n = -g_ + v_) : n > g_ - v_ && (n = g_ - v_);
            var e = o / A_(lo(n), i);
            return [e * C_(i * t), o - e * S_(i * t)]
        }

        var r = S_(t), i = t === n ? C_(t) : E_(r / S_(n)) / E_(lo(n) / lo(t)), o = r * A_(lo(t), i) / i;
        return i ? (e.invert = function (t, n) {
            var e = o - n, r = z_(i) * P_(t * t + e * e);
            return [T_(t, w_(e)) / i * z_(e), 2 * M_(A_(o / r, 1 / i)) - g_]
        }, e) : so
    }

    function po(t, n) {
        return [t, n]
    }

    function vo(t, n) {
        function e(t, n) {
            var e = o - n, r = i * t;
            return [e * C_(r), o - e * S_(r)]
        }

        var r = S_(t), i = t === n ? C_(t) : (r - S_(n)) / (n - t), o = r / i + t;
        return w_(i) < v_ ? po : (e.invert = function (t, n) {
            var e = o - n;
            return [T_(t, w_(e)) / i * z_(e), o - z_(i) * P_(t * t + e * e)]
        }, e)
    }

    function _o(t, n) {
        var e = S_(n), r = S_(t) * e;
        return [e * C_(t) / r, C_(n) / r]
    }

    function go(t, n, e, r) {
        return 1 === t && 1 === n && 0 === e && 0 === r ? Ng : Zi({
            point: function (i, o) {
                this.stream.point(i * t + e, o * n + r)
            }
        })
    }

    function yo(t, n) {
        return [S_(n) * C_(t), C_(n)]
    }

    function mo(t, n) {
        var e = S_(n), r = 1 + S_(t) * e;
        return [e * C_(t) / r, C_(n) / r]
    }

    function xo(t, n) {
        return [E_(L_((g_ + n) / 2)), -t]
    }

    function bo(t, n) {
        return t.parent === n.parent ? 1 : 2
    }

    function wo(t) {
        return t.reduce(Mo, 0) / t.length
    }

    function Mo(t, n) {
        return t + n.x
    }

    function To(t) {
        return 1 + t.reduce(So, 0)
    }

    function So(t, n) {
        return Math.max(t, n.y)
    }

    function No(t) {
        for (var n; n = t.children;)t = n[0];
        return t
    }

    function ko(t) {
        for (var n; n = t.children;)t = n[n.length - 1];
        return t
    }

    function Eo(t) {
        var n = 0, e = t.children, r = e && e.length;
        if (r)for (; --r >= 0;)n += e[r].value; else n = 1;
        t.value = n
    }

    function Ao(t, n) {
        if (t === n)return t;
        var e = t.ancestors(), r = n.ancestors(), i = null;
        for (t = e.pop(), n = r.pop(); t === n;)i = t, t = e.pop(), n = r.pop();
        return i
    }

    function Co(t, n) {
        var e, r, i, o, u, a = new qo(t), c = +t.value && (a.value = t.value), s = [a];
        for (null == n && (n = Po); e = s.pop();)if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))for (e.children = new Array(u), o = u - 1; o >= 0; --o)s.push(r = e.children[o] = new qo(i[o])), r.parent = e, r.depth = e.depth + 1;
        return a.eachBefore(Ro)
    }

    function zo() {
        return Co(this).eachBefore(Lo)
    }

    function Po(t) {
        return t.children
    }

    function Lo(t) {
        t.data = t.data.data
    }

    function Ro(t) {
        var n = 0;
        do {
            t.height = n
        } while ((t = t.parent) && t.height < ++n)
    }

    function qo(t) {
        this.data = t, this.depth = this.height = 0, this.parent = null
    }

    function Uo(t) {
        this._ = t, this.next = null
    }

    function Do(t, n) {
        var e = n.x - t.x, r = n.y - t.y, i = t.r - n.r;
        return i * i + 1e-6 > e * e + r * r
    }

    function Oo(t, n) {
        var e, r, i, o = null, u = t.head;
        switch (n.length) {
            case 1:
                e = Fo(n[0]);
                break;
            case 2:
                e = Io(n[0], n[1]);
                break;
            case 3:
                e = Yo(n[0], n[1], n[2])
        }
        for (; u;)i = u._, r = u.next, e && Do(e, i) ? o = u : (o ? (t.tail = o, o.next = null) : t.head = t.tail = null, n.push(i), e = Oo(t, n), n.pop(), t.head ? (u.next = t.head, t.head = u) : (u.next = null, t.head = t.tail = u), o = t.tail, o.next = r), u = r;
        return t.tail = o, e
    }

    function Fo(t) {
        return {x: t.x, y: t.y, r: t.r}
    }

    function Io(t, n) {
        var e = t.x, r = t.y, i = t.r, o = n.x, u = n.y, a = n.r, c = o - e, s = u - r, f = a - i,
            l = Math.sqrt(c * c + s * s);
        return {x: (e + o + c / l * f) / 2, y: (r + u + s / l * f) / 2, r: (l + i + a) / 2}
    }

    function Yo(t, n, e) {
        var r = t.x, i = t.y, o = t.r, u = n.x, a = n.y, c = n.r, s = e.x, f = e.y, l = e.r, h = 2 * (r - u),
            p = 2 * (i - a), d = 2 * (c - o), v = r * r + i * i - o * o - u * u - a * a + c * c, _ = 2 * (r - s),
            g = 2 * (i - f), y = 2 * (l - o), m = r * r + i * i - o * o - s * s - f * f + l * l, x = _ * p - h * g,
            b = (p * m - g * v) / x - r, w = (g * d - p * y) / x, M = (_ * v - h * m) / x - i, T = (h * y - _ * d) / x,
            S = w * w + T * T - 1, N = 2 * (b * w + M * T + o), k = b * b + M * M - o * o,
            E = (-N - Math.sqrt(N * N - 4 * S * k)) / (2 * S);
        return {x: b + w * E + r, y: M + T * E + i, r: E}
    }

    function Bo(t, n, e) {
        var r = t.x, i = t.y, o = n.r + e.r, u = t.r + e.r, a = n.x - r, c = n.y - i, s = a * a + c * c;
        if (s) {
            var f = .5 + ((u *= u) - (o *= o)) / (2 * s),
                l = Math.sqrt(Math.max(0, 2 * o * (u + s) - (u -= s) * u - o * o)) / (2 * s);
            e.x = r + f * a + l * c, e.y = i + f * c - l * a
        } else e.x = r + u, e.y = i
    }

    function jo(t, n) {
        var e = n.x - t.x, r = n.y - t.y, i = t.r + n.r;
        return i * i - 1e-6 > e * e + r * r
    }

    function Ho(t, n, e) {
        var r = t._, i = t.next._, o = r.r + i.r, u = (r.x * i.r + i.x * r.r) / o - n,
            a = (r.y * i.r + i.y * r.r) / o - e;
        return u * u + a * a
    }

    function Xo(t) {
        this._ = t, this.next = null, this.previous = null
    }

    function Vo(t) {
        if (!(i = t.length))return 0;
        var n, e, r, i;
        if (n = t[0], n.x = 0, n.y = 0, !(i > 1))return n.r;
        if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2))return n.r + e.r;
        Bo(e, n, r = t[2]);
        var o, u, a, c, s, f, l, h = n.r * n.r, p = e.r * e.r, d = r.r * r.r, v = h + p + d,
            _ = h * n.x + p * e.x + d * r.x, g = h * n.y + p * e.y + d * r.y;
        n = new Xo(n), e = new Xo(e), r = new Xo(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
        t:for (a = 3; a < i; ++a) {
            Bo(n._, e._, r = t[a]), r = new Xo(r), c = e.next, s = n.previous, f = e._.r, l = n._.r;
            do {
                if (f <= l) {
                    if (jo(c._, r._)) {
                        e = c, n.next = e, e.previous = n, --a;
                        continue t
                    }
                    f += c._.r, c = c.next
                } else {
                    if (jo(s._, r._)) {
                        n = s, n.next = e, e.previous = n, --a;
                        continue t
                    }
                    l += s._.r, s = s.previous
                }
            } while (c !== s.next);
            for (r.previous = n, r.next = e, n.next = e.previous = e = r, v += d = r._.r * r._.r, _ += d * r._.x, g += d * r._.y, h = Ho(n, o = _ / v, u = g / v); (r = r.next) !== e;)(d = Ho(r, o, u)) < h && (n = r, h = d);
            e = n.next
        }
        for (n = [e._], r = e; (r = r.next) !== e;)n.push(r._);
        for (r = Uy(n), a = 0; a < i; ++a)n = t[a], n.x -= r.x, n.y -= r.y;
        return r.r
    }

    function $o(t) {
        return null == t ? null : Wo(t)
    }

    function Wo(t) {
        if ("function" != typeof t)throw new Error;
        return t
    }

    function Zo() {
        return 0
    }

    function Go(t) {
        return Math.sqrt(t.value)
    }

    function Jo(t) {
        return function (n) {
            n.children || (n.r = Math.max(0, +t(n) || 0))
        }
    }

    function Qo(t, n) {
        return function (e) {
            if (r = e.children) {
                var r, i, o, u = r.length, a = t(e) * n || 0;
                if (a)for (i = 0; i < u; ++i)r[i].r += a;
                if (o = Vo(r), a)for (i = 0; i < u; ++i)r[i].r -= a;
                e.r = o + a
            }
        }
    }

    function Ko(t) {
        return function (n) {
            var e = n.parent;
            n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
        }
    }

    function tu(t) {
        return t.id
    }

    function nu(t) {
        return t.parentId
    }

    function eu(t, n) {
        return t.parent === n.parent ? 1 : 2
    }

    function ru(t) {
        var n = t.children;
        return n ? n[0] : t.t
    }

    function iu(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t
    }

    function ou(t, n, e) {
        var r = e / (n.i - t.i);
        n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
    }

    function uu(t) {
        for (var n, e = 0, r = 0, i = t.children,
                 o = i.length; --o >= 0;)n = i[o], n.z += e, n.m += e, e += n.s + (r += n.c)
    }

    function au(t, n, e) {
        return t.a.parent === n.parent ? t.a : e
    }

    function cu(t, n) {
        this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
    }

    function su(t) {
        for (var n, e, r, i, o, u = new cu(t, 0),
                 a = [u]; n = a.pop();)if (r = n._.children)for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i)a.push(e = n.children[i] = new cu(r[i], i)), e.parent = n;
        return (u.parent = new cu(null, 0)).children = [u], u
    }

    function fu(t, n, e, r, i, o) {
        for (var u, a, c, s, f, l, h, p, d, v, _, g = [], y = n.children, m = 0, x = 0, b = y.length,
                 w = n.value; m < b;) {
            c = i - e, s = o - r;
            do {
                f = y[x++].value
            } while (!f && x < b);
            for (l = h = f, v = Math.max(s / c, c / s) / (w * t), _ = f * f * v, d = Math.max(h / _, _ / l); x < b; ++x) {
                if (f += a = y[x].value, a < l && (l = a), a > h && (h = a), _ = f * f * v, (p = Math.max(h / _, _ / l)) > d) {
                    f -= a;
                    break
                }
                d = p
            }
            g.push(u = {
                value: f,
                dice: c < s,
                children: y.slice(m, x)
            }), u.dice ? Yy(u, e, r, i, w ? r += s * f / w : o) : Wy(u, e, r, w ? e += c * f / w : i, o), w -= f, m = x
        }
        return g
    }

    function lu(t, n) {
        return t[0] - n[0] || t[1] - n[1]
    }

    function hu(t) {
        for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
            for (; r > 1 && rm(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;)--r;
            e[r++] = i
        }
        return e.slice(0, r)
    }

    function pu(t) {
        if (!(t >= 1))throw new Error;
        this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
    }

    function du(t) {
        if (!t._start)try {
            vu(t)
        } catch (n) {
            if (t._tasks[t._ended + t._active - 1]) gu(t, n); else if (!t._data)throw n
        }
    }

    function vu(t) {
        for (; t._start = t._waiting && t._active < t._size;) {
            var n = t._ended + t._active, e = t._tasks[n], r = e.length - 1, i = e[r];
            e[r] = _u(t, n), --t._waiting, ++t._active, e = i.apply(null, e), t._tasks[n] && (t._tasks[n] = e || cm)
        }
    }

    function _u(t, n) {
        return function (e, r) {
            t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? gu(t, e) : (t._data[n] = r, t._waiting ? du(t) : yu(t))))
        }
    }

    function gu(t, n) {
        var e, r = t._tasks.length;
        for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort))try {
            e.abort()
        } catch (n) {
        }
        t._active = NaN, yu(t)
    }

    function yu(t) {
        if (!t._active && t._call) {
            var n = t._data;
            t._data = void 0, t._call(t._error, n)
        }
    }

    function mu(t) {
        return new pu(arguments.length ? +t : 1 / 0)
    }

    function xu(t) {
        return function (n, e) {
            t(null == n ? e : null)
        }
    }

    function bu(t) {
        var n = t.responseType;
        return n && "text" !== n ? t.response : t.responseText
    }

    function wu(t, n) {
        return function (e) {
            return t(e.responseText, n)
        }
    }

    function Mu(t) {
        function n(n) {
            var o = n + "", u = e.get(o);
            if (!u) {
                if (i !== km)return i;
                e.set(o, u = r.push(n))
            }
            return t[(u - 1) % t.length]
        }

        var e = Be(), r = [], i = km;
        return t = null == t ? [] : Nm.call(t), n.domain = function (t) {
            if (!arguments.length)return r.slice();
            r = [], e = Be();
            for (var i, o, u = -1, a = t.length; ++u < a;)e.has(o = (i = t[u]) + "") || e.set(o, r.push(i));
            return n
        }, n.range = function (e) {
            return arguments.length ? (t = Nm.call(e), n) : t.slice()
        }, n.unknown = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n.copy = function () {
            return Mu().domain(r).range(t).unknown(i)
        }, n
    }

    function Tu() {
        function t() {
            var t = i().length, r = u[1] < u[0], l = u[r - 0], h = u[1 - r];
            n = (h - l) / Math.max(1, t - c + 2 * s), a && (n = Math.floor(n)), l += (h - l - n * (t - c)) * f, e = n * (1 - c), a && (l = Math.round(l), e = Math.round(e));
            var p = Js(t).map(function (t) {
                return l + n * t
            });
            return o(r ? p.reverse() : p)
        }

        var n, e, r = Mu().unknown(void 0), i = r.domain, o = r.range, u = [0, 1], a = !1, c = 0, s = 0, f = .5;
        return delete r.unknown, r.domain = function (n) {
            return arguments.length ? (i(n), t()) : i()
        }, r.range = function (n) {
            return arguments.length ? (u = [+n[0], +n[1]], t()) : u.slice()
        }, r.rangeRound = function (n) {
            return u = [+n[0], +n[1]], a = !0, t()
        }, r.bandwidth = function () {
            return e
        }, r.step = function () {
            return n
        }, r.round = function (n) {
            return arguments.length ? (a = !!n, t()) : a
        }, r.padding = function (n) {
            return arguments.length ? (c = s = Math.max(0, Math.min(1, n)), t()) : c
        }, r.paddingInner = function (n) {
            return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c
        }, r.paddingOuter = function (n) {
            return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s
        }, r.align = function (n) {
            return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f
        }, r.copy = function () {
            return Tu().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f)
        }, t()
    }

    function Su(t) {
        var n = t.copy;
        return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
            return Su(n())
        }, t
    }

    function Nu() {
        return Su(Tu().paddingInner(1))
    }

    function ku(t, n) {
        return (n -= t = +t) ? function (e) {
            return (e - t) / n
        } : Em(n)
    }

    function Eu(t) {
        return function (n, e) {
            var r = t(n = +n, e = +e);
            return function (t) {
                return t <= n ? 0 : t >= e ? 1 : r(t)
            }
        }
    }

    function Au(t) {
        return function (n, e) {
            var r = t(n = +n, e = +e);
            return function (t) {
                return t <= 0 ? n : t >= 1 ? e : r(t)
            }
        }
    }

    function Cu(t, n, e, r) {
        var i = t[0], o = t[1], u = n[0], a = n[1];
        return o < i ? (i = e(o, i), u = r(a, u)) : (i = e(i, o), u = r(u, a)), function (t) {
            return u(i(t))
        }
    }

    function zu(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1, o = new Array(i), u = new Array(i), a = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;)o[a] = e(t[a], t[a + 1]), u[a] = r(n[a], n[a + 1]);
        return function (n) {
            var e = Ds(t, n, 1, i) - 1;
            return u[e](o[e](n))
        }
    }

    function Pu(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }

    function Lu(t, n) {
        function e() {
            return i = Math.min(a.length, c.length) > 2 ? zu : Cu, o = u = null, r
        }

        function r(n) {
            return (o || (o = i(a, c, f ? Eu(t) : t, s)))(+n)
        }

        var i, o, u, a = Cm, c = Cm, s = Sh, f = !1;
        return r.invert = function (t) {
            return (u || (u = i(c, a, ku, f ? Au(n) : n)))(+t)
        }, r.domain = function (t) {
            return arguments.length ? (a = Sm.call(t, Am), e()) : a.slice()
        }, r.range = function (t) {
            return arguments.length ? (c = Nm.call(t), e()) : c.slice()
        }, r.rangeRound = function (t) {
            return c = Nm.call(t), s = Nh, e()
        }, r.clamp = function (t) {
            return arguments.length ? (f = !!t, e()) : f
        }, r.interpolate = function (t) {
            return arguments.length ? (s = t, e()) : s
        }, e()
    }

    function Ru(t) {
        var n = t.domain;
        return t.ticks = function (t) {
            var e = n();
            return nf(e[0], e[e.length - 1], null == t ? 10 : t)
        }, t.tickFormat = function (t, e) {
            return zm(n(), t, e)
        }, t.nice = function (e) {
            var r = n(), o = r.length - 1, u = null == e ? 10 : e, a = r[0], c = r[o], s = i(a, c, u);
            return s && (s = i(Math.floor(a / s) * s, Math.ceil(c / s) * s, u), r[0] = Math.floor(a / s) * s, r[o] = Math.ceil(c / s) * s, n(r)), t
        }, t
    }

    function qu() {
        var t = Lu(ku, xh);
        return t.copy = function () {
            return Pu(t, qu())
        }, Ru(t)
    }

    function Uu() {
        function t(t) {
            return +t
        }

        var n = [0, 1];
        return t.invert = t, t.domain = t.range = function (e) {
            return arguments.length ? (n = Sm.call(e, Am), t) : n.slice()
        }, t.copy = function () {
            return Uu().domain(n)
        }, Ru(t)
    }

    function Du(t, n) {
        return (n = Math.log(n / t)) ? function (e) {
            return Math.log(e / t) / n
        } : Em(n)
    }

    function Ou(t, n) {
        return t < 0 ? function (e) {
            return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
        } : function (e) {
            return Math.pow(n, e) * Math.pow(t, 1 - e)
        }
    }

    function Fu(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
    }

    function Iu(t) {
        return 10 === t ? Fu : t === Math.E ? Math.exp : function (n) {
            return Math.pow(t, n)
        }
    }

    function Yu(t) {
        return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
                return Math.log(n) / t
            })
    }

    function Bu(t) {
        return function (n) {
            return -t(-n)
        }
    }

    function ju() {
        function n() {
            return o = Yu(i), u = Iu(i), r()[0] < 0 && (o = Bu(o), u = Bu(u)), e
        }

        var e = Lu(Du, Ou).domain([1, 10]), r = e.domain, i = 10, o = Yu(10), u = Iu(10);
        return e.base = function (t) {
            return arguments.length ? (i = +t, n()) : i
        }, e.domain = function (t) {
            return arguments.length ? (r(t), n()) : r()
        }, e.ticks = function (t) {
            var n, e = r(), a = e[0], c = e[e.length - 1];
            (n = c < a) && (h = a, a = c, c = h);
            var s, f, l, h = o(a), p = o(c), d = null == t ? 10 : +t, v = [];
            if (!(i % 1) && p - h < d) {
                if (h = Math.round(h) - 1, p = Math.round(p) + 1, a > 0) {
                    for (; h < p; ++h)for (f = 1, s = u(h); f < i; ++f)if (!((l = s * f) < a)) {
                        if (l > c)break;
                        v.push(l)
                    }
                } else for (; h < p; ++h)for (f = i - 1, s = u(h); f >= 1; --f)if (!((l = s * f) < a)) {
                    if (l > c)break;
                    v.push(l)
                }
            } else v = nf(h, p, Math.min(p - h, d)).map(u);
            return n ? v.reverse() : v
        }, e.tickFormat = function (n, r) {
            if (null == r && (r = 10 === i ? ".0e" : ","), "function" != typeof r && (r = t.format(r)), n === 1 / 0)return r;
            null == n && (n = 10);
            var a = Math.max(1, i * n / e.ticks().length);
            return function (t) {
                var n = t / u(Math.round(o(t)));
                return n * i < i - .5 && (n *= i), n <= a ? r(t) : ""
            }
        }, e.nice = function () {
            return r(Pm(r(), {
                floor: function (t) {
                    return u(Math.floor(o(t)))
                }, ceil: function (t) {
                    return u(Math.ceil(o(t)))
                }
            }))
        }, e.copy = function () {
            return Pu(e, ju().base(i))
        }, e
    }

    function Hu(t, n) {
        return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
    }

    function Xu() {
        function t(t, n) {
            return (n = Hu(n, e) - (t = Hu(t, e))) ? function (r) {
                return (Hu(r, e) - t) / n
            } : Em(n)
        }

        function n(t, n) {
            return n = Hu(n, e) - (t = Hu(t, e)), function (r) {
                return Hu(t + n * r, 1 / e)
            }
        }

        var e = 1, r = Lu(t, n), i = r.domain;
        return r.exponent = function (t) {
            return arguments.length ? (e = +t, i(i())) : e
        }, r.copy = function () {
            return Pu(r, Xu().exponent(e))
        }, Ru(r)
    }

    function Vu() {
        return Xu().exponent(.5)
    }

    function $u() {
        function t() {
            var t = 0, o = Math.max(1, r.length);
            for (i = new Array(o - 1); ++t < o;)i[t - 1] = of(e, t / o);
            return n
        }

        function n(t) {
            if (!isNaN(t = +t))return r[Ds(i, t)]
        }

        var e = [], r = [], i = [];
        return n.invertExtent = function (t) {
            var n = r.indexOf(t);
            return n < 0 ? [NaN, NaN] : [n > 0 ? i[n - 1] : e[0], n < i.length ? i[n] : e[e.length - 1]]
        }, n.domain = function (n) {
            if (!arguments.length)return e.slice();
            e = [];
            for (var r, i = 0, o = n.length; i < o; ++i)null == (r = n[i]) || isNaN(r = +r) || e.push(r);
            return e.sort(Rs), t()
        }, n.range = function (n) {
            return arguments.length ? (r = Nm.call(n), t()) : r.slice()
        }, n.quantiles = function () {
            return i.slice()
        }, n.copy = function () {
            return $u().domain(e).range(r)
        }, n
    }

    function Wu() {
        function t(t) {
            if (t <= t)return u[Ds(o, t, 0, i)]
        }

        function n() {
            var n = -1;
            for (o = new Array(i); ++n < i;)o[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
            return t
        }

        var e = 0, r = 1, i = 1, o = [.5], u = [0, 1];
        return t.domain = function (t) {
            return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r]
        }, t.range = function (t) {
            return arguments.length ? (i = (u = Nm.call(t)).length - 1, n()) : u.slice()
        }, t.invertExtent = function (t) {
            var n = u.indexOf(t);
            return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]]
        }, t.copy = function () {
            return Wu().domain([e, r]).range(u)
        }, Ru(t)
    }

    function Zu() {
        function t(t) {
            if (t <= t)return e[Ds(n, t, 0, r)]
        }

        var n = [.5], e = [0, 1], r = 1;
        return t.domain = function (i) {
            return arguments.length ? (n = Nm.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice()
        }, t.range = function (i) {
            return arguments.length ? (e = Nm.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice()
        }, t.invertExtent = function (t) {
            var r = e.indexOf(t);
            return [n[r - 1], n[r]]
        }, t.copy = function () {
            return Zu().domain(n).range(e)
        }, t
    }

    function Gu(t, n, e, r) {
        function i(n) {
            return t(n = new Date(+n)), n
        }

        return i.floor = i, i.ceil = function (e) {
            return t(e = new Date(e - 1)), n(e, 1), t(e), e
        }, i.round = function (t) {
            var n = i(t), e = i.ceil(t);
            return t - n < e - t ? n : e
        }, i.offset = function (t, e) {
            return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
        }, i.range = function (e, r, o) {
            var u = [];
            if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0))return u;
            do {
                u.push(new Date(+e))
            } while (n(e, o), t(e), e < r);
            return u
        }, i.filter = function (e) {
            return Gu(function (n) {
                if (n >= n)for (; t(n), !e(n);)n.setTime(n - 1)
            }, function (t, r) {
                if (t >= t)for (; --r >= 0;)for (; n(t, 1), !e(t););
            })
        }, e && (i.count = function (n, r) {
            return Lm.setTime(+n), Rm.setTime(+r), t(Lm), t(Rm), Math.floor(e(Lm, Rm))
        }, i.every = function (t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
                return r(n) % t == 0
            } : function (n) {
                return i.count(0, n) % t == 0
            }) : i : null
        }), i
    }

    function Ju(t) {
        return Gu(function (n) {
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setDate(t.getDate() + 7 * n)
        }, function (t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Dm) / Om
        })
    }

    function Qu(t) {
        return Gu(function (n) {
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        }, function (t, n) {
            return (n - t) / Om
        })
    }

    function Ku(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y), n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }

    function ta(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y), n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }

    function na(t) {
        return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
    }

    function ea(t) {
        function n(t, n) {
            return function (e) {
                var r, i, o, u = [], a = -1, c = 0, s = t.length;
                for (e instanceof Date || (e = new Date(+e)); ++a < s;)37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = Ux[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), c = a + 1);
                return u.push(t.slice(c, a)), u.join("")
            }
        }

        function e(t, n) {
            return function (e) {
                var i = na(1900)
                ;
                if (r(i, t, e += "", 0) != e.length)return null;
                if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
                    "w" in i || (i.w = "W" in i ? 1 : 0);
                    var o = "Z" in i ? ta(na(i.y)).getUTCDay() : n(na(i.y)).getDay();
                    i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7
                }
                return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, ta(i)) : n(i)
            }
        }

        function r(t, n, e, r) {
            for (var i, o, u = 0, a = n.length, c = e.length; u < a;) {
                if (r >= c)return -1;
                if (37 === (i = n.charCodeAt(u++))) {
                    if (i = n.charAt(u++), !(o = B[i in Ux ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0)return -1
                } else if (i != e.charCodeAt(r++))return -1
            }
            return r
        }

        function i(t, n, e) {
            var r = C.exec(n.slice(e));
            return r ? (t.p = z[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function o(t, n, e) {
            var r = R.exec(n.slice(e));
            return r ? (t.w = q[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function u(t, n, e) {
            var r = P.exec(n.slice(e));
            return r ? (t.w = L[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function a(t, n, e) {
            var r = O.exec(n.slice(e));
            return r ? (t.m = F[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function c(t, n, e) {
            var r = U.exec(n.slice(e));
            return r ? (t.m = D[r[0].toLowerCase()], e + r[0].length) : -1
        }

        function s(t, n, e) {
            return r(t, w, n, e)
        }

        function f(t, n, e) {
            return r(t, M, n, e)
        }

        function l(t, n, e) {
            return r(t, T, n, e)
        }

        function h(t) {
            return k[t.getDay()]
        }

        function p(t) {
            return N[t.getDay()]
        }

        function d(t) {
            return A[t.getMonth()]
        }

        function v(t) {
            return E[t.getMonth()]
        }

        function _(t) {
            return S[+(t.getHours() >= 12)]
        }

        function g(t) {
            return k[t.getUTCDay()]
        }

        function y(t) {
            return N[t.getUTCDay()]
        }

        function m(t) {
            return A[t.getUTCMonth()]
        }

        function x(t) {
            return E[t.getUTCMonth()]
        }

        function b(t) {
            return S[+(t.getUTCHours() >= 12)]
        }

        var w = t.dateTime, M = t.date, T = t.time, S = t.periods, N = t.days, k = t.shortDays, E = t.months,
            A = t.shortMonths, C = oa(S), z = ua(S), P = oa(N), L = ua(N), R = oa(k), q = ua(k), U = oa(E), D = ua(E),
            O = oa(A), F = ua(A), I = {
                a: h,
                A: p,
                b: d,
                B: v,
                c: null,
                d: ba,
                e: ba,
                H: wa,
                I: Ma,
                j: Ta,
                L: Sa,
                m: Na,
                M: ka,
                p: _,
                S: Ea,
                U: Aa,
                w: Ca,
                W: za,
                x: null,
                X: null,
                y: Pa,
                Y: La,
                Z: Ra,
                "%": Za
            }, Y = {
                a: g,
                A: y,
                b: m,
                B: x,
                c: null,
                d: qa,
                e: qa,
                H: Ua,
                I: Da,
                j: Oa,
                L: Fa,
                m: Ia,
                M: Ya,
                p: b,
                S: Ba,
                U: ja,
                w: Ha,
                W: Xa,
                x: null,
                X: null,
                y: Va,
                Y: $a,
                Z: Wa,
                "%": Za
            }, B = {
                a: o,
                A: u,
                b: a,
                B: c,
                c: s,
                d: da,
                e: da,
                H: _a,
                I: _a,
                j: va,
                L: ma,
                m: pa,
                M: ga,
                p: i,
                S: ya,
                U: ca,
                w: aa,
                W: sa,
                x: f,
                X: l,
                y: la,
                Y: fa,
                Z: ha,
                "%": xa
            };
        return I.x = n(M, I), I.X = n(T, I), I.c = n(w, I), Y.x = n(M, Y), Y.X = n(T, Y), Y.c = n(w, Y), {
            format: function (t) {
                var e = n(t += "", I);
                return e.toString = function () {
                    return t
                }, e
            }, parse: function (t) {
                var n = e(t += "", Ku);
                return n.toString = function () {
                    return t
                }, n
            }, utcFormat: function (t) {
                var e = n(t += "", Y);
                return e.toString = function () {
                    return t
                }, e
            }, utcParse: function (t) {
                var n = e(t, ta);
                return n.toString = function () {
                    return t
                }, n
            }
        }
    }

    function ra(t, n, e) {
        var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
        return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
    }

    function ia(t) {
        return t.replace(Fx, "\\$&")
    }

    function oa(t) {
        return new RegExp("^(?:" + t.map(ia).join("|") + ")", "i")
    }

    function ua(t) {
        for (var n = {}, e = -1, r = t.length; ++e < r;)n[t[e].toLowerCase()] = e;
        return n
    }

    function aa(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }

    function ca(t, n, e) {
        var r = Dx.exec(n.slice(e));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }

    function sa(t, n, e) {
        var r = Dx.exec(n.slice(e));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }

    function fa(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }

    function la(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }

    function ha(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }

    function pa(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }

    function da(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }

    function va(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }

    function _a(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }

    function ga(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }

    function ya(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }

    function ma(t, n, e) {
        var r = Dx.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }

    function xa(t, n, e) {
        var r = Ox.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function ba(t, n) {
        return ra(t.getDate(), n, 2)
    }

    function wa(t, n) {
        return ra(t.getHours(), n, 2)
    }

    function Ma(t, n) {
        return ra(t.getHours() % 12 || 12, n, 2)
    }

    function Ta(t, n) {
        return ra(1 + Xm.count(sx(t), t), n, 3)
    }

    function Sa(t, n) {
        return ra(t.getMilliseconds(), n, 3)
    }

    function Na(t, n) {
        return ra(t.getMonth() + 1, n, 2)
    }

    function ka(t, n) {
        return ra(t.getMinutes(), n, 2)
    }

    function Ea(t, n) {
        return ra(t.getSeconds(), n, 2)
    }

    function Aa(t, n) {
        return ra($m.count(sx(t), t), n, 2)
    }

    function Ca(t) {
        return t.getDay()
    }

    function za(t, n) {
        return ra(Wm.count(sx(t), t), n, 2)
    }

    function Pa(t, n) {
        return ra(t.getFullYear() % 100, n, 2)
    }

    function La(t, n) {
        return ra(t.getFullYear() % 1e4, n, 4)
    }

    function Ra(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-" : (n *= -1, "+")) + ra(n / 60 | 0, "0", 2) + ra(n % 60, "0", 2)
    }

    function qa(t, n) {
        return ra(t.getUTCDate(), n, 2)
    }

    function Ua(t, n) {
        return ra(t.getUTCHours(), n, 2)
    }

    function Da(t, n) {
        return ra(t.getUTCHours() % 12 || 12, n, 2)
    }

    function Oa(t, n) {
        return ra(1 + vx.count(Lx(t), t), n, 3)
    }

    function Fa(t, n) {
        return ra(t.getUTCMilliseconds(), n, 3)
    }

    function Ia(t, n) {
        return ra(t.getUTCMonth() + 1, n, 2)
    }

    function Ya(t, n) {
        return ra(t.getUTCMinutes(), n, 2)
    }

    function Ba(t, n) {
        return ra(t.getUTCSeconds(), n, 2)
    }

    function ja(t, n) {
        return ra(gx.count(Lx(t), t), n, 2)
    }

    function Ha(t) {
        return t.getUTCDay()
    }

    function Xa(t, n) {
        return ra(yx.count(Lx(t), t), n, 2)
    }

    function Va(t, n) {
        return ra(t.getUTCFullYear() % 100, n, 2)
    }

    function $a(t, n) {
        return ra(t.getUTCFullYear() % 1e4, n, 4)
    }

    function Wa() {
        return "+0000"
    }

    function Za() {
        return "%"
    }

    function Ga(n) {
        return Rx = ea(n), t.timeFormat = Rx.format, t.timeParse = Rx.parse, t.utcFormat = Rx.utcFormat, t.utcParse = Rx.utcParse, Rx
    }

    function Ja(t) {
        return t.toISOString()
    }

    function Qa(t) {
        var n = new Date(t);
        return isNaN(n) ? null : n
    }

    function Ka(t) {
        return new Date(t)
    }

    function tc(t) {
        return t instanceof Date ? +t : +new Date(+t)
    }

    function nc(t, n, e, r, o, u, a, c, s) {
        function f(i) {
            return (a(i) < i ? v : u(i) < i ? _ : o(i) < i ? g : r(i) < i ? y : n(i) < i ? e(i) < i ? m : x : t(i) < i ? b : w)(i)
        }

        function l(n, e, r, o) {
            if (null == n && (n = 10), "number" == typeof n) {
                var u = Math.abs(r - e) / n, a = qs(function (t) {
                    return t[2]
                }).right(M, u);
                a === M.length ? (o = i(e / Wx, r / Wx, n), n = t) : a ? (a = M[u / M[a - 1][2] < M[a][2] / u ? a - 1 : a], o = a[1], n = a[0]) : (o = i(e, r, n), n = c)
            }
            return null == o ? n : n.every(o)
        }

        var h = Lu(ku, xh), p = h.invert, d = h.domain, v = s(".%L"), _ = s(":%S"), g = s("%I:%M"), y = s("%I %p"),
            m = s("%a %d"), x = s("%b %d"), b = s("%B"), w = s("%Y"),
            M = [[a, 1, Bx], [a, 5, 5 * Bx], [a, 15, 15 * Bx], [a, 30, 30 * Bx], [u, 1, jx], [u, 5, 5 * jx], [u, 15, 15 * jx], [u, 30, 30 * jx], [o, 1, Hx], [o, 3, 3 * Hx], [o, 6, 6 * Hx], [o, 12, 12 * Hx], [r, 1, Xx], [r, 2, 2 * Xx], [e, 1, Vx], [n, 1, $x], [n, 3, 3 * $x], [t, 1, Wx]];
        return h.invert = function (t) {
            return new Date(p(t))
        }, h.domain = function (t) {
            return arguments.length ? d(Sm.call(t, tc)) : d().map(Ka)
        }, h.ticks = function (t, n) {
            var e, r = d(), i = r[0], o = r[r.length - 1], u = o < i;
            return u && (e = i, i = o, o = e), e = l(t, i, o, n), e = e ? e.range(i, o + 1) : [], u ? e.reverse() : e
        }, h.tickFormat = function (t, n) {
            return null == n ? f : s(n)
        }, h.nice = function (t, n) {
            var e = d();
            return (t = l(t, e[0], e[e.length - 1], n)) ? d(Pm(e, t)) : h
        }, h.copy = function () {
            return Pu(h, nc(t, n, e, r, o, u, a, c, s))
        }, h
    }

    function ec(t) {
        var n = t.length;
        return function (e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }

    function rc(t) {
        function n(n) {
            var o = (n - e) / (r - e);
            return t(i ? Math.max(0, Math.min(1, o)) : o)
        }

        var e = 0, r = 1, i = !1;
        return n.domain = function (t) {
            return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r]
        }, n.clamp = function (t) {
            return arguments.length ? (i = !!t, n) : i
        }, n.interpolator = function (e) {
            return arguments.length ? (t = e, n) : t
        }, n.copy = function () {
            return rc(t).domain([e, r]).clamp(i)
        }, Ru(n)
    }

    function ic(t) {
        return t > 1 ? 0 : t < -1 ? xb : Math.acos(t)
    }

    function oc(t) {
        return t >= 1 ? bb : t <= -1 ? -bb : Math.asin(t)
    }

    function uc(t) {
        return t.innerRadius
    }

    function ac(t) {
        return t.outerRadius
    }

    function cc(t) {
        return t.startAngle
    }

    function sc(t) {
        return t.endAngle
    }

    function fc(t) {
        return t && t.padAngle
    }

    function lc(t, n, e, r, i, o, u, a) {
        var c = e - t, s = r - n, f = u - i, l = a - o, h = (f * (n - o) - l * (t - i)) / (l * c - f * s);
        return [t + h * c, n + h * s]
    }

    function hc(t, n, e, r, i, o, u) {
        var a = t - e, c = n - r, s = (u ? o : -o) / yb(a * a + c * c), f = s * c, l = -s * a, h = t + f, p = n + l,
            d = e + f, v = r + l, _ = (h + d) / 2, g = (p + v) / 2, y = d - h, m = v - p, x = y * y + m * m, b = i - o,
            w = h * v - d * p, M = (m < 0 ? -1 : 1) * yb(vb(0, b * b * x - w * w)), T = (w * m - y * M) / x,
            S = (-w * y - m * M) / x, N = (w * m + y * M) / x, k = (-w * y + m * M) / x, E = T - _, A = S - g,
            C = N - _, z = k - g;
        return E * E + A * A > C * C + z * z && (T = N, S = k), {
            cx: T,
            cy: S,
            x01: -f,
            y01: -l,
            x11: T * (i / b - 1),
            y11: S * (i / b - 1)
        }
    }

    function pc(t) {
        this._context = t
    }

    function dc(t) {
        return t[0]
    }

    function vc(t) {
        return t[1]
    }

    function _c(t) {
        this._curve = t
    }

    function gc(t) {
        function n(n) {
            return new _c(t(n))
        }

        return n._curve = t, n
    }

    function yc(t) {
        var n = t.curve;
        return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
            return arguments.length ? n(gc(t)) : n()._curve
        }, t
    }

    function mc(t, n, e) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }

    function xc(t) {
        this._context = t
    }

    function bc(t) {
        this._context = t
    }

    function wc(t) {
        this._context = t
    }

    function Mc(t, n) {
        this._basis = new xc(t), this._beta = n
    }

    function Tc(t, n, e) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }

    function Sc(t, n) {
        this._context = t, this._k = (1 - n) / 6
    }

    function Nc(t, n) {
        this._context = t, this._k = (1 - n) / 6
    }

    function kc(t, n) {
        this._context = t, this._k = (1 - n) / 6
    }

    function Ec(t, n, e) {
        var r = t._x1, i = t._y1, o = t._x2, u = t._y2;
        if (t._l01_a > mb) {
            var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, c = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
        }
        if (t._l23_a > mb) {
            var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, f = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * s + t._x1 * t._l23_2a - n * t._l12_2a) / f, u = (u * s + t._y1 * t._l23_2a - e * t._l12_2a) / f
        }
        t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
    }

    function Ac(t, n) {
        this._context = t, this._alpha = n
    }

    function Cc(t, n) {
        this._context = t, this._alpha = n
    }

    function zc(t, n) {
        this._context = t, this._alpha = n
    }

    function Pc(t) {
        this._context = t
    }

    function Lc(t) {
        return t < 0 ? -1 : 1
    }

    function Rc(t, n, e) {
        var r = t._x1 - t._x0, i = n - t._x1, o = (t._y1 - t._y0) / (r || i < 0 && -0),
            u = (e - t._y1) / (i || r < 0 && -0), a = (o * i + u * r) / (r + i);
        return (Lc(o) + Lc(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
    }

    function qc(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }

    function Uc(t, n, e) {
        var r = t._x0, i = t._y0, o = t._x1, u = t._y1, a = (o - r) / 3;
        t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
    }

    function Dc(t) {
        this._context = t
    }

    function Oc(t) {
        this._context = new Fc(t)
    }

    function Fc(t) {
        this._context = t
    }

    function Ic(t) {
        return new Dc(t)
    }

    function Yc(t) {
        return new Oc(t)
    }

    function Bc(t) {
        this._context = t
    }

    function jc(t) {
        var n, e, r = t.length - 1, i = new Array(r), o = new Array(r), u = new Array(r);
        for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
        for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n)e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
        for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n)i[n] = (u[n] - i[n + 1]) / o[n];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)o[n] = 2 * t[n + 1] - i[n + 1];
        return [i, o]
    }

    function Hc(t, n) {
        this._context = t, this._t = n
    }

    function Xc(t) {
        return new Hc(t, 0)
    }

    function Vc(t) {
        return new Hc(t, 1)
    }

    function $c(t, n) {
        return t[n]
    }

    function Wc(t) {
        for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
        return e
    }

    function Zc(t) {
        return t[0]
    }

    function Gc(t) {
        return t[1]
    }

    function Jc() {
        this._ = null
    }

    function Qc(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }

    function Kc(t, n) {
        var e = n, r = n.R, i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
    }

    function ts(t, n) {
        var e = n, r = n.L, i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
    }

    function ns(t) {
        for (; t.L;)t = t.L;
        return t
    }

    function es(t, n, e, r) {
        var i = [null, null], o = Ew.push(i) - 1;
        return i.left = t, i.right = n, e && is(i, t, n, e), r && is(i, n, t, r), Nw[t.index].halfedges.push(o), Nw[n.index].halfedges.push(o), i
    }

    function rs(t, n, e) {
        var r = [n, e];
        return r.left = t, r
    }

    function is(t, n, e, r) {
        t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
    }

    function os(t, n, e, r, i) {
        var o, u = t[0], a = t[1], c = u[0], s = u[1], f = a[0], l = a[1], h = 0, p = 1, d = f - c, v = l - s;
        if (o = n - c, d || !(o > 0)) {
            if (o /= d, d < 0) {
                if (o < h)return;
                o < p && (p = o)
            } else if (d > 0) {
                if (o > p)return;
                o > h && (h = o)
            }
            if (o = r - c, d || !(o < 0)) {
                if (o /= d, d < 0) {
                    if (o > p)return;
                    o > h && (h = o)
                } else if (d > 0) {
                    if (o < h)return;
                    o < p && (p = o)
                }
                if (o = e - s, v || !(o > 0)) {
                    if (o /= v, v < 0) {
                        if (o < h)return;
                        o < p && (p = o)
                    } else if (v > 0) {
                        if (o > p)return;
                        o > h && (h = o)
                    }
                    if (o = i - s, v || !(o < 0)) {
                        if (o /= v, v < 0) {
                            if (o > p)return;
                            o > h && (h = o)
                        } else if (v > 0) {
                            if (o < h)return;
                            o < p && (p = o)
                        }
                        return !(h > 0 || p < 1) || (h > 0 && (t[0] = [c + h * d, s + h * v]), p < 1 && (t[1] = [c + p * d, s + p * v]), !0)
                    }
                }
            }
        }
    }

    function us(t, n, e, r, i) {
        var o = t[1];
        if (o)return !0;
        var u, a, c = t[0], s = t.left, f = t.right, l = s[0], h = s[1], p = f[0], d = f[1], v = (l + p) / 2,
            _ = (h + d) / 2;
        if (d === h) {
            if (v < n || v >= r)return;
            if (l > p) {
                if (c) {
                    if (c[1] >= i)return
                } else c = [v, e];
                o = [v, i]
            } else {
                if (c) {
                    if (c[1] < e)return
                } else c = [v, i];
                o = [v, e]
            }
        } else if (u = (l - p) / (d - h), a = _ - u * v, u < -1 || u > 1)if (l > p) {
            if (c) {
                if (c[1] >= i)return
            } else c = [(e - a) / u, e];
            o = [(i - a) / u, i]
        } else {
            if (c) {
                if (c[1] < e)return
            } else c = [(i - a) / u, i];
            o = [(e - a) / u, e]
        } else if (h < d) {
            if (c) {
                if (c[0] >= r)return
            } else c = [n, u * n + a];
            o = [r, u * r + a]
        } else {
            if (c) {
                if (c[0] < n)return
            } else c = [r, u * r + a];
            o = [n, u * n + a]
        }
        return t[0] = c, t[1] = o, !0
    }

    function as(t, n, e, r) {
        for (var i,
                 o = Ew.length; o--;)us(i = Ew[o], t, n, e, r) && os(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > zw || Math.abs(i[0][1] - i[1][1]) > zw) || delete Ew[o]
    }

    function cs(t) {
        return Nw[t.index] = {site: t, halfedges: []}
    }

    function ss(t, n) {
        var e = t.site, r = n.left, i = n.right;
        return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
    }

    function fs(t, n) {
        return n[+(n.left !== t.site)]
    }

    function ls(t, n) {
        return n[+(n.left === t.site)]
    }

    function hs() {
        for (var t, n, e, r, i = 0, o = Nw.length; i < o; ++i)if ((t = Nw[i]) && (r = (n = t.halfedges).length)) {
            var u = new Array(r), a = new Array(r);
            for (e = 0; e < r; ++e)u[e] = e, a[e] = ss(t, Ew[n[e]]);
            for (u.sort(function (t, n) {
                return a[n] - a[t]
            }), e = 0; e < r; ++e)a[e] = n[u[e]];
            for (e = 0; e < r; ++e)n[e] = a[e]
        }
    }

    function ps(t, n, e, r) {
        var i, o, u, a, c, s, f, l, h, p, d, v, _ = Nw.length, g = !0;
        for (i = 0; i < _; ++i)if (o = Nw[i]) {
            for (u = o.site, c = o.halfedges, a = c.length; a--;)Ew[c[a]] || c.splice(a, 1);
            for (a = 0, s = c.length; a < s;)p = ls(o, Ew[c[a]]), d = p[0], v = p[1], f = fs(o, Ew[c[++a % s]]), l = f[0], h = f[1], (Math.abs(d - l) > zw || Math.abs(v - h) > zw) && (c.splice(a, 0, Ew.push(rs(u, p, Math.abs(d - t) < zw && r - v > zw ? [t, Math.abs(l - t) < zw ? h : r] : Math.abs(v - r) < zw && e - d > zw ? [Math.abs(h - r) < zw ? l : e, r] : Math.abs(d - e) < zw && v - n > zw ? [e, Math.abs(l - e) < zw ? h : n] : Math.abs(v - n) < zw && d - t > zw ? [Math.abs(h - n) < zw ? l : t, n] : null)) - 1), ++s);
            s && (g = !1)
        }
        if (g) {
            var y, m, x, b = 1 / 0;
            for (i = 0, g = null; i < _; ++i)(o = Nw[i]) && (u = o.site, y = u[0] - t, m = u[1] - n, (x = y * y + m * m) < b && (b = x, g = o));
            if (g) {
                var w = [t, n], M = [t, r], T = [e, r], S = [e, n];
                g.halfedges.push(Ew.push(rs(u = g.site, w, M)) - 1, Ew.push(rs(u, M, T)) - 1, Ew.push(rs(u, T, S)) - 1, Ew.push(rs(u, S, w)) - 1)
            }
        }
        for (i = 0; i < _; ++i)(o = Nw[i]) && (o.halfedges.length || delete Nw[i])
    }

    function ds() {
        Qc(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function vs(t) {
        var n = t.P, e = t.N;
        if (n && e) {
            var r = n.site, i = t.site, o = e.site;
            if (r !== o) {
                var u = i[0], a = i[1], c = r[0] - u, s = r[1] - a, f = o[0] - u, l = o[1] - a, h = 2 * (c * l - s * f);
                if (!(h >= -Pw)) {
                    var p = c * c + s * s, d = f * f + l * l, v = (l * p - s * d) / h, _ = (c * d - f * p) / h,
                        g = Aw.pop() || new ds;
                    g.arc = t, g.site = i, g.x = v + u, g.y = (g.cy = _ + a) + Math.sqrt(v * v + _ * _), t.circle = g;
                    for (var y = null, m = kw._; m;)if (g.y < m.y || g.y === m.y && g.x <= m.x) {
                        if (!m.L) {
                            y = m.P;
                            break
                        }
                        m = m.L
                    } else {
                        if (!m.R) {
                            y = m;
                            break
                        }
                        m = m.R
                    }
                    kw.insert(y, g), y || (Tw = g)
                }
            }
        }
    }

    function _s(t) {
        var n = t.circle;
        n && (n.P || (Tw = n.N), kw.remove(n), Aw.push(n), Qc(n), t.circle = null)
    }

    function gs() {
        Qc(this), this.edge = this.site = this.circle = null
    }

    function ys(t) {
        var n = Cw.pop() || new gs;
        return n.site = t, n
    }

    function ms(t) {
        _s(t), Sw.remove(t), Cw.push(t), Qc(t)
    }

    function xs(t) {
        var n = t.circle, e = n.x, r = n.cy, i = [e, r], o = t.P, u = t.N, a = [t];
        ms(t);
        for (var c = o; c.circle && Math.abs(e - c.circle.x) < zw && Math.abs(r - c.circle.cy) < zw;)o = c.P, a.unshift(c), ms(c), c = o;
        a.unshift(c), _s(c);
        for (var s = u; s.circle && Math.abs(e - s.circle.x) < zw && Math.abs(r - s.circle.cy) < zw;)u = s.N, a.push(s), ms(s), s = u;
        a.push(s), _s(s);
        var f, l = a.length;
        for (f = 1; f < l; ++f)s = a[f], c = a[f - 1], is(s.edge, c.site, s.site, i);
        c = a[0], s = a[l - 1], s.edge = es(c.site, s.site, null, i), vs(c), vs(s)
    }

    function bs(t) {
        for (var n, e, r, i, o = t[0], u = t[1], a = Sw._; a;)if ((r = ws(a, u) - o) > zw) a = a.L; else {
            if (!((i = o - Ms(a, u)) > zw)) {
                r > -zw ? (n = a.P, e = a) : i > -zw ? (n = a, e = a.N) : n = e = a;
                break
            }
            if (!a.R) {
                n = a;
                break
            }
            a = a.R
        }
        cs(t);
        var c = ys(t);
        if (Sw.insert(n, c), n || e) {
            if (n === e)return _s(n), e = ys(n.site), Sw.insert(c, e), c.edge = e.edge = es(n.site, c.site), vs(n), void vs(e);
            if (!e)return void(c.edge = es(n.site, c.site));
            _s(n), _s(e);
            var s = n.site, f = s[0], l = s[1], h = t[0] - f, p = t[1] - l, d = e.site, v = d[0] - f, _ = d[1] - l,
                g = 2 * (h * _ - p * v), y = h * h + p * p, m = v * v + _ * _,
                x = [(_ * y - p * m) / g + f, (h * m - v * y) / g + l];
            is(e.edge, s, d, x), c.edge = es(s, t, null, x), e.edge = es(t, d, null, x), vs(n), vs(e)
        }
    }

    function ws(t, n) {
        var e = t.site, r = e[0], i = e[1], o = i - n;
        if (!o)return r;
        var u = t.P;
        if (!u)return -1 / 0;
        e = u.site;
        var a = e[0], c = e[1], s = c - n;
        if (!s)return a;
        var f = a - r, l = 1 / o - 1 / s, h = f / s;
        return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * s) - c + s / 2 + i - o / 2))) / l + r : (r + a) / 2
    }

    function Ms(t, n) {
        var e = t.N;
        if (e)return ws(e, n);
        var r = t.site;
        return r[1] === n ? r[0] : 1 / 0
    }

    function Ts(t, n, e) {
        return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
    }

    function Ss(t, n) {
        return n[1] - t[1] || n[0] - t[0]
    }

    function Ns(t, n) {
        var e, r, i, o = t.sort(Ss).pop();
        for (Ew = [], Nw = new Array(t.length), Sw = new Jc, kw = new Jc; ;)if (i = Tw, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (bs(o), e = o[0], r = o[1]), o = t.pop(); else {
            if (!i)break;
            xs(i.arc)
        }
        if (hs(), n) {
            var u = +n[0][0], a = +n[0][1], c = +n[1][0], s = +n[1][1];
            as(u, a, c, s), ps(u, a, c, s)
        }
        this.edges = Ew, this.cells = Nw, Sw = kw = Ew = Nw = null
    }

    function ks(t, n, e) {
        this.target = t, this.type = n, this.transform = e
    }

    function Es(t, n, e) {
        this.k = t, this.x = n, this.y = e
    }

    function As(t) {
        return t.__zoom || qw
    }

    function Cs() {
        t.event.stopImmediatePropagation()
    }

    function zs() {
        return !t.event.button
    }

    function Ps() {
        var t, n, e = this;
        return e instanceof SVGElement ? (e = e.ownerSVGElement || e, t = e.width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [[0, 0], [t, n]]
    }

    function Ls() {
        return this.__zoom || qw
    }

    var Rs = function (t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }, qs = function (t) {
        return 1 === t.length && (t = n(t)), {
            left: function (n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var o = r + i >>> 1;
                    t(n[o], e) < 0 ? r = o + 1 : i = o
                }
                return r
            }, right: function (n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var o = r + i >>> 1;
                    t(n[o], e) > 0 ? i = o : r = o + 1
                }
                return r
            }
        }
    }, Us = qs(Rs), Ds = Us.right, Os = Us.left, Fs = function (t, n) {
        null == n && (n = e);
        for (var r = 0, i = t.length - 1, o = t[0], u = new Array(i < 0 ? 0 : i); r < i;)u[r] = n(o, o = t[++r]);
        return u
    }, Is = function (t, n, r) {
        var i, o, u, a, c = t.length, s = n.length, f = new Array(c * s);
        for (null == r && (r = e), i = u = 0; i < c; ++i)for (a = t[i], o = 0; o < s; ++o, ++u)f[u] = r(a, n[o]);
        return f
    }, Ys = function (t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }, Bs = function (t) {
        return null === t ? NaN : +t
    }, js = function (t, n) {
        var e, r, i = t.length, o = 0, u = -1, a = 0, c = 0;
        if (null == n)for (; ++u < i;)isNaN(e = Bs(t[u])) || (r = e - a, a += r / ++o, c += r * (e - a)); else for (; ++u < i;)isNaN(e = Bs(n(t[u], u, t))) || (r = e - a, a += r / ++o, c += r * (e - a));
        if (o > 1)return c / (o - 1)
    }, Hs = function (t, n) {
        var e = js(t, n);
        return e ? Math.sqrt(e) : e
    }, Xs = function (t, n) {
        var e, r, i, o = t.length, u = -1;
        if (null == n) {
            for (; ++u < o;)if (null != (e = t[u]) && e >= e)for (r = i = e; ++u < o;)null != (e = t[u]) && (r > e && (r = e), i < e && (i = e))
        } else for (; ++u < o;)if (null != (e = n(t[u], u, t)) && e >= e)for (r = i = e; ++u < o;)null != (e = n(t[u], u, t)) && (r > e && (r = e), i < e && (i = e));
        return [r, i]
    }, Vs = Array.prototype, $s = Vs.slice, Ws = Vs.map, Zs = function (t) {
        return function () {
            return t
        }
    }, Gs = function (t) {
        return t
    }, Js = function (t, n, e) {
        t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
        for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;)o[r] = t + r * e;
        return o
    }, Qs = Math.sqrt(50), Ks = Math.sqrt(10), tf = Math.sqrt(2), nf = function (t, n, e) {
        var i, o, u, a = n < t, c = -1;
        if (a && (i = t, t = n, n = i), 0 === (u = r(t, n, e)) || !isFinite(u))return [];
        if (u > 0)for (t = Math.ceil(t / u), n = Math.floor(n / u), o = new Array(i = Math.ceil(n - t + 1)); ++c < i;)o[c] = (t + c) * u; else for (t = Math.floor(t * u), n = Math.ceil(n * u), o = new Array(i = Math.ceil(t - n + 1)); ++c < i;)o[c] = (t - c) / u;
        return a && o.reverse(), o
    }, ef = function (t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1
    }, rf = function () {
        function t(t) {
            var o, u, a = t.length, c = new Array(a);
            for (o = 0; o < a; ++o)c[o] = n(t[o], o, t);
            var s = e(c), f = s[0], l = s[1], h = r(c, f, l);
            Array.isArray(h) || (h = i(f, l, h), h = Js(Math.ceil(f / h) * h, Math.floor(l / h) * h, h));
            for (var p = h.length; h[0] <= f;)h.shift(), --p;
            for (; h[p - 1] > l;)h.pop(), --p;
            var d, v = new Array(p + 1);
            for (o = 0; o <= p; ++o)d = v[o] = [], d.x0 = o > 0 ? h[o - 1] : f, d.x1 = o < p ? h[o] : l;
            for (o = 0; o < a; ++o)u = c[o], f <= u && u <= l && v[Ds(h, u, 0, p)].push(t[o]);
            return v
        }

        var n = Gs, e = Xs, r = ef;
        return t.value = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : Zs(e), t) : n
        }, t.domain = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : Zs([n[0], n[1]]), t) : e
        }, t.thresholds = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : Zs(Array.isArray(n) ? $s.call(n) : n), t) : r
        }, t
    }, of = function (t, n, e) {
        if (null == e && (e = Bs), r = t.length) {
            if ((n = +n) <= 0 || r < 2)return +e(t[0], 0, t);
            if (n >= 1)return +e(t[r - 1], r - 1, t);
            var r, i = (r - 1) * n, o = Math.floor(i), u = +e(t[o], o, t);
            return u + (+e(t[o + 1], o + 1, t) - u) * (i - o)
        }
    }, uf = function (t, n, e) {
        return t = Ws.call(t, Bs).sort(Rs), Math.ceil((e - n) / (2 * (of(t, .75) - of(t, .25)) * Math.pow(t.length, -1 / 3)))
    }, af = function (t, n, e) {
        return Math.ceil((e - n) / (3.5 * Hs(t) * Math.pow(t.length, -1 / 3)))
    }, cf = function (t, n) {
        var e, r, i = t.length, o = -1;
        if (null == n) {
            for (; ++o < i;)if (null != (e = t[o]) && e >= e)for (r = e; ++o < i;)null != (e = t[o]) && e > r && (r = e)
        } else for (; ++o < i;)if (null != (e = n(t[o], o, t)) && e >= e)for (r = e; ++o < i;)null != (e = n(t[o], o, t)) && e > r && (r = e);
        return r
    }, sf = function (t, n) {
        var e, r = t.length, i = r, o = -1, u = 0;
        if (null == n)for (; ++o < r;)isNaN(e = Bs(t[o])) ? --i : u += e; else for (; ++o < r;)isNaN(e = Bs(n(t[o], o, t))) ? --i : u += e;
        if (i)return u / i
    }, ff = function (t, n) {
        var e, r = t.length, i = -1, o = [];
        if (null == n)for (; ++i < r;)isNaN(e = Bs(t[i])) || o.push(e); else for (; ++i < r;)isNaN(e = Bs(n(t[i], i, t))) || o.push(e);
        return of(o.sort(Rs), .5)
    }, lf = function (t) {
        for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;)u += t[o].length;
        for (e = new Array(u); --i >= 0;)for (r = t[i], n = r.length; --n >= 0;)e[--u] = r[n];
        return e
    }, hf = function (t, n) {
        var e, r, i = t.length, o = -1;
        if (null == n) {
            for (; ++o < i;)if (null != (e = t[o]) && e >= e)for (r = e; ++o < i;)null != (e = t[o]) && r > e && (r = e)
        } else for (; ++o < i;)if (null != (e = n(t[o], o, t)) && e >= e)for (r = e; ++o < i;)null != (e = n(t[o], o, t)) && r > e && (r = e);
        return r
    }, pf = function (t, n) {
        for (var e = n.length, r = new Array(e); e--;)r[e] = t[n[e]];
        return r
    }, df = function (t, n) {
        if (e = t.length) {
            var e, r, i = 0, o = 0, u = t[o];
            for (null == n && (n = Rs); ++i < e;)(n(r = t[i], u) < 0 || 0 !== n(u, u)) && (u = r, o = i);
            return 0 === n(u, u) ? o : void 0
        }
    }, vf = function (t, n, e) {
        for (var r, i,
                 o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;)i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
        return t
    }, _f = function (t, n) {
        var e, r = t.length, i = -1, o = 0;
        if (null == n)for (; ++i < r;)(e = +t[i]) && (o += e); else for (; ++i < r;)(e = +n(t[i], i, t)) && (o += e);
        return o
    }, gf = function (t) {
        if (!(i = t.length))return [];
        for (var n = -1, e = hf(t, o), r = new Array(e); ++n < e;)for (var i, u = -1,
                                                                           a = r[n] = new Array(i); ++u < i;)a[u] = t[u][n];
        return r
    }, yf = function () {
        return gf(arguments)
    }, mf = Array.prototype.slice, xf = function (t) {
        return t
    }, bf = 1, wf = 2, Mf = 3, Tf = 4, Sf = 1e-6, Nf = {
        value: function () {
        }
    };
    _.prototype = v.prototype = {
        constructor: _, on: function (t, n) {
            var e, r = this._, i = g(t + "", r), o = -1, u = i.length;
            {
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n)throw new Error("invalid callback: " + n);
                    for (; ++o < u;)if (e = (t = i[o]).type) r[e] = m(r[e], t.name, n); else if (null == n)for (e in r)r[e] = m(r[e], t.name, null);
                    return this
                }
                for (; ++o < u;)if ((e = (t = i[o]).type) && (e = y(r[e], t.name)))return e
            }
        }, copy: function () {
            var t = {}, n = this._;
            for (var e in n)t[e] = n[e].slice();
            return new _(t)
        }, call: function (t, n) {
            if ((e = arguments.length - 2) > 0)for (var e, r, i = new Array(e),
                                                        o = 0; o < e; ++o)i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t))throw new Error("unknown type: " + t);
            for (r = this._[t], o = 0, e = r.length; o < e; ++o)r[o].value.apply(n, i)
        }, apply: function (t, n, e) {
            if (!this._.hasOwnProperty(t))throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, o = r.length; i < o; ++i)r[i].value.apply(n, e)
        }
    };
    var kf = "http://www.w3.org/1999/xhtml", Ef = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: kf,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    }, Af = function (t) {
        var n = t += "", e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), Ef.hasOwnProperty(n) ? {
            space: Ef[n],
            local: t
        } : t
    }, Cf = function (t) {
        var n = Af(t);
        return (n.local ? b : x)(n)
    }, zf = 0;
    M.prototype = w.prototype = {
        constructor: M, get: function (t) {
            for (var n = this._; !(n in t);)if (!(t = t.parentNode))return;
            return t[n]
        }, set: function (t, n) {
            return t[this._] = n
        }, remove: function (t) {
            return this._ in t && delete t[this._]
        }, toString: function () {
            return this._
        }
    };
    var Pf = function (t) {
        return function () {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var Lf = document.documentElement;
        if (!Lf.matches) {
            var Rf = Lf.webkitMatchesSelector || Lf.msMatchesSelector || Lf.mozMatchesSelector || Lf.oMatchesSelector;
            Pf = function (t) {
                return function () {
                    return Rf.call(this, t)
                }
            }
        }
    }
    var qf = Pf, Uf = {};
    if (t.event = null, "undefined" != typeof document) {
        "onmouseenter" in document.documentElement || (Uf = {mouseenter: "mouseover", mouseleave: "mouseout"})
    }
    var Df = function (t, n, e) {
        var r, i, o = N(t + ""), u = o.length;
        {
            if (!(arguments.length < 2)) {
                for (a = n ? E : k, null == e && (e = !1), r = 0; r < u; ++r)this.each(a(o[r], n, e));
                return this
            }
            var a = this.node().__on;
            if (a)for (var c, s = 0,
                           f = a.length; s < f; ++s)for (r = 0, c = a[s]; r < u; ++r)if ((i = o[r]).type === c.type && i.name === c.name)return c.value
        }
    }, Of = function () {
        for (var n, e = t.event; n = e.sourceEvent;)e = n;
        return e
    }, Ff = function (t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
        }
        var i = t.getBoundingClientRect();
        return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
    }, If = function (t) {
        var n = Of();
        return n.changedTouches && (n = n.changedTouches[0]), Ff(t, n)
    }, Yf = function (t) {
        return null == t ? C : function () {
            return this.querySelector(t)
        }
    }, Bf = function (t) {
        "function" != typeof t && (t = Yf(t));
        for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)for (var o, u, a = n[i],
                                                                                              c = a.length,
                                                                                              s = r[i] = new Array(c),
                                                                                              f = 0; f < c; ++f)(o = a[f]) && (u = t.call(o, o.__data__, f, a)) && ("__data__" in o && (u.__data__ = o.__data__), s[f] = u);
        return new vt(r, this._parents)
    }, jf = function (t) {
        return null == t ? z : function () {
            return this.querySelectorAll(t)
        }
    }, Hf = function (t) {
        "function" != typeof t && (t = jf(t));
        for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)for (var u, a = n[o], c = a.length,
                                                                                            s = 0; s < c; ++s)(u = a[s]) && (r.push(t.call(u, u.__data__, s, a)), i.push(u));
        return new vt(r, i)
    }, Xf = function (t) {
        "function" != typeof t && (t = qf(t));
        for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)for (var o, u = n[i], a = u.length,
                                                                                              c = r[i] = [],
                                                                                              s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
        return new vt(r, this._parents)
    }, Vf = function (t) {
        return new Array(t.length)
    }, $f = function () {
        return new vt(this._enter || this._groups.map(Vf), this._parents)
    };
    P.prototype = {
        constructor: P, appendChild: function (t) {
            return this._parent.insertBefore(t, this._next)
        }, insertBefore: function (t, n) {
            return this._parent.insertBefore(t, n)
        }, querySelector: function (t) {
            return this._parent.querySelector(t)
        }, querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var Wf = function (t) {
        return function () {
            return t
        }
    }, Zf = "$", Gf = function (t, n) {
        if (!t)return p = new Array(this.size()), s = -1, this.each(function (t) {
            p[++s] = t
        }), p;
        var e = n ? R : L, r = this._parents, i = this._groups;
        "function" != typeof t && (t = Wf(t));
        for (var o = i.length, u = new Array(o), a = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
            var f = r[s], l = i[s], h = l.length, p = t.call(f, f && f.__data__, s, r), d = p.length,
                v = a[s] = new Array(d), _ = u[s] = new Array(d);
            e(f, l, v, _, c[s] = new Array(h), p, n);
            for (var g, y, m = 0, x = 0; m < d; ++m)if (g = v[m]) {
                for (m >= x && (x = m + 1); !(y = _[x]) && ++x < d;);
                g._next = y || null
            }
        }
        return u = new vt(u, r), u._enter = a, u._exit = c, u
    }, Jf = function () {
        return new vt(this._exit || this._groups.map(Vf), this._parents)
    }, Qf = function (t) {
        for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r),
                 a = 0; a < o; ++a)for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l),
                                            p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
        for (; a < r; ++a)u[a] = n[a];
        return new vt(u, this._parents)
    }, Kf = function () {
        for (var t = this._groups, n = -1, e = t.length; ++n < e;)for (var r, i = t[n], o = i.length - 1,
                                                                           u = i[o]; --o >= 0;)(r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
        return this
    }, tl = function (t) {
        function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e
        }

        t || (t = q);
        for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
            for (var u, a = e[o], c = a.length, s = i[o] = new Array(c), f = 0; f < c; ++f)(u = a[f]) && (s[f] = u);
            s.sort(n)
        }
        return new vt(i, this._parents).order()
    }, nl = function () {
        var t = arguments[0];
        return arguments[0] = this, t.apply(null, arguments), this
    }, el = function () {
        var t = new Array(this.size()), n = -1;
        return this.each(function () {
            t[++n] = this
        }), t
    }, rl = function () {
        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
            var u = r[i];
            if (u)return u
        }
        return null
    }, il = function () {
        var t = 0;
        return this.each(function () {
            ++t
        }), t
    }, ol = function () {
        return !this.node()
    }, ul = function (t) {
        for (var n = this._groups, e = 0, r = n.length; e < r; ++e)for (var i, o = n[e], u = 0,
                                                                            a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
        return this
    }, al = function (t, n) {
        var e = Af(t);
        if (arguments.length < 2) {
            var r = this.node();
            return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
        }
        return this.each((null == n ? e.local ? D : U : "function" == typeof n ? e.local ? Y : I : e.local ? F : O)(e, n))
    }, cl = function (t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    }, sl = function (t, n, e) {
        var r;
        return arguments.length > 1 ? this.each((null == n ? B : "function" == typeof n ? H : j)(t, n, null == e ? "" : e)) : cl(r = this.node()).getComputedStyle(r, null).getPropertyValue(t)
    }, fl = function (t, n) {
        return arguments.length > 1 ? this.each((null == n ? X : "function" == typeof n ? $ : V)(t, n)) : this.node()[t]
    };
    G.prototype = {
        add: function (t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        }, remove: function (t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        }, contains: function (t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var ll = function (t, n) {
        var e = W(t + "");
        if (arguments.length < 2) {
            for (var r = Z(this.node()), i = -1, o = e.length; ++i < o;)if (!r.contains(e[i]))return !1;
            return !0
        }
        return this.each(("function" == typeof n ? nt : n ? K : tt)(e, n))
    }, hl = function (t) {
        return arguments.length ? this.each(null == t ? et : ("function" == typeof t ? it : rt)(t)) : this.node().textContent
    }, pl = function (t) {
        return arguments.length ? this.each(null == t ? ot : ("function" == typeof t ? at : ut)(t)) : this.node().innerHTML
    }, dl = function () {
        return this.each(ct)
    }, vl = function () {
        return this.each(st)
    }, _l = function (t) {
        var n = "function" == typeof t ? t : Cf(t);
        return this.select(function () {
            return this.appendChild(n.apply(this, arguments))
        })
    }, gl = function (t, n) {
        var e = "function" == typeof t ? t : Cf(t), r = null == n ? ft : "function" == typeof n ? n : Yf(n);
        return this.select(function () {
            return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
        })
    }, yl = function () {
        return this.each(lt)
    }, ml = function (t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__
    }, xl = function (t, n) {
        return this.each(("function" == typeof n ? dt : pt)(t, n))
    }, bl = [null];
    vt.prototype = _t.prototype = {
        constructor: vt,
        select: Bf,
        selectAll: Hf,
        filter: Xf,
        data: Gf,
        enter: $f,
        exit: Jf,
        merge: Qf,
        order: Kf,
        sort: tl,
        call: nl,
        nodes: el,
        node: rl,
        size: il,
        empty: ol,
        each: ul,
        attr: al,
        style: sl,
        property: fl,
        classed: ll,
        text: hl,
        html: pl,
        raise: dl,
        lower: vl,
        append: _l,
        insert: gl,
        remove: yl,
        datum: ml,
        on: Df,
        dispatch: xl
    };
    var wl = function (t) {
        return "string" == typeof t ? new vt([[document.querySelector(t)]], [document.documentElement]) : new vt([[t]], bl)
    }, Ml = function (t) {
        return "string" == typeof t ? new vt([document.querySelectorAll(t)], [document.documentElement]) : new vt([null == t ? [] : t], bl)
    }, Tl = function (t, n, e) {
        arguments.length < 3 && (e = n, n = Of().changedTouches);
        for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)if ((r = n[i]).identifier === e)return Ff(t, r);
        return null
    }, Sl = function (t, n) {
        null == n && (n = Of().touches);
        for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)i[e] = Ff(t, n[e]);
        return i
    }, Nl = function () {
        t.event.preventDefault(), t.event.stopImmediatePropagation()
    }, kl = function (t) {
        var n = t.document.documentElement, e = wl(t).on("dragstart.drag", Nl, !0);
        "onselectstart" in n ? e.on("selectstart.drag", Nl, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
    }, El = function (t) {
        return function () {
            return t
        }
    };
    mt.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    };
    var Al = function () {
            function n(t) {
                t.on("mousedown.drag", e).on("touchstart.drag", o).on("touchmove.drag", u).on("touchend.drag touchcancel.drag", a).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function e() {
                if (!f && l.apply(this, arguments)) {
                    var n = c("mouse", h.apply(this, arguments), If, this, arguments);
                    n && (wl(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0), kl(t.event.view), gt(), s = !1, n("start"))
                }
            }

            function r() {
                Nl(), s = !0, d.mouse("drag")
            }

            function i() {
                wl(t.event.view).on("mousemove.drag mouseup.drag", null), yt(t.event.view, s), Nl(), d.mouse("end")
            }

            function o() {
                if (l.apply(this, arguments)) {
                    var n, e, r = t.event.changedTouches, i = h.apply(this, arguments), o = r.length;
                    for (n = 0; n < o; ++n)(e = c(r[n].identifier, i, Tl, this, arguments)) && (gt(), e("start"))
                }
            }

            function u() {
                var n, e, r = t.event.changedTouches, i = r.length;
                for (n = 0; n < i; ++n)(e = d[r[n].identifier]) && (Nl(), e("drag"))
            }

            function a() {
                var n, e, r = t.event.changedTouches, i = r.length;
                for (f && clearTimeout(f), f = setTimeout(function () {
                    f = null
                }, 500), n = 0; n < i; ++n)(e = d[r[n].identifier]) && (gt(), e("end"))
            }

            function c(e, r, i, o, u) {
                var a, c, s, f = i(r, e), l = _.copy();
                if (A(new mt(n, "beforestart", a, e, g, f[0], f[1], 0, 0, l), function () {
                        return null != (t.event.subject = a = p.apply(o, u)) && (c = a.x - f[0] || 0, s = a.y - f[1] || 0, !0)
                    }))return function t(h) {
                    var p, v = f;
                    switch (h) {
                        case"start":
                            d[e] = t, p = g++;
                            break;
                        case"end":
                            delete d[e], --g;
                        case"drag":
                            f = i(r, e), p = g
                    }
                    A(new mt(n, h, a, e, p, f[0] + c, f[1] + s, f[0] - v[0], f[1] - v[1], l), l.apply, l, [h, o, u])
                }
            }

            var s, f, l = xt, h = bt, p = wt, d = {}, _ = v("start", "drag", "end"), g = 0;
            return n.filter = function (t) {
                return arguments.length ? (l = "function" == typeof t ? t : El(!!t), n) : l
            }, n.container = function (t) {
                return arguments.length ? (h = "function" == typeof t ? t : El(t), n) : h
            }, n.subject = function (t) {
                return arguments.length ? (p = "function" == typeof t ? t : El(t), n) : p
            }, n.on = function () {
                var t = _.on.apply(_, arguments);
                return t === _ ? n : t
            }, n
        }, Cl = function (t, n, e) {
            t.prototype = n.prototype = e, e.constructor = t
        }, zl = "\\s*([+-]?\\d+)\\s*", Pl = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Ll = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rl = /^#([0-9a-f]{3})$/, ql = /^#([0-9a-f]{6})$/,
        Ul = new RegExp("^rgb\\(" + [zl, zl, zl] + "\\)$"), Dl = new RegExp("^rgb\\(" + [Ll, Ll, Ll] + "\\)$"),
        Ol = new RegExp("^rgba\\(" + [zl, zl, zl, Pl] + "\\)$"),
        Fl = new RegExp("^rgba\\(" + [Ll, Ll, Ll, Pl] + "\\)$"), Il = new RegExp("^hsl\\(" + [Pl, Ll, Ll] + "\\)$"),
        Yl = new RegExp("^hsla\\(" + [Pl, Ll, Ll, Pl] + "\\)$"), Bl = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
    Cl(Tt, St, {
        displayable: function () {
            return this.rgb().displayable()
        }, toString: function () {
            return this.rgb() + ""
        }
    }), Cl(Ct, At, Mt(Tt, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ct(this.r * t, this.g * t, this.b * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Ct(this.r * t, this.g * t, this.b * t, this.opacity)
        }, rgb: function () {
            return this
        }, displayable: function () {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        }, toString: function () {
            var t = this.opacity;
            return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
    })), Cl(Rt, Lt, Mt(Tt, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Rt(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Rt(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = this.h % 360 + 360 * (this.h < 0), n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l,
                r = e + (e < .5 ? e : 1 - e) * n, i = 2 * e - r;
            return new Ct(qt(t >= 240 ? t - 240 : t + 120, i, r), qt(t, i, r), qt(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        }, displayable: function () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var jl = Math.PI / 180, Hl = 180 / Math.PI, Xl = .95047, Vl = 1, $l = 1.08883, Wl = 4 / 29, Zl = 6 / 29,
        Gl = 3 * Zl * Zl, Jl = Zl * Zl * Zl;
    Cl(Ot, Dt, Mt(Tt, {
        brighter: function (t) {
            return new Ot(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, darker: function (t) {
            return new Ot(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, rgb: function () {
            var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200;
            return t = Vl * It(t), n = Xl * It(n), e = $l * It(e), new Ct(Yt(3.2404542 * n - 1.5371385 * t - .4985314 * e), Yt(-.969266 * n + 1.8760108 * t + .041556 * e), Yt(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
        }
    })), Cl(Xt, Ht, Mt(Tt, {
        brighter: function (t) {
            return new Xt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        }, darker: function (t) {
            return new Xt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        }, rgb: function () {
            return Ut(this).rgb()
        }
    }));
    var Ql = -.14861, Kl = 1.78277, th = -.29227, nh = -.90649, eh = 1.97294, rh = eh * nh, ih = eh * Kl,
        oh = Kl * th - nh * Ql;
    Cl(Wt, $t, Mt(Tt, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Wt(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Wt(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * jl, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t), i = Math.sin(t);
            return new Ct(255 * (n + e * (Ql * r + Kl * i)), 255 * (n + e * (th * r + nh * i)), 255 * (n + e * (eh * r)), this.opacity)
        }
    }));
    var uh, ah, ch, sh, fh, lh, hh = function (t) {
            var n = t.length - 1;
            return function (e) {
                var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n), i = t[r], o = t[r + 1],
                    u = r > 0 ? t[r - 1] : 2 * i - o, a = r < n - 1 ? t[r + 2] : 2 * o - i;
                return Zt((e - r / n) * n, u, i, o, a)
            }
        }, ph = function (t) {
            var n = t.length;
            return function (e) {
                var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n), i = t[(r + n - 1) % n], o = t[r % n], u = t[(r + 1) % n],
                    a = t[(r + 2) % n];
                return Zt((e - r / n) * n, i, o, u, a)
            }
        }, dh = function (t) {
            return function () {
                return t
            }
        }, vh = function t(n) {
            function e(t, n) {
                var e = r((t = At(t)).r, (n = At(n)).r), i = r(t.g, n.g), o = r(t.b, n.b), u = tn(t.opacity, n.opacity);
                return function (n) {
                    return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + ""
                }
            }

            var r = Kt(n);
            return e.gamma = t, e
        }(1), _h = nn(hh), gh = nn(ph), yh = function (t, n) {
            var e, r = n ? n.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(r), u = new Array(r);
            for (e = 0; e < i; ++e)o[e] = Sh(t[e], n[e]);
            for (; e < r; ++e)u[e] = n[e];
            return function (t) {
                for (e = 0; e < i; ++e)u[e] = o[e](t);
                return u
            }
        }, mh = function (t, n) {
            var e = new Date;
            return t = +t, n -= t, function (r) {
                return e.setTime(t + n * r), e
            }
        }, xh = function (t, n) {
            return t = +t, n -= t, function (e) {
                return t + n * e
            }
        }, bh = function (t, n) {
            var e, r = {}, i = {};
            null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
            for (e in n)e in t ? r[e] = Sh(t[e], n[e]) : i[e] = n[e];
            return function (t) {
                for (e in r)i[e] = r[e](t);
                return i
            }
        }, wh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Mh = new RegExp(wh.source, "g"), Th = function (t, n) {
            var e, r, i, o = wh.lastIndex = Mh.lastIndex = 0, u = -1, a = [], c = [];
            for (t += "", n += ""; (e = wh.exec(t)) && (r = Mh.exec(n));)(i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, c.push({
                i: u,
                x: xh(e, r)
            })), o = Mh.lastIndex;
            return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? c[0] ? rn(c[0].x) : en(n) : (n = c.length, function (t) {
                for (var e, r = 0; r < n; ++r)a[(e = c[r]).i] = e.x(t);
                return a.join("")
            })
        }, Sh = function (t, n) {
            var e, r = typeof n;
            return null == n || "boolean" === r ? dh(n) : ("number" === r ? xh : "string" === r ? (e = St(n)) ? (n = e, vh) : Th : n instanceof St ? vh : n instanceof Date ? mh : Array.isArray(n) ? yh : isNaN(n) ? bh : xh)(t, n)
        }, Nh = function (t, n) {
            return t = +t, n -= t, function (e) {
                return Math.round(t + n * e)
            }
        }, kh = 180 / Math.PI, Eh = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1},
        Ah = function (t, n, e, r, i, o) {
            var u, a, c;
            return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
                translateX: i,
                translateY: o,
                rotate: Math.atan2(n, t) * kh,
                skewX: Math.atan(c) * kh,
                scaleX: u,
                scaleY: a
            }
        }, Ch = an(on, "px, ", "px)", "deg)"), zh = an(un, ", ", ")", ")"), Ph = Math.SQRT2, Lh = function (t, n) {
            var e, r, i = t[0], o = t[1], u = t[2], a = n[0], c = n[1], s = n[2], f = a - i, l = c - o, h = f * f + l * l;
            if (h < 1e-12) r = Math.log(s / u) / Ph, e = function (t) {
                return [i + t * f, o + t * l, u * Math.exp(Ph * t * r)]
            }; else {
                var p = Math.sqrt(h), d = (s * s - u * u + 4 * h) / (2 * u * 2 * p),
                    v = (s * s - u * u - 4 * h) / (2 * s * 2 * p), _ = Math.log(Math.sqrt(d * d + 1) - d),
                    g = Math.log(Math.sqrt(v * v + 1) - v);
                r = (g - _) / Ph, e = function (t) {
                    var n = t * r, e = cn(_), a = u / (2 * p) * (e * fn(Ph * n + _) - sn(_));
                    return [i + a * f, o + a * l, u * e / cn(Ph * n + _)]
                }
            }
            return e.duration = 1e3 * r, e
        }, Rh = ln(Qt), qh = ln(tn), Uh = pn(Qt), Dh = pn(tn), Oh = dn(Qt), Fh = dn(tn), Ih = function (t, n) {
            for (var e = new Array(n), r = 0; r < n; ++r)e[r] = t(r / (n - 1));
            return e
        }, Yh = 0, Bh = 0, jh = 0, Hh = 1e3, Xh = 0, Vh = 0, $h = 0,
        Wh = "object" == typeof performance && performance.now ? performance : Date,
        Zh = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
            setTimeout(t, 17)
        };
    gn.prototype = yn.prototype = {
        constructor: gn, restart: function (t, n, e) {
            if ("function" != typeof t)throw new TypeError("callback is not a function");
            e = (null == e ? vn() : +e) + (null == n ? 0 : +n), this._next || lh === this || (lh ? lh._next = this : fh = this, lh = this), this._call = t, this._time = e, Mn()
        }, stop: function () {
            this._call && (this._call = null, this._time = 1 / 0, Mn())
        }
    };
    var Gh = function (t, n, e) {
            var r = new gn;
            return n = null == n ? 0 : +n, r.restart(function (e) {
                r.stop(), t(e + n)
            }, n, e), r
        }, Jh = function (t, n, e) {
            var r = new gn, i = n;
            return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? vn() : +e, r.restart(function o(u) {
                u += i, r.restart(o, i += n, e), t(u)
            }, n, e), r)
        }, Qh = v("start", "end", "interrupt"), Kh = [], tp = 0, np = 1, ep = 2, rp = 3, ip = 4, op = 5, up = 6,
        ap = function (t, n, e, r, i, o) {
            var u = t.__transition;
            if (u) {
                if (e in u)return
            } else t.__transition = {};
            kn(t, e, {
                name: n,
                index: r,
                group: i,
                on: Qh,
                tween: Kh,
                time: o.time,
                delay: o.delay,
                duration: o.duration,
                ease: o.ease,
                timer: null,
                state: tp
            })
        }, cp = function (t, n) {
            var e, r, i, o = t.__transition, u = !0;
            if (o) {
                n = null == n ? null : n + "";
                for (i in o)(e = o[i]).name === n ? (r = e.state > ep && e.state < op, e.state = up, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                u && delete t.__transition
            }
        }, sp = function (t) {
            return this.each(function () {
                cp(this, t)
            })
        }, fp = function (t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = Nn(this.node(), e).tween, o = 0,
                         u = i.length; o < u; ++o)if ((r = i[o]).name === t)return r.value;
                return null
            }
            return this.each((null == n ? En : An)(e, t, n))
        }, lp = function (t, n) {
            var e;
            return ("number" == typeof n ? xh : n instanceof St ? vh : (e = St(n)) ? (n = e, vh) : Th)(t, n)
        }, hp = function (t, n) {
            var e = Af(t), r = "transform" === e ? zh : lp;
            return this.attrTween(t, "function" == typeof n ? (e.local ? Un : qn)(e, r, Cn(this, "attr." + t, n)) : null == n ? (e.local ? Pn : zn)(e) : (e.local ? Rn : Ln)(e, r, n + ""))
        }, pp = function (t, n) {
            var e = "attr." + t;
            if (arguments.length < 2)return (e = this.tween(e)) && e._value;
            if (null == n)return this.tween(e, null);
            if ("function" != typeof n)throw new Error;
            var r = Af(t);
            return this.tween(e, (r.local ? Dn : On)(r, n))
        }, dp = function (t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Fn : In)(n, t)) : Nn(this.node(), n).delay
        }, vp = function (t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? Yn : Bn)(n, t)) : Nn(this.node(), n).duration
        }, _p = function (t) {
            var n = this._id;
            return arguments.length ? this.each(jn(n, t)) : Nn(this.node(), n).ease
        }, gp = function (t) {
            "function" != typeof t && (t = qf(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)for (var o, u = n[i], a = u.length,
                                                                                                  c = r[i] = [],
                                                                                                  s = 0; s < a; ++s)(o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
            return new te(r, this._parents, this._name, this._id)
        }, yp = function (t) {
            if (t._id !== this._id)throw new Error;
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r),
                     a = 0; a < o; ++a)for (var c, s = n[a], f = e[a], l = s.length, h = u[a] = new Array(l),
                                                p = 0; p < l; ++p)(c = s[p] || f[p]) && (h[p] = c);
            for (; a < r; ++a)u[a] = n[a];
            return new te(u, this._parents, this._name, this._id)
        }, mp = function (t, n) {
            var e = this._id;
            return arguments.length < 2 ? Nn(this.node(), e).on.on(t) : this.each(Xn(e, t, n))
        }, xp = function () {
            return this.on("end.remove", Vn(this._id))
        }, bp = function (t) {
            var n = this._name, e = this._id;
            "function" != typeof t && (t = Yf(t));
            for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)for (var a, c, s = r[u],
                                                                                                  f = s.length,
                                                                                                  l = o[u] = new Array(f),
                                                                                                  h = 0; h < f; ++h)(a = s[h]) && (c = t.call(a, a.__data__, h, s)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, ap(l[h], n, e, h, l, Nn(a, e)));
            return new te(o, this._parents, n, e)
        }, wp = function (t) {
            var n = this._name, e = this._id;
            "function" != typeof t && (t = jf(t));
            for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)for (var c, s = r[a], f = s.length,
                                                                                                l = 0; l < f; ++l)if (c = s[l]) {
                for (var h, p = t.call(c, c.__data__, l, s), d = Nn(c, e), v = 0,
                         _ = p.length; v < _; ++v)(h = p[v]) && ap(h, n, e, v, p, d);
                o.push(p), u.push(c)
            }
            return new te(o, u, n, e)
        }, Mp = _t.prototype.constructor, Tp = function () {
            return new Mp(this._groups, this._parents)
        }, Sp = function (t, n, e) {
            var r = "transform" == (t += "") ? Ch : lp;
            return null == n ? this.styleTween(t, $n(t, r)).on("end.style." + t, Wn(t)) : this.styleTween(t, "function" == typeof n ? Gn(t, r, Cn(this, "style." + t, n)) : Zn(t, r, n + ""), e)
        }, Np = function (t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2)return (r = this.tween(r)) && r._value;
            if (null == n)return this.tween(r, null);
            if ("function" != typeof n)throw new Error;
            return this.tween(r, Jn(t, n, null == e ? "" : e))
        }, kp = function (t) {
            return this.tween("text", "function" == typeof t ? Kn(Cn(this, "text", t)) : Qn(null == t ? "" : t + ""))
        }, Ep = function () {
            for (var t = this._name, n = this._id, e = ee(), r = this._groups, i = r.length, o = 0; o < i; ++o)for (var u,
                                                                                                                        a = r[o],
                                                                                                                        c = a.length,
                                                                                                                        s = 0; s < c; ++s)if (u = a[s]) {
                var f = Nn(u, n);
                ap(u, t, e, s, a, {time: f.time + f.delay + f.duration, delay: 0, duration: f.duration, ease: f.ease})
            }
            return new te(r, this._parents, t, e)
        }, Ap = 0, Cp = _t.prototype;
    te.prototype = ne.prototype = {
        constructor: te,
        select: bp,
        selectAll: wp,
        filter: gp,
        merge: yp,
        selection: Tp,
        transition: Ep,
        call: Cp.call,
        nodes: Cp.nodes,
        node: Cp.node,
        size: Cp.size,
        empty: Cp.empty,
        each: Cp.each,
        on: mp,
        attr: hp,
        attrTween: pp,
        style: Sp,
        styleTween: Np,
        text: kp,
        remove: xp,
        tween: fp,
        delay: dp,
        duration: vp,
        ease: _p
    };
    var zp = function t(n) {
            function e(t) {
                return Math.pow(t, n)
            }

            return n = +n, e.exponent = t, e
        }(3), Pp = function t(n) {
            function e(t) {
                return 1 - Math.pow(1 - t, n)
            }

            return n = +n, e.exponent = t, e
        }(3), Lp = function t(n) {
            function e(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            }

            return n = +n, e.exponent = t, e
        }(3), Rp = Math.PI, qp = Rp / 2, Up = 4 / 11, Dp = 6 / 11, Op = 8 / 11, Fp = .75, Ip = 9 / 11, Yp = 10 / 11,
        Bp = .9375, jp = 21 / 22, Hp = 63 / 64, Xp = 1 / Up / Up, Vp = function t(n) {
            function e(t) {
                return t * t * ((n + 1) * t - n)
            }

            return n = +n, e.overshoot = t, e
        }(1.70158), $p = function t(n) {
            function e(t) {
                return --t * t * ((n + 1) * t + n) + 1
            }

            return n = +n, e.overshoot = t, e
        }(1.70158), Wp = function t(n) {
            function e(t) {
                return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            }

            return n = +n, e.overshoot = t, e
        }(1.70158), Zp = 2 * Math.PI, Gp = function t(n, e) {
            function r(t) {
                return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
            }

            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Zp);
            return r.amplitude = function (n) {
                return t(n, e * Zp)
            }, r.period = function (e) {
                return t(n, e)
            }, r
        }(1, .3), Jp = function t(n, e) {
            function r(t) {
                return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
            }

            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Zp);
            return r.amplitude = function (n) {
                return t(n, e * Zp)
            }, r.period = function (e) {
                return t(n, e)
            }, r
        }(1, .3), Qp = function t(n, e) {
            function r(t) {
                return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
            }

            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Zp);
            return r.amplitude = function (n) {
                return t(n, e * Zp)
            }, r.period = function (e) {
                return t(n, e)
            }, r
        }(1, .3), Kp = {time: null, delay: 0, duration: 250, ease: se}, td = function (t) {
            var n, e;
            t instanceof te ? (n = t._id, t = t._name) : (n = ee(), (e = Kp).time = vn(), t = null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)for (var u, a = r[o], c = a.length,
                                                                                s = 0; s < c; ++s)(u = a[s]) && ap(u, t, n, s, a, e || we(u, n));
            return new te(r, this._parents, t, n)
        };
    _t.prototype.interrupt = sp, _t.prototype.transition = td;
    var nd = [null], ed = function (t, n) {
            var e, r, i = t.__transition;
            if (i) {
                n = null == n ? null : n + "";
                for (r in i)if ((e = i[r]).state > np && e.name === n)return new te([[t]], nd, n, +r)
            }
            return null
        }, rd = function (t) {
            return function () {
                return t
            }
        }, id = function (t, n, e) {
            this.target = t, this.type = n, this.selection = e
        }, od = function () {
            t.event.preventDefault(), t.event.stopImmediatePropagation()
        }, ud = {name: "drag"}, ad = {name: "space"}, cd = {name: "handle"}, sd = {name: "center"}, fd = {
            name: "x", handles: ["e", "w"].map(Te), input: function (t, n) {
                return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
            }, output: function (t) {
                return t && [t[0][0], t[1][0]]
            }
        }, ld = {
            name: "y", handles: ["n", "s"].map(Te), input: function (t, n) {
                return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
            }, output: function (t) {
                return t && [t[0][1], t[1][1]]
            }
        }, hd = {
            name: "xy", handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Te), input: function (t) {
                return t
            }, output: function (t) {
                return t
            }
        }, pd = {
            overlay: "crosshair",
            selection: "move",
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        }, dd = {e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se"},
        vd = {n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw"},
        _d = {overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1},
        gd = {overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1}, yd = function () {
            return Pe(hd)
        }, md = Math.cos, xd = Math.sin, bd = Math.PI, wd = bd / 2, Md = 2 * bd, Td = Math.max, Sd = function () {
            function t(t) {
                var o, u, a, c, s, f, l = t.length, h = [], p = Js(l), d = [], v = [], _ = v.groups = new Array(l),
                    g = new Array(l * l);
                for (o = 0, s = -1; ++s < l;) {
                    for (u = 0, f = -1; ++f < l;)u += t[s][f];
                    h.push(u), d.push(Js(l)), o += u
                }
                for (e && p.sort(function (t, n) {
                    return e(h[t], h[n])
                }), r && d.forEach(function (n, e) {
                    n.sort(function (n, i) {
                        return r(t[e][n], t[e][i])
                    })
                }), o = Td(0, Md - n * l) / o, c = o ? n : Md / l, u = 0, s = -1; ++s < l;) {
                    for (a = u, f = -1; ++f < l;) {
                        var y = p[s], m = d[y][f], x = t[y][m], b = u, w = u += x * o;
                        g[m * l + y] = {index: y, subindex: m, startAngle: b, endAngle: w, value: x}
                    }
                    _[y] = {index: y, startAngle: a, endAngle: u, value: h[y]}, u += c
                }
                for (s = -1; ++s < l;)for (f = s - 1; ++f < l;) {
                    var M = g[f * l + s], T = g[s * l + f];
                    (M.value || T.value) && v.push(M.value < T.value ? {source: T, target: M} : {source: M, target: T})
                }
                return i ? v.sort(i) : v
            }

            var n = 0, e = null, r = null, i = null;
            return t.padAngle = function (e) {
                return arguments.length ? (n = Td(0, e), t) : n
            }, t.sortGroups = function (n) {
                return arguments.length ? (e = n, t) : e
            }, t.sortSubgroups = function (n) {
                return arguments.length ? (r = n, t) : r
            }, t.sortChords = function (n) {
                return arguments.length ? (null == n ? i = null : (i = Le(n))._ = n, t) : i && i._
            }, t
        }, Nd = Array.prototype.slice, kd = function (t) {
            return function () {
                return t
            }
        }, Ed = Math.PI, Ad = 2 * Ed, Cd = Ad - 1e-6;
    Re.prototype = qe.prototype = {
        constructor: Re, moveTo: function (t, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
        }, closePath: function () {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        }, lineTo: function (t, n) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
        }, quadraticCurveTo: function (t, n, e, r) {
            this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
        }, bezierCurveTo: function (t, n, e, r, i, o) {
            this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
        }, arcTo: function (t, n, e, r, i) {
            t = +t, n = +n, e = +e, r = +r, i = +i;
            var o = this._x1, u = this._y1, a = e - t, c = r - n, s = o - t, f = u - n, l = s * s + f * f;
            if (i < 0)throw new Error("negative radius: " + i);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n); else if (l > 1e-6)if (Math.abs(f * a - c * s) > 1e-6 && i) {
                var h = e - o, p = r - u, d = a * a + c * c, v = h * h + p * p, _ = Math.sqrt(d), g = Math.sqrt(l),
                    y = i * Math.tan((Ed - Math.acos((d + l - v) / (2 * _ * g))) / 2), m = y / g, x = y / _;
                Math.abs(m - 1) > 1e-6 && (this._ += "L" + (t + m * s) + "," + (n + m * f)), this._ += "A" + i + "," + i + ",0,0," + +(f * h > s * p) + "," + (this._x1 = t + x * a) + "," + (this._y1 = n + x * c)
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n); else;
        }, arc: function (t, n, e, r, i, o) {
            t = +t, n = +n, e = +e;
            var u = e * Math.cos(r), a = e * Math.sin(r), c = t + u, s = n + a, f = 1 ^ o, l = o ? r - i : i - r;
            if (e < 0)throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + c + "," + s : (Math.abs(this._x1 - c) > 1e-6 || Math.abs(this._y1 - s) > 1e-6) && (this._ += "L" + c + "," + s), e && (l < 0 && (l = l % Ad + Ad), l > Cd ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (t - u) + "," + (n - a) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = c) + "," + (this._y1 = s) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= Ed) + "," + f + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
        }, rect: function (t, n, e, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
        }, toString: function () {
            return this._
        }
    };
    var zd = function () {
        function t() {
            var t, a = Nd.call(arguments), c = n.apply(this, a), s = e.apply(this, a),
                f = +r.apply(this, (a[0] = c, a)), l = i.apply(this, a) - wd, h = o.apply(this, a) - wd, p = f * md(l),
                d = f * xd(l), v = +r.apply(this, (a[0] = s, a)), _ = i.apply(this, a) - wd, g = o.apply(this, a) - wd;
            if (u || (u = t = qe()), u.moveTo(p, d), u.arc(0, 0, f, l, h), l === _ && h === g || (u.quadraticCurveTo(0, 0, v * md(_), v * xd(_)), u.arc(0, 0, v, _, g)), u.quadraticCurveTo(0, 0, p, d), u.closePath(), t)return u = null, t + "" || null
        }

        var n = Ue, e = De, r = Oe, i = Fe, o = Ie, u = null;
        return t.radius = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : kd(+n), t) : r
        }, t.startAngle = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : kd(+n), t) : i
        }, t.endAngle = function (n) {
            return arguments.length ? (o = "function" == typeof n ? n : kd(+n), t) : o
        }, t.source = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.target = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.context = function (n) {
            return arguments.length ? (u = null == n ? null : n, t) : u
        }, t
    };
    Ye.prototype = Be.prototype = {
        constructor: Ye, has: function (t) {
            return "$" + t in this
        }, get: function (t) {
            return this["$" + t]
        }, set: function (t, n) {
            return this["$" + t] = n, this
        }, remove: function (t) {
            var n = "$" + t;
            return n in this && delete this[n]
        }, clear: function () {
            for (var t in this)"$" === t[0] && delete this[t]
        }, keys: function () {
            var t = [];
            for (var n in this)"$" === n[0] && t.push(n.slice(1));
            return t
        }, values: function () {
            var t = [];
            for (var n in this)"$" === n[0] && t.push(this[n]);
            return t
        }, entries: function () {
            var t = [];
            for (var n in this)"$" === n[0] && t.push({key: n.slice(1), value: this[n]});
            return t
        }, size: function () {
            var t = 0;
            for (var n in this)"$" === n[0] && ++t;
            return t
        }, empty: function () {
            for (var t in this)if ("$" === t[0])return !1;
            return !0
        }, each: function (t) {
            for (var n in this)"$" === n[0] && t(this[n], n.slice(1), this)
        }
    };
    var Pd = function () {
        function t(n, i, u, a) {
            if (i >= o.length)return null != r ? r(n) : null != e ? n.sort(e) : n;
            for (var c, s, f, l = -1, h = n.length, p = o[i++], d = Be(),
                     v = u(); ++l < h;)(f = d.get(c = p(s = n[l]) + "")) ? f.push(s) : d.set(c, [s]);
            return d.each(function (n, e) {
                a(v, e, t(n, i, u, a))
            }), v
        }

        function n(t, e) {
            if (++e > o.length)return t;
            var i, a = u[e - 1];
            return null != r && e >= o.length ? i = t.entries() : (i = [], t.each(function (t, r) {
                i.push({key: r, values: n(t, e)})
            })), null != a ? i.sort(function (t, n) {
                return a(t.key, n.key)
            }) : i
        }

        var e, r, i, o = [], u = [];
        return i = {
            object: function (n) {
                return t(n, 0, je, He)
            }, map: function (n) {
                return t(n, 0, Xe, Ve)
            }, entries: function (e) {
                return n(t(e, 0, Xe, Ve), 0)
            }, key: function (t) {
                return o.push(t), i
            }, sortKeys: function (t) {
                return u[o.length - 1] = t, i
            }, sortValues: function (t) {
                return e = t, i
            }, rollup: function (t) {
                return r = t, i
            }
        }
    }, Ld = Be.prototype;
    $e.prototype = We.prototype = {
        constructor: $e, has: Ld.has, add: function (t) {
            return t += "", this["$" + t] = t, this
        }, remove: Ld.remove, clear: Ld.clear, values: Ld.keys, size: Ld.size, empty: Ld.empty, each: Ld.each
    };
    var Rd = function (t) {
            var n = [];
            for (var e in t)n.push(e);
            return n
        }, qd = function (t) {
            var n = [];
            for (var e in t)n.push(t[e]);
            return n
        }, Ud = function (t) {
            var n = [];
            for (var e in t)n.push({key: e, value: t[e]});
            return n
        }, Dd = function (t) {
            function n(t, n) {
                var r, i, o = e(t, function (t, e) {
                    if (r)return r(t, e - 1);
                    i = t, r = n ? Ge(t, n) : Ze(t)
                });
                return o.columns = i, o
            }

            function e(t, n) {
                function e() {
                    if (f >= s)return u;
                    if (i)return i = !1, o;
                    var n, e = f;
                    if (34 === t.charCodeAt(e)) {
                        for (var r = e; r++ < s;)if (34 === t.charCodeAt(r)) {
                            if (34 !== t.charCodeAt(r + 1))break;
                            ++r
                        }
                        return f = r + 2, n = t.charCodeAt(r + 1), 13 === n ? (i = !0, 10 === t.charCodeAt(r + 2) && ++f) : 10 === n && (i = !0), t.slice(e + 1, r).replace(/""/g, '"')
                    }
                    for (; f < s;) {
                        var a = 1;
                        if (10 === (n = t.charCodeAt(f++))) i = !0; else if (13 === n) i = !0, 10 === t.charCodeAt(f) && (++f, ++a); else if (n !== c)continue;
                        return t.slice(e, f - a)
                    }
                    return t.slice(e)
                }

                for (var r, i, o = {}, u = {}, a = [], s = t.length, f = 0, l = 0; (r = e()) !== u;) {
                    for (var h = []; r !== o && r !== u;)h.push(r), r = e();
                    n && null == (h = n(h, l++)) || a.push(h)
                }
                return a
            }

            function r(n, e) {
                return null == e && (e = Je(n)), [e.map(u).join(t)].concat(n.map(function (n) {
                    return e.map(function (t) {
                        return u(n[t])
                    }).join(t)
                })).join("\n")
            }

            function i(t) {
                return t.map(o).join("\n")
            }

            function o(n) {
                return n.map(u).join(t)
            }

            function u(t) {
                return null == t ? "" : a.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t
            }

            var a = new RegExp('["' + t + "\n\r]"), c = t.charCodeAt(0);
            return {parse: n, parseRows: e, format: r, formatRows: i}
        }, Od = Dd(","), Fd = Od.parse, Id = Od.parseRows, Yd = Od.format, Bd = Od.formatRows, jd = Dd("\t"), Hd = jd.parse,
        Xd = jd.parseRows, Vd = jd.format, $d = jd.formatRows, Wd = function (t, n) {
            function e() {
                var e, i, o = r.length, u = 0, a = 0;
                for (e = 0; e < o; ++e)i = r[e], u += i.x, a += i.y;
                for (u = u / o - t, a = a / o - n, e = 0; e < o; ++e)i = r[e], i.x -= u, i.y -= a
            }

            var r;
            return null == t && (t = 0), null == n && (n = 0), e.initialize = function (t) {
                r = t
            }, e.x = function (n) {
                return arguments.length ? (t = +n, e) : t
            }, e.y = function (t) {
                return arguments.length ? (n = +t, e) : n
            }, e
        }, Zd = function (t) {
            return function () {
                return t
            }
        }, Gd = function () {
            return 1e-6 * (Math.random() - .5)
        }, Jd = function (t) {
            var n = +this._x.call(null, t), e = +this._y.call(null, t);
            return Qe(this.cover(n, e), n, e, t)
        }, Qd = function (t, n) {
            if (isNaN(t = +t) || isNaN(n = +n))return this;
            var e = this._x0, r = this._y0, i = this._x1, o = this._y1;
            if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1; else {
                if (!(e > t || t > i || r > n || n > o))return this;
                var u, a, c = i - e, s = this._root;
                switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {
                    case 0:
                        do {
                            u = new Array(4), u[a] = s, s = u
                        } while (c *= 2, i = e + c, o = r + c, t > i || n > o);
                        break;
                    case 1:
                        do {
                            u = new Array(4), u[a] = s, s = u
                        } while (c *= 2, e = i - c, o = r + c, e > t || n > o);
                        break;
                    case 2:
                        do {
                            u = new Array(4), u[a] = s, s = u
                        } while (c *= 2, i = e + c, r = o - c, t > i || r > n);
                        break;
                    case 3:
                        do {
                            u = new Array(4), u[a] = s, s = u
                        } while (c *= 2, e = i - c, r = o - c, e > t || r > n)
                }
                this._root && this._root.length && (this._root = s)
            }
            return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
        }, Kd = function () {
            var t = [];
            return this.visit(function (n) {
                if (!n.length)do {
                    t.push(n.data)
                } while (n = n.next)
            }), t
        }, tv = function (t) {
            return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
        }, nv = function (t, n, e, r, i) {
            this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
        }, ev = function (t, n, e) {
            var r, i, o, u, a, c, s, f = this._x0, l = this._y0, h = this._x1, p = this._y1, d = [], v = this._root;
            for (v && d.push(new nv(v, f, l, h, p)), null == e ? e = 1 / 0 : (f = t - e, l = n - e, h = t + e, p = n + e, e *= e); c = d.pop();)if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > p || (u = c.x1) < f || (a = c.y1) < l))if (v.length) {
                var _ = (i + u) / 2, g = (o + a) / 2;
                d.push(new nv(v[3], _, g, u, a), new nv(v[2], i, g, _, a), new nv(v[1], _, o, u, g), new nv(v[0], i, o, _, g)), (s = (n >= g) << 1 | t >= _) && (c = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - s], d[d.length - 1 - s] = c)
            } else {
                var y = t - +this._x.call(null, v.data), m = n - +this._y.call(null, v.data), x = y * y + m * m;
                if (x < e) {
                    var b = Math.sqrt(e = x);
                    f = t - b, l = n - b, h = t + b, p = n + b, r = v.data
                }
            }
            return r
        }, rv = function (t) {
            if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t)))return this;
            var n, e, r, i, o, u, a, c, s, f, l, h, p = this._root, d = this._x0, v = this._y0, _ = this._x1, g = this._y1;
            if (!p)return this;
            if (p.length)for (; ;) {
                if ((s = o >= (a = (d + _) / 2)) ? d = a : _ = a, (f = u >= (c = (v + g) / 2)) ? v = c : g = c, n = p, !(p = p[l = f << 1 | s]))return this;
                if (!p.length)break;
                (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
            }
            for (; p.data !== t;)if (r = p, !(p = p.next))return this;
            return (i = p.next) && delete p.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[h] = p : this._root = p), this) : (this._root = i, this)
        }, iv = function () {
            return this._root
        }, ov = function () {
            var t = 0;
            return this.visit(function (n) {
                if (!n.length)do {
                    ++t
                } while (n = n.next)
            }), t
        }, uv = function (t) {
            var n, e, r, i, o, u, a = [], c = this._root;
            for (c && a.push(new nv(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
                var s = (r + o) / 2, f = (i + u) / 2;
                (e = c[3]) && a.push(new nv(e, s, f, o, u)), (e = c[2]) && a.push(new nv(e, r, f, s, u)), (e = c[1]) && a.push(new nv(e, s, i, o, f)), (e = c[0]) && a.push(new nv(e, r, i, s, f))
            }
            return this
        }, av = function (t) {
            var n, e = [], r = [];
            for (this._root && e.push(new nv(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                var i = n.node;
                if (i.length) {
                    var o, u = n.x0, a = n.y0, c = n.x1, s = n.y1, f = (u + c) / 2, l = (a + s) / 2;
                    (o = i[0]) && e.push(new nv(o, u, a, f, l)), (o = i[1]) && e.push(new nv(o, f, a, c, l)), (o = i[2]) && e.push(new nv(o, u, l, f, s)), (o = i[3]) && e.push(new nv(o, f, l, c, s))
                }
                r.push(n)
            }
            for (; n = r.pop();)t(n.node, n.x0, n.y0, n.x1, n.y1);
            return this
        }, cv = function (t) {
            return arguments.length ? (this._x = t, this) : this._x
        }, sv = function (t) {
            return arguments.length ? (this._y = t, this) : this._y
        }, fv = rr.prototype = ir.prototype;
    fv.copy = function () {
        var t, n, e = new ir(this._x, this._y, this._x0, this._y0, this._x1, this._y1), r = this._root;
        if (!r)return e;
        if (!r.length)return e._root = or(r), e;
        for (t = [{
            source: r,
            target: e._root = new Array(4)
        }]; r = t.pop();)for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
            source: n,
            target: r.target[i] = new Array(4)
        }) : r.target[i] = or(n));
        return e
    }, fv.add = Jd, fv.addAll = Ke, fv.cover = Qd, fv.data = Kd, fv.extent = tv, fv.find = ev, fv.remove = rv, fv.removeAll = tr, fv.root = iv, fv.size = ov, fv.visit = uv, fv.visitAfter = av, fv.x = cv, fv.y = sv;
    var lv, hv = function (t) {
        function n() {
            function t(t, n, e, r, i) {
                var o = t.data, a = t.r, p = l + a;
                {
                    if (!o)return n > s + p || r < s - p || e > f + p || i < f - p;
                    if (o.index > c.index) {
                        var d = s - o.x - o.vx, v = f - o.y - o.vy, _ = d * d + v * v;
                        _ < p * p && (0 === d && (d = Gd(), _ += d * d), 0 === v && (v = Gd(), _ += v * v), _ = (p - (_ = Math.sqrt(_))) / _ * u, c.vx += (d *= _) * (p = (a *= a) / (h + a)), c.vy += (v *= _) * p, o.vx -= d * (p = 1 - p), o.vy -= v * p)
                    }
                }
            }

            for (var n, r, c, s, f, l, h, p = i.length,
                     d = 0; d < a; ++d)for (r = rr(i, ur, ar).visitAfter(e), n = 0; n < p; ++n)c = i[n], l = o[c.index], h = l * l, s = c.x + c.vx, f = c.y + c.vy, r.visit(t)
        }

        function e(t) {
            if (t.data)return t.r = o[t.data.index];
            for (var n = t.r = 0; n < 4; ++n)t[n] && t[n].r > t.r && (t.r = t[n].r)
        }

        function r() {
            if (i) {
                var n, e, r = i.length;
                for (o = new Array(r), n = 0; n < r; ++n)e = i[n], o[e.index] = +t(e, n, i)
            }
        }

        var i, o, u = 1, a = 1;
        return "function" != typeof t && (t = Zd(null == t ? 1 : +t)), n.initialize = function (t) {
            i = t, r()
        }, n.iterations = function (t) {
            return arguments.length ? (a = +t, n) : a
        }, n.strength = function (t) {
            return arguments.length ? (u = +t, n) : u
        }, n.radius = function (e) {
            return arguments.length ? (t = "function" == typeof e ? e : Zd(+e), r(), n) : t
        }, n
    }, pv = function (t) {
        function n(t) {
            return 1 / Math.min(s[t.source.index], s[t.target.index])
        }

        function e(n) {
            for (var e = 0, r = t.length; e < d; ++e)for (var i, o, c, s, l, h, p,
                                                              v = 0; v < r; ++v)i = t[v], o = i.source, c = i.target, s = c.x + c.vx - o.x - o.vx || Gd(), l = c.y + c.vy - o.y - o.vy || Gd(), h = Math.sqrt(s * s + l * l), h = (h - a[v]) / h * n * u[v], s *= h, l *= h, c.vx -= s * (p = f[v]), c.vy -= l * p, o.vx += s * (p = 1 - p), o.vy += l * p
        }

        function r() {
            if (c) {
                var n, e, r = c.length, h = t.length, p = Be(c, l);
                for (n = 0, s = new Array(r); n < h; ++n)e = t[n], e.index = n, "object" != typeof e.source && (e.source = sr(p, e.source)), "object" != typeof e.target && (e.target = sr(p, e.target)), s[e.source.index] = (s[e.source.index] || 0) + 1, s[e.target.index] = (s[e.target.index] || 0) + 1;
                for (n = 0, f = new Array(h); n < h; ++n)e = t[n], f[n] = s[e.source.index] / (s[e.source.index] + s[e.target.index]);
                u = new Array(h), i(), a = new Array(h), o()
            }
        }

        function i() {
            if (c)for (var n = 0, e = t.length; n < e; ++n)u[n] = +h(t[n], n, t)
        }

        function o() {
            if (c)for (var n = 0, e = t.length; n < e; ++n)a[n] = +p(t[n], n, t)
        }

        var u, a, c, s, f, l = cr, h = n, p = Zd(30), d = 1;
        return null == t && (t = []), e.initialize = function (t) {
            c = t, r()
        }, e.links = function (n) {
            return arguments.length ? (t = n, r(), e) : t
        }, e.id = function (t) {
            return arguments.length ? (l = t,
                e) : l
        }, e.iterations = function (t) {
            return arguments.length ? (d = +t, e) : d
        }, e.strength = function (t) {
            return arguments.length ? (h = "function" == typeof t ? t : Zd(+t), i(), e) : h
        }, e.distance = function (t) {
            return arguments.length ? (p = "function" == typeof t ? t : Zd(+t), o(), e) : p
        }, e
    }, dv = 10, vv = Math.PI * (3 - Math.sqrt(5)), _v = function (t) {
        function n() {
            e(), p.call("tick", o), u < a && (h.stop(), p.call("end", o))
        }

        function e() {
            var n, e, r = t.length;
            for (u += (s - u) * c, l.each(function (t) {
                t(u)
            }), n = 0; n < r; ++n)e = t[n], null == e.fx ? e.x += e.vx *= f : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= f : (e.y = e.fy, e.vy = 0)
        }

        function r() {
            for (var n, e = 0, r = t.length; e < r; ++e) {
                if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
                    var i = dv * Math.sqrt(e), o = e * vv;
                    n.x = i * Math.cos(o), n.y = i * Math.sin(o)
                }
                (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
            }
        }

        function i(n) {
            return n.initialize && n.initialize(t), n
        }

        var o, u = 1, a = .001, c = 1 - Math.pow(a, 1 / 300), s = 0, f = .6, l = Be(), h = yn(n), p = v("tick", "end");
        return null == t && (t = []), r(), o = {
            tick: e, restart: function () {
                return h.restart(n), o
            }, stop: function () {
                return h.stop(), o
            }, nodes: function (n) {
                return arguments.length ? (t = n, r(), l.each(i), o) : t
            }, alpha: function (t) {
                return arguments.length ? (u = +t, o) : u
            }, alphaMin: function (t) {
                return arguments.length ? (a = +t, o) : a
            }, alphaDecay: function (t) {
                return arguments.length ? (c = +t, o) : +c
            }, alphaTarget: function (t) {
                return arguments.length ? (s = +t, o) : s
            }, velocityDecay: function (t) {
                return arguments.length ? (f = 1 - t, o) : 1 - f
            }, force: function (t, n) {
                return arguments.length > 1 ? (null == n ? l.remove(t) : l.set(t, i(n)), o) : l.get(t)
            }, find: function (n, e, r) {
                var i, o, u, a, c, s = 0, f = t.length;
                for (null == r ? r = 1 / 0 : r *= r, s = 0; s < f; ++s)a = t[s], i = n - a.x, o = e - a.y, (u = i * i + o * o) < r && (c = a, r = u);
                return c
            }, on: function (t, n) {
                return arguments.length > 1 ? (p.on(t, n), o) : p.on(t)
            }
        }
    }, gv = function () {
        function t(t) {
            var n, a = i.length, c = rr(i, fr, lr).visitAfter(e);
            for (u = t, n = 0; n < a; ++n)o = i[n], c.visit(r)
        }

        function n() {
            if (i) {
                var t, n, e = i.length;
                for (a = new Array(e), t = 0; t < e; ++t)n = i[t], a[n.index] = +c(n, t, i)
            }
        }

        function e(t) {
            var n, e, r, i, o, u = 0;
            if (t.length) {
                for (r = i = o = 0; o < 4; ++o)(n = t[o]) && (e = n.value) && (u += e, r += e * n.x, i += e * n.y);
                t.x = r / u, t.y = i / u
            } else {
                n = t, n.x = n.data.x, n.y = n.data.y;
                do {
                    u += a[n.data.index]
                } while (n = n.next)
            }
            t.value = u
        }

        function r(t, n, e, r) {
            if (!t.value)return !0;
            var i = t.x - o.x, c = t.y - o.y, h = r - n, p = i * i + c * c;
            if (h * h / l < p)return p < f && (0 === i && (i = Gd(), p += i * i), 0 === c && (c = Gd(), p += c * c), p < s && (p = Math.sqrt(s * p)), o.vx += i * t.value * u / p, o.vy += c * t.value * u / p), !0;
            if (!(t.length || p >= f)) {
                (t.data !== o || t.next) && (0 === i && (i = Gd(), p += i * i), 0 === c && (c = Gd(), p += c * c), p < s && (p = Math.sqrt(s * p)));
                do {
                    t.data !== o && (h = a[t.data.index] * u / p, o.vx += i * h, o.vy += c * h)
                } while (t = t.next)
            }
        }

        var i, o, u, a, c = Zd(-30), s = 1, f = 1 / 0, l = .81;
        return t.initialize = function (t) {
            i = t, n()
        }, t.strength = function (e) {
            return arguments.length ? (c = "function" == typeof e ? e : Zd(+e), n(), t) : c
        }, t.distanceMin = function (n) {
            return arguments.length ? (s = n * n, t) : Math.sqrt(s)
        }, t.distanceMax = function (n) {
            return arguments.length ? (f = n * n, t) : Math.sqrt(f)
        }, t.theta = function (n) {
            return arguments.length ? (l = n * n, t) : Math.sqrt(l)
        }, t
    }, yv = function (t) {
        function n(t) {
            for (var n, e = 0, u = r.length; e < u; ++e)n = r[e], n.vx += (o[e] - n.x) * i[e] * t
        }

        function e() {
            if (r) {
                var n, e = r.length;
                for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n)i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
            }
        }

        var r, i, o, u = Zd(.1);
        return "function" != typeof t && (t = Zd(null == t ? 0 : +t)), n.initialize = function (t) {
            r = t, e()
        }, n.strength = function (t) {
            return arguments.length ? (u = "function" == typeof t ? t : Zd(+t), e(), n) : u
        }, n.x = function (r) {
            return arguments.length ? (t = "function" == typeof r ? r : Zd(+r), e(), n) : t
        }, n
    }, mv = function (t) {
        function n(t) {
            for (var n, e = 0, u = r.length; e < u; ++e)n = r[e], n.vy += (o[e] - n.y) * i[e] * t
        }

        function e() {
            if (r) {
                var n, e = r.length;
                for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n)i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +u(r[n], n, r)
            }
        }

        var r, i, o, u = Zd(.1);
        return "function" != typeof t && (t = Zd(null == t ? 0 : +t)), n.initialize = function (t) {
            r = t, e()
        }, n.strength = function (t) {
            return arguments.length ? (u = "function" == typeof t ? t : Zd(+t), e(), n) : u
        }, n.y = function (r) {
            return arguments.length ? (t = "function" == typeof r ? r : Zd(+r), e(), n) : t
        }, n
    }, xv = function (t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    }, bv = function (t) {
        return t = xv(Math.abs(t)), t ? t[1] : NaN
    }, wv = function (t, n) {
        return function (e, r) {
            for (var i = e.length, o = [], u = 0, a = t[0],
                     c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(e.substring(i -= a, i + a)), !((c += a + 1) > r));)a = t[u = (u + 1) % t.length];
            return o.reverse().join(n)
        }
    }, Mv = function (t) {
        return function (n) {
            return n.replace(/[0-9]/g, function (n) {
                return t[+n]
            })
        }
    }, Tv = function (t, n) {
        t = t.toPrecision(n);
        t:for (var e, r = t.length, i = 1, o = -1; i < r; ++i)switch (t[i]) {
            case".":
                o = e = i;
                break;
            case"0":
                0 === o && (o = i), e = i;
                break;
            case"e":
                break t;
            default:
                o > 0 && (o = 0)
        }
        return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t
    }, Sv = function (t, n) {
        var e = xv(t, n);
        if (!e)return t + "";
        var r = e[0], i = e[1], o = i - (lv = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1, u = r.length;
        return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + xv(t, Math.max(0, n + o - 1))[0]
    }, Nv = function (t, n) {
        var e = xv(t, n);
        if (!e)return t + "";
        var r = e[0], i = e[1];
        return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    }, kv = {
        "": Tv, "%": function (t, n) {
            return (100 * t).toFixed(n)
        }, b: function (t) {
            return Math.round(t).toString(2)
        }, c: function (t) {
            return t + ""
        }, d: function (t) {
            return Math.round(t).toString(10)
        }, e: function (t, n) {
            return t.toExponential(n)
        }, f: function (t, n) {
            return t.toFixed(n)
        }, g: function (t, n) {
            return t.toPrecision(n)
        }, o: function (t) {
            return Math.round(t).toString(8)
        }, p: function (t, n) {
            return Nv(100 * t, n)
        }, r: Nv, s: Sv, X: function (t) {
            return Math.round(t).toString(16).toUpperCase()
        }, x: function (t) {
            return Math.round(t).toString(16)
        }
    }, Ev = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    hr.prototype = pr.prototype, pr.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
    };
    var Av, Cv = function (t) {
        return t
    }, zv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], Pv = function (t) {
        function n(t) {
            function n(t) {
                var n, i, a, f = _, x = g;
                if ("c" === v) x = y(t) + x, t = ""; else {
                    t = +t;
                    var b = t < 0;
                    if (t = y(Math.abs(t), d), b && 0 == +t && (b = !1), f = (b ? "(" === s ? s : "-" : "-" === s || "(" === s ? "" : s) + f, x = x + ("s" === v ? zv[8 + lv / 3] : "") + (b && "(" === s ? ")" : ""), m)for (n = -1, i = t.length; ++n < i;)if (48 > (a = t.charCodeAt(n)) || a > 57) {
                        x = (46 === a ? o + t.slice(n + 1) : t.slice(n)) + x, t = t.slice(0, n);
                        break
                    }
                }
                p && !l && (t = r(t, 1 / 0));
                var w = f.length + t.length + x.length, M = w < h ? new Array(h - w + 1).join(e) : "";
                switch (p && l && (t = r(M + t, M.length ? h - x.length : 1 / 0), M = ""), c) {
                    case"<":
                        t = f + t + x + M;
                        break;
                    case"=":
                        t = f + M + t + x;
                        break;
                    case"^":
                        t = M.slice(0, w = M.length >> 1) + f + t + x + M.slice(w);
                        break;
                    default:
                        t = M + f + t + x
                }
                return u(t)
            }

            t = hr(t);
            var e = t.fill, c = t.align, s = t.sign, f = t.symbol, l = t.zero, h = t.width, p = t.comma,
                d = t.precision, v = t.type,
                _ = "$" === f ? i[0] : "#" === f && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
                g = "$" === f ? i[1] : /[%p]/.test(v) ? a : "", y = kv[v], m = !v || /[defgprs%]/.test(v);
            return d = null == d ? v ? 6 : 12 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), n.toString = function () {
                return t + ""
            }, n
        }

        function e(t, e) {
            var r = n((t = hr(t), t.type = "f", t)), i = 3 * Math.max(-8, Math.min(8, Math.floor(bv(e) / 3))),
                o = Math.pow(10, -i), u = zv[8 + i / 3];
            return function (t) {
                return r(o * t) + u
            }
        }

        var r = t.grouping && t.thousands ? wv(t.grouping, t.thousands) : Cv, i = t.currency, o = t.decimal,
            u = t.numerals ? Mv(t.numerals) : Cv, a = t.percent || "%";
        return {format: n, formatPrefix: e}
    };
    dr({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]});
    var Lv = function (t) {
        return Math.max(0, -bv(Math.abs(t)))
    }, Rv = function (t, n) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(bv(n) / 3))) - bv(Math.abs(t)))
    }, qv = function (t, n) {
        return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, bv(n) - bv(t)) + 1
    }, Uv = function () {
        return new vr
    };
    vr.prototype = {
        constructor: vr, reset: function () {
            this.s = this.t = 0
        }, add: function (t) {
            _r(d_, t, this.t), _r(this, d_.s, this.s), this.s ? this.t += d_.t : this.s = d_.t
        }, valueOf: function () {
            return this.s
        }
    };
    var Dv, Ov, Fv, Iv, Yv, Bv, jv, Hv, Xv, Vv, $v, Wv, Zv, Gv, Jv, Qv, Kv, t_, n_, e_, r_, i_, o_, u_, a_, c_, s_, f_,
        l_, h_, p_, d_ = new vr, v_ = 1e-6, __ = Math.PI, g_ = __ / 2, y_ = __ / 4, m_ = 2 * __, x_ = 180 / __,
        b_ = __ / 180, w_ = Math.abs, M_ = Math.atan, T_ = Math.atan2, S_ = Math.cos, N_ = Math.ceil, k_ = Math.exp,
        E_ = Math.log, A_ = Math.pow, C_ = Math.sin, z_ = Math.sign || function (t) {
                return t > 0 ? 1 : t < 0 ? -1 : 0
            }, P_ = Math.sqrt, L_ = Math.tan, R_ = {
            Feature: function (t, n) {
                br(t.geometry, n)
            }, FeatureCollection: function (t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i;)br(e[r].geometry, n)
            }
        }, q_ = {
            Sphere: function (t, n) {
                n.sphere()
            }, Point: function (t, n) {
                t = t.coordinates, n.point(t[0], t[1], t[2])
            }, MultiPoint: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)t = e[r], n.point(t[0], t[1], t[2])
            }, LineString: function (t, n) {
                wr(t.coordinates, n, 0)
            }, MultiLineString: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)wr(e[r], n, 0)
            }, Polygon: function (t, n) {
                Mr(t.coordinates, n)
            }, MultiPolygon: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)Mr(e[r], n)
            }, GeometryCollection: function (t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i;)br(e[r], n)
            }
        }, U_ = function (t, n) {
            t && R_.hasOwnProperty(t.type) ? R_[t.type](t, n) : br(t, n)
        }, D_ = Uv(), O_ = Uv(), F_ = {
            point: xr, lineStart: xr, lineEnd: xr, polygonStart: function () {
                D_.reset(), F_.lineStart = Tr, F_.lineEnd = Sr
            }, polygonEnd: function () {
                var t = +D_;
                O_.add(t < 0 ? m_ + t : t), this.lineStart = this.lineEnd = this.point = xr
            }, sphere: function () {
                O_.add(m_)
            }
        }, I_ = function (t) {
            return O_.reset(), U_(t, F_), 2 * O_
        }, Y_ = Uv(), B_ = {
            point: qr, lineStart: Dr, lineEnd: Or, polygonStart: function () {
                B_.point = Fr, B_.lineStart = Ir, B_.lineEnd = Yr, Y_.reset(), F_.polygonStart()
            }, polygonEnd: function () {
                F_.polygonEnd(), B_.point = qr, B_.lineStart = Dr, B_.lineEnd = Or, D_ < 0 ? (Bv = -(Hv = 180), jv = -(Xv = 90)) : Y_ > v_ ? Xv = 90 : Y_ < -v_ && (jv = -90), Jv[0] = Bv, Jv[1] = Hv
            }
        }, j_ = function (t) {
            var n, e, r, i, o, u, a;
            if (Xv = Hv = -(Bv = jv = 1 / 0), Gv = [], U_(t, B_), e = Gv.length) {
                for (Gv.sort(jr), n = 1, r = Gv[0], o = [r]; n < e; ++n)i = Gv[n], Hr(r, i[0]) || Hr(r, i[1]) ? (Br(r[0], i[1]) > Br(r[0], r[1]) && (r[1] = i[1]), Br(i[0], r[1]) > Br(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
                for (u = -1 / 0, e = o.length - 1, n = 0, r = o[e]; n <= e; r = i, ++n)i = o[n], (a = Br(r[1], i[0])) > u && (u = a, Bv = i[0], Hv = r[1])
            }
            return Gv = Jv = null, Bv === 1 / 0 || jv === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[Bv, jv], [Hv, Xv]]
        }, H_ = {
            sphere: xr, point: Xr, lineStart: $r, lineEnd: Gr, polygonStart: function () {
                H_.lineStart = Jr, H_.lineEnd = Qr
            }, polygonEnd: function () {
                H_.lineStart = $r, H_.lineEnd = Gr
            }
        }, X_ = function (t) {
            Qv = Kv = t_ = n_ = e_ = r_ = i_ = o_ = u_ = a_ = c_ = 0, U_(t, H_);
            var n = u_, e = a_, r = c_, i = n * n + e * e + r * r;
            return i < 1e-12 && (n = r_, e = i_, r = o_, Kv < v_ && (n = t_, e = n_, r = e_), (i = n * n + e * e + r * r) < 1e-12) ? [NaN, NaN] : [T_(e, n) * x_, yr(r / P_(i)) * x_]
        }, V_ = function (t) {
            return function () {
                return t
            }
        }, $_ = function (t, n) {
            function e(e, r) {
                return e = t(e, r), n(e[0], e[1])
            }

            return t.invert && n.invert && (e.invert = function (e, r) {
                return (e = n.invert(e, r)) && t.invert(e[0], e[1])
            }), e
        };
    ni.invert = ni;
    var W_, Z_, G_, J_, Q_, K_, tg, ng, eg, rg, ig, og = function (t) {
            function n(n) {
                return n = t(n[0] * b_, n[1] * b_), n[0] *= x_, n[1] *= x_, n
            }

            return t = ei(t[0] * b_, t[1] * b_, t.length > 2 ? t[2] * b_ : 0), n.invert = function (n) {
                return n = t.invert(n[0] * b_, n[1] * b_), n[0] *= x_, n[1] *= x_, n
            }, n
        }, ug = function () {
            function t(t, n) {
                e.push(t = r(t, n)), t[0] *= x_, t[1] *= x_
            }

            function n() {
                var t = i.apply(this, arguments), n = o.apply(this, arguments) * b_, c = u.apply(this, arguments) * b_;
                return e = [], r = ei(-t[0] * b_, -t[1] * b_, 0).invert, ui(a, n, c, 1), t = {
                    type: "Polygon",
                    coordinates: [e]
                }, e = r = null, t
            }

            var e, r, i = V_([0, 0]), o = V_(90), u = V_(6), a = {point: t};
            return n.center = function (t) {
                return arguments.length ? (i = "function" == typeof t ? t : V_([+t[0], +t[1]]), n) : i
            }, n.radius = function (t) {
                return arguments.length ? (o = "function" == typeof t ? t : V_(+t), n) : o
            }, n.precision = function (t) {
                return arguments.length ? (u = "function" == typeof t ? t : V_(+t), n) : u
            }, n
        }, ag = function () {
            var t, n = [];
            return {
                point: function (n, e) {
                    t.push([n, e])
                }, lineStart: function () {
                    n.push(t = [])
                }, lineEnd: xr, rejoin: function () {
                    n.length > 1 && n.push(n.pop().concat(n.shift()))
                }, result: function () {
                    var e = n;
                    return n = [], t = null, e
                }
            }
        }, cg = function (t, n, e, r, i, o) {
            var u, a = t[0], c = t[1], s = n[0], f = n[1], l = 0, h = 1, p = s - a, d = f - c;
            if (u = e - a, p || !(u > 0)) {
                if (u /= p, p < 0) {
                    if (u < l)return;
                    u < h && (h = u)
                } else if (p > 0) {
                    if (u > h)return;
                    u > l && (l = u)
                }
                if (u = i - a, p || !(u < 0)) {
                    if (u /= p, p < 0) {
                        if (u > h)return;
                        u > l && (l = u)
                    } else if (p > 0) {
                        if (u < l)return;
                        u < h && (h = u)
                    }
                    if (u = r - c, d || !(u > 0)) {
                        if (u /= d, d < 0) {
                            if (u < l)return;
                            u < h && (h = u)
                        } else if (d > 0) {
                            if (u > h)return;
                            u > l && (l = u)
                        }
                        if (u = o - c, d || !(u < 0)) {
                            if (u /= d, d < 0) {
                                if (u > h)return;
                                u > l && (l = u)
                            } else if (d > 0) {
                                if (u < l)return;
                                u < h && (h = u)
                            }
                            return l > 0 && (t[0] = a + l * p, t[1] = c + l * d), h < 1 && (n[0] = a + h * p, n[1] = c + h * d), !0
                        }
                    }
                }
            }
        }, sg = function (t, n) {
            return w_(t[0] - n[0]) < v_ && w_(t[1] - n[1]) < v_
        }, fg = function (t, n, e, r, i) {
            var o, u, a = [], c = [];
            if (t.forEach(function (t) {
                    if (!((n = t.length - 1) <= 0)) {
                        var n, e, r = t[0], u = t[n];
                        if (sg(r, u)) {
                            for (i.lineStart(), o = 0; o < n; ++o)i.point((r = t[o])[0], r[1]);
                            return void i.lineEnd()
                        }
                        a.push(e = new ci(r, t, null, !0)), c.push(e.o = new ci(r, null, e, !1)), a.push(e = new ci(u, t, null, !1)), c.push(e.o = new ci(u, null, e, !0))
                    }
                }), a.length) {
                for (c.sort(n), si(a), si(c), o = 0, u = c.length; o < u; ++o)c[o].e = e = !e;
                for (var s, f, l = a[0]; ;) {
                    for (var h = l, p = !0; h.v;)if ((h = h.n) === l)return;
                    s = h.z, i.lineStart();
                    do {
                        if (h.v = h.o.v = !0, h.e) {
                            if (p)for (o = 0, u = s.length; o < u; ++o)i.point((f = s[o])[0], f[1]); else r(h.x, h.n.x, 1, i);
                            h = h.n
                        } else {
                            if (p)for (s = h.p.z, o = s.length - 1; o >= 0; --o)i.point((f = s[o])[0], f[1]); else r(h.x, h.p.x, -1, i);
                            h = h.p
                        }
                        h = h.o, s = h.z, p = !p
                    } while (!h.v);
                    i.lineEnd()
                }
            }
        }, lg = 1e9, hg = -lg, pg = function () {
            var t, n, e, r = 0, i = 0, o = 960, u = 500;
            return e = {
                stream: function (e) {
                    return t && n === e ? t : t = fi(r, i, o, u)(n = e)
                }, extent: function (a) {
                    return arguments.length ? (r = +a[0][0], i = +a[0][1], o = +a[1][0], u = +a[1][1], t = n = null, e) : [[r, i], [o, u]]
                }
            }
        }, dg = Uv(), vg = function (t, n) {
            var e = n[0], r = n[1], i = [C_(e), -S_(e), 0], o = 0, u = 0;
            dg.reset();
            for (var a = 0, c = t.length; a < c; ++a)if (f = (s = t[a]).length)for (var s, f, l = s[f - 1], h = l[0],
                                                                                        p = l[1] / 2 + y_, d = C_(p),
                                                                                        v = S_(p),
                                                                                        _ = 0; _ < f; ++_, h = y, d = x, v = b, l = g) {
                var g = s[_], y = g[0], m = g[1] / 2 + y_, x = C_(m), b = S_(m), w = y - h, M = w >= 0 ? 1 : -1, T = M * w,
                    S = T > __, N = d * x;
                if (dg.add(T_(N * M * C_(T), v * b + N * S_(T))), o += S ? w + M * m_ : w, S ^ h >= e ^ y >= e) {
                    var k = zr(Ar(l), Ar(g));
                    Rr(k);
                    var E = zr(i, k);
                    Rr(E);
                    var A = (S ^ w >= 0 ? -1 : 1) * yr(E[2]);
                    (r > A || r === A && (k[0] || k[1])) && (u += S ^ w >= 0 ? 1 : -1)
                }
            }
            return (o < -v_ || o < v_ && dg < -v_) ^ 1 & u
        }, _g = Uv(), gg = {sphere: xr, point: xr, lineStart: li, lineEnd: xr, polygonStart: xr, polygonEnd: xr},
        yg = function (t) {
            return _g.reset(), U_(t, gg), +_g
        }, mg = [null, null], xg = {type: "LineString", coordinates: mg}, bg = function (t, n) {
            return mg[0] = t, mg[1] = n, yg(xg)
        }, wg = {
            Feature: function (t, n) {
                return vi(t.geometry, n)
            }, FeatureCollection: function (t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i;)if (vi(e[r].geometry, n))return !0;
                return !1
            }
        }, Mg = {
            Sphere: function () {
                return !0
            }, Point: function (t, n) {
                return _i(t.coordinates, n)
            }, MultiPoint: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)if (_i(e[r], n))return !0;
                return !1
            }, LineString: function (t, n) {
                return gi(t.coordinates, n)
            }, MultiLineString: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)if (gi(e[r], n))return !0;
                return !1
            }, Polygon: function (t, n) {
                return yi(t.coordinates, n)
            }, MultiPolygon: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)if (yi(e[r], n))return !0;
                return !1
            }, GeometryCollection: function (t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i;)if (vi(e[r], n))return !0;
                return !1
            }
        }, Tg = function (t, n) {
            return (t && wg.hasOwnProperty(t.type) ? wg[t.type] : vi)(t, n)
        }, Sg = function (t, n) {
            var e = t[0] * b_, r = t[1] * b_, i = n[0] * b_, o = n[1] * b_, u = S_(r), a = C_(r), c = S_(o), s = C_(o),
                f = u * S_(e), l = u * C_(e), h = c * S_(i), p = c * C_(i), d = 2 * yr(P_(mr(o - r) + u * c * mr(i - e))),
                v = C_(d), _ = d ? function (t) {
                    var n = C_(t *= d) / v, e = C_(d - t) / v, r = e * f + n * h, i = e * l + n * p, o = e * a + n * s;
                    return [T_(i, r) * x_, T_(o, P_(r * r + i * i)) * x_]
                } : function () {
                    return [e * x_, r * x_]
                };
            return _.distance = d, _
        }, Ng = function (t) {
            return t
        }, kg = Uv(), Eg = Uv(), Ag = {
            point: xr, lineStart: xr, lineEnd: xr, polygonStart: function () {
                Ag.lineStart = Si, Ag.lineEnd = Ei
            }, polygonEnd: function () {
                Ag.lineStart = Ag.lineEnd = Ag.point = xr, kg.add(w_(Eg)), Eg.reset()
            }, result: function () {
                var t = kg / 2;
                return kg.reset(), t
            }
        }, Cg = 1 / 0, zg = Cg, Pg = -Cg, Lg = Pg, Rg = {
            point: Ai, lineStart: xr, lineEnd: xr, polygonStart: xr, polygonEnd: xr, result: function () {
                var t = [[Cg, zg], [Pg, Lg]];
                return Pg = Lg = -(zg = Cg = 1 / 0), t
            }
        }, qg = 0, Ug = 0, Dg = 0, Og = 0, Fg = 0, Ig = 0, Yg = 0, Bg = 0, jg = 0, Hg = {
            point: Ci, lineStart: zi, lineEnd: Ri, polygonStart: function () {
                Hg.lineStart = qi, Hg.lineEnd = Ui
            }, polygonEnd: function () {
                Hg.point = Ci, Hg.lineStart = zi, Hg.lineEnd = Ri
            }, result: function () {
                var t = jg ? [Yg / jg, Bg / jg] : Ig ? [Og / Ig, Fg / Ig] : Dg ? [qg / Dg, Ug / Dg] : [NaN, NaN];
                return qg = Ug = Dg = Og = Fg = Ig = Yg = Bg = jg = 0, t
            }
        };
    Fi.prototype = {
        _radius: 4.5, pointRadius: function (t) {
            return this._radius = t, this
        }, polygonStart: function () {
            this._line = 0
        }, polygonEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            0 === this._line && this._context.closePath(), this._point = NaN
        }, point: function (t, n) {
            switch (this._point) {
                case 0:
                    this._context.moveTo(t, n), this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(t, n);
                    break;
                default:
                    this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, m_)
            }
        }, result: xr
    };
    var Xg, Vg, $g, Wg, Zg, Gg = Uv(), Jg = {
        point: xr, lineStart: function () {
            Jg.point = Ii
        }, lineEnd: function () {
            Xg && Yi(Vg, $g), Jg.point = xr
        }, polygonStart: function () {
            Xg = !0
        }, polygonEnd: function () {
            Xg = null
        }, result: function () {
            var t = +Gg;
            return Gg.reset(), t
        }
    };
    Bi.prototype = {
        _circle: ji(4.5), pointRadius: function (t) {
            return this._circle = ji(t), this
        }, polygonStart: function () {
            this._line = 0
        }, polygonEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            0 === this._line && this._string.push("Z"), this._point = NaN
        }, point: function (t, n) {
            switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n), this._point = 1;
                    break;
                case 1:
                    this._string.push("L", t, ",", n);
                    break;
                default:
                    this._string.push("M", t, ",", n, this._circle)
            }
        }, result: function () {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [], t
            }
        }
    };
    var Qg = function (t, n) {
        function e(t) {
            return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), U_(t, r(i))), i.result()
        }

        var r, i, o = 4.5;
        return e.area = function (t) {
            return U_(t, r(Ag)), Ag.result()
        }, e.measure = function (t) {
            return U_(t, r(Jg)), Jg.result()
        }, e.bounds = function (t) {
            return U_(t, r(Rg)), Rg.result()
        }, e.centroid = function (t) {
            return U_(t, r(Hg)), Hg.result()
        }, e.projection = function (n) {
            return arguments.length ? (r = null == n ? (t = null, Ng) : (t = n).stream, e) : t
        }, e.context = function (t) {
            return arguments.length ? (i = null == t ? (n = null, new Bi) : new Fi(n = t), "function" != typeof o && i.pointRadius(o), e) : n
        }, e.pointRadius = function (t) {
            return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t), +t), e) : o
        }, e.projection(t).context(n)
    }, Kg = function (t, n, e, r) {
        return function (i, o) {
            function u(n, e) {
                var r = i(n, e);
                t(n = r[0], e = r[1]) && o.point(n, e)
            }

            function a(t, n) {
                var e = i(t, n);
                _.point(e[0], e[1])
            }

            function c() {
                b.point = a, _.lineStart()
            }

            function s() {
                b.point = u, _.lineEnd()
            }

            function f(t, n) {
                v.push([t, n]);
                var e = i(t, n);
                m.point(e[0], e[1])
            }

            function l() {
                m.lineStart(), v = []
            }

            function h() {
                f(v[0][0], v[0][1]), m.lineEnd();
                var t, n, e, r, i = m.clean(), u = y.result(), a = u.length;
                if (v.pop(), p.push(v), v = null, a)if (1 & i) {
                    if (e = u[0], (n = e.length - 1) > 0) {
                        for (x || (o.polygonStart(), x = !0), o.lineStart(), t = 0; t < n; ++t)o.point((r = e[t])[0], r[1]);
                        o.lineEnd()
                    }
                } else a > 1 && 2 & i && u.push(u.pop().concat(u.shift())), d.push(u.filter(Hi))
            }

            var p, d, v, _ = n(o), g = i.invert(r[0], r[1]), y = ag(), m = n(y), x = !1, b = {
                point: u, lineStart: c, lineEnd: s, polygonStart: function () {
                    b.point = f, b.lineStart = l, b.lineEnd = h, d = [], p = []
                }, polygonEnd: function () {
                    b.point = u, b.lineStart = c, b.lineEnd = s, d = lf(d);
                    var t = vg(p, g);
                    d.length ? (x || (o.polygonStart(), x = !0), fg(d, Xi, t, e, o)) : t && (x || (o.polygonStart(), x = !0), o.lineStart(), e(null, null, 1, o), o.lineEnd()), x && (o.polygonEnd(), x = !1), d = p = null
                }, sphere: function () {
                    o.polygonStart(), o.lineStart(), e(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                }
            };
            return b
        }
    }, ty = Kg(function () {
        return !0
    }, Vi, Wi, [-__, -g_]), ny = function (t, n) {
        function e(e, r, i, o) {
            ui(o, t, n, i, e, r)
        }

        function r(t, n) {
            return S_(t) * S_(n) > a
        }

        function i(t) {
            var n, e, i, a, f;
            return {
                lineStart: function () {
                    a = i = !1, f = 1
                }, point: function (l, h) {
                    var p, d = [l, h], v = r(l, h), _ = c ? v ? 0 : u(l, h) : v ? u(l + (l < 0 ? __ : -__), h) : 0;
                    if (!n && (a = i = v) && t.lineStart(), v !== i && (p = o(n, d), (sg(n, p) || sg(d, p)) && (d[0] += v_, d[1] += v_, v = r(d[0], d[1]))), v !== i) f = 0, v ? (t.lineStart(), p = o(d, n), t.point(p[0], p[1])) : (p = o(n, d), t.point(p[0], p[1]), t.lineEnd()), n = p; else if (s && n && c ^ v) {
                        var g;
                        _ & e || !(g = o(d, n, !0)) || (f = 0, c ? (t.lineStart(), t.point(g[0][0], g[0][1]), t.point(g[1][0], g[1][1]), t.lineEnd()) : (t.point(g[1][0], g[1][1]), t.lineEnd(), t.lineStart(), t.point(g[0][0], g[0][1])))
                    }
                    !v || n && sg(n, d) || t.point(d[0], d[1]), n = d, i = v, e = _
                }, lineEnd: function () {
                    i && t.lineEnd(), n = null
                }, clean: function () {
                    return f | (a && i) << 1
                }
            }
        }

        function o(t, n, e) {
            var r = Ar(t), i = Ar(n), o = [1, 0, 0], u = zr(r, i), c = Cr(u, u), s = u[0], f = c - s * s;
            if (!f)return !e && t;
            var l = a * c / f, h = -a * s / f, p = zr(o, u), d = Lr(o, l);
            Pr(d, Lr(u, h));
            var v = p, _ = Cr(d, v), g = Cr(v, v), y = _ * _ - g * (Cr(d, d) - 1);
            if (!(y < 0)) {
                var m = P_(y), x = Lr(v, (-_ - m) / g);
                if (Pr(x, d), x = Er(x), !e)return x;
                var b, w = t[0], M = n[0], T = t[1], S = n[1];
                M < w && (b = w, w = M, M = b);
                var N = M - w, k = w_(N - __) < v_, E = k || N < v_;
                if (!k && S < T && (b = T, T = S, S = b), E ? k ? T + S > 0 ^ x[1] < (w_(x[0] - w) < v_ ? T : S) : T <= x[1] && x[1] <= S : N > __ ^ (w <= x[0] && x[0] <= M)) {
                    var A = Lr(v, (-_ + m) / g);
                    return Pr(A, d), [x, Er(A)]
                }
            }
        }

        function u(n, e) {
            var r = c ? t : __ - t, i = 0;
            return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
        }

        var a = S_(t), c = a > 0, s = w_(a) > v_;
        return Kg(r, i, e, c ? [0, -t] : [-__, t - __])
    }, ey = function (t) {
        return {stream: Zi(t)}
    };
    Gi.prototype = {
        constructor: Gi, point: function (t, n) {
            this.stream.point(t, n)
        }, sphere: function () {
            this.stream.sphere()
        }, lineStart: function () {
            this.stream.lineStart()
        }, lineEnd: function () {
            this.stream.lineEnd()
        }, polygonStart: function () {
            this.stream.polygonStart()
        }, polygonEnd: function () {
            this.stream.polygonEnd()
        }
    };
    var ry = 16, iy = S_(30 * b_), oy = function (t, n) {
        return +n ? to(t, n) : Ki(t)
    }, uy = Zi({
        point: function (t, n) {
            this.stream.point(t * b_, n * b_)
        }
    }), ay = function () {
        return ro(oo).scale(155.424).center([0, 33.6442])
    }, cy = function () {
        return ay().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
    }, sy = function () {
        function t(t) {
            var n = t[0], e = t[1];
            return a = null, i.point(n, e), a || (o.point(n, e), a) || (u.point(n, e), a)
        }

        function n() {
            return e = r = null, t
        }

        var e, r, i, o, u, a, c = cy(), s = ay().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            f = ay().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), l = {
                point: function (t, n) {
                    a = [t, n]
                }
            };
        return t.invert = function (t) {
            var n = c.scale(), e = c.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
            return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? s : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? f : c).invert(t)
        }, t.stream = function (t) {
            return e && r === t ? e : e = uo([c.stream(r = t), s.stream(t), f.stream(t)])
        }, t.precision = function (t) {
            return arguments.length ? (c.precision(t), s.precision(t), f.precision(t), n()) : c.precision()
        }, t.scale = function (n) {
            return arguments.length ? (c.scale(n), s.scale(.35 * n), f.scale(n), t.translate(c.translate())) : c.scale()
        }, t.translate = function (t) {
            if (!arguments.length)return c.translate();
            var e = c.scale(), r = +t[0], a = +t[1];
            return i = c.translate(t).clipExtent([[r - .455 * e, a - .238 * e], [r + .455 * e, a + .238 * e]]).stream(l), o = s.translate([r - .307 * e, a + .201 * e]).clipExtent([[r - .425 * e + v_, a + .12 * e + v_], [r - .214 * e - v_, a + .234 * e - v_]]).stream(l), u = f.translate([r - .205 * e, a + .212 * e]).clipExtent([[r - .214 * e + v_, a + .166 * e + v_], [r - .115 * e - v_, a + .234 * e - v_]]).stream(l), n()
        }, t.fitExtent = function (n, e) {
            return Ji(t, n, e)
        }, t.fitSize = function (n, e) {
            return Qi(t, n, e)
        }, t.scale(1070)
    }, fy = ao(function (t) {
        return P_(2 / (1 + t))
    });
    fy.invert = co(function (t) {
        return 2 * yr(t / 2)
    });
    var ly = function () {
        return no(fy).scale(124.75).clipAngle(179.999)
    }, hy = ao(function (t) {
        return (t = gr(t)) && t / C_(t)
    });
    hy.invert = co(function (t) {
        return t
    });
    var py = function () {
        return no(hy).scale(79.4188).clipAngle(179.999)
    };
    so.invert = function (t, n) {
        return [t, 2 * M_(k_(n)) - g_]
    };
    var dy = function () {
        return fo(so).scale(961 / m_)
    }, vy = function () {
        return ro(ho).scale(109.5).parallels([30, 30])
    };
    po.invert = po;
    var _y = function () {
        return no(po).scale(152.63)
    }, gy = function () {
        return ro(vo).scale(131.154).center([0, 13.9389])
    };
    _o.invert = co(M_);
    var yy = function () {
        return no(_o).scale(144.049).clipAngle(60)
    }, my = function () {
        function t() {
            return i = o = null, u
        }

        var n, e, r, i, o, u, a = 1, c = 0, s = 0, f = 1, l = 1, h = Ng, p = null, d = Ng;
        return u = {
            stream: function (t) {
                return i && o === t ? i : i = h(d(o = t))
            }, clipExtent: function (i) {
                return arguments.length ? (d = null == i ? (p = n = e = r = null, Ng) : fi(p = +i[0][0], n = +i[0][1], e = +i[1][0], r = +i[1][1]), t()) : null == p ? null : [[p, n], [e, r]]
            }, scale: function (n) {
                return arguments.length ? (h = go((a = +n) * f, a * l, c, s), t()) : a
            }, translate: function (n) {
                return arguments.length ? (h = go(a * f, a * l, c = +n[0], s = +n[1]), t()) : [c, s]
            }, reflectX: function (n) {
                return arguments.length ? (h = go(a * (f = n ? -1 : 1), a * l, c, s), t()) : f < 0
            }, reflectY: function (n) {
                return arguments.length ? (h = go(a * f, a * (l = n ? -1 : 1), c, s), t()) : l < 0
            }, fitExtent: function (t, n) {
                return Ji(u, t, n)
            }, fitSize: function (t, n) {
                return Qi(u, t, n)
            }
        }
    };
    yo.invert = co(yr);
    var xy = function () {
        return no(yo).scale(249.5).clipAngle(90 + v_)
    };
    mo.invert = co(function (t) {
        return 2 * M_(t)
    });
    var by = function () {
        return no(mo).scale(250).clipAngle(142)
    };
    xo.invert = function (t, n) {
        return [-n, 2 * M_(k_(t)) - g_]
    };
    var wy = function () {
        var t = fo(xo), n = t.center, e = t.rotate;
        return t.center = function (t) {
            return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
        }, t.rotate = function (t) {
            return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
        }, e([0, 0, 90]).scale(159.155)
    }, My = function () {
        function t(t) {
            var o, u = 0;
            t.eachAfter(function (t) {
                var e = t.children;
                e ? (t.x = wo(e), t.y = To(e)) : (t.x = o ? u += n(t, o) : 0, t.y = 0, o = t)
            });
            var a = No(t), c = ko(t), s = a.x - n(a, c) / 2, f = c.x + n(c, a) / 2;
            return t.eachAfter(i ? function (n) {
                n.x = (n.x - t.x) * e, n.y = (t.y - n.y) * r
            } : function (n) {
                n.x = (n.x - s) / (f - s) * e, n.y = (1 - (t.y ? n.y / t.y : 1)) * r
            })
        }

        var n = bo, e = 1, r = 1, i = !1;
        return t.separation = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.size = function (n) {
            return arguments.length ? (i = !1, e = +n[0], r = +n[1], t) : i ? null : [e, r]
        }, t.nodeSize = function (n) {
            return arguments.length ? (i = !0, e = +n[0], r = +n[1], t) : i ? [e, r] : null
        }, t
    }, Ty = function () {
        return this.eachAfter(Eo)
    }, Sy = function (t) {
        var n, e, r, i, o = this, u = [o];
        do {
            for (n = u.reverse(), u = []; o = n.pop();)if (t(o), e = o.children)for (r = 0, i = e.length; r < i; ++r)u.push(e[r])
        } while (u.length);
        return this
    }, Ny = function (t) {
        for (var n, e, r = this,
                 i = [r]; r = i.pop();)if (t(r), n = r.children)for (e = n.length - 1; e >= 0; --e)i.push(n[e]);
        return this
    }, ky = function (t) {
        for (var n, e, r, i = this, o = [i],
                 u = []; i = o.pop();)if (u.push(i), n = i.children)for (e = 0, r = n.length; e < r; ++e)o.push(n[e]);
        for (; i = u.pop();)t(i);
        return this
    }, Ey = function (t) {
        return this.eachAfter(function (n) {
            for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;)e += r[i].value;
            n.value = e
        })
    }, Ay = function (t) {
        return this.eachBefore(function (n) {
            n.children && n.children.sort(t)
        })
    }, Cy = function (t) {
        for (var n = this, e = Ao(n, t), r = [n]; n !== e;)n = n.parent, r.push(n);
        for (var i = r.length; t !== e;)r.splice(i, 0, t), t = t.parent;
        return r
    }, zy = function () {
        for (var t = this, n = [t]; t = t.parent;)n.push(t);
        return n
    }, Py = function () {
        var t = [];
        return this.each(function (n) {
            t.push(n)
        }), t
    }, Ly = function () {
        var t = [];
        return this.eachBefore(function (n) {
            n.children || t.push(n)
        }), t
    }, Ry = function () {
        var t = this, n = [];
        return t.each(function (e) {
            e !== t && n.push({source: e.parent, target: e})
        }), n
    };
    qo.prototype = Co.prototype = {
        constructor: qo,
        count: Ty,
        each: Sy,
        eachAfter: ky,
        eachBefore: Ny,
        sum: Ey,
        sort: Ay,
        path: Cy,
        ancestors: zy,
        descendants: Py,
        leaves: Ly,
        links: Ry,
        copy: zo
    };
    var qy = function (t) {
        for (var n = (t = t.slice()).length, e = null, r = e; n;) {
            var i = new Uo(t[n - 1]);
            r = r ? r.next = i : e = i, t[void 0] = t[--n]
        }
        return {head: e, tail: r}
    }, Uy = function (t) {
        return Oo(qy(t), [])
    }, Dy = function (t) {
        return Vo(t), t
    }, Oy = function (t) {
        return function () {
            return t
        }
    }, Fy = function () {
        function t(t) {
            return t.x = e / 2, t.y = r / 2, n ? t.eachBefore(Jo(n)).eachAfter(Qo(i, .5)).eachBefore(Ko(1)) : t.eachBefore(Jo(Go)).eachAfter(Qo(Zo, 1)).eachAfter(Qo(i, t.r / Math.min(e, r))).eachBefore(Ko(Math.min(e, r) / (2 * t.r))), t
        }

        var n = null, e = 1, r = 1, i = Zo;
        return t.radius = function (e) {
            return arguments.length ? (n = $o(e), t) : n
        }, t.size = function (n) {
            return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
        }, t.padding = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : Oy(+n), t) : i
        }, t
    }, Iy = function (t) {
        t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
    }, Yy = function (t, n, e, r, i) {
        for (var o, u = t.children, a = -1, c = u.length,
                 s = t.value && (r - n) / t.value; ++a < c;)o = u[a], o.y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * s
    }, By = function () {
        function t(t) {
            var u = t.height + 1;
            return t.x0 = t.y0 = i, t.x1 = e, t.y1 = r / u, t.eachBefore(n(r, u)), o && t.eachBefore(Iy), t
        }

        function n(t, n) {
            return function (e) {
                e.children && Yy(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                var r = e.x0, o = e.y0, u = e.x1 - i, a = e.y1 - i;
                u < r && (r = u = (r + u) / 2), a < o && (o = a = (o + a) / 2), e.x0 = r, e.y0 = o, e.x1 = u, e.y1 = a
            }
        }

        var e = 1, r = 1, i = 0, o = !1;
        return t.round = function (n) {
            return arguments.length ? (o = !!n, t) : o
        }, t.size = function (n) {
            return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
        }, t.padding = function (n) {
            return arguments.length ? (i = +n, t) : i
        }, t
    }, jy = "$", Hy = {depth: -1}, Xy = {}, Vy = function () {
        function t(t) {
            var r, i, o, u, a, c, s, f = t.length, l = new Array(f), h = {};
            for (i = 0; i < f; ++i)r = t[i], a = l[i] = new qo(r), null != (c = n(r, i, t)) && (c += "") && (s = jy + (a.id = c), h[s] = s in h ? Xy : a);
            for (i = 0; i < f; ++i)if (a = l[i], null != (c = e(t[i], i, t)) && (c += "")) {
                if (!(u = h[jy + c]))throw new Error("missing: " + c);
                if (u === Xy)throw new Error("ambiguous: " + c);
                u.children ? u.children.push(a) : u.children = [a], a.parent = u
            } else {
                if (o)throw new Error("multiple roots");
                o = a
            }
            if (!o)throw new Error("no root");
            if (o.parent = Hy, o.eachBefore(function (t) {
                    t.depth = t.parent.depth + 1, --f
                }).eachBefore(Ro), o.parent = null, f > 0)throw new Error("cycle");
            return o
        }

        var n = tu, e = nu;
        return t.id = function (e) {
            return arguments.length ? (n = Wo(e), t) : n
        }, t.parentId = function (n) {
            return arguments.length ? (e = Wo(n), t) : e
        }, t
    };
    cu.prototype = Object.create(qo.prototype);
    var $y = function () {
        function t(t) {
            var r = su(t);
            if (r.eachAfter(n), r.parent.m = -r.z, r.eachBefore(e), c) t.eachBefore(i); else {
                var s = t, f = t, l = t;
                t.eachBefore(function (t) {
                    t.x < s.x && (s = t), t.x > f.x && (f = t), t.depth > l.depth && (l = t)
                });
                var h = s === f ? 1 : o(s, f) / 2, p = h - s.x, d = u / (f.x + h + p), v = a / (l.depth || 1);
                t.eachBefore(function (t) {
                    t.x = (t.x + p) * d, t.y = t.depth * v
                })
            }
            return t
        }

        function n(t) {
            var n = t.children, e = t.parent.children, i = t.i ? e[t.i - 1] : null;
            if (n) {
                uu(t);
                var u = (n[0].z + n[n.length - 1].z) / 2;
                i ? (t.z = i.z + o(t._, i._), t.m = t.z - u) : t.z = u
            } else i && (t.z = i.z + o(t._, i._));
            t.parent.A = r(t, i, t.parent.A || e[0])
        }

        function e(t) {
            t._.x = t.z + t.parent.m, t.m += t.parent.m
        }

        function r(t, n, e) {
            if (n) {
                for (var r, i = t, u = t, a = n, c = i.parent.children[0], s = i.m, f = u.m, l = a.m,
                         h = c.m; a = iu(a), i = ru(i), a && i;)c = ru(c), u = iu(u), u.a = t, r = a.z + l - i.z - s + o(a._, i._), r > 0 && (ou(au(a, t, e), t, r), s += r, f += r), l += a.m, s += i.m, h += c.m, f += u.m;
                a && !iu(u) && (u.t = a, u.m += l - f), i && !ru(c) && (c.t = i, c.m += s - h, e = t)
            }
            return e
        }

        function i(t) {
            t.x *= u, t.y = t.depth * a
        }

        var o = eu, u = 1, a = 1, c = null;
        return t.separation = function (n) {
            return arguments.length ? (o = n, t) : o
        }, t.size = function (n) {
            return arguments.length ? (c = !1, u = +n[0], a = +n[1], t) : c ? null : [u, a]
        }, t.nodeSize = function (n) {
            return arguments.length ? (c = !0, u = +n[0], a = +n[1], t) : c ? [u, a] : null
        }, t
    }, Wy = function (t, n, e, r, i) {
        for (var o, u = t.children, a = -1, c = u.length,
                 s = t.value && (i - e) / t.value; ++a < c;)o = u[a], o.x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * s
    }, Zy = (1 + Math.sqrt(5)) / 2, Gy = function t(n) {
        function e(t, e, r, i, o) {
            fu(n, t, e, r, i, o)
        }

        return e.ratio = function (n) {
            return t((n = +n) > 1 ? n : 1)
        }, e
    }(Zy), Jy = function () {
        function t(t) {
            return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = o, t.eachBefore(n), u = [0], r && t.eachBefore(Iy), t
        }

        function n(t) {
            var n = u[t.depth], r = t.x0 + n, i = t.y0 + n, o = t.x1 - n, h = t.y1 - n;
            o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = h, t.children && (n = u[t.depth + 1] = a(t) / 2, r += l(t) - n, i += c(t) - n, o -= s(t) - n, h -= f(t) - n, o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), e(t, r, i, o, h))
        }

        var e = Gy, r = !1, i = 1, o = 1, u = [0], a = Zo, c = Zo, s = Zo, f = Zo, l = Zo;
        return t.round = function (n) {
            return arguments.length ? (r = !!n, t) : r
        }, t.size = function (n) {
            return arguments.length ? (i = +n[0], o = +n[1], t) : [i, o]
        }, t.tile = function (n) {
            return arguments.length ? (e = Wo(n), t) : e
        }, t.padding = function (n) {
            return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner()
        }, t.paddingInner = function (n) {
            return arguments.length ? (a = "function" == typeof n ? n : Oy(+n), t) : a
        }, t.paddingOuter = function (n) {
            return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop()
        }, t.paddingTop = function (n) {
            return arguments.length ? (c = "function" == typeof n ? n : Oy(+n), t) : c
        }, t.paddingRight = function (n) {
            return arguments.length ? (s = "function" == typeof n ? n : Oy(+n), t) : s
        }, t.paddingBottom = function (n) {
            return arguments.length ? (f = "function" == typeof n ? n : Oy(+n), t) : f
        }, t.paddingLeft = function (n) {
            return arguments.length ? (l = "function" == typeof n ? n : Oy(+n), t) : l
        }, t
    }, Qy = function (t, n, e, r, i) {
        function o(t, n, e, r, i, u, a) {
            if (t >= n - 1) {
                var s = c[t];
                return s.x0 = r, s.y0 = i, s.x1 = u, s.y1 = a, void 0
            }
            for (var l = f[t], h = e / 2 + l, p = t + 1, d = n - 1; p < d;) {
                var v = p + d >>> 1;
                f[v] < h ? p = v + 1 : d = v
            }
            h - f[p - 1] < f[p] - h && t + 1 < p && --p;
            var _ = f[p] - l, g = e - _;
            if (u - r > a - i) {
                var y = (r * g + u * _) / e;
                o(t, p, _, r, i, y, a), o(p, n, g, y, i, u, a)
            } else {
                var m = (i * g + a * _) / e;
                o(t, p, _, r, i, u, m), o(p, n, g, r, m, u, a)
            }
        }

        var u, a, c = t.children, s = c.length, f = new Array(s + 1);
        for (f[0] = a = u = 0; u < s; ++u)f[u + 1] = a += c[u].value;
        o(0, s, t.value, n, e, r, i)
    }, Ky = function (t, n, e, r, i) {
        (1 & t.depth ? Wy : Yy)(t, n, e, r, i)
    }, tm = function t(n) {
        function e(t, e, r, i, o) {
            if ((u = t._squarify) && u.ratio === n)for (var u, a, c, s, f, l = -1, h = u.length,
                                                            p = t.value; ++l < h;) {
                for (a = u[l], c = a.children, s = a.value = 0, f = c.length; s < f; ++s)a.value += c[s].value;
                a.dice ? Yy(a, e, r, i, r += (o - r) * a.value / p) : Wy(a, e, r, e += (i - e) * a.value / p, o), p -= a.value
            } else t._squarify = u = fu(n, t, e, r, i, o), u.ratio = n
        }

        return e.ratio = function (n) {
            return t((n = +n) > 1 ? n : 1)
        }, e
    }(Zy), nm = function (t) {
        for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;)n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
        return o / 2
    }, em = function (t) {
        for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1],
                 c = 0; ++r < i;)n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
        return c *= 3, [o / c, u / c]
    }, rm = function (t, n, e) {
        return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
    }, im = function (t) {
        if ((e = t.length) < 3)return null;
        var n, e, r = new Array(e), i = new Array(e);
        for (n = 0; n < e; ++n)r[n] = [+t[n][0], +t[n][1], n];
        for (r.sort(lu), n = 0; n < e; ++n)i[n] = [r[n][0], -r[n][1]];
        var o = hu(r), u = hu(i), a = u[0] === o[0], c = u[u.length - 1] === o[o.length - 1], s = [];
        for (n = o.length - 1; n >= 0; --n)s.push(t[r[o[n]][2]]);
        for (n = +a; n < u.length - c; ++n)s.push(t[r[u[n]][2]]);
        return s
    }, om = function (t, n) {
        for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], s = o[1], f = !1,
                 l = 0; l < i; ++l)o = t[l], e = o[0], r = o[1], r > a != s > a && u < (c - e) * (a - r) / (s - r) + e && (f = !f), c = e, s = r;
        return f
    }, um = function (t) {
        for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1],
                 c = 0; ++r < i;)n = u, e = a, o = t[r], u = o[0], a = o[1], n -= u, e -= a, c += Math.sqrt(n * n + e * e);
        return c
    }, am = [].slice, cm = {};
    pu.prototype = mu.prototype = {
        constructor: pu, defer: function (t) {
            if ("function" != typeof t || this._call)throw new Error;
            if (null != this._error)return this;
            var n = am.call(arguments, 1);
            return n.push(t), ++this._waiting, this._tasks.push(n), du(this), this
        }, abort: function () {
            return null == this._error && gu(this, new Error("abort")), this
        }, await: function (t) {
            if ("function" != typeof t || this._call)throw new Error;
            return this._call = function (n, e) {
                t.apply(null, [n].concat(e))
            }, yu(this), this
        }, awaitAll: function (t) {
            if ("function" != typeof t || this._call)throw new Error;
            return this._call = t, yu(this), this
        }
    };
    var sm = function (t, n) {
            return t = null == t ? 0 : +t, n = null == n ? 1 : +n, 1 === arguments.length ? (n = t, t = 0) : n -= t, function () {
                return Math.random() * n + t
            }
        }, fm = function (t, n) {
            var e, r;
            return t = null == t ? 0 : +t, n = null == n ? 1 : +n, function () {
                var i;
                if (null != e) i = e, e = null; else do {
                    e = 2 * Math.random() - 1, i = 2 * Math.random() - 1, r = e * e + i * i
                } while (!r || r > 1);
                return t + n * i * Math.sqrt(-2 * Math.log(r) / r)
            }
        }, lm = function () {
            var t = fm.apply(this, arguments);
            return function () {
                return Math.exp(t())
            }
        }, hm = function (t) {
            return function () {
                for (var n = 0, e = 0; e < t; ++e)n += Math.random();
                return n
            }
        }, pm = function (t) {
            var n = hm(t);
            return function () {
                return n() / t
            }
        }, dm = function (t) {
            return function () {
                return -Math.log(1 - Math.random()) / t
            }
        }, vm = function (t, n) {
            function e(t) {
                var n, e = s.status;
                if (!e && bu(s) || e >= 200 && e < 300 || 304 === e) {
                    if (o)try {
                        n = o.call(r, s)
                    } catch (t) {
                        return void a.call("error", r, t)
                    } else n = s;
                    a.call("load", r, n)
                } else a.call("error", r, t)
            }

            var r, i, o, u, a = v("beforesend", "progress", "load", "error"), c = Be(), s = new XMLHttpRequest, f = null,
                l = null, h = 0;
            if ("undefined" == typeof XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(t) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = s.ontimeout = e : s.onreadystatechange = function (t) {
                    s.readyState > 3 && e(t)
                }, s.onprogress = function (t) {
                    a.call("progress", r, t)
                }, r = {
                    header: function (t, n) {
                        return t = (t + "").toLowerCase(), arguments.length < 2 ? c.get(t) : (null == n ? c.remove(t) : c.set(t, n + ""), r)
                    }, mimeType: function (t) {
                        return arguments.length ? (i = null == t ? null : t + "", r) : i
                    }, responseType: function (t) {
                        return arguments.length ? (u = t, r) : u
                    }, timeout: function (t) {
                        return arguments.length ? (h = +t, r) : h
                    }, user: function (t) {
                        return arguments.length < 1 ? f : (f = null == t ? null : t + "", r)
                    }, password: function (t) {
                        return arguments.length < 1 ? l : (l = null == t ? null : t + "", r)
                    }, response: function (t) {
                        return o = t, r
                    }, get: function (t, n) {
                        return r.send("GET", t, n)
                    }, post: function (t, n) {
                        return r.send("POST", t, n)
                    }, send: function (n, e, o) {
                        return s.open(n, t, !0, f, l), null == i || c.has("accept") || c.set("accept", i + ",*/*"), s.setRequestHeader && c.each(function (t, n) {
                            s.setRequestHeader(n, t)
                        }), null != i && s.overrideMimeType && s.overrideMimeType(i), null != u && (s.responseType = u), h > 0 && (s.timeout = h), null == o && "function" == typeof e && (o = e, e = null), null != o && 1 === o.length && (o = xu(o)), null != o && r.on("error", o).on("load", function (t) {
                            o(null, t)
                        }), a.call("beforesend", r, s), s.send(null == e ? null : e), r
                    }, abort: function () {
                        return s.abort(), r
                    }, on: function () {
                        var t = a.on.apply(a, arguments);
                        return t === a ? r : t
                    }
                }, null != n) {
                if ("function" != typeof n)throw new Error("invalid callback: " + n);
                return r.get(n)
            }
            return r
        }, _m = function (t, n) {
            return function (e, r) {
                var i = vm(e).mimeType(t).response(n);
                if (null != r) {
                    if ("function" != typeof r)throw new Error("invalid callback: " + r);
                    return i.get(r)
                }
                return i
            }
        }, gm = _m("text/html", function (t) {
            return document.createRange().createContextualFragment(t.responseText)
        }), ym = _m("application/json", function (t) {
            return JSON.parse(t.responseText)
        }), mm = _m("text/plain", function (t) {
            return t.responseText
        }), xm = _m("application/xml", function (t) {
            var n = t.responseXML;
            if (!n)throw new Error("parse error");
            return n
        }), bm = function (t, n) {
            return function (e, r, i) {
                arguments.length < 3 && (i = r, r = null);
                var o = vm(e).mimeType(t);
                return o.row = function (t) {
                    return arguments.length ? o.response(wu(n, r = t)) : r
                }, o.row(r), i ? o.get(i) : o
            }
        }, wm = bm("text/csv", Fd), Mm = bm("text/tab-separated-values", Hd), Tm = Array.prototype, Sm = Tm.map,
        Nm = Tm.slice, km = {name: "implicit"}, Em = function (t) {
            return function () {
                return t
            }
        }, Am = function (t) {
            return +t
        }, Cm = [0, 1], zm = function (n, e, r) {
            var o, u = n[0], a = n[n.length - 1], c = i(u, a, null == e ? 10 : e);
            switch (r = hr(null == r ? ",f" : r), r.type) {
                case"s":
                    var s = Math.max(Math.abs(u), Math.abs(a));
                    return null != r.precision || isNaN(o = Rv(c, s)) || (r.precision = o), t.formatPrefix(r, s);
                case"":
                case"e":
                case"g":
                case"p":
                case"r":
                    null != r.precision || isNaN(o = qv(c, Math.max(Math.abs(u), Math.abs(a)))) || (r.precision = o - ("e" === r.type));
                    break;
                case"f":
                case"%":
                    null != r.precision || isNaN(o = Lv(c)) || (r.precision = o - 2 * ("%" === r.type))
            }
            return t.format(r)
        }, Pm = function (t, n) {
            t = t.slice();
            var e, r = 0, i = t.length - 1, o = t[r], u = t[i];
            return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
        }, Lm = new Date, Rm = new Date, qm = Gu(function () {
        }, function (t, n) {
            t.setTime(+t + n)
        }, function (t, n) {
            return n - t
        });
    qm.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Gu(function (n) {
            n.setTime(Math.floor(n / t) * t)
        }, function (n, e) {
            n.setTime(+n + e * t)
        }, function (n, e) {
            return (e - n) / t
        }) : qm : null
    };
    var Um = qm.range, Dm = 6e4, Om = 6048e5, Fm = Gu(function (t) {
            t.setTime(1e3 * Math.floor(t / 1e3))
        }, function (t, n) {
            t.setTime(+t + 1e3 * n)
        }, function (t, n) {
            return (n - t) / 1e3
        }, function (t) {
            return t.getUTCSeconds()
        }), Im = Fm.range, Ym = Gu(function (t) {
            t.setTime(Math.floor(t / Dm) * Dm)
        }, function (t, n) {
            t.setTime(+t + n * Dm)
        }, function (t, n) {
            return (n - t) / Dm
        }, function (t) {
            return t.getMinutes()
        }), Bm = Ym.range, jm = Gu(function (t) {
            var n = t.getTimezoneOffset() * Dm % 36e5;
            n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
        }, function (t, n) {
            t.setTime(+t + 36e5 * n)
        }, function (t, n) {
            return (n - t) / 36e5
        }, function (t) {
            return t.getHours()
        }), Hm = jm.range, Xm = Gu(function (t) {
            t.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setDate(t.getDate() + n)
        }, function (t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Dm) / 864e5
        }, function (t) {
            return t.getDate() - 1
        }), Vm = Xm.range, $m = Ju(0), Wm = Ju(1), Zm = Ju(2), Gm = Ju(3), Jm = Ju(4), Qm = Ju(5), Km = Ju(6),
        tx = $m.range, nx = Wm.range, ex = Zm.range, rx = Gm.range, ix = Jm.range, ox = Qm.range, ux = Km.range,
        ax = Gu(function (t) {
            t.setDate(1), t.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setMonth(t.getMonth() + n)
        }, function (t, n) {
            return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
        }, function (t) {
            return t.getMonth()
        }), cx = ax.range, sx = Gu(function (t) {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setFullYear(t.getFullYear() + n)
        }, function (t, n) {
            return n.getFullYear() - t.getFullYear()
        }, function (t) {
            return t.getFullYear()
        });
    sx.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Gu(function (n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
        }, function (n, e) {
            n.setFullYear(n.getFullYear() + e * t)
        }) : null
    };
    var fx = sx.range, lx = Gu(function (t) {
            t.setUTCSeconds(0, 0)
        }, function (t, n) {
            t.setTime(+t + n * Dm)
        }, function (t, n) {
            return (n - t) / Dm
        }, function (t) {
            return t.getUTCMinutes()
        }), hx = lx.range, px = Gu(function (t) {
            t.setUTCMinutes(0, 0, 0)
        }, function (t, n) {
            t.setTime(+t + 36e5 * n)
        }, function (t, n) {
            return (n - t) / 36e5
        }, function (t) {
            return t.getUTCHours()
        }), dx = px.range, vx = Gu(function (t) {
            t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCDate(t.getUTCDate() + n)
        }, function (t, n) {
            return (n - t) / 864e5
        }, function (t) {
            return t.getUTCDate() - 1
        }), _x = vx.range, gx = Qu(0), yx = Qu(1), mx = Qu(2), xx = Qu(3), bx = Qu(4), wx = Qu(5), Mx = Qu(6),
        Tx = gx.range, Sx = yx.range, Nx = mx.range, kx = xx.range, Ex = bx.range, Ax = wx.range, Cx = Mx.range,
        zx = Gu(function (t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCMonth(t.getUTCMonth() + n)
        }, function (t, n) {
            return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
        }, function (t) {
            return t.getUTCMonth()
        }), Px = zx.range, Lx = Gu(function (t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n)
        }, function (t, n) {
            return n.getUTCFullYear() - t.getUTCFullYear()
        }, function (t) {
            return t.getUTCFullYear()
        });
    Lx.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Gu(function (n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
        }, function (n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t)
        }) : null
    };
    var Rx, qx = Lx.range, Ux = {"-": "", _: " ", 0: "0"}, Dx = /^\s*\d+/, Ox = /^%/,
        Fx = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    Ga({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var Ix = Date.prototype.toISOString ? Ja : t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ"),
        Yx = +new Date("2000-01-01T00:00:00.000Z") ? Qa : t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"), Bx = 1e3, jx = 60 * Bx,
        Hx = 60 * jx, Xx = 24 * Hx, Vx = 7 * Xx, $x = 30 * Xx, Wx = 365 * Xx, Zx = function () {
            return nc(sx, ax, $m, Xm, jm, Ym, Fm, qm, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
        }, Gx = function () {
            return nc(Lx, zx, gx, vx, px, lx, Fm, qm, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
        }, Jx = function (t) {
            return t.match(/.{6}/g).map(function (t) {
                return "#" + t
            })
        }, Qx = Jx("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        Kx = Jx("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
        tb = Jx("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
        nb = Jx("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
        eb = Fh($t(300, .5, 0), $t(-240, .5, 1)), rb = Fh($t(-100, .75, .35), $t(80, 1.5, .8)),
        ib = Fh($t(260, .75, .35), $t(80, 1.5, .8)), ob = $t(), ub = function (t) {
            (t < 0 || t > 1) && (t -= Math.floor(t));
            var n = Math.abs(t - .5);
            return ob.h = 360 * t - 100, ob.s = 1.5 - 1.5 * n, ob.l = .8 - .9 * n, ob + ""
        },
        ab = ec(Jx("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
        cb = ec(Jx("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
        sb = ec(Jx("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
        fb = ec(Jx("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
        lb = function (t) {
            return function () {
                return t
            }
        }, hb = Math.abs, pb = Math.atan2, db = Math.cos, vb = Math.max, _b = Math.min, gb = Math.sin, yb = Math.sqrt,
        mb = 1e-12, xb = Math.PI, bb = xb / 2, wb = 2 * xb, Mb = function () {
            function t() {
                var t, s, f = +n.apply(this, arguments), l = +e.apply(this, arguments), h = o.apply(this, arguments) - bb,
                    p = u.apply(this, arguments) - bb, d = hb(p - h), v = p > h;
                if (c || (c = t = qe()), l < f && (s = l, l = f, f = s), l > mb)if (d > wb - mb) c.moveTo(l * db(h), l * gb(h)), c.arc(0, 0, l, h, p, !v), f > mb && (c.moveTo(f * db(p), f * gb(p)), c.arc(0, 0, f, p, h, v)); else {
                    var _, g, y = h, m = p, x = h, b = p, w = d, M = d, T = a.apply(this, arguments) / 2,
                        S = T > mb && (i ? +i.apply(this, arguments) : yb(f * f + l * l)),
                        N = _b(hb(l - f) / 2, +r.apply(this, arguments)), k = N, E = N;
                    if (S > mb) {
                        var A = oc(S / f * gb(T)), C = oc(S / l * gb(T));
                        (w -= 2 * A) > mb ? (A *= v ? 1 : -1, x += A, b -= A) : (w = 0, x = b = (h + p) / 2), (M -= 2 * C) > mb ? (C *= v ? 1 : -1, y += C, m -= C) : (M = 0, y = m = (h + p) / 2)
                    }
                    var z = l * db(y), P = l * gb(y), L = f * db(b), R = f * gb(b);
                    if (N > mb) {
                        var q = l * db(m), U = l * gb(m), D = f * db(x), O = f * gb(x);
                        if (d < xb) {
                            var F = w > mb ? lc(z, P, D, O, q, U, L, R) : [L, R], I = z - F[0], Y = P - F[1], B = q - F[0],
                                j = U - F[1], H = 1 / gb(ic((I * B + Y * j) / (yb(I * I + Y * Y) * yb(B * B + j * j))) / 2),
                                X = yb(F[0] * F[0] + F[1] * F[1]);
                            k = _b(N, (f - X) / (H - 1)), E = _b(N, (l - X) / (H + 1))
                        }
                    }
                    M > mb ? E > mb ? (_ = hc(D, O, z, P, l, E, v), g = hc(q, U, L, R, l, E, v), c.moveTo(_.cx + _.x01, _.cy + _.y01), E < N ? c.arc(_.cx, _.cy, E, pb(_.y01, _.x01), pb(g.y01, g.x01), !v) : (c.arc(_.cx, _.cy, E, pb(_.y01, _.x01), pb(_.y11, _.x11), !v), c.arc(0, 0, l, pb(_.cy + _.y11, _.cx + _.x11), pb(g.cy + g.y11, g.cx + g.x11), !v), c.arc(g.cx, g.cy, E, pb(g.y11, g.x11), pb(g.y01, g.x01), !v))) : (c.moveTo(z, P), c.arc(0, 0, l, y, m, !v)) : c.moveTo(z, P), f > mb && w > mb ? k > mb ? (_ = hc(L, R, q, U, f, -k, v), g = hc(z, P, D, O, f, -k, v), c.lineTo(_.cx + _.x01, _.cy + _.y01), k < N ? c.arc(_.cx, _.cy, k, pb(_.y01, _.x01), pb(g.y01, g.x01), !v) : (c.arc(_.cx, _.cy, k, pb(_.y01, _.x01), pb(_.y11, _.x11), !v), c.arc(0, 0, f, pb(_.cy + _.y11, _.cx + _.x11), pb(g.cy + g.y11, g.cx + g.x11), v), c.arc(g.cx, g.cy, k, pb(g.y11, g.x11), pb(g.y01, g.x01), !v))) : c.arc(0, 0, f, b, x, v) : c.lineTo(L, R)
                } else c.moveTo(0, 0);
                if (c.closePath(), t)return c = null, t + "" || null
            }

            var n = uc, e = ac, r = lb(0), i = null, o = cc, u = sc, a = fc, c = null;
            return t.centroid = function () {
                var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                    r = (+o.apply(this, arguments) + +u.apply(this, arguments)) / 2 - xb / 2;
                return [db(r) * t, gb(r) * t]
            }, t.innerRadius = function (e) {
                return arguments.length ? (n = "function" == typeof e ? e : lb(+e), t) : n
            }, t.outerRadius = function (n) {
                return arguments.length ? (e = "function" == typeof n ? n : lb(+n), t) : e
            }, t.cornerRadius = function (n) {
                return arguments.length ? (r = "function" == typeof n ? n : lb(+n), t) : r
            }, t.padRadius = function (n) {
                return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : lb(+n), t) : i
            }, t.startAngle = function (n) {
                return arguments.length ? (o = "function" == typeof n ? n : lb(+n), t) : o
            }, t.endAngle = function (n) {
                return arguments.length ? (u = "function" == typeof n ? n : lb(+n), t) : u
            }, t.padAngle = function (n) {
                return arguments.length ? (a = "function" == typeof n ? n : lb(+n), t) : a
            }, t.context = function (n) {
                return arguments.length ? (c = null == n ? null : n, t) : c
            }, t
        };
    pc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, n)
            }
        }
    };
    var Tb = function (t) {
        return new pc(t)
    }, Sb = function () {
        function t(t) {
            var a, c, s, f = t.length, l = !1;
            for (null == i && (u = o(s = qe())), a = 0; a <= f; ++a)!(a < f && r(c = t[a], a, t)) === l && ((l = !l) ? u.lineStart() : u.lineEnd()), l && u.point(+n(c, a, t), +e(c, a, t));
            if (s)return u = null, s + "" || null
        }

        var n = dc, e = vc, r = lb(!0), i = null, o = Tb, u = null;
        return t.x = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : lb(+e), t) : n
        }, t.y = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : lb(+n), t) : e
        }, t.defined = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : lb(!!n), t) : r
        }, t.curve = function (n) {
            return arguments.length ? (o = n, null != i && (u = o(i)), t) : o
        }, t.context = function (n) {
            return arguments.length ? (null == n ? i = u = null : u = o(i = n), t) : i
        }, t
    }, Nb = function () {
        function t(t) {
            var n, f, l, h, p, d = t.length, v = !1, _ = new Array(d), g = new Array(d);
            for (null == a && (s = c(p = qe())), n = 0; n <= d; ++n) {
                if (!(n < d && u(h = t[n], n, t)) === v)if (v = !v) f = n, s.areaStart(), s.lineStart(); else {
                    for (s.lineEnd(), s.lineStart(), l = n - 1; l >= f; --l)s.point(_[l], g[l]);
                    s.lineEnd(), s.areaEnd()
                }
                v && (_[n] = +e(h, n, t), g[n] = +i(h, n, t), s.point(r ? +r(h, n, t) : _[n], o ? +o(h, n, t) : g[n]))
            }
            if (p)return s = null, p + "" || null
        }

        function n() {
            return Sb().defined(u).curve(c).context(a)
        }

        var e = dc, r = null, i = lb(0), o = vc, u = lb(!0), a = null, c = Tb, s = null;
        return t.x = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : lb(+n), r = null, t) : e
        }, t.x0 = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : lb(+n), t) : e
        }, t.x1 = function (n) {
            return arguments.length ? (r = null == n ? null : "function" == typeof n ? n : lb(+n), t) : r
        }, t.y = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : lb(+n), o = null, t) : i
        }, t.y0 = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : lb(+n), t) : i
        }, t.y1 = function (n) {
            return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : lb(+n), t) : o
        }, t.lineX0 = t.lineY0 = function () {
            return n().x(e).y(i)
        }, t.lineY1 = function () {
            return n().x(e).y(o)
        }, t.lineX1 = function () {
            return n().x(r).y(i)
        }, t.defined = function (n) {
            return arguments.length ? (u = "function" == typeof n ? n : lb(!!n), t) : u
        }, t.curve = function (n) {
            return arguments.length ? (c = n, null != a && (s = c(a)), t) : c
        }, t.context = function (n) {
            return arguments.length ? (null == n ? a = s = null : s = c(a = n), t) : a
        }, t
    }, kb = function (t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }, Eb = function (t) {
        return t
    }, Ab = function () {
        function t(t) {
            var a, c, s, f, l, h = t.length, p = 0, d = new Array(h), v = new Array(h), _ = +i.apply(this, arguments),
                g = Math.min(wb, Math.max(-wb, o.apply(this, arguments) - _)),
                y = Math.min(Math.abs(g) / h, u.apply(this, arguments)), m = y * (g < 0 ? -1 : 1);
            for (a = 0; a < h; ++a)(l = v[d[a] = a] = +n(t[a], a, t)) > 0 && (p += l);
            for (null != e ? d.sort(function (t, n) {
                return e(v[t], v[n])
            }) : null != r && d.sort(function (n, e) {
                    return r(t[n], t[e])
                }), a = 0, s = p ? (g - h * m) / p : 0; a < h; ++a, _ = f)c = d[a], l = v[c], f = _ + (l > 0 ? l * s : 0) + m, v[c] = {
                data: t[c],
                index: a,
                value: l,
                startAngle: _,
                endAngle: f,
                padAngle: y
            };
            return v
        }

        var n = Eb, e = kb, r = null, i = lb(0), o = lb(wb), u = lb(0);
        return t.value = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : lb(+e), t) : n
        }, t.sortValues = function (n) {
            return arguments.length ? (e = n, r = null, t) : e
        }, t.sort = function (n) {
            return arguments.length ? (r = n, e = null, t) : r
        }, t.startAngle = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : lb(+n), t) : i
        }, t.endAngle = function (n) {
            return arguments.length ? (o = "function" == typeof n ? n : lb(+n), t) : o
        }, t.padAngle = function (n) {
            return arguments.length ? (u = "function" == typeof n ? n : lb(+n), t) : u
        }, t
    }, Cb = gc(Tb);
    _c.prototype = {
        areaStart: function () {
            this._curve.areaStart()
        }, areaEnd: function () {
            this._curve.areaEnd()
        }, lineStart: function () {
            this._curve.lineStart()
        }, lineEnd: function () {
            this._curve.lineEnd()
        }, point: function (t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t))
        }
    };
    var zb = function () {
        return yc(Sb().curve(Cb))
    }, Pb = function () {
        var t = Nb().curve(Cb), n = t.curve, e = t.lineX0, r = t.lineX1, i = t.lineY0, o = t.lineY1;
        return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
            return yc(e())
        }, delete t.lineX0, t.lineEndAngle = function () {
            return yc(r())
        }, delete t.lineX1, t.lineInnerRadius = function () {
            return yc(i())
        }, delete t.lineY0, t.lineOuterRadius = function () {
            return yc(o())
        }, delete t.lineY1, t.curve = function (t) {
            return arguments.length ? n(gc(t)) : n()._curve
        }, t
    }, Lb = {
        draw: function (t, n) {
            var e = Math.sqrt(n / xb);
            t.moveTo(e, 0), t.arc(0, 0, e, 0, wb)
        }
    }, Rb = {
        draw: function (t, n) {
            var e = Math.sqrt(n / 5) / 2;
            t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
        }
    }, qb = Math.sqrt(1 / 3), Ub = 2 * qb, Db = {
        draw: function (t, n) {
            var e = Math.sqrt(n / Ub), r = e * qb;
            t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
        }
    }, Ob = Math.sin(xb / 10) / Math.sin(7 * xb / 10), Fb = Math.sin(wb / 10) * Ob, Ib = -Math.cos(wb / 10) * Ob, Yb = {
        draw: function (t, n) {
            var e = Math.sqrt(.8908130915292852 * n), r = Fb * e, i = Ib * e;
            t.moveTo(0, -e), t.lineTo(r, i);
            for (var o = 1; o < 5; ++o) {
                var u = wb * o / 5, a = Math.cos(u), c = Math.sin(u);
                t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
            }
            t.closePath()
        }
    }, Bb = {
        draw: function (t, n) {
            var e = Math.sqrt(n), r = -e / 2;
            t.rect(r, r, e, e)
        }
    }, jb = Math.sqrt(3), Hb = {
        draw: function (t, n) {
            var e = -Math.sqrt(n / (3 * jb));
            t.moveTo(0, 2 * e), t.lineTo(-jb * e, -e), t.lineTo(jb * e, -e), t.closePath()
        }
    }, Xb = -.5, Vb = Math.sqrt(3) / 2, $b = 1 / Math.sqrt(12), Wb = 3 * ($b / 2 + 1), Zb = {
        draw: function (t, n) {
            var e = Math.sqrt(n / Wb), r = e / 2, i = e * $b, o = r, u = e * $b + e, a = -o, c = u;
            t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(Xb * r - Vb * i, Vb * r + Xb * i), t.lineTo(Xb * o - Vb * u, Vb * o + Xb * u), t.lineTo(Xb * a - Vb * c, Vb * a + Xb * c), t.lineTo(Xb * r + Vb * i, Xb * i - Vb * r), t.lineTo(Xb * o + Vb * u, Xb * u - Vb * o), t.lineTo(Xb * a + Vb * c, Xb * c - Vb * a), t.closePath()
        }
    }, Gb = [Lb, Rb, Db, Bb, Yb, Hb, Zb], Jb = function () {
        function t() {
            var t;
            if (r || (r = t = qe()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t)return r = null, t + "" || null
        }

        var n = lb(Lb), e = lb(64), r = null;
        return t.type = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : lb(e), t) : n
        }, t.size = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : lb(+n), t) : e
        }, t.context = function (n) {
            return arguments.length ? (r = null == n ? null : n, t) : r
        }, t
    }, Qb = function () {
    };
    xc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 3:
                    mc(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    mc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    };
    var Kb = function (t) {
        return new xc(t)
    };
    bc.prototype = {
        areaStart: Qb, areaEnd: Qb, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
            }
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = n;
                    break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = n;
                    break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                    break;
                default:
                    mc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    };
    var tw = function (t) {
        return new bc(t)
    };
    wc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var e = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + n) / 6;
                    this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                    break;
                case 3:
                    this._point = 4;
                default:
                    mc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    };
    var nw = function (t) {
        return new wc(t)
    };
    Mc.prototype = {
        lineStart: function () {
            this._x = [], this._y = [], this._basis.lineStart()
        }, lineEnd: function () {
            var t = this._x, n = this._y, e = t.length - 1;
            if (e > 0)for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o,
                               c = -1; ++c <= e;)r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
            this._x = this._y = null, this._basis.lineEnd()
        }, point: function (t, n) {
            this._x.push(+t), this._y.push(+n)
        }
    };
    var ew = function t(n) {
        function e(t) {
            return 1 === n ? new xc(t) : new Mc(t, n)
        }

        return e.beta = function (n) {
            return t(+n)
        }, e
    }(.85);
    Sc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    Tc(this, this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = n;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Tc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var rw = function t(n) {
        function e(t) {
            return new Sc(t, n)
        }

        return e.tension = function (n) {
            return t(+n)
        }, e
    }(0);
    Nc.prototype = {
        areaStart: Qb, areaEnd: Qb, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    Tc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var iw = function t(n) {
        function e(t) {
            return new Nc(t, n)
        }

        return e.tension = function (n) {
            return t(+n)
        }, e
    }(0);
    kc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Tc(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var ow = function t(n) {
        function e(t) {
            return new kc(t, n)
        }

        return e.tension = function (n) {
            return t(+n)
        }, e
    }(0);
    Ac.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN,
                this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t, r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Ec(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var uw = function t(n) {
        function e(t) {
            return n ? new Ac(t, n) : new Sc(t, 0)
        }

        return e.alpha = function (n) {
            return t(+n)
        }, e
    }(.5);
    Cc.prototype = {
        areaStart: Qb, areaEnd: Qb, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        }, point: function (t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t, r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    Ec(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var aw = function t(n) {
        function e(t) {
            return n ? new Cc(t, n) : new Nc(t, 0)
        }

        return e.alpha = function (n) {
            return t(+n)
        }, e
    }(.5);
    zc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t, r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Ec(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var cw = function t(n) {
        function e(t) {
            return n ? new zc(t, n) : new kc(t, 0)
        }

        return e.alpha = function (n) {
            return t(+n)
        }, e
    }(.5);
    Pc.prototype = {
        areaStart: Qb, areaEnd: Qb, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            this._point && this._context.closePath()
        }, point: function (t, n) {
            t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
        }
    };
    var sw = function (t) {
        return new Pc(t)
    };
    Dc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    Uc(this, this._t0, qc(this, this._t0))
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            var e = NaN;
            if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, Uc(this, qc(this, e = Rc(this, t, n)), e);
                        break;
                    default:
                        Uc(this, this._t0, e = Rc(this, t, n))
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
            }
        }
    }, (Oc.prototype = Object.create(Dc.prototype)).point = function (t, n) {
        Dc.prototype.point.call(this, n, t)
    }, Fc.prototype = {
        moveTo: function (t, n) {
            this._context.moveTo(n, t)
        }, closePath: function () {
            this._context.closePath()
        }, lineTo: function (t, n) {
            this._context.lineTo(n, t)
        }, bezierCurveTo: function (t, n, e, r, i, o) {
            this._context.bezierCurveTo(n, t, r, e, o, i)
        }
    }, Bc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x = [], this._y = []
        }, lineEnd: function () {
            var t = this._x, n = this._y, e = t.length;
            if (e)if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]); else for (var r = jc(t),
                                                                                                                                                                 i = jc(n),
                                                                                                                                                                 o = 0,
                                                                                                                                                                 u = 1; u < e; ++o, ++u)this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
            (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
        }, point: function (t, n) {
            this._x.push(+t), this._y.push(+n)
        }
    };
    var fw = function (t) {
        return new Bc(t)
    };
    Hc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x = this._y = NaN, this._point = 0
        }, lineEnd: function () {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n); else {
                        var e = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                    }
            }
            this._x = t, this._y = n
        }
    };
    var lw = function (t) {
        return new Hc(t, .5)
    }, hw = Array.prototype.slice, pw = function (t, n) {
        if ((r = t.length) > 1)for (var e, r, i = 1, o = t[n[0]], u = o.length; i < r; ++i) {
            e = o, o = t[n[i]];
            for (var a = 0; a < u; ++a)o[a][1] += o[a][0] = isNaN(e[a][1]) ? e[a][0] : e[a][1]
        }
    }, dw = function (t) {
        for (var n = t.length, e = new Array(n); --n >= 0;)e[n] = n;
        return e
    }, vw = function () {
        function t(t) {
            var o, u, a = n.apply(this, arguments), c = t.length, s = a.length, f = new Array(s);
            for (o = 0; o < s; ++o) {
                for (var l, h = a[o], p = f[o] = new Array(c),
                         d = 0; d < c; ++d)p[d] = l = [0, +i(t[d], h, d, t)], l.data = t[d];
                p.key = h
            }
            for (o = 0, u = e(f); o < s; ++o)f[u[o]].index = o;
            return r(f, u), f
        }

        var n = lb([]), e = dw, r = pw, i = $c;
        return t.keys = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : lb(hw.call(e)), t) : n
        }, t.value = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : lb(+n), t) : i
        }, t.order = function (n) {
            return arguments.length ? (e = null == n ? dw : "function" == typeof n ? n : lb(hw.call(n)), t) : e
        }, t.offset = function (n) {
            return arguments.length ? (r = null == n ? pw : n, t) : r
        }, t
    }, _w = function (t, n) {
        if ((r = t.length) > 0) {
            for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
                for (i = e = 0; e < r; ++e)i += t[e][o][1] || 0;
                if (i)for (e = 0; e < r; ++e)t[e][o][1] /= i
            }
            pw(t, n)
        }
    }, gw = function (t, n) {
        if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                for (var u = 0, a = 0; u < e; ++u)a += t[u][r][1] || 0;
                i[r][1] += i[r][0] = -a / 2
            }
            pw(t, n)
        }
    }, yw = function (t, n) {
        if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, o = 0, u = 1; u < r; ++u) {
                for (var a = 0, c = 0, s = 0; a < i; ++a) {
                    for (var f = t[n[a]], l = f[u][1] || 0, h = f[u - 1][1] || 0, p = (l - h) / 2, d = 0; d < a; ++d) {
                        var v = t[n[d]];
                        p += (v[u][1] || 0) - (v[u - 1][1] || 0)
                    }
                    c += l, s += p * l
                }
                e[u - 1][1] += e[u - 1][0] = o, c && (o -= s / c)
            }
            e[u - 1][1] += e[u - 1][0] = o, pw(t, n)
        }
    }, mw = function (t) {
        var n = t.map(Wc);
        return dw(t).sort(function (t, e) {
            return n[t] - n[e]
        })
    }, xw = function (t) {
        return mw(t).reverse()
    }, bw = function (t) {
        var n, e, r = t.length, i = t.map(Wc), o = dw(t).sort(function (t, n) {
            return i[n] - i[t]
        }), u = 0, a = 0, c = [], s = [];
        for (n = 0; n < r; ++n)e = o[n], u < a ? (u += i[e], c.push(e)) : (a += i[e], s.push(e));
        return s.reverse().concat(c)
    }, ww = function (t) {
        return dw(t).reverse()
    }, Mw = function (t) {
        return function () {
            return t
        }
    };
    Jc.prototype = {
        constructor: Jc, insert: function (t, n) {
            var e, r, i;
            if (t) {
                if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                    for (t = t.R; t.L;)t = t.L;
                    t.L = n
                } else t.R = n;
                e = t
            } else this._ ? (t = ns(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
            for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;)r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Kc(this, e), t = e, e = t.U), e.C = !1, r.C = !0, ts(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (ts(this, e), t = e, e = t.U), e.C = !1, r.C = !0, Kc(this, r))), e = t.U;
            this._.C = !1
        }, remove: function (t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
            var n, e, r, i = t.U, o = t.L, u = t.R;
            if (e = o ? u ? ns(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) {
                if (t && t.C)return void(t.C = !1);
                do {
                    if (t === this._)break;
                    if (t === i.L) {
                        if (n = i.R, n.C && (n.C = !1, i.C = !0, Kc(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                            n.R && n.R.C || (n.L.C = !1, n.C = !0, ts(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Kc(this, i), t = this._;
                            break
                        }
                    } else if (n = i.L, n.C && (n.C = !1, i.C = !0, ts(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                        n.L && n.L.C || (n.R.C = !1, n.C = !0, Kc(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, ts(this, i), t = this._;
                        break
                    }
                    n.C = !0, t = i, i = i.U
                } while (!t.C);
                t && (t.C = !1)
            }
        }
    };
    var Tw, Sw, Nw, kw, Ew, Aw = [], Cw = [], zw = 1e-6, Pw = 1e-12;
    Ns.prototype = {
        constructor: Ns, polygons: function () {
            var t = this.edges;
            return this.cells.map(function (n) {
                var e = n.halfedges.map(function (e) {
                    return fs(n, t[e])
                });
                return e.data = n.site.data, e
            })
        }, triangles: function () {
            var t = [], n = this.edges;
            return this.cells.forEach(function (e, r) {
                if (o = (i = e.halfedges).length)for (var i, o, u, a = e.site, c = -1, s = n[i[o - 1]],
                                                          f = s.left === a ? s.right : s.left; ++c < o;)u = f, s = n[i[c]], f = s.left === a ? s.right : s.left, u && f && r < u.index && r < f.index && Ts(a, u, f) < 0 && t.push([a.data, u.data, f.data])
            }), t
        }, links: function () {
            return this.edges.filter(function (t) {
                return t.right
            }).map(function (t) {
                return {source: t.left.data, target: t.right.data}
            })
        }, find: function (t, n, e) {
            for (var r, i, o = this, u = o._found || 0, a = o.cells.length; !(i = o.cells[u]);)if (++u >= a)return null;
            var c = t - i.site[0], s = n - i.site[1], f = c * c + s * s;
            do {
                i = o.cells[r = u], u = null, i.halfedges.forEach(function (e) {
                    var r = o.edges[e], a = r.left;
                    if (a !== i.site && a || (a = r.right)) {
                        var c = t - a[0], s = n - a[1], l = c * c + s * s;
                        l < f && (f = l, u = a.index)
                    }
                })
            } while (null !== u);
            return o._found = r, null == e || f <= e * e ? i.site : null
        }
    };
    var Lw = function () {
        function t(t) {
            return new Ns(t.map(function (r, i) {
                var o = [Math.round(n(r, i, t) / zw) * zw, Math.round(e(r, i, t) / zw) * zw];
                return o.index = i, o.data = r, o
            }), r)
        }

        var n = Zc, e = Gc, r = null;
        return t.polygons = function (n) {
            return t(n).polygons()
        }, t.links = function (n) {
            return t(n).links()
        }, t.triangles = function (n) {
            return t(n).triangles()
        }, t.x = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : Mw(+e), t) : n
        }, t.y = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : Mw(+n), t) : e
        }, t.extent = function (n) {
            return arguments.length ? (r = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]], t) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]]
        }, t.size = function (n) {
            return arguments.length ? (r = null == n ? null : [[0, 0], [+n[0], +n[1]]], t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
        }, t
    }, Rw = function (t) {
        return function () {
            return t
        }
    };
    Es.prototype = {
        constructor: Es, scale: function (t) {
            return 1 === t ? this : new Es(this.k * t, this.x, this.y)
        }, translate: function (t, n) {
            return 0 === t & 0 === n ? this : new Es(this.k, this.x + this.k * t, this.y + this.k * n)
        }, apply: function (t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        }, applyX: function (t) {
            return t * this.k + this.x
        }, applyY: function (t) {
            return t * this.k + this.y
        }, invert: function (t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        }, invertX: function (t) {
            return (t - this.x) / this.k
        }, invertY: function (t) {
            return (t - this.y) / this.k
        }, rescaleX: function (t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        }, rescaleY: function (t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        }, toString: function () {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var qw = new Es(1, 0, 0);
    As.prototype = Es.prototype;
    var Uw = function () {
        t.event.preventDefault(), t.event.stopImmediatePropagation()
    }, Dw = function () {
        function n(t) {
            t.on("wheel.zoom", s).on("mousedown.zoom", f).on("dblclick.zoom", l).on("touchstart.zoom", h).on("touchmove.zoom", p).on("touchend.zoom touchcancel.zoom", d).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").property("__zoom", Ls)
        }

        function e(t, n) {
            return n = Math.max(x, Math.min(b, n)), n === t.k ? t : new Es(n, t.x, t.y)
        }

        function r(t, n, e) {
            var r = n[0] - e[0] * t.k, i = n[1] - e[1] * t.k;
            return r === t.x && i === t.y ? t : new Es(t.k, r, i)
        }

        function i(t, n) {
            var e = t.invertX(n[0][0]) - w, r = t.invertX(n[1][0]) - M, i = t.invertY(n[0][1]) - T,
                o = t.invertY(n[1][1]) - S;
            return t.translate(r > e ? (e + r) / 2 : Math.min(0, e) || Math.max(0, r), o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o))
        }

        function o(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
        }

        function u(t, n, e) {
            t.on("start.zoom", function () {
                a(this, arguments).start()
            }).on("interrupt.zoom end.zoom", function () {
                a(this, arguments).end()
            }).tween("zoom", function () {
                var t = this, r = arguments, i = a(t, r), u = m.apply(t, r), c = e || o(u),
                    s = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]), f = t.__zoom,
                    l = "function" == typeof n ? n.apply(t, r) : n,
                    h = k(f.invert(c).concat(s / f.k), l.invert(c).concat(s / l.k));
                return function (t) {
                    if (1 === t) t = l; else {
                        var n = h(t), e = s / n[2];
                        t = new Es(e, c[0] - n[0] * e, c[1] - n[1] * e)
                    }
                    i.zoom(null, t)
                }
            })
        }

        function a(t, n) {
            for (var e, r = 0, i = E.length; r < i; ++r)if ((e = E[r]).that === t)return e;
            return new c(t, n)
        }

        function c(t, n) {
            this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = m.apply(t, n)
        }

        function s() {
            function n() {
                o.wheel = null, o.end()
            }

            if (y.apply(this, arguments)) {
                var o = a(this, arguments), u = this.__zoom,
                    c = Math.max(x, Math.min(b, u.k * Math.pow(2, -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500))),
                    s = If(this);
                if (o.wheel) o.mouse[0][0] === s[0] && o.mouse[0][1] === s[1] || (o.mouse[1] = u.invert(o.mouse[0] = s)), clearTimeout(o.wheel); else {
                    if (u.k === c)return;
                    o.mouse = [s, u.invert(s)], cp(this), o.start()
                }
                Uw(), o.wheel = setTimeout(n, P), o.zoom("mouse", i(r(e(u, c), o.mouse[0], o.mouse[1]), o.extent))
            }
        }

        function f() {
            function n() {
                Uw(), o.moved = !0, o.zoom("mouse", i(r(o.that.__zoom, o.mouse[0] = If(o.that), o.mouse[1]), o.extent))
            }

            function e() {
                u.on("mousemove.zoom mouseup.zoom", null), yt(t.event.view, o.moved), Uw(), o.end()
            }

            if (!g && y.apply(this, arguments)) {
                var o = a(this, arguments), u = wl(t.event.view).on("mousemove.zoom", n, !0).on("mouseup.zoom", e, !0),
                    c = If(this);
                kl(t.event.view), Cs(), o.mouse = [c, this.__zoom.invert(c)], cp(this), o.start()
            }
        }

        function l() {
            if (y.apply(this, arguments)) {
                var o = this.__zoom, a = If(this), c = o.invert(a), s = o.k * (t.event.shiftKey ? .5 : 2),
                    f = i(r(e(o, s), a, c), m.apply(this, arguments));
                Uw(), N > 0 ? wl(this).transition().duration(N).call(u, f, a) : wl(this).call(n.transform, f)
            }
        }

        function h() {
            if (y.apply(this, arguments)) {
                var n, e, r, i, o = a(this, arguments), u = t.event.changedTouches, c = u.length;
                for (Cs(), e = 0; e < c; ++e)r = u[e], i = Tl(this, u, r.identifier), i = [i, this.__zoom.invert(i), r.identifier], o.touch0 ? o.touch1 || (o.touch1 = i) : (o.touch0 = i, n = !0);
                if (_ && (_ = clearTimeout(_), !o.touch1))return o.end(), void((i = wl(this).on("dblclick.zoom")) && i.apply(this, arguments));
                n && (_ = setTimeout(function () {
                    _ = null
                }, z), cp(this), o.start())
            }
        }

        function p() {
            var n, o, u, c, s = a(this, arguments), f = t.event.changedTouches, l = f.length;
            for (Uw(), _ && (_ = clearTimeout(_)), n = 0; n < l; ++n)o = f[n], u = Tl(this, f, o.identifier), s.touch0 && s.touch0[2] === o.identifier ? s.touch0[0] = u : s.touch1 && s.touch1[2] === o.identifier && (s.touch1[0] = u);
            if (o = s.that.__zoom, s.touch1) {
                var h = s.touch0[0], p = s.touch0[1], d = s.touch1[0], v = s.touch1[1],
                    g = (g = d[0] - h[0]) * g + (g = d[1] - h[1]) * g,
                    y = (y = v[0] - p[0]) * y + (y = v[1] - p[1]) * y;
                o = e(o, Math.sqrt(g / y)), u = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2], c = [(p[0] + v[0]) / 2, (p[1] + v[1]) / 2]
            } else {
                if (!s.touch0)return;
                u = s.touch0[0], c = s.touch0[1]
            }
            s.zoom("touch", i(r(o, u, c), s.extent))
        }

        function d() {
            var n, e, r = a(this, arguments), i = t.event.changedTouches, o = i.length;
            for (Cs(), g && clearTimeout(g), g = setTimeout(function () {
                g = null
            }, z), n = 0; n < o; ++n)e = i[n], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
            r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
        }

        var _, g, y = zs, m = Ps, x = 0, b = 1 / 0, w = -b, M = b, T = w, S = M, N = 250, k = Lh, E = [],
            C = v("start", "zoom", "end"), z = 500, P = 150;
        return n.transform = function (t, n) {
            var e = t.selection ? t.selection() : t;
            e.property("__zoom", Ls), t !== e ? u(t, n) : e.interrupt().each(function () {
                a(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
            })
        }, n.scaleBy = function (t, e) {
            n.scaleTo(t, function () {
                return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e)
            })
        }, n.scaleTo = function (t, u) {
            n.transform(t, function () {
                var t = m.apply(this, arguments), n = this.__zoom, a = o(t), c = n.invert(a);
                return i(r(e(n, "function" == typeof u ? u.apply(this, arguments) : u), a, c), t)
            })
        }, n.translateBy = function (t, e, r) {
            n.transform(t, function () {
                return i(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), m.apply(this, arguments))
            })
        }, c.prototype = {
            start: function () {
                return 1 == ++this.active && (this.index = E.push(this) - 1, this.emit("start")), this
            }, zoom: function (t, n) {
                return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
            }, end: function () {
                return 0 == --this.active && (E.splice(this.index, 1), this.index = -1, this.emit("end")), this
            }, emit: function (t) {
                A(new ks(n, t, this.that.__zoom), C.apply, C, [t, this.that, this.args])
            }
        }, n.filter = function (t) {
            return arguments.length ? (y = "function" == typeof t ? t : Rw(!!t), n) : y
        }, n.extent = function (t) {
            return arguments.length ? (m = "function" == typeof t ? t : Rw([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), n) : m
        }, n.scaleExtent = function (t) {
            return arguments.length ? (x = +t[0], b = +t[1], n) : [x, b]
        }, n.translateExtent = function (t) {
            return arguments.length ? (w = +t[0][0], M = +t[1][0], T = +t[0][1], S = +t[1][1], n) : [[w, T], [M, S]]
        }, n.duration = function (t) {
            return arguments.length ? (N = +t, n) : N
        }, n.interpolate = function (t) {
            return arguments.length ? (k = t, n) : k
        }, n.on = function () {
            var t = C.on.apply(C, arguments);
            return t === C ? n : t
        }, n
    };
    t.version = "4.8.0", t.bisect = Ds, t.bisectRight = Ds, t.bisectLeft = Os, t.ascending = Rs, t.bisector = qs, t.cross = Is, t.descending = Ys, t.deviation = Hs, t.extent = Xs, t.histogram = rf, t.thresholdFreedmanDiaconis = uf, t.thresholdScott = af, t.thresholdSturges = ef, t.max = cf, t.mean = sf, t.median = ff, t.merge = lf, t.min = hf, t.pairs = Fs, t.permute = pf, t.quantile = of, t.range = Js, t.scan = df, t.shuffle = vf, t.sum = _f, t.ticks = nf, t.tickIncrement = r, t.tickStep = i, t.transpose = gf, t.variance = js, t.zip = yf, t.axisTop = l, t.axisRight = h, t.axisBottom = p, t.axisLeft = d, t.brush = yd, t.brushX = Ce, t.brushY = ze, t.brushSelection = Ae, t.chord = Sd, t.ribbon = zd, t.nest = Pd, t.set = We, t.map = Be, t.keys = Rd, t.values = qd, t.entries = Ud, t.color = St, t.rgb = At, t.hsl = Lt, t.lab = Dt, t.hcl = Ht, t.cubehelix = $t, t.dispatch = v, t.drag = Al, t.dragDisable = kl, t.dragEnable = yt, t.dsvFormat = Dd, t.csvParse = Fd, t.csvParseRows = Id, t.csvFormat = Yd, t.csvFormatRows = Bd, t.tsvParse = Hd, t.tsvParseRows = Xd, t.tsvFormat = Vd, t.tsvFormatRows = $d, t.easeLinear = re, t.easeQuad = ue, t.easeQuadIn = ie, t.easeQuadOut = oe, t.easeQuadInOut = ue, t.easeCubic = se, t.easeCubicIn = ae, t.easeCubicOut = ce, t.easeCubicInOut = se, t.easePoly = Lp, t.easePolyIn = zp, t.easePolyOut = Pp, t.easePolyInOut = Lp, t.easeSin = he, t.easeSinIn = fe, t.easeSinOut = le, t.easeSinInOut = he, t.easeExp = ve, t.easeExpIn = pe, t.easeExpOut = de, t.easeExpInOut = ve, t.easeCircle = ye, t.easeCircleIn = _e, t.easeCircleOut = ge, t.easeCircleInOut = ye, t.easeBounce = xe, t.easeBounceIn = me, t.easeBounceOut = xe, t.easeBounceInOut = be, t.easeBack = Wp, t.easeBackIn = Vp, t.easeBackOut = $p, t.easeBackInOut = Wp, t.easeElastic = Jp,t.easeElasticIn = Gp,t.easeElasticOut = Jp,t.easeElasticInOut = Qp,t.forceCenter = Wd,t.forceCollide = hv,t.forceLink = pv,t.forceManyBody = gv,t.forceSimulation = _v,t.forceX = yv,t.forceY = mv,t.formatDefaultLocale = dr,t.formatLocale = Pv,t.formatSpecifier = hr,t.precisionFixed = Lv,t.precisionPrefix = Rv,t.precisionRound = qv,t.geoArea = I_,t.geoBounds = j_,t.geoCentroid = X_,t.geoCircle = ug,t.geoClipExtent = pg,t.geoContains = Tg,t.geoDistance = bg,t.geoGraticule = Mi,t.geoGraticule10 = Ti,t.geoInterpolate = Sg,t.geoLength = yg,t.geoPath = Qg,t.geoAlbers = cy,t.geoAlbersUsa = sy,t.geoAzimuthalEqualArea = ly,t.geoAzimuthalEqualAreaRaw = fy,t.geoAzimuthalEquidistant = py,t.geoAzimuthalEquidistantRaw = hy,t.geoConicConformal = vy,t.geoConicConformalRaw = ho,t.geoConicEqualArea = ay,t.geoConicEqualAreaRaw = oo,t.geoConicEquidistant = gy,t.geoConicEquidistantRaw = vo,t.geoEquirectangular = _y,t.geoEquirectangularRaw = po,t.geoGnomonic = yy,t.geoGnomonicRaw = _o,t.geoIdentity = my,t.geoProjection = no,t.geoProjectionMutator = eo,t.geoMercator = dy,t.geoMercatorRaw = so,t.geoOrthographic = xy,t.geoOrthographicRaw = yo,t.geoStereographic = by,t.geoStereographicRaw = mo,t.geoTransverseMercator = wy,t.geoTransverseMercatorRaw = xo,t.geoRotation = og,t.geoStream = U_,t.geoTransform = ey,t.cluster = My,t.hierarchy = Co,t.pack = Fy,t.packSiblings = Dy,t.packEnclose = Uy,t.partition = By,t.stratify = Vy,t.tree = $y,t.treemap = Jy,t.treemapBinary = Qy,t.treemapDice = Yy,t.treemapSlice = Wy,t.treemapSliceDice = Ky,t.treemapSquarify = Gy,t.treemapResquarify = tm,t.interpolate = Sh,t.interpolateArray = yh,t.interpolateBasis = hh,t.interpolateBasisClosed = ph,t.interpolateDate = mh,t.interpolateNumber = xh,t.interpolateObject = bh,t.interpolateRound = Nh,t.interpolateString = Th,t.interpolateTransformCss = Ch,t.interpolateTransformSvg = zh,t.interpolateZoom = Lh,t.interpolateRgb = vh,t.interpolateRgbBasis = _h,t.interpolateRgbBasisClosed = gh,t.interpolateHsl = Rh,t.interpolateHslLong = qh,t.interpolateLab = hn,t.interpolateHcl = Uh,t.interpolateHclLong = Dh,t.interpolateCubehelix = Oh,t.interpolateCubehelixLong = Fh,t.quantize = Ih,t.path = qe,t.polygonArea = nm,t.polygonCentroid = em;
    t.polygonHull = im, t.polygonContains = om, t.polygonLength = um, t.quadtree = rr, t.queue = mu, t.randomUniform = sm, t.randomNormal = fm, t.randomLogNormal = lm, t.randomBates = pm, t.randomIrwinHall = hm, t.randomExponential = dm, t.request = vm, t.html = gm, t.json = ym, t.text = mm, t.xml = xm, t.csv = wm, t.tsv = Mm, t.scaleBand = Tu, t.scalePoint = Nu, t.scaleIdentity = Uu, t.scaleLinear = qu, t.scaleLog = ju, t.scaleOrdinal = Mu, t.scaleImplicit = km, t.scalePow = Xu, t.scaleSqrt = Vu, t.scaleQuantile = $u, t.scaleQuantize = Wu, t.scaleThreshold = Zu, t.scaleTime = Zx, t.scaleUtc = Gx, t.schemeCategory10 = Qx, t.schemeCategory20b = Kx, t.schemeCategory20c = tb, t.schemeCategory20 = nb, t.interpolateCubehelixDefault = eb, t.interpolateRainbow = ub, t.interpolateWarm = rb, t.interpolateCool = ib, t.interpolateViridis = ab, t.interpolateMagma = cb, t.interpolateInferno = sb, t.interpolatePlasma = fb, t.scaleSequential = rc, t.creator = Cf, t.local = w, t.matcher = qf, t.mouse = If, t.namespace = Af, t.namespaces = Ef, t.select = wl, t.selectAll = Ml, t.selection = _t, t.selector = Yf, t.selectorAll = jf, t.touch = Tl, t.touches = Sl, t.window = cl, t.customEvent = A, t.arc = Mb, t.area = Nb, t.line = Sb, t.pie = Ab, t.radialArea = Pb, t.radialLine = zb, t.symbol = Jb, t.symbols = Gb, t.symbolCircle = Lb, t.symbolCross = Rb, t.symbolDiamond = Db, t.symbolSquare = Bb, t.symbolStar = Yb, t.symbolTriangle = Hb, t.symbolWye = Zb, t.curveBasisClosed = tw, t.curveBasisOpen = nw, t.curveBasis = Kb, t.curveBundle = ew, t.curveCardinalClosed = iw, t.curveCardinalOpen = ow, t.curveCardinal = rw, t.curveCatmullRomClosed = aw, t.curveCatmullRomOpen = cw, t.curveCatmullRom = uw, t.curveLinearClosed = sw, t.curveLinear = Tb, t.curveMonotoneX = Ic, t.curveMonotoneY = Yc, t.curveNatural = fw, t.curveStep = lw, t.curveStepAfter = Vc, t.curveStepBefore = Xc, t.stack = vw, t.stackOffsetExpand = _w, t.stackOffsetNone = pw, t.stackOffsetSilhouette = gw, t.stackOffsetWiggle = yw, t.stackOrderAscending = mw, t.stackOrderDescending = xw, t.stackOrderInsideOut = bw,t.stackOrderNone = dw,t.stackOrderReverse = ww,t.timeInterval = Gu,t.timeMillisecond = qm,t.timeMilliseconds = Um,t.utcMillisecond = qm,t.utcMilliseconds = Um,t.timeSecond = Fm,t.timeSeconds = Im,t.utcSecond = Fm,t.utcSeconds = Im,t.timeMinute = Ym,t.timeMinutes = Bm,t.timeHour = jm,t.timeHours = Hm,t.timeDay = Xm,t.timeDays = Vm,t.timeWeek = $m,t.timeWeeks = tx,t.timeSunday = $m,t.timeSundays = tx,t.timeMonday = Wm,t.timeMondays = nx,t.timeTuesday = Zm,t.timeTuesdays = ex,t.timeWednesday = Gm,t.timeWednesdays = rx,t.timeThursday = Jm,t.timeThursdays = ix,t.timeFriday = Qm,t.timeFridays = ox,t.timeSaturday = Km,t.timeSaturdays = ux,t.timeMonth = ax,t.timeMonths = cx,t.timeYear = sx,t.timeYears = fx,t.utcMinute = lx,t.utcMinutes = hx,t.utcHour = px,t.utcHours = dx,t.utcDay = vx,t.utcDays = _x,t.utcWeek = gx,t.utcWeeks = Tx,t.utcSunday = gx,t.utcSundays = Tx,t.utcMonday = yx,t.utcMondays = Sx,t.utcTuesday = mx,t.utcTuesdays = Nx,t.utcWednesday = xx,t.utcWednesdays = kx,t.utcThursday = bx,t.utcThursdays = Ex,t.utcFriday = wx,t.utcFridays = Ax,t.utcSaturday = Mx,t.utcSaturdays = Cx,t.utcMonth = zx,t.utcMonths = Px,t.utcYear = Lx,t.utcYears = qx,t.timeFormatDefaultLocale = Ga,t.timeFormatLocale = ea,t.isoFormat = Ix,t.isoParse = Yx,t.now = vn,t.timer = yn,t.timerFlush = mn,t.timeout = Gh,t.interval = Jh,t.transition = ne,t.active = ed,t.interrupt = cp,t.voronoi = Lw,t.zoom = Dw,t.zoomTransform = As,t.zoomIdentity = qw,Object.defineProperty(t, "__esModule", {value: !0})
});