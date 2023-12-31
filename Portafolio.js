(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        t(r);
    new MutationObserver(r=>{
        for (const i of r)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && t(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function e(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity),
        r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function t(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const i = e(r);
        fetch(r.href, i)
    }
}
)();
function K(s, n) {
    for (var e = 0; e < n.length; e++) {
        var t = n[e];
        t.enumerable = t.enumerable || !1,
        t.configurable = !0,
        "value"in t && (t.writable = !0),
        Object.defineProperty(s, t.key, t)
    }
}
function _(s, n, e) {
    return n && K(s.prototype, n),
    e && K(s, e),
    s
}
function M() {
    return (M = Object.assign || function(s) {
        for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (s[t] = e[t])
        }
        return s
    }
    ).apply(this, arguments)
}
function Y(s, n) {
    s.prototype = Object.create(n.prototype),
    s.prototype.constructor = s,
    s.__proto__ = n
}
function Q(s) {
    return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }
    )(s)
}
function $(s, n) {
    return ($ = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t,
        e
    }
    )(s, n)
}
function V(s, n, e) {
    return (V = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
            !0
        } catch {
            return !1
        }
    }() ? Reflect.construct : function(t, r, i) {
        var o = [null];
        o.push.apply(o, r);
        var u = new (Function.bind.apply(t, o));
        return i && $(u, i.prototype),
        u
    }
    ).apply(null, arguments)
}
function Z(s) {
    var n = typeof Map == "function" ? new Map : void 0;
    return (Z = function(e) {
        if (e === null || Function.toString.call(e).indexOf("[native code]") === -1)
            return e;
        if (typeof e != "function")
            throw new TypeError("Super expression must either be null or a function");
        if (n !== void 0) {
            if (n.has(e))
                return n.get(e);
            n.set(e, t)
        }
        function t() {
            return V(e, arguments, Q(this).constructor)
        }
        return t.prototype = Object.create(e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        $(t, e)
    }
    )(s)
}
function R(s, n) {
    try {
        var e = s()
    } catch (t) {
        return n(t)
    }
    return e && e.then ? e.then(void 0, n) : e
}
typeof Symbol < "u" && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
typeof Symbol < "u" && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var A, ce = "2.9.7", le = function() {};
(function(s) {
    s[s.off = 0] = "off",
    s[s.error = 1] = "error",
    s[s.warning = 2] = "warning",
    s[s.info = 3] = "info",
    s[s.debug = 4] = "debug"
}
)(A || (A = {}));
var J = A.off
  , O = function() {
    function s(e) {
        this.t = e
    }
    s.getLevel = function() {
        return J
    }
    ,
    s.setLevel = function(e) {
        return J = A[e]
    }
    ;
    var n = s.prototype;
    return n.error = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        this.i(console.error, A.error, t)
    }
    ,
    n.warn = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        this.i(console.warn, A.warning, t)
    }
    ,
    n.info = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        this.i(console.info, A.info, t)
    }
    ,
    n.debug = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        this.i(console.log, A.debug, t)
    }
    ,
    n.i = function(e, t, r) {
        t <= s.getLevel() && e.apply(console, ["[" + this.t + "] "].concat(r))
    }
    ,
    s
}()
  , j = G
  , fe = te
  , de = I
  , ge = ne
  , me = re
  , ee = "/"
  , pe = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");
function I(s, n) {
    for (var e, t = [], r = 0, i = 0, o = "", u = n && n.delimiter || ee, c = n && n.whitelist || void 0, a = !1; (e = pe.exec(s)) !== null; ) {
        var h = e[0]
          , d = e[1]
          , l = e.index;
        if (o += s.slice(i, l),
        i = l + h.length,
        d)
            o += d[1],
            a = !0;
        else {
            var f = ""
              , g = e[2]
              , m = e[3]
              , y = e[4]
              , v = e[5];
            if (!a && o.length) {
                var x = o.length - 1
                  , P = o[x];
                (!c || c.indexOf(P) > -1) && (f = P,
                o = o.slice(0, x))
            }
            o && (t.push(o),
            o = "",
            a = !1);
            var b = m || y
              , p = f || u;
            t.push({
                name: g || r++,
                prefix: f,
                delimiter: p,
                optional: v === "?" || v === "*",
                repeat: v === "+" || v === "*",
                pattern: b ? ve(b) : "[^" + S(p === u ? p : p + u) + "]+?"
            })
        }
    }
    return (o || i < s.length) && t.push(o + s.substr(i)),
    t
}
function te(s, n) {
    return function(e, t) {
        var r = s.exec(e);
        if (!r)
            return !1;
        for (var i = r[0], o = r.index, u = {}, c = t && t.decode || decodeURIComponent, a = 1; a < r.length; a++)
            if (r[a] !== void 0) {
                var h = n[a - 1];
                u[h.name] = h.repeat ? r[a].split(h.delimiter).map(function(d) {
                    return c(d, h)
                }) : c(r[a], h)
            }
        return {
            path: i,
            index: o,
            params: u
        }
    }
}
function ne(s, n) {
    for (var e = new Array(s.length), t = 0; t < s.length; t++)
        typeof s[t] == "object" && (e[t] = new RegExp("^(?:" + s[t].pattern + ")$",U(n)));
    return function(r, i) {
        for (var o = "", u = i && i.encode || encodeURIComponent, c = !i || i.validate !== !1, a = 0; a < s.length; a++) {
            var h = s[a];
            if (typeof h != "string") {
                var d, l = r ? r[h.name] : void 0;
                if (Array.isArray(l)) {
                    if (!h.repeat)
                        throw new TypeError('Expected "' + h.name + '" to not repeat, but got array');
                    if (l.length === 0) {
                        if (h.optional)
                            continue;
                        throw new TypeError('Expected "' + h.name + '" to not be empty')
                    }
                    for (var f = 0; f < l.length; f++) {
                        if (d = u(l[f], h),
                        c && !e[a].test(d))
                            throw new TypeError('Expected all "' + h.name + '" to match "' + h.pattern + '"');
                        o += (f === 0 ? h.prefix : h.delimiter) + d
                    }
                } else if (typeof l != "string" && typeof l != "number" && typeof l != "boolean") {
                    if (!h.optional)
                        throw new TypeError('Expected "' + h.name + '" to be ' + (h.repeat ? "an array" : "a string"))
                } else {
                    if (d = u(String(l), h),
                    c && !e[a].test(d))
                        throw new TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but got "' + d + '"');
                    o += h.prefix + d
                }
            } else
                o += h
        }
        return o
    }
}
function S(s) {
    return s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}
function ve(s) {
    return s.replace(/([=!:$/()])/g, "\\$1")
}
function U(s) {
    return s && s.sensitive ? "" : "i"
}
function re(s, n, e) {
    for (var t = (e = e || {}).strict, r = e.start !== !1, i = e.end !== !1, o = e.delimiter || ee, u = [].concat(e.endsWith || []).map(S).concat("$").join("|"), c = r ? "^" : "", a = 0; a < s.length; a++) {
        var h = s[a];
        if (typeof h == "string")
            c += S(h);
        else {
            var d = h.repeat ? "(?:" + h.pattern + ")(?:" + S(h.delimiter) + "(?:" + h.pattern + "))*" : h.pattern;
            n && n.push(h),
            c += h.optional ? h.prefix ? "(?:" + S(h.prefix) + "(" + d + "))?" : "(" + d + ")?" : S(h.prefix) + "(" + d + ")"
        }
    }
    if (i)
        t || (c += "(?:" + S(o) + ")?"),
        c += u === "$" ? "$" : "(?=" + u + ")";
    else {
        var l = s[s.length - 1]
          , f = typeof l == "string" ? l[l.length - 1] === o : l === void 0;
        t || (c += "(?:" + S(o) + "(?=" + u + "))?"),
        f || (c += "(?=" + S(o) + "|" + u + ")")
    }
    return new RegExp(c,U(e))
}
function G(s, n, e) {
    return s instanceof RegExp ? function(t, r) {
        if (!r)
            return t;
        var i = t.source.match(/\((?!\?)/g);
        if (i)
            for (var o = 0; o < i.length; o++)
                r.push({
                    name: o,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    pattern: null
                });
        return t
    }(s, n) : Array.isArray(s) ? function(t, r, i) {
        for (var o = [], u = 0; u < t.length; u++)
            o.push(G(t[u], r, i).source);
        return new RegExp("(?:" + o.join("|") + ")",U(i))
    }(s, n, e) : function(t, r, i) {
        return re(I(t, i), r, i)
    }(s, n, e)
}
j.match = function(s, n) {
    var e = [];
    return te(G(s, e, n), e)
}
,
j.regexpToFunction = fe,
j.parse = de,
j.compile = function(s, n) {
    return ne(I(s, n), n)
}
,
j.tokensToFunction = ge,
j.tokensToRegExp = me;
var E = {
    container: "container",
    history: "history",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper"
}
  , T = new (function() {
    function s() {
        this.o = E,
        this.u = new DOMParser
    }
    var n = s.prototype;
    return n.toString = function(e) {
        return e.outerHTML
    }
    ,
    n.toDocument = function(e) {
        return this.u.parseFromString(e, "text/html")
    }
    ,
    n.toElement = function(e) {
        var t = document.createElement("div");
        return t.innerHTML = e,
        t
    }
    ,
    n.getHtml = function(e) {
        return e === void 0 && (e = document),
        this.toString(e.documentElement)
    }
    ,
    n.getWrapper = function(e) {
        return e === void 0 && (e = document),
        e.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
    }
    ,
    n.getContainer = function(e) {
        return e === void 0 && (e = document),
        e.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
    }
    ,
    n.removeContainer = function(e) {
        document.body.contains(e) && e.parentNode.removeChild(e)
    }
    ,
    n.addContainer = function(e, t) {
        var r = this.getContainer();
        r ? this.s(e, r) : t.appendChild(e)
    }
    ,
    n.getNamespace = function(e) {
        e === void 0 && (e = document);
        var t = e.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
        return t ? t.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
    }
    ,
    n.getHref = function(e) {
        if (e.tagName && e.tagName.toLowerCase() === "a") {
            if (typeof e.href == "string")
                return e.href;
            var t = e.getAttribute("href") || e.getAttribute("xlink:href");
            if (t)
                return this.resolveUrl(t.baseVal || t)
        }
        return null
    }
    ,
    n.resolveUrl = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        var i = t.length;
        if (i === 0)
            throw new Error("resolveUrl requires at least one argument; got none.");
        var o = document.createElement("base");
        if (o.href = arguments[0],
        i === 1)
            return o.href;
        var u = document.getElementsByTagName("head")[0];
        u.insertBefore(o, u.firstChild);
        for (var c, a = document.createElement("a"), h = 1; h < i; h++)
            a.href = arguments[h],
            o.href = c = a.href;
        return u.removeChild(o),
        c
    }
    ,
    n.s = function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }
    ,
    s
}())
  , ie = new (function() {
    function s() {
        this.h = [],
        this.v = -1
    }
    var n = s.prototype;
    return n.init = function(e, t) {
        this.l = "barba";
        var r = {
            ns: t,
            scroll: {
                x: window.scrollX,
                y: window.scrollY
            },
            url: e
        };
        this.h.push(r),
        this.v = 0;
        var i = {
            from: this.l,
            index: 0,
            states: [].concat(this.h)
        };
        window.history && window.history.replaceState(i, "", e)
    }
    ,
    n.change = function(e, t, r) {
        if (r && r.state) {
            var i = r.state
              , o = i.index;
            t = this.m(this.v - o),
            this.replace(i.states),
            this.v = o
        } else
            this.add(e, t);
        return t
    }
    ,
    n.add = function(e, t) {
        var r = this.size
          , i = this.p(t)
          , o = {
            ns: "tmp",
            scroll: {
                x: window.scrollX,
                y: window.scrollY
            },
            url: e
        };
        this.h.push(o),
        this.v = r;
        var u = {
            from: this.l,
            index: r,
            states: [].concat(this.h)
        };
        switch (i) {
        case "push":
            window.history && window.history.pushState(u, "", e);
            break;
        case "replace":
            window.history && window.history.replaceState(u, "", e)
        }
    }
    ,
    n.update = function(e, t) {
        var r = t || this.v
          , i = M({}, this.get(r), {}, e);
        this.set(r, i)
    }
    ,
    n.remove = function(e) {
        e ? this.h.splice(e, 1) : this.h.pop(),
        this.v--
    }
    ,
    n.clear = function() {
        this.h = [],
        this.v = -1
    }
    ,
    n.replace = function(e) {
        this.h = e
    }
    ,
    n.get = function(e) {
        return this.h[e]
    }
    ,
    n.set = function(e, t) {
        return this.h[e] = t
    }
    ,
    n.p = function(e) {
        var t = "push"
          , r = e
          , i = E.prefix + "-" + E.history;
        return r.hasAttribute && r.hasAttribute(i) && (t = r.getAttribute(i)),
        t
    }
    ,
    n.m = function(e) {
        return Math.abs(e) > 1 ? e > 0 ? "forward" : "back" : e === 0 ? "popstate" : e > 0 ? "back" : "forward"
    }
    ,
    _(s, [{
        key: "current",
        get: function() {
            return this.h[this.v]
        }
    }, {
        key: "state",
        get: function() {
            return this.h[this.h.length - 1]
        }
    }, {
        key: "previous",
        get: function() {
            return this.v < 1 ? null : this.h[this.v - 1]
        }
    }, {
        key: "size",
        get: function() {
            return this.h.length
        }
    }]),
    s
}())
  , H = function(s, n) {
    try {
        var e = function() {
            if (!n.next.html)
                return Promise.resolve(s).then(function(t) {
                    var r = n.next;
                    if (t) {
                        var i = T.toElement(t);
                        r.namespace = T.getNamespace(i),
                        r.container = T.getContainer(i),
                        r.html = t,
                        ie.update({
                            ns: r.namespace
                        });
                        var o = T.toDocument(t);
                        document.title = o.title
                    }
                })
        }();
        return Promise.resolve(e && e.then ? e.then(function() {}) : void 0)
    } catch (t) {
        return Promise.reject(t)
    }
}
  , se = j
  , be = {
    __proto__: null,
    update: H,
    nextTick: function() {
        return new Promise(function(s) {
            window.requestAnimationFrame(s)
        }
        )
    },
    pathToRegexp: se
}
  , oe = function() {
    return window.location.origin
}
  , B = function(s) {
    return s === void 0 && (s = window.location.href),
    X(s).port
}
  , X = function(s) {
    var n, e = s.match(/:\d+/);
    if (e === null)
        /^http/.test(s) && (n = 80),
        /^https/.test(s) && (n = 443);
    else {
        var t = e[0].substring(1);
        n = parseInt(t, 10)
    }
    var r, i = s.replace(oe(), ""), o = {}, u = i.indexOf("#");
    u >= 0 && (r = i.slice(u + 1),
    i = i.slice(0, u));
    var c = i.indexOf("?");
    return c >= 0 && (o = ae(i.slice(c + 1)),
    i = i.slice(0, c)),
    {
        hash: r,
        path: i,
        port: n,
        query: o
    }
}
  , ae = function(s) {
    return s.split("&").reduce(function(n, e) {
        var t = e.split("=");
        return n[t[0]] = t[1],
        n
    }, {})
}
  , D = function(s) {
    return s === void 0 && (s = window.location.href),
    s.replace(/(\/#.*|\/|#.*)$/, "")
}
  , ye = {
    __proto__: null,
    getHref: function() {
        return window.location.href
    },
    getOrigin: oe,
    getPort: B,
    getPath: function(s) {
        return s === void 0 && (s = window.location.href),
        X(s).path
    },
    parse: X,
    parseQuery: ae,
    clean: D
};
function we(s, n, e) {
    return n === void 0 && (n = 2e3),
    new Promise(function(t, r) {
        var i = new XMLHttpRequest;
        i.onreadystatechange = function() {
            if (i.readyState === XMLHttpRequest.DONE) {
                if (i.status === 200)
                    t(i.responseText);
                else if (i.status) {
                    var o = {
                        status: i.status,
                        statusText: i.statusText
                    };
                    e(s, o),
                    r(o)
                }
            }
        }
        ,
        i.ontimeout = function() {
            var o = new Error("Timeout error [" + n + "]");
            e(s, o),
            r(o)
        }
        ,
        i.onerror = function() {
            var o = new Error("Fetch error");
            e(s, o),
            r(o)
        }
        ,
        i.open("GET", s),
        i.timeout = n,
        i.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"),
        i.setRequestHeader("x-barba", "yes"),
        i.send()
    }
    )
}
var Ee = function(s) {
    return !!s && (typeof s == "object" || typeof s == "function") && typeof s.then == "function"
};
function C(s, n) {
    return n === void 0 && (n = {}),
    function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        var i = !1
          , o = new Promise(function(u, c) {
            n.async = function() {
                return i = !0,
                function(h, d) {
                    h ? c(h) : u(d)
                }
            }
            ;
            var a = s.apply(n, t);
            i || (Ee(a) ? a.then(u, c) : u(a))
        }
        );
        return o
    }
}
var k = new (function(s) {
    function n() {
        var t;
        return (t = s.call(this) || this).logger = new O("@barba/core"),
        t.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"],
        t.registered = new Map,
        t.init(),
        t
    }
    Y(n, s);
    var e = n.prototype;
    return e.init = function() {
        var t = this;
        this.registered.clear(),
        this.all.forEach(function(r) {
            t[r] || (t[r] = function(i, o) {
                t.registered.has(r) || t.registered.set(r, new Set),
                t.registered.get(r).add({
                    ctx: o || {},
                    fn: i
                })
            }
            )
        })
    }
    ,
    e.do = function(t) {
        for (var r = this, i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++)
            o[u - 1] = arguments[u];
        if (this.registered.has(t)) {
            var c = Promise.resolve();
            return this.registered.get(t).forEach(function(a) {
                c = c.then(function() {
                    return C(a.fn, a.ctx).apply(void 0, o)
                })
            }),
            c.catch(function(a) {
                r.logger.debug("Hook error [" + t + "]"),
                r.logger.error(a)
            })
        }
        return Promise.resolve()
    }
    ,
    e.clear = function() {
        var t = this;
        this.all.forEach(function(r) {
            delete t[r]
        }),
        this.init()
    }
    ,
    e.help = function() {
        this.logger.info("Available hooks: " + this.all.join(","));
        var t = [];
        this.registered.forEach(function(r, i) {
            return t.push(i)
        }),
        this.logger.info("Registered hooks: " + t.join(","))
    }
    ,
    n
}(le))
  , he = function() {
    function s(n) {
        if (this.P = [],
        typeof n == "boolean")
            this.g = n;
        else {
            var e = Array.isArray(n) ? n : [n];
            this.P = e.map(function(t) {
                return se(t)
            })
        }
    }
    return s.prototype.checkHref = function(n) {
        if (typeof this.g == "boolean")
            return this.g;
        var e = X(n).path;
        return this.P.some(function(t) {
            return t.exec(e) !== null
        })
    }
    ,
    s
}()
  , xe = function(s) {
    function n(t) {
        var r;
        return (r = s.call(this, t) || this).k = new Map,
        r
    }
    Y(n, s);
    var e = n.prototype;
    return e.set = function(t, r, i) {
        return this.k.set(t, {
            action: i,
            request: r
        }),
        {
            action: i,
            request: r
        }
    }
    ,
    e.get = function(t) {
        return this.k.get(t)
    }
    ,
    e.getRequest = function(t) {
        return this.k.get(t).request
    }
    ,
    e.getAction = function(t) {
        return this.k.get(t).action
    }
    ,
    e.has = function(t) {
        return !this.checkHref(t) && this.k.has(t)
    }
    ,
    e.delete = function(t) {
        return this.k.delete(t)
    }
    ,
    e.update = function(t, r) {
        var i = M({}, this.k.get(t), {}, r);
        return this.k.set(t, i),
        i
    }
    ,
    n
}(he)
  , Pe = function() {
    return !window.history.pushState
}
  , Le = function(s) {
    return !s.el || !s.href
}
  , Se = function(s) {
    var n = s.event;
    return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey
}
  , ke = function(s) {
    var n = s.el;
    return n.hasAttribute("target") && n.target === "_blank"
}
  , Ae = function(s) {
    var n = s.el;
    return n.protocol !== void 0 && window.location.protocol !== n.protocol || n.hostname !== void 0 && window.location.hostname !== n.hostname
}
  , je = function(s) {
    var n = s.el;
    return n.port !== void 0 && B() !== B(n.href)
}
  , Me = function(s) {
    var n = s.el;
    return n.getAttribute && typeof n.getAttribute("download") == "string"
}
  , Oe = function(s) {
    return s.el.hasAttribute(E.prefix + "-" + E.prevent)
}
  , Te = function(s) {
    return !!s.el.closest("[" + E.prefix + "-" + E.prevent + '="all"]')
}
  , qe = function(s) {
    var n = s.href;
    return D(n) === D() && B(n) === B()
}
  , Re = function(s) {
    function n(t) {
        var r;
        return (r = s.call(this, t) || this).suite = [],
        r.tests = new Map,
        r.init(),
        r
    }
    Y(n, s);
    var e = n.prototype;
    return e.init = function() {
        this.add("pushState", Pe),
        this.add("exists", Le),
        this.add("newTab", Se),
        this.add("blank", ke),
        this.add("corsDomain", Ae),
        this.add("corsPort", je),
        this.add("download", Me),
        this.add("preventSelf", Oe),
        this.add("preventAll", Te),
        this.add("sameUrl", qe, !1)
    }
    ,
    e.add = function(t, r, i) {
        i === void 0 && (i = !0),
        this.tests.set(t, r),
        i && this.suite.push(t)
    }
    ,
    e.run = function(t, r, i, o) {
        return this.tests.get(t)({
            el: r,
            event: i,
            href: o
        })
    }
    ,
    e.checkLink = function(t, r, i) {
        var o = this;
        return this.suite.some(function(u) {
            return o.run(u, t, r, i)
        })
    }
    ,
    n
}(he)
  , W = function(s) {
    function n(e, t) {
        var r;
        t === void 0 && (t = "Barba error");
        for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++)
            o[u - 2] = arguments[u];
        return (r = s.call.apply(s, [this].concat(o)) || this).error = e,
        r.label = t,
        Error.captureStackTrace && Error.captureStackTrace(function(c) {
            if (c === void 0)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return c
        }(r), n),
        r.name = "BarbaError",
        r
    }
    return Y(n, s),
    n
}(Z(Error))
  , Ce = function() {
    function s(e) {
        e === void 0 && (e = []),
        this.logger = new O("@barba/core"),
        this.all = [],
        this.page = [],
        this.once = [],
        this.A = [{
            name: "namespace",
            type: "strings"
        }, {
            name: "custom",
            type: "function"
        }],
        e && (this.all = this.all.concat(e)),
        this.update()
    }
    var n = s.prototype;
    return n.add = function(e, t) {
        switch (e) {
        case "rule":
            this.A.splice(t.position || 0, 0, t.value);
            break;
        case "transition":
        default:
            this.all.push(t)
        }
        this.update()
    }
    ,
    n.resolve = function(e, t) {
        var r = this;
        t === void 0 && (t = {});
        var i = t.once ? this.once : this.page;
        i = i.filter(t.self ? function(l) {
            return l.name && l.name === "self"
        }
        : function(l) {
            return !l.name || l.name !== "self"
        }
        );
        var o = new Map
          , u = i.find(function(l) {
            var f = !0
              , g = {};
            return !(!t.self || l.name !== "self") || (r.A.reverse().forEach(function(m) {
                f && (f = r.R(l, m, e, g),
                l.from && l.to && (f = r.R(l, m, e, g, "from") && r.R(l, m, e, g, "to")),
                l.from && !l.to && (f = r.R(l, m, e, g, "from")),
                !l.from && l.to && (f = r.R(l, m, e, g, "to")))
            }),
            o.set(l, g),
            f)
        })
          , c = o.get(u)
          , a = [];
        if (a.push(t.once ? "once" : "page"),
        t.self && a.push("self"),
        c) {
            var h, d = [u];
            Object.keys(c).length > 0 && d.push(c),
            (h = this.logger).info.apply(h, ["Transition found [" + a.join(",") + "]"].concat(d))
        } else
            this.logger.info("No transition found [" + a.join(",") + "]");
        return u
    }
    ,
    n.update = function() {
        var e = this;
        this.all = this.all.map(function(t) {
            return e.T(t)
        }).sort(function(t, r) {
            return t.priority - r.priority
        }).reverse().map(function(t) {
            return delete t.priority,
            t
        }),
        this.page = this.all.filter(function(t) {
            return t.leave !== void 0 || t.enter !== void 0
        }),
        this.once = this.all.filter(function(t) {
            return t.once !== void 0
        })
    }
    ,
    n.R = function(e, t, r, i, o) {
        var u = !0
          , c = !1
          , a = e
          , h = t.name
          , d = h
          , l = h
          , f = h
          , g = o ? a[o] : a
          , m = o === "to" ? r.next : r.current;
        if (o ? g && g[h] : g[h]) {
            switch (t.type) {
            case "strings":
            default:
                var y = Array.isArray(g[d]) ? g[d] : [g[d]];
                m[d] && y.indexOf(m[d]) !== -1 && (c = !0),
                y.indexOf(m[d]) === -1 && (u = !1);
                break;
            case "object":
                var v = Array.isArray(g[l]) ? g[l] : [g[l]];
                m[l] ? (m[l].name && v.indexOf(m[l].name) !== -1 && (c = !0),
                v.indexOf(m[l].name) === -1 && (u = !1)) : u = !1;
                break;
            case "function":
                g[f](r) ? c = !0 : u = !1
            }
            c && (o ? (i[o] = i[o] || {},
            i[o][h] = a[o][h]) : i[h] = a[h])
        }
        return u
    }
    ,
    n.O = function(e, t, r) {
        var i = 0;
        return (e[t] || e.from && e.from[t] || e.to && e.to[t]) && (i += Math.pow(10, r),
        e.from && e.from[t] && (i += 1),
        e.to && e.to[t] && (i += 2)),
        i
    }
    ,
    n.T = function(e) {
        var t = this;
        e.priority = 0;
        var r = 0;
        return this.A.forEach(function(i, o) {
            r += t.O(e, i.name, o + 1)
        }),
        e.priority = r,
        e
    }
    ,
    s
}()
  , ze = function() {
    function s(e) {
        e === void 0 && (e = []),
        this.logger = new O("@barba/core"),
        this.S = !1,
        this.store = new Ce(e)
    }
    var n = s.prototype;
    return n.get = function(e, t) {
        return this.store.resolve(e, t)
    }
    ,
    n.doOnce = function(e) {
        var t = e.data
          , r = e.transition;
        try {
            var i = function() {
                o.S = !1
            }
              , o = this
              , u = r || {};
            o.S = !0;
            var c = R(function() {
                return Promise.resolve(o.j("beforeOnce", t, u)).then(function() {
                    return Promise.resolve(o.once(t, u)).then(function() {
                        return Promise.resolve(o.j("afterOnce", t, u)).then(function() {})
                    })
                })
            }, function(a) {
                o.S = !1,
                o.logger.debug("Transition error [before/after/once]"),
                o.logger.error(a)
            });
            return Promise.resolve(c && c.then ? c.then(i) : i())
        } catch (a) {
            return Promise.reject(a)
        }
    }
    ,
    n.doPage = function(e) {
        var t = e.data
          , r = e.transition
          , i = e.page
          , o = e.wrapper;
        try {
            var u = function(f) {
                if (c)
                    return f;
                a.S = !1
            }
              , c = !1
              , a = this
              , h = r || {}
              , d = h.sync === !0 || !1;
            a.S = !0;
            var l = R(function() {
                function f() {
                    return Promise.resolve(a.j("before", t, h)).then(function() {
                        var m = !1;
                        function y(x) {
                            return m ? x : Promise.resolve(a.remove(t)).then(function() {
                                return Promise.resolve(a.j("after", t, h)).then(function() {})
                            })
                        }
                        var v = function() {
                            if (d)
                                return R(function() {
                                    return Promise.resolve(a.add(t, o)).then(function() {
                                        return Promise.resolve(a.j("beforeLeave", t, h)).then(function() {
                                            return Promise.resolve(a.j("beforeEnter", t, h)).then(function() {
                                                return Promise.resolve(Promise.all([a.leave(t, h), a.enter(t, h)])).then(function() {
                                                    return Promise.resolve(a.j("afterLeave", t, h)).then(function() {
                                                        return Promise.resolve(a.j("afterEnter", t, h)).then(function() {})
                                                    })
                                                })
                                            })
                                        })
                                    })
                                }, function(p) {
                                    if (a.M(p))
                                        throw new W(p,"Transition error [sync]")
                                });
                            var x = function(p) {
                                return m ? p : R(function() {
                                    var L = function() {
                                        if (P !== !1)
                                            return Promise.resolve(a.add(t, o)).then(function() {
                                                return Promise.resolve(a.j("beforeEnter", t, h)).then(function() {
                                                    return Promise.resolve(a.enter(t, h, P)).then(function() {
                                                        return Promise.resolve(a.j("afterEnter", t, h)).then(function() {})
                                                    })
                                                })
                                            })
                                    }();
                                    if (L && L.then)
                                        return L.then(function() {})
                                }, function(L) {
                                    if (a.M(L))
                                        throw new W(L,"Transition error [before/after/enter]")
                                })
                            }
                              , P = !1
                              , b = R(function() {
                                return Promise.resolve(a.j("beforeLeave", t, h)).then(function() {
                                    return Promise.resolve(Promise.all([a.leave(t, h), H(i, t)]).then(function(p) {
                                        return p[0]
                                    })).then(function(p) {
                                        return P = p,
                                        Promise.resolve(a.j("afterLeave", t, h)).then(function() {})
                                    })
                                })
                            }, function(p) {
                                if (a.M(p))
                                    throw new W(p,"Transition error [before/after/leave]")
                            });
                            return b && b.then ? b.then(x) : x(b)
                        }();
                        return v && v.then ? v.then(y) : y(v)
                    })
                }
                var g = function() {
                    if (d)
                        return Promise.resolve(H(i, t)).then(function() {})
                }();
                return g && g.then ? g.then(f) : f()
            }, function(f) {
                throw a.S = !1,
                f.name && f.name === "BarbaError" ? (a.logger.debug(f.label),
                a.logger.error(f.error),
                f) : (a.logger.debug("Transition error [page]"),
                a.logger.error(f),
                f)
            });
            return Promise.resolve(l && l.then ? l.then(u) : u(l))
        } catch (f) {
            return Promise.reject(f)
        }
    }
    ,
    n.once = function(e, t) {
        try {
            return Promise.resolve(k.do("once", e, t)).then(function() {
                return t.once ? C(t.once, t)(e) : Promise.resolve()
            })
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    n.leave = function(e, t) {
        try {
            return Promise.resolve(k.do("leave", e, t)).then(function() {
                return t.leave ? C(t.leave, t)(e) : Promise.resolve()
            })
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    n.enter = function(e, t, r) {
        try {
            return Promise.resolve(k.do("enter", e, t)).then(function() {
                return t.enter ? C(t.enter, t)(e, r) : Promise.resolve()
            })
        } catch (i) {
            return Promise.reject(i)
        }
    }
    ,
    n.add = function(e, t) {
        try {
            return T.addContainer(e.next.container, t),
            k.do("nextAdded", e),
            Promise.resolve()
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    n.remove = function(e) {
        try {
            return T.removeContainer(e.current.container),
            k.do("currentRemoved", e),
            Promise.resolve()
        } catch (t) {
            return Promise.reject(t)
        }
    }
    ,
    n.M = function(e) {
        return e.message ? !/Timeout error|Fetch error/.test(e.message) : !e.status
    }
    ,
    n.j = function(e, t, r) {
        try {
            return Promise.resolve(k.do(e, t, r)).then(function() {
                return r[e] ? C(r[e], r)(t) : Promise.resolve()
            })
        } catch (i) {
            return Promise.reject(i)
        }
    }
    ,
    _(s, [{
        key: "isRunning",
        get: function() {
            return this.S
        },
        set: function(e) {
            this.S = e
        }
    }, {
        key: "hasOnce",
        get: function() {
            return this.store.once.length > 0
        }
    }, {
        key: "hasSelf",
        get: function() {
            return this.store.all.some(function(e) {
                return e.name === "self"
            })
        }
    }, {
        key: "shouldWait",
        get: function() {
            return this.store.all.some(function(e) {
                return e.to && !e.to.route || e.sync
            })
        }
    }]),
    s
}()
  , Be = function() {
    function s(n) {
        var e = this;
        this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"],
        this.byNamespace = new Map,
        n.length !== 0 && (n.forEach(function(t) {
            e.byNamespace.set(t.namespace, t)
        }),
        this.names.forEach(function(t) {
            k[t](e.L(t))
        }))
    }
    return s.prototype.L = function(n) {
        var e = this;
        return function(t) {
            var r = n.match(/enter/i) ? t.next : t.current
              , i = e.byNamespace.get(r.namespace);
            return i && i[n] ? C(i[n], i)(t) : Promise.resolve()
        }
    }
    ,
    s
}();
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
Element.prototype.closest || (Element.prototype.closest = function(s) {
    var n = this;
    do {
        if (n.matches(s))
            return n;
        n = n.parentElement || n.parentNode
    } while (n !== null && n.nodeType === 1);
    return null
}
);
var He = {
    container: null,
    html: "",
    namespace: "",
    url: {
        hash: "",
        href: "",
        path: "",
        port: null,
        query: {}
    }
}
  , ue = new (function() {
    function s() {
        this.version = ce,
        this.schemaPage = He,
        this.Logger = O,
        this.logger = new O("@barba/core"),
        this.plugins = [],
        this.hooks = k,
        this.dom = T,
        this.helpers = be,
        this.history = ie,
        this.request = we,
        this.url = ye
    }
    var n = s.prototype;
    return n.use = function(e, t) {
        var r = this.plugins;
        r.indexOf(e) > -1 ? this.logger.warn("Plugin [" + e.name + "] already installed.") : typeof e.install == "function" ? (e.install(this, t),
        r.push(e)) : this.logger.warn("Plugin [" + e.name + '] has no "install" method.')
    }
    ,
    n.init = function(e) {
        var t = e === void 0 ? {} : e
          , r = t.transitions
          , i = r === void 0 ? [] : r
          , o = t.views
          , u = o === void 0 ? [] : o
          , c = t.schema
          , a = c === void 0 ? E : c
          , h = t.requestError
          , d = t.timeout
          , l = d === void 0 ? 2e3 : d
          , f = t.cacheIgnore
          , g = f !== void 0 && f
          , m = t.prefetchIgnore
          , y = m !== void 0 && m
          , v = t.preventRunning
          , x = v !== void 0 && v
          , P = t.prevent
          , b = P === void 0 ? null : P
          , p = t.debug
          , L = t.logLevel;
        if (O.setLevel((p !== void 0 && p) === !0 ? "debug" : L === void 0 ? "off" : L),
        this.logger.info(this.version),
        Object.keys(a).forEach(function(z) {
            E[z] && (E[z] = a[z])
        }),
        this.$ = h,
        this.timeout = l,
        this.cacheIgnore = g,
        this.prefetchIgnore = y,
        this.preventRunning = x,
        this._ = this.dom.getWrapper(),
        !this._)
            throw new Error("[@barba/core] No Barba wrapper found");
        this._.setAttribute("aria-live", "polite"),
        this.q();
        var N = this.data.current;
        if (!N.container)
            throw new Error("[@barba/core] No Barba container found");
        if (this.cache = new xe(g),
        this.prevent = new Re(y),
        this.transitions = new ze(i),
        this.views = new Be(u),
        b !== null) {
            if (typeof b != "function")
                throw new Error("[@barba/core] Prevent should be a function");
            this.prevent.add("preventCustom", b)
        }
        this.history.init(N.url.href, N.namespace),
        this.B = this.B.bind(this),
        this.U = this.U.bind(this),
        this.D = this.D.bind(this),
        this.F(),
        this.plugins.forEach(function(z) {
            return z.init()
        });
        var q = this.data;
        q.trigger = "barba",
        q.next = q.current,
        q.current = M({}, this.schemaPage),
        this.hooks.do("ready", q),
        this.once(q),
        this.q()
    }
    ,
    n.destroy = function() {
        this.q(),
        this.H(),
        this.history.clear(),
        this.hooks.clear(),
        this.plugins = []
    }
    ,
    n.force = function(e) {
        window.location.assign(e)
    }
    ,
    n.go = function(e, t, r) {
        var i;
        if (t === void 0 && (t = "barba"),
        this.transitions.isRunning)
            this.force(e);
        else if (!(i = t === "popstate" ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(e) : this.prevent.run("sameUrl", null, null, e)) || this.transitions.hasSelf)
            return t = this.history.change(e, t, r),
            r && (r.stopPropagation(),
            r.preventDefault()),
            this.page(e, t, i)
    }
    ,
    n.once = function(e) {
        try {
            var t = this;
            return Promise.resolve(t.hooks.do("beforeEnter", e)).then(function() {
                function r() {
                    return Promise.resolve(t.hooks.do("afterEnter", e)).then(function() {})
                }
                var i = function() {
                    if (t.transitions.hasOnce) {
                        var o = t.transitions.get(e, {
                            once: !0
                        });
                        return Promise.resolve(t.transitions.doOnce({
                            transition: o,
                            data: e
                        })).then(function() {})
                    }
                }();
                return i && i.then ? i.then(r) : r()
            })
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    n.page = function(e, t, r) {
        try {
            var i = function() {
                var a = o.data;
                return Promise.resolve(o.hooks.do("page", a)).then(function() {
                    var h = R(function() {
                        var d = o.transitions.get(a, {
                            once: !1,
                            self: r
                        });
                        return Promise.resolve(o.transitions.doPage({
                            data: a,
                            page: u,
                            transition: d,
                            wrapper: o._
                        })).then(function() {
                            o.q()
                        })
                    }, function() {
                        O.getLevel() === 0 && o.force(a.current.url.href)
                    });
                    if (h && h.then)
                        return h.then(function() {})
                })
            }
              , o = this;
            o.data.next.url = M({
                href: e
            }, o.url.parse(e)),
            o.data.trigger = t;
            var u = o.cache.has(e) ? o.cache.update(e, {
                action: "click"
            }).request : o.cache.set(e, o.request(e, o.timeout, o.onRequestError.bind(o, t)), "click").request
              , c = function() {
                if (o.transitions.shouldWait)
                    return Promise.resolve(H(u, o.data)).then(function() {})
            }();
            return Promise.resolve(c && c.then ? c.then(i) : i())
        } catch (a) {
            return Promise.reject(a)
        }
    }
    ,
    n.onRequestError = function(e) {
        this.transitions.isRunning = !1;
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            r[i - 1] = arguments[i];
        var o = r[0]
          , u = r[1]
          , c = this.cache.getAction(o);
        return this.cache.delete(o),
        !(this.$ && this.$(e, c, o, u) === !1 || (c === "click" && this.force(o),
        1))
    }
    ,
    n.prefetch = function(e) {
        var t = this;
        this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, "barba")).catch(function(r) {
            t.logger.error(r)
        }), "prefetch")
    }
    ,
    n.F = function() {
        this.prefetchIgnore !== !0 && (document.addEventListener("mouseover", this.B),
        document.addEventListener("touchstart", this.B)),
        document.addEventListener("click", this.U),
        window.addEventListener("popstate", this.D)
    }
    ,
    n.H = function() {
        this.prefetchIgnore !== !0 && (document.removeEventListener("mouseover", this.B),
        document.removeEventListener("touchstart", this.B)),
        document.removeEventListener("click", this.U),
        window.removeEventListener("popstate", this.D)
    }
    ,
    n.B = function(e) {
        var t = this
          , r = this.I(e);
        if (r) {
            var i = this.dom.getHref(r);
            this.prevent.checkHref(i) || this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, r)).catch(function(o) {
                t.logger.error(o)
            }), "enter")
        }
    }
    ,
    n.U = function(e) {
        var t = this.I(e);
        if (t)
            return this.transitions.isRunning && this.preventRunning ? (e.preventDefault(),
            void e.stopPropagation()) : void this.go(this.dom.getHref(t), t, e)
    }
    ,
    n.D = function(e) {
        this.go(this.url.getHref(), "popstate", e)
    }
    ,
    n.I = function(e) {
        for (var t = e.target; t && !this.dom.getHref(t); )
            t = t.parentNode;
        if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t)))
            return t
    }
    ,
    n.q = function() {
        var e = this.url.getHref()
          , t = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: M({
                href: e
            }, this.url.parse(e))
        };
        this.C = {
            current: t,
            next: M({}, this.schemaPage),
            trigger: void 0
        },
        this.hooks.do("reset", this.data)
    }
    ,
    _(s, [{
        key: "data",
        get: function() {
            return this.C
        }
    }, {
        key: "wrapper",
        get: function() {
            return this._
        }
    }]),
    s
}())
  , Xe = "2.1.15"
  , Ye = new (function() {
    function s() {
        this.name = "@barba/css",
        this.version = Xe,
        this.prefix = "barba",
        this.callbacks = {},
        this.t = !1
    }
    var n = s.prototype;
    return n.install = function(e) {
        this.logger = new e.Logger(this.name),
        this.logger.info(this.version),
        this.barba = e,
        this.i = this.i.bind(this),
        this.s = this.s.bind(this),
        this.h = this.h.bind(this)
    }
    ,
    n.init = function() {
        this.barba.hooks.before(this.o, this),
        this.barba.hooks.beforeOnce(this.o, this),
        this.barba.hooks.beforeOnce(this.u, this),
        this.barba.hooks.afterOnce(this.m, this),
        this.barba.hooks.beforeLeave(this.P, this),
        this.barba.hooks.afterLeave(this.v, this),
        this.barba.hooks.beforeEnter(this.l, this),
        this.barba.hooks.afterEnter(this.p, this),
        this.barba.transitions.once = this.i,
        this.barba.transitions.leave = this.s,
        this.barba.transitions.enter = this.h,
        this.barba.transitions.store.all.unshift({
            name: "barba",
            once: function() {},
            leave: function() {},
            enter: function() {}
        }),
        this.barba.transitions.store.update()
    }
    ,
    n.start = function(e, t) {
        try {
            var r = this;
            return r.add(e, t),
            Promise.resolve(r.barba.helpers.nextTick()).then(function() {
                return r.add(e, t + "-active"),
                Promise.resolve(r.barba.helpers.nextTick()).then(function() {})
            })
        } catch (i) {
            return Promise.reject(i)
        }
    }
    ,
    n.next = function(e, t) {
        try {
            var r = this;
            return r.t = r.g(e),
            Promise.resolve(r.t ? new Promise(function(i) {
                try {
                    return r.cb = i,
                    r.callbacks[t] = i,
                    e.addEventListener("transitionend", i, !1),
                    Promise.resolve(r.barba.helpers.nextTick()).then(function() {
                        return r.remove(e, t),
                        r.add(e, t + "-to"),
                        Promise.resolve(r.barba.helpers.nextTick()).then(function() {})
                    })
                } catch (o) {
                    return Promise.reject(o)
                }
            }
            ) : (r.remove(e, t),
            Promise.resolve(r.barba.helpers.nextTick()).then(function() {
                return r.add(e, t + "-to"),
                Promise.resolve(r.barba.helpers.nextTick()).then(function() {})
            })))
        } catch (i) {
            return Promise.reject(i)
        }
    }
    ,
    n.end = function(e, t) {
        try {
            return this.remove(e, t + "-to"),
            this.remove(e, t + "-active"),
            e.removeEventListener("transitionend", this.callbacks[t]),
            this.t = !1,
            Promise.resolve()
        } catch (r) {
            return Promise.reject(r)
        }
    }
    ,
    n.add = function(e, t) {
        e.classList.add(this.prefix + "-" + t)
    }
    ,
    n.remove = function(e, t) {
        e.classList.remove(this.prefix + "-" + t)
    }
    ,
    n.o = function(e, t) {
        this.prefix = t.name || "barba"
    }
    ,
    n.g = function(e) {
        return getComputedStyle(e).transitionDuration !== "0s"
    }
    ,
    n.u = function(e) {
        return this.start(e.next.container, "once")
    }
    ,
    n.i = function(e, t) {
        try {
            var r = this;
            return Promise.resolve(r.barba.hooks.do("once", e, t)).then(function() {
                return r.next(e.next.container, "once")
            })
        } catch (i) {
            return Promise.reject(i)
        }
    }
    ,
    n.m = function(e) {
        return this.end(e.next.container, "once")
    }
    ,
    n.P = function(e) {
        return this.start(e.current.container, "leave")
    }
    ,
    n.s = function(e, t) {
        try {
            var r = this;
            return Promise.resolve(r.barba.hooks.do("leave", e, t)).then(function() {
                return r.next(e.current.container, "leave")
            })
        } catch (i) {
            return Promise.reject(i)
        }
    }
    ,
    n.v = function(e) {
        return this.end(e.current.container, "leave"),
        this.barba.transitions.remove(e),
        Promise.resolve()
    }
    ,
    n.l = function(e) {
        return this.barba.history.size === 1 ? Promise.resolve() : this.start(e.next.container, "enter")
    }
    ,
    n.h = function(e, t) {
        try {
            var r = this;
            return Promise.resolve(r.barba.hooks.do("enter", e, t)).then(function() {
                return r.next(e.next.container, "enter")
            })
        } catch (i) {
            return Promise.reject(i)
        }
    }
    ,
    n.p = function(e) {
        return this.barba.history.size === 1 ? Promise.resolve() : this.end(e.next.container, "enter")
    }
    ,
    s
}());
class w {
    constructor(n, e={}) {
        if (!(n instanceof Node))
            throw "Can't initialize VanillaTilt because " + n + " is not a Node.";
        this.width = null,
        this.height = null,
        this.clientWidth = null,
        this.clientHeight = null,
        this.left = null,
        this.top = null,
        this.gammazero = null,
        this.betazero = null,
        this.lastgammazero = null,
        this.lastbetazero = null,
        this.transitionTimeout = null,
        this.updateCall = null,
        this.event = null,
        this.updateBind = this.update.bind(this),
        this.resetBind = this.reset.bind(this),
        this.element = n,
        this.settings = this.extendSettings(e),
        this.reverse = this.settings.reverse ? -1 : 1,
        this.resetToStart = w.isSettingTrue(this.settings["reset-to-start"]),
        this.glare = w.isSettingTrue(this.settings.glare),
        this.glarePrerender = w.isSettingTrue(this.settings["glare-prerender"]),
        this.fullPageListening = w.isSettingTrue(this.settings["full-page-listening"]),
        this.gyroscope = w.isSettingTrue(this.settings.gyroscope),
        this.gyroscopeSamples = this.settings.gyroscopeSamples,
        this.elementListener = this.getElementListener(),
        this.glare && this.prepareGlare(),
        this.fullPageListening && this.updateClientSize(),
        this.addEventListeners(),
        this.reset(),
        this.resetToStart === !1 && (this.settings.startX = 0,
        this.settings.startY = 0)
    }
    static isSettingTrue(n) {
        return n === "" || n === !0 || n === 1
    }
    getElementListener() {
        if (this.fullPageListening)
            return window.document;
        if (typeof this.settings["mouse-event-element"] == "string") {
            const n = document.querySelector(this.settings["mouse-event-element"]);
            if (n)
                return n
        }
        return this.settings["mouse-event-element"]instanceof Node ? this.settings["mouse-event-element"] : this.element
    }
    addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this),
        this.onMouseMoveBind = this.onMouseMove.bind(this),
        this.onMouseLeaveBind = this.onMouseLeave.bind(this),
        this.onWindowResizeBind = this.onWindowResize.bind(this),
        this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this),
        this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind),
        this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind),
        this.elementListener.addEventListener("mousemove", this.onMouseMoveBind),
        (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind),
        this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind)
    }
    removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind),
        this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind),
        this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind),
        this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind),
        (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind)
    }
    destroy() {
        clearTimeout(this.transitionTimeout),
        this.updateCall !== null && cancelAnimationFrame(this.updateCall),
        this.reset(),
        this.removeEventListeners(),
        this.element.vanillaTilt = null,
        delete this.element.vanillaTilt,
        this.element = null
    }
    onDeviceOrientation(n) {
        if (n.gamma === null || n.beta === null)
            return;
        this.updateElementPosition(),
        this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero,
        this.lastbetazero = this.betazero,
        this.gammazero === null ? (this.gammazero = n.gamma,
        this.betazero = n.beta) : (this.gammazero = (n.gamma + this.lastgammazero) / 2,
        this.betazero = (n.beta + this.lastbetazero) / 2),
        this.gyroscopeSamples -= 1);
        const e = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX
          , t = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY
          , r = e / this.width
          , i = t / this.height
          , o = n.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)
          , u = n.beta - (this.settings.gyroscopeMinAngleY + this.betazero)
          , c = o / r
          , a = u / i;
        this.updateCall !== null && cancelAnimationFrame(this.updateCall),
        this.event = {
            clientX: c + this.left,
            clientY: a + this.top
        },
        this.updateCall = requestAnimationFrame(this.updateBind)
    }
    onMouseEnter() {
        this.updateElementPosition(),
        this.element.style.willChange = "transform",
        this.setTransition()
    }
    onMouseMove(n) {
        this.updateCall !== null && cancelAnimationFrame(this.updateCall),
        this.event = n,
        this.updateCall = requestAnimationFrame(this.updateBind)
    }
    onMouseLeave() {
        this.setTransition(),
        this.settings.reset && requestAnimationFrame(this.resetBind)
    }
    reset() {
        this.onMouseEnter(),
        this.fullPageListening ? this.event = {
            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
        } : this.event = {
            clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
            clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
        };
        let n = this.settings.scale;
        this.settings.scale = 1,
        this.update(),
        this.settings.scale = n,
        this.resetGlare()
    }
    resetGlare() {
        this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)",
        this.glareElement.style.opacity = "0")
    }
    getValues() {
        let n, e;
        this.fullPageListening ? (n = this.event.clientX / this.clientWidth,
        e = this.event.clientY / this.clientHeight) : (n = (this.event.clientX - this.left) / this.width,
        e = (this.event.clientY - this.top) / this.height),
        n = Math.min(Math.max(n, 0), 1),
        e = Math.min(Math.max(e, 0), 1);
        let t = (this.reverse * (this.settings.max - n * this.settings.max * 2)).toFixed(2)
          , r = (this.reverse * (e * this.settings.max * 2 - this.settings.max)).toFixed(2)
          , i = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
        return {
            tiltX: t,
            tiltY: r,
            percentageX: n * 100,
            percentageY: e * 100,
            angle: i
        }
    }
    updateElementPosition() {
        let n = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth,
        this.height = this.element.offsetHeight,
        this.left = n.left,
        this.top = n.top
    }
    update() {
        let n = this.getValues();
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + (this.settings.axis === "x" ? 0 : n.tiltY) + "deg) rotateY(" + (this.settings.axis === "y" ? 0 : n.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")",
        this.glare && (this.glareElement.style.transform = `rotate(${n.angle}deg) translate(-50%, -50%)`,
        this.glareElement.style.opacity = `${n.percentageY * this.settings["max-glare"] / 100}`),
        this.element.dispatchEvent(new CustomEvent("tiltChange",{
            detail: n
        })),
        this.updateCall = null
    }
    prepareGlare() {
        if (!this.glarePrerender) {
            const n = document.createElement("div");
            n.classList.add("js-tilt-glare");
            const e = document.createElement("div");
            e.classList.add("js-tilt-glare-inner"),
            n.appendChild(e),
            this.element.appendChild(n)
        }
        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"),
        this.glareElement = this.element.querySelector(".js-tilt-glare-inner"),
        !this.glarePrerender && (Object.assign(this.glareElementWrapper.style, {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "pointer-events": "none",
            "border-radius": "inherit"
        }),
        Object.assign(this.glareElement.style, {
            position: "absolute",
            top: "50%",
            left: "50%",
            "pointer-events": "none",
            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            transform: "rotate(180deg) translate(-50%, -50%)",
            "transform-origin": "0% 0%",
            opacity: "0"
        }),
        this.updateGlareSize())
    }
    updateGlareSize() {
        if (this.glare) {
            const n = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;
            Object.assign(this.glareElement.style, {
                width: `${n}px`,
                height: `${n}px`
            })
        }
    }
    updateClientSize() {
        this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    onWindowResize() {
        this.updateGlareSize(),
        this.updateClientSize()
    }
    setTransition() {
        clearTimeout(this.transitionTimeout),
        this.element.style.transition = this.settings.speed + "ms " + this.settings.easing,
        this.glare && (this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`),
        this.transitionTimeout = setTimeout(()=>{
            this.element.style.transition = "",
            this.glare && (this.glareElement.style.transition = "")
        }
        , this.settings.speed)
    }
    extendSettings(n) {
        let e = {
            reverse: !1,
            max: 15,
            startX: 0,
            startY: 0,
            perspective: 1e3,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 300,
            transition: !0,
            axis: null,
            glare: !1,
            "max-glare": 1,
            "glare-prerender": !1,
            "full-page-listening": !1,
            "mouse-event-element": null,
            reset: !0,
            "reset-to-start": !0,
            gyroscope: !0,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45,
            gyroscopeSamples: 10
        }
          , t = {};
        for (var r in e)
            if (r in n)
                t[r] = n[r];
            else if (this.element.hasAttribute("data-tilt-" + r)) {
                let i = this.element.getAttribute("data-tilt-" + r);
                try {
                    t[r] = JSON.parse(i)
                } catch {
                    t[r] = i
                }
            } else
                t[r] = e[r];
        return t
    }
    static init(n, e) {
        n instanceof Node && (n = [n]),
        n instanceof NodeList && (n = [].slice.call(n)),
        n instanceof Array && n.forEach(t=>{
            "vanillaTilt"in t || (t.vanillaTilt = new w(t,e))
        }
        )
    }
}
typeof document < "u" && (window.VanillaTilt = w,
w.init(document.querySelectorAll("[data-tilt]")));
function Ne() {
    let s = document.querySelector(".header")
      , n = document.querySelector(".menu-icon")
      , e = document.querySelector(".menu-open")
      , t = document.querySelector(".header").querySelector(".active")
      , r = document.querySelector(".menu-open").querySelector(".active");
    s.addEventListener("click", function(c) {
        i(c)
    }, !0);
    function i(c) {
        if (c.target.classList == "btn") {
            c.target.classList.add("active"),
            t.classList.remove("active"),
            t = c.target,
            r.classList.remove("active");
            let a = [...t.parentElement.parentElement.children].indexOf(t.parentElement);
            r.parentElement.children[a].classList.add("active"),
            r = r.parentElement.children[a]
        }
        console.log([...t.parentElement.parentElement.children].indexOf(t.parentElement))
    }
    n.addEventListener("click", function(c) {
        o()
    }, !0);
    function o(c) {
        n.children[0].classList[1] != "active" ? (n.children[0].classList.add("active"),
        e.classList.toggle("toggle")) : (e.classList.toggle("fade"),
        setTimeout(()=>{
            n.children[0].classList.remove("active"),
            e.classList.toggle("toggle"),
            e.classList.toggle("fade")
        }
        , 500))
    }
    e.addEventListener("click", function(c) {
        u(c)
    }, !0);
    function u(c) {
        if (console.log(c.target.classList[0]),
        console.log("a"),
        c.target.classList[0] == "btn") {
            console.log("b"),
            r.classList.remove("active"),
            c.target.classList.add("active", "toggle"),
            r = c.target,
            n.children[0].classList.remove("active"),
            e.classList.toggle("toggle"),
            e.classList.toggle("fade2"),
            e.classList.toggle("fade2");
            let a = [...r.parentElement.children].indexOf(r);
            t.parentElement.parentElement.children[a].children[0].classList.add("active"),
            t.classList.remove("active"),
            t = t.parentElement.parentElement.children[a].children[0]
        }
    }
}
function F() {
    document.querySelectorAll(".card-container, .tilt").forEach(n=>{
        w.init(n, {
            max: 30,
            speed: 1200,
            glare: !0,
            "max-glare": n.classList.contains("card-container") ? .2 : 0,
            "glare-prerender": !1,
            perspective: 1e3,
            scale: n.classList.contains("card-container") ? 1.1 : 1,
            gyroscope: !0
        })
    }
    )
}
F();
ue.use(Ye);
ue.init({
    views: [{
        namespace: "projects",
        beforeEnter() {},
        afterEnter() {
            F()
        }
    }, {
        namespace: "home",
        beforeEnter() {},
        afterEnter() {
            F()
        }
    }]
});
Ne();

  emailjs.init("wFofW6kYic3DlSzmI"); // Reemplaza "user_tu_user_id" con tu ID de usuario de Email.js

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Utiliza el ID de plantilla que has proporcionado
    emailjs.send("default_service", "template_1uuwqbp", {
      to_email: "brayancitop12345@gmail.com", // Reemplaza con la dirección de correo del destinatario
      user_email: email,
      message: message + "\n"+ "Correo de: " + email,
    }).then(function (response) {
      alert("Mensaje enviado exitosamente");
    }, function (error) {
      alert("Hubo un error al enviar el correo. Por favor, inténtalo de nuevo más tarde.");
    });
  });
  /*

  // Función para activar el encabezado según la sección visible
  function activateHeaderBasedOnSectionId() {
    const sections = document.querySelectorAll('section'); // Obtener todas las secciones
    const headerLinks = document.querySelectorAll('.header a'); // Obtener enlaces del encabezado

    // Escuchar eventos de desplazamiento
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const sectionId = section.getAttribute('id');
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Desactivar todos los enlaces del encabezado
                headerLinks.forEach((link) => {
                    link.classList.remove('active');
                });

                // Activar el enlace correspondiente
                const linkToActivate = document.querySelector(`.header a[href="#${sectionId}"]`);
                if (linkToActivate) {
                    linkToActivate.classList.add('hover');
                    linkToActivate.classList.add('active');
                }
            }
        });
    });

    // Llamar a la función cuando se carga la página
    window.addEventListener('load', () => {
        activateHeaderBasedOnSectionId();
    });
}

// Iniciar la función
activateHeaderBasedOnSectionId();
*/



