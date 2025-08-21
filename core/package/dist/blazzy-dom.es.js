function be({
    children: s
}) {
    const e = document.createElement("div"), t = document.createElement("button"), n = document.createElement("p");
    return t.textContent = "OK", n.textContent = s, n.className = "alertMsg", t.className = "alertBtn", e.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background: #f9f9f9;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        width: 50vw;
        padding: 20px;
        opacity: 0;
        z-index: 100;
        animation: alertFadeIn 0.75s ease forwards;
        font-family: 'Segoe UI', sans-serif;`, t.style.cssText = `
        display: block;
        margin-left: 110px;
        width: 50%;
        padding: 10px 0;
        background: #4cafef;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.1s ease, background 0.2s ease;
    `, n.style.cssText = `
        font-size: 16px;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.4;
    `, t.onclick = () => {
            e.style.animation = "alertFadeOut 0.75s ease forwards", e.addEventListener("animationend", () => {
                e.remove();
            }, {
                once: !0
            });
        }, e.append(n, t), e;
}
function yt({
    children: s,
    ...e
}) {
    const t = document.createElement("button");
    t.textContent = String(s);
    for (const n in e)
        n.startsWith("on") ? t.addEventListener(n.substring(2), e[n]) : t.setAttribute(n, e[n]);
    return t;
}
function gt({
    children: s,
    ...e
}) {
    const t = async () => {
        try {
            await navigator.clipboard.writeText(r.innerText), be({
                children: "Copied to clipboard"
            });
        } catch (o) {
            console.log(o);
        }
    }, n = document.createElement("div"), r = document.createElement("pre"), i = document.createElement("button");
    i.textContent = "Copy", i.style.cssText = `
        width: fit-content;
        height: fit-content;
        transform: translateX(85vw);
        background: #000;
        border: none;
        color: white;
        cursor: pointer;
    `, n.style.cssText = `
        padding: 10px;
        padding-top: 20px;
        margin: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        width: 90vw;
        height: fit-content;
        background: #000;
        color: #fff;
    `;
    for (let o of s)
        r.textContent += `
` + o;
    i.addEventListener("click", t);
    for (let o in e)
        o.startsWith("on") ? n.addEventListener(o.substring(2), e[o]) : n.setAttribute(o, e[o]);
    return n.append(i, r), n;
}
function _t({
    children: s
}) {
    let e;
    const t = new Promise((c) => {
        e = c;
    }), n = document.createElement("div"), r = document.createElement("p"), i = document.createElement("button"), o = document.createElement("button");
    return i.textContent = "OK", o.textContent = "Cancel", r.textContent = s, n.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background-color: #fff;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        padding: 20px;
        width: 50vw;
        z-index: 100;
        animation: confirmFadeIn 0.75s ease forwards;
    `, r.style.cssText = `
        font-size: 16px;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.4;
    `, i.style.cssText = `
        margin: 0 10px 0 10px;
        width: 30%;
        padding: 10px 0;
        background: #4cafef;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.1s ease, background 0.2s ease;
        background-color: #4cafef;
        color: #fff;
        margin-left: 70px;
    `, o.style.cssText = `
        margin: 0 10px 0 10px;
        width: 30%;
        padding: 10px 0;
        background: #4cafef;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.1s ease, background 0.2s ease;
        background-color: #999;
        color: #fff;
    `, i.onclick = () => {
            n.style.animation = "confirmFadeOut 0.75s ease forwards", n.addEventListener("animationend", () => {
                n.remove();
            }, {
                once: !0
            }), e(!0);
        }, o.onclick = () => {
            n.style.animation = "confirmFadeOut 0.75s ease forwards", n.addEventListener("animationend", () => {
                n.remove();
            }, {
                once: !0
            }), e(!1);
        }, n.append(r, i, o), document.body.appendChild(n), t;
}
function bt({
    children: s,
    ...e
}) {
    const t = document.createElement("div");
    Array.isArray(s) || (s = [s]);
    for (const n of s)
        n instanceof Node && t.appendChild(n);
    for (const n in e)
        n.startsWith("on") ? t.addEventListener(n.substring(2), e[n]) : t.setAttribute(n, e[n]);
    return t;
}
function wt({
    children: s,
    ...e
}) {
    const t = document.createElement("footer");
    Array.isArray(s) || (s = [s]), s.forEach((n) => {
        t.appendChild(n);
    });
    for (let n in e)
        n.startsWith("on") ? t.addEventListener(n.substring(2), e[n]) : t.setAttribute(n, e[n]);
    return t.style.bottom = "0", t;
}
function Et({
    children: s,
    ...e
}) {
    const t = document.createElement("form");
    for (let n in e)
        n.startsWith("on") ? t.addEventListener(n.substring(2), e[n]) : t.setAttribute(n, e[n]);
    return s.forEach((n) => {
        t.appendChild(n);
    }), t;
}
function vt({
    children: s,
    ...e
}) {
    const t = document.createElement("header");
    Array.isArray(s) || (s = [s]), s.forEach((n) => {
        t.appendChild(n);
    });
    for (let n in e)
        n.startsWith("on") ? t.addEventListener(n.slice(2).toLowerCase(), e[n]) : t.setAttribute(n, e[n]);
    return t.style.top = "0", t;
}
function xt({
    level: s,
    children: e,
    ...t
}) {
    const n = document.createElement(`h${s}`);
    n.textContent = String(e);
    for (const r in t)
        r.startsWith("on") ? n.addEventListener(r.substring(2), t[r]) : n.setAttribute(r, t[r]);
    return n;
}
function kt({
    type: s,
    ...e
}) {
    const t = document.createElement("input");
    t.type = s;
    for (let n in e)
        n.startsWith("on") ? t.addEventListener(n.substring(2), e[n]) : t.setAttribute(n, e[n]);
    return t;
}
function At({
    children: s,
    ...e
}) {
    const t = document.createElement("li");
    t.textContent = s;
    for (let n in e)
        n.startsWith("on") ? t.addEventListener(n.substring(2), e[n]) : t.setAttribute(n, e[n]);
    return t;
}
function Tt({
    href: s,
    children: e,
    ...t
}) {
    const n = document.createElement("a");
    n.href = s, n.textContent = String(e);
    for (const r in t)
        r.startsWith("on") ? n.addEventListener(r, t[r]) : n.setAttribute(r, t[r]);
    return n;
}
function Ct({
    ordered: s = !0,
    children: e,
    ...t
}) {
    let n = null;
    s === !0 ? n = document.createElement("ol") : n = document.createElement("ul");
    for (const r of e)
        n.appendChild(r);
    for (const r in t)
        r.startsWith("on") ? n.addEventListener(r, t[r]) : n.setAttribute(r, t[r]);
    return n.style += "margin: 25px;", n;
}
function Ot({
    children: s,
    ...e
}) {
    const t = document.createElement("p");
    t.textContent = String(s);
    for (const n in e)
        n.startsWith("on") ? t.addEventListener(n.substring(2), e[n]) : t.setAttribute(n, e[n]);
    return t;
}
function Rt({
    children: s
}) {
    let e;
    const t = new Promise((c) => {
        e = c;
    }), n = document.createElement("div"), r = document.createElement("p"), i = document.createElement("input"), o = document.createElement("button");
    return i.type = "text", i.placeholder = "Enter here", n.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background: #f9f9f9;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        width: 50vw;
        padding: 20px;
        opacity: 0;
        z-index: 100;
        animation: promptFadeIn 0.75s ease forwards;
        font-family: 'Segoe UI', sans-serif;
    `, r.style.cssText = `
        font-size: 16px;
        color: #333;
        margin-bottom: 15px;
        text-align: center;
        line-height: 1.4;
    `, i.style.cssText = `
        display: block;
        width: 100%;
        padding: 8px 10px;
        font-size: 15px;
        border-radius: 20px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        box-sizing: border-box;
    `, o.style.cssText = `
        display: block;
        margin-left: 100px;
        width: 50%;
        padding: 10px 0;
        background: #4cafef;
        color: white;
        font-size: 15px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.1s ease, background 0.2s ease;
    `, r.textContent = s, o.textContent = "OK", o.onclick = () => {
            n.style.animation = "promptFadeOut 0.75s ease forwards", n.addEventListener("animationend", () => {
                n.remove();
            }, {
                once: !0
            }), e(i.value);
        }, n.append(r, i, o), document.body.appendChild(n), t;
}
function St({
    children: s
}) {
    const e = document.createElement("script");
    return e.textContent = `(${s.toString()})()`, e;
}
const j = /* @__PURE__ */ new WeakMap();
function Bt(s, e) {
    const t = j.get(s), n = e.some((i, o) => {
        t && t[o];
    });
    (!t || n) && s();
    const r = s();
    typeof r == "function" && r(), j.set(s, e);
}
function Lt({
    path: s,
    ...e
}) {
    const t = document.createElement("script");
    t.src = s;
    for (let n in e)
        t.setAttribute(n, e[n]);
    document.body.appendChild(t);
}
const _ = /* @__PURE__ */ Object.create(null);
_.open = "0";
_.close = "1";
_.ping = "2";
_.pong = "3";
_.message = "4";
_.upgrade = "5";
_.noop = "6";
const O = /* @__PURE__ */ Object.create(null);
Object.keys(_).forEach((s) => {
    O[_[s]] = s;
});
const I = { type: "error", data: "parser error" }, ne = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", se = typeof ArrayBuffer == "function", re = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer, $ = ({ type: s, data: e }, t, n) => ne && e instanceof Blob ? t ? n(e) : Q(e, n) : se && (e instanceof ArrayBuffer || re(e)) ? t ? n(e) : Q(new Blob([e]), n) : n(_[s] + (e || "")), Q = (s, e) => {
    const t = new FileReader();
    return t.onload = function () {
        const n = t.result.split(",")[1];
        e("b" + (n || ""));
    }, t.readAsDataURL(s);
};
function G(s) {
    return s instanceof Uint8Array ? s : s instanceof ArrayBuffer ? new Uint8Array(s) : new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
}
let P;
function we(s, e) {
    if (ne && s.data instanceof Blob)
        return s.data.arrayBuffer().then(G).then(e);
    if (se && (s.data instanceof ArrayBuffer || re(s.data)))
        return e(G(s.data));
    $(s, !1, (t) => {
        P || (P = new TextEncoder()), e(P.encode(t));
    });
}
const Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", k = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let s = 0; s < Z.length; s++)
    k[Z.charCodeAt(s)] = s;
const Ee = (s) => {
    let e = s.length * 0.75, t = s.length, n, r = 0, i, o, c, h;
    s[s.length - 1] === "=" && (e--, s[s.length - 2] === "=" && e--);
    const p = new ArrayBuffer(e), f = new Uint8Array(p);
    for (n = 0; n < t; n += 4)
        i = k[s.charCodeAt(n)], o = k[s.charCodeAt(n + 1)], c = k[s.charCodeAt(n + 2)], h = k[s.charCodeAt(n + 3)], f[r++] = i << 2 | o >> 4, f[r++] = (o & 15) << 4 | c >> 2, f[r++] = (c & 3) << 6 | h & 63;
    return p;
}, ve = typeof ArrayBuffer == "function", K = (s, e) => {
    if (typeof s != "string")
        return {
            type: "message",
            data: ie(s, e)
        };
    const t = s.charAt(0);
    return t === "b" ? {
        type: "message",
        data: xe(s.substring(1), e)
    } : O[t] ? s.length > 1 ? {
        type: O[t],
        data: s.substring(1)
    } : {
        type: O[t]
    } : I;
}, xe = (s, e) => {
    if (ve) {
        const t = Ee(s);
        return ie(t, e);
    } else
        return { base64: !0, data: s };
}, ie = (s, e) => {
    switch (e) {
        case "blob":
            return s instanceof Blob ? s : new Blob([s]);
        case "arraybuffer":
        default:
            return s instanceof ArrayBuffer ? s : s.buffer;
    }
}, oe = "", ke = (s, e) => {
    const t = s.length, n = new Array(t);
    let r = 0;
    s.forEach((i, o) => {
        $(i, !1, (c) => {
            n[o] = c, ++r === t && e(n.join(oe));
        });
    });
}, Ae = (s, e) => {
    const t = s.split(oe), n = [];
    for (let r = 0; r < t.length; r++) {
        const i = K(t[r], e);
        if (n.push(i), i.type === "error")
            break;
    }
    return n;
};
function Te() {
    return new TransformStream({
        transform(s, e) {
            we(s, (t) => {
                const n = t.length;
                let r;
                if (n < 126)
                    r = new Uint8Array(1), new DataView(r.buffer).setUint8(0, n);
                else if (n < 65536) {
                    r = new Uint8Array(3);
                    const i = new DataView(r.buffer);
                    i.setUint8(0, 126), i.setUint16(1, n);
                } else {
                    r = new Uint8Array(9);
                    const i = new DataView(r.buffer);
                    i.setUint8(0, 127), i.setBigUint64(1, BigInt(n));
                }
                s.data && typeof s.data != "string" && (r[0] |= 128), e.enqueue(r), e.enqueue(t);
            });
        }
    });
}
let q;
function T(s) {
    return s.reduce((e, t) => e + t.length, 0);
}
function C(s, e) {
    if (s[0].length === e)
        return s.shift();
    const t = new Uint8Array(e);
    let n = 0;
    for (let r = 0; r < e; r++)
        t[r] = s[0][n++], n === s[0].length && (s.shift(), n = 0);
    return s.length && n < s[0].length && (s[0] = s[0].slice(n)), t;
}
function Ce(s, e) {
    q || (q = new TextDecoder());
    const t = [];
    let n = 0, r = -1, i = !1;
    return new TransformStream({
        transform(o, c) {
            for (t.push(o); ;) {
                if (n === 0) {
                    if (T(t) < 1)
                        break;
                    const h = C(t, 1);
                    i = (h[0] & 128) === 128, r = h[0] & 127, r < 126 ? n = 3 : r === 126 ? n = 1 : n = 2;
                } else if (n === 1) {
                    if (T(t) < 2)
                        break;
                    const h = C(t, 2);
                    r = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0), n = 3;
                } else if (n === 2) {
                    if (T(t) < 8)
                        break;
                    const h = C(t, 8), p = new DataView(h.buffer, h.byteOffset, h.length), f = p.getUint32(0);
                    if (f > Math.pow(2, 21) - 1) {
                        c.enqueue(I);
                        break;
                    }
                    r = f * Math.pow(2, 32) + p.getUint32(4), n = 3;
                } else {
                    if (T(t) < r)
                        break;
                    const h = C(t, r);
                    c.enqueue(K(i ? h : q.decode(h), e)), n = 0;
                }
                if (r === 0 || r > s) {
                    c.enqueue(I);
                    break;
                }
            }
        }
    });
}
const ce = 4;
function u(s) {
    if (s) return Oe(s);
}
function Oe(s) {
    for (var e in u.prototype)
        s[e] = u.prototype[e];
    return s;
}
u.prototype.on = u.prototype.addEventListener = function (s, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + s] = this._callbacks["$" + s] || []).push(e), this;
};
u.prototype.once = function (s, e) {
    function t() {
        this.off(s, t), e.apply(this, arguments);
    }
    return t.fn = e, this.on(s, t), this;
};
u.prototype.off = u.prototype.removeListener = u.prototype.removeAllListeners = u.prototype.removeEventListener = function (s, e) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0)
        return this._callbacks = {}, this;
    var t = this._callbacks["$" + s];
    if (!t) return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + s], this;
    for (var n, r = 0; r < t.length; r++)
        if (n = t[r], n === e || n.fn === e) {
            t.splice(r, 1);
            break;
        }
    return t.length === 0 && delete this._callbacks["$" + s], this;
};
u.prototype.emit = function (s) {
    this._callbacks = this._callbacks || {};
    for (var e = new Array(arguments.length - 1), t = this._callbacks["$" + s], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
    if (t) {
        t = t.slice(0);
        for (var n = 0, r = t.length; n < r; ++n)
            t[n].apply(this, e);
    }
    return this;
};
u.prototype.emitReserved = u.prototype.emit;
u.prototype.listeners = function (s) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + s] || [];
};
u.prototype.hasListeners = function (s) {
    return !!this.listeners(s).length;
};
const L = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e) => Promise.resolve().then(e) : (e, t) => t(e, 0), d = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Re = "arraybuffer";
function ae(s, ...e) {
    return e.reduce((t, n) => (s.hasOwnProperty(n) && (t[n] = s[n]), t), {});
}
const Se = d.setTimeout, Be = d.clearTimeout;
function N(s, e) {
    e.useNativeTimers ? (s.setTimeoutFn = Se.bind(d), s.clearTimeoutFn = Be.bind(d)) : (s.setTimeoutFn = d.setTimeout.bind(d), s.clearTimeoutFn = d.clearTimeout.bind(d));
}
const Le = 1.33;
function Ne(s) {
    return typeof s == "string" ? Pe(s) : Math.ceil((s.byteLength || s.size) * Le);
}
function Pe(s) {
    let e = 0, t = 0;
    for (let n = 0, r = s.length; n < r; n++)
        e = s.charCodeAt(n), e < 128 ? t += 1 : e < 2048 ? t += 2 : e < 55296 || e >= 57344 ? t += 3 : (n++, t += 4);
    return t;
}
function he() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function qe(s) {
    let e = "";
    for (let t in s)
        s.hasOwnProperty(t) && (e.length && (e += "&"), e += encodeURIComponent(t) + "=" + encodeURIComponent(s[t]));
    return e;
}
function De(s) {
    let e = {}, t = s.split("&");
    for (let n = 0, r = t.length; n < r; n++) {
        let i = t[n].split("=");
        e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
    }
    return e;
}
class Ie extends Error {
    constructor(e, t, n) {
        super(e), this.description = t, this.context = n, this.type = "TransportError";
    }
}
class Y extends u {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(e) {
        super(), this.writable = !1, N(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(e, t, n) {
        return super.emitReserved("error", new Ie(e, t, n)), this;
    }
    /**
     * Opens the transport.
     */
    open() {
        return this.readyState = "opening", this.doOpen(), this;
    }
    /**
     * Closes the transport.
     */
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(e) {
        this.readyState === "open" && this.write(e);
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(e) {
        const t = K(e, this.socket.binaryType);
        this.onPacket(t);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(e) {
        super.emitReserved("packet", e);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(e) {
        this.readyState = "closed", super.emitReserved("close", e);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(e) {
    }
    createUri(e, t = {}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(t);
    }
    _hostname() {
        const e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]";
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
    }
    _query(e) {
        const t = qe(e);
        return t.length ? "?" + t : "";
    }
}
class Fe extends Y {
    constructor() {
        super(...arguments), this._polling = !1;
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
        this._poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(e) {
        this.readyState = "pausing";
        const t = () => {
            this.readyState = "paused", e();
        };
        if (this._polling || !this.writable) {
            let n = 0;
            this._polling && (n++, this.once("pollComplete", function () {
                --n || t();
            })), this.writable || (n++, this.once("drain", function () {
                --n || t();
            }));
        } else
            t();
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    _poll() {
        this._polling = !0, this.doPoll(), this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(e) {
        const t = (n) => {
            if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close")
                return this.onClose({ description: "transport closed by the server" }), !1;
            this.onPacket(n);
        };
        Ae(e, this.socket.binaryType).forEach(t), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
        const e = () => {
            this.write([{ type: "close" }]);
        };
        this.readyState === "open" ? e() : this.once("open", e);
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(e) {
        this.writable = !1, ke(e, (t) => {
            this.doWrite(t, () => {
                this.writable = !0, this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const e = this.opts.secure ? "https" : "http", t = this.query || {};
        return this.opts.timestampRequests !== !1 && (t[this.opts.timestampParam] = he()), !this.supportsBinary && !t.sid && (t.b64 = 1), this.createUri(e, t);
    }
}
let ue = !1;
try {
    ue = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const Ue = ue;
function Ve() {
}
class Me extends Fe {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(e) {
        if (super(e), typeof location < "u") {
            const t = location.protocol === "https:";
            let n = location.port;
            n || (n = t ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port;
        }
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(e, t) {
        const n = this.request({
            method: "POST",
            data: e
        });
        n.on("success", t), n.on("error", (r, i) => {
            this.onError("xhr post error", r, i);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
        const e = this.request();
        e.on("data", this.onData.bind(this)), e.on("error", (t, n) => {
            this.onError("xhr poll error", t, n);
        }), this.pollXhr = e;
    }
}
class g extends u {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(e, t, n) {
        super(), this.createRequest = e, N(this, n), this._opts = n, this._method = n.method || "GET", this._uri = t, this._data = n.data !== void 0 ? n.data : null, this._create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    _create() {
        var e;
        const t = ae(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        t.xdomain = !!this._opts.xd;
        const n = this._xhr = this.createRequest(t);
        try {
            n.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                    for (let r in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(r) && n.setRequestHeader(r, this._opts.extraHeaders[r]);
                }
            } catch {
            }
            if (this._method === "POST")
                try {
                    n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                } catch {
                }
            try {
                n.setRequestHeader("Accept", "*/*");
            } catch {
            }
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = () => {
                var r;
                n.readyState === 3 && ((r = this._opts.cookieJar) === null || r === void 0 || r.parseCookies(
                    // @ts-ignore
                    n.getResponseHeader("set-cookie")
                )), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
                    this._onError(typeof n.status == "number" ? n.status : 0);
                }, 0));
            }, n.send(this._data);
        } catch (r) {
            this.setTimeoutFn(() => {
                this._onError(r);
            }, 0);
            return;
        }
        typeof document < "u" && (this._index = g.requestsCount++, g.requests[this._index] = this);
    }
    /**
     * Called upon error.
     *
     * @private
     */
    _onError(e) {
        this.emitReserved("error", e, this._xhr), this._cleanup(!0);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = Ve, e)
                try {
                    this._xhr.abort();
                } catch {
                }
            typeof document < "u" && delete g.requests[this._index], this._xhr = null;
        }
    }
    /**
     * Called upon load.
     *
     * @private
     */
    _onLoad() {
        const e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
        this._cleanup();
    }
}
g.requestsCount = 0;
g.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", ee);
    else if (typeof addEventListener == "function") {
        const s = "onpagehide" in d ? "pagehide" : "unload";
        addEventListener(s, ee, !1);
    }
}
function ee() {
    for (let s in g.requests)
        g.requests.hasOwnProperty(s) && g.requests[s].abort();
}
const We = function () {
    const s = fe({
        xdomain: !1
    });
    return s && s.responseType !== null;
}();
class He extends Me {
    constructor(e) {
        super(e);
        const t = e && e.forceBase64;
        this.supportsBinary = We && !t;
    }
    request(e = {}) {
        return Object.assign(e, { xd: this.xd }, this.opts), new g(fe, this.uri(), e);
    }
}
function fe(s) {
    const e = s.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || Ue))
            return new XMLHttpRequest();
    } catch {
    }
    if (!e)
        try {
            return new d[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch {
        }
}
const le = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class ze extends Y {
    get name() {
        return "websocket";
    }
    doOpen() {
        const e = this.uri(), t = this.opts.protocols, n = le ? {} : ae(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, t, n);
        } catch (r) {
            return this.emitReserved("error", r);
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
        }, this.ws.onclose = (e) => this.onClose({
            description: "websocket connection closed",
            context: e
        }), this.ws.onmessage = (e) => this.onData(e.data), this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(e) {
        this.writable = !1;
        for (let t = 0; t < e.length; t++) {
            const n = e[t], r = t === e.length - 1;
            $(n, this.supportsBinary, (i) => {
                try {
                    this.doWrite(n, i);
                } catch {
                }
                r && L(() => {
                    this.writable = !0, this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {
        }, this.ws.close(), this.ws = null);
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const e = this.opts.secure ? "wss" : "ws", t = this.query || {};
        return this.opts.timestampRequests && (t[this.opts.timestampParam] = he()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t);
    }
}
const D = d.WebSocket || d.MozWebSocket;
class $e extends ze {
    createSocket(e, t, n) {
        return le ? new D(e, t, n) : t ? new D(e, t) : new D(e);
    }
    doWrite(e, t) {
        this.ws.send(t);
    }
}
class Ke extends Y {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        } catch (e) {
            return this.emitReserved("error", e);
        }
        this._transport.closed.then(() => {
            this.onClose();
        }).catch((e) => {
            this.onError("webtransport error", e);
        }), this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then((e) => {
                const t = Ce(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(t).getReader(), r = Te();
                r.readable.pipeTo(e.writable), this._writer = r.writable.getWriter();
                const i = () => {
                    n.read().then(({ done: c, value: h }) => {
                        c || (this.onPacket(h), i());
                    }).catch((c) => {
                    });
                };
                i();
                const o = { type: "open" };
                this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
            });
        });
    }
    write(e) {
        this.writable = !1;
        for (let t = 0; t < e.length; t++) {
            const n = e[t], r = t === e.length - 1;
            this._writer.write(n).then(() => {
                r && L(() => {
                    this.writable = !0, this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close();
    }
}
const Ye = {
    websocket: $e,
    webtransport: Ke,
    polling: He
}, Xe = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, Je = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
];
function F(s) {
    if (s.length > 8e3)
        throw "URI too long";
    const e = s, t = s.indexOf("["), n = s.indexOf("]");
    t != -1 && n != -1 && (s = s.substring(0, t) + s.substring(t, n).replace(/:/g, ";") + s.substring(n, s.length));
    let r = Xe.exec(s || ""), i = {}, o = 14;
    for (; o--;)
        i[Je[o]] = r[o] || "";
    return t != -1 && n != -1 && (i.source = e, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = je(i, i.path), i.queryKey = Qe(i, i.query), i;
}
function je(s, e) {
    const t = /\/{2,9}/g, n = e.replace(t, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function Qe(s, e) {
    const t = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (n, r, i) {
        r && (t[r] = i);
    }), t;
}
const U = typeof addEventListener == "function" && typeof removeEventListener == "function", R = [];
U && addEventListener("offline", () => {
    R.forEach((s) => s());
}, !1);
class b extends u {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(e, t) {
        if (super(), this.binaryType = Re, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (t = e, e = null), e) {
            const n = F(e);
            t.hostname = n.host, t.secure = n.protocol === "https" || n.protocol === "wss", t.port = n.port, n.query && (t.query = n.query);
        } else t.host && (t.hostname = F(t.host).host);
        N(this, t), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, t.transports.forEach((n) => {
            const r = n.prototype.name;
            this.transports.push(r), this._transportsByName[r] = n;
        }), this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, t), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = De(this.opts.query)), U && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(), this.transport.close());
        }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            });
        }, R.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(e) {
        const t = Object.assign({}, this.opts.query);
        t.EIO = ce, t.transport = e, this.id && (t.sid = this.id);
        const n = Object.assign({}, this.opts, {
            query: t,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](n);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        const e = this.opts.rememberUpgrade && b.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const t = this.createTransport(e);
        t.open(), this.setTransport(t);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (t) => this._onClose("transport close", t));
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
        this.readyState = "open", b.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type) {
                case "open":
                    this.onHandshake(JSON.parse(e.data));
                    break;
                case "ping":
                    this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                    break;
                case "error":
                    const t = new Error("server error");
                    t.code = e.data, this._onError(t);
                    break;
                case "message":
                    this.emitReserved("data", e.data), this.emitReserved("message", e.data);
                    break;
            }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(e) {
        this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout");
        }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const e = this._getWritablePackets();
            this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let t = 1;
        for (let n = 0; n < this.writeBuffer.length; n++) {
            const r = this.writeBuffer[n].data;
            if (r && (t += Ne(r)), n > 0 && t > this._maxPayload)
                return this.writeBuffer.slice(0, n);
            t += 2;
        }
        return this.writeBuffer;
    }
    /**
     * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
     *
     * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
     * `write()` method then the message would not be buffered by the Socket.IO client.
     *
     * @return {boolean}
     * @private
     */
    /* private */
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0, L(() => {
            this._onClose("ping timeout");
        }, this.setTimeoutFn)), e;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    write(e, t, n) {
        return this._sendPacket("message", e, t, n), this;
    }
    /**
     * Sends a message. Alias of {@link Socket#write}.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @return {Socket} for chaining.
     */
    send(e, t, n) {
        return this._sendPacket("message", e, t, n), this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    _sendPacket(e, t, n, r) {
        if (typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = null), this.readyState === "closing" || this.readyState === "closed")
            return;
        n = n || {}, n.compress = n.compress !== !1;
        const i = {
            type: e,
            data: t,
            options: n
        };
        this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
        const e = () => {
            this._onClose("forced close"), this.transport.close();
        }, t = () => {
            this.off("upgrade", t), this.off("upgradeError", t), e();
        }, n = () => {
            this.once("upgrade", t), this.once("upgradeError", t);
        };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? n() : e();
        }) : this.upgrading ? n() : e()), this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    _onError(e) {
        if (b.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(), this._open();
        this.emitReserved("error", e), this._onClose("transport error", e);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    _onClose(e, t) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), U && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                const n = R.indexOf(this._offlineEventListener);
                n !== -1 && R.splice(n, 1);
            }
            this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this._prevBufferLen = 0;
        }
    }
}
b.protocol = ce;
class Ge extends b {
    constructor() {
        super(...arguments), this._upgrades = [];
    }
    onOpen() {
        if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
            for (let e = 0; e < this._upgrades.length; e++)
                this._probe(this._upgrades[e]);
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    _probe(e) {
        let t = this.createTransport(e), n = !1;
        b.priorWebsocketSuccess = !1;
        const r = () => {
            n || (t.send([{ type: "ping", data: "probe" }]), t.once("packet", (y) => {
                if (!n)
                    if (y.type === "pong" && y.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", t), !t)
                            return;
                        b.priorWebsocketSuccess = t.name === "websocket", this.transport.pause(() => {
                            n || this.readyState !== "closed" && (f(), this.setTransport(t), t.send([{ type: "upgrade" }]), this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush());
                        });
                    } else {
                        const w = new Error("probe error");
                        w.transport = t.name, this.emitReserved("upgradeError", w);
                    }
            }));
        };
        function i() {
            n || (n = !0, f(), t.close(), t = null);
        }
        const o = (y) => {
            const w = new Error("probe error: " + y);
            w.transport = t.name, i(), this.emitReserved("upgradeError", w);
        };
        function c() {
            o("transport closed");
        }
        function h() {
            o("socket closed");
        }
        function p(y) {
            t && y.name !== t.name && i();
        }
        const f = () => {
            t.removeListener("open", r), t.removeListener("error", o), t.removeListener("close", c), this.off("close", h), this.off("upgrading", p);
        };
        t.once("open", r), t.once("error", o), t.once("close", c), this.once("close", h), this.once("upgrading", p), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(() => {
            n || t.open();
        }, 200) : t.open();
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    _filterUpgrades(e) {
        const t = [];
        for (let n = 0; n < e.length; n++)
            ~this.transports.indexOf(e[n]) && t.push(e[n]);
        return t;
    }
}
let Ze = class extends Ge {
    constructor(e, t = {}) {
        const n = typeof e == "object" ? e : t;
        (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || ["polling", "websocket", "webtransport"]).map((r) => Ye[r]).filter((r) => !!r)), super(e, n);
    }
};
function et(s, e = "", t) {
    let n = s;
    t = t || typeof location < "u" && location, s == null && (s = t.protocol + "//" + t.host), typeof s == "string" && (s.charAt(0) === "/" && (s.charAt(1) === "/" ? s = t.protocol + s : s = t.host + s), /^(https?|wss?):\/\//.test(s) || (typeof t < "u" ? s = t.protocol + "//" + s : s = "https://" + s), n = F(s)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
    const i = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
    return n.id = n.protocol + "://" + i + ":" + n.port + e, n.href = n.protocol + "://" + i + (t && t.port === n.port ? "" : ":" + n.port), n;
}
const tt = typeof ArrayBuffer == "function", nt = (s) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(s) : s.buffer instanceof ArrayBuffer, de = Object.prototype.toString, st = typeof Blob == "function" || typeof Blob < "u" && de.call(Blob) === "[object BlobConstructor]", rt = typeof File == "function" || typeof File < "u" && de.call(File) === "[object FileConstructor]";
function X(s) {
    return tt && (s instanceof ArrayBuffer || nt(s)) || st && s instanceof Blob || rt && s instanceof File;
}
function S(s, e) {
    if (!s || typeof s != "object")
        return !1;
    if (Array.isArray(s)) {
        for (let t = 0, n = s.length; t < n; t++)
            if (S(s[t]))
                return !0;
        return !1;
    }
    if (X(s))
        return !0;
    if (s.toJSON && typeof s.toJSON == "function" && arguments.length === 1)
        return S(s.toJSON(), !0);
    for (const t in s)
        if (Object.prototype.hasOwnProperty.call(s, t) && S(s[t]))
            return !0;
    return !1;
}
function it(s) {
    const e = [], t = s.data, n = s;
    return n.data = V(t, e), n.attachments = e.length, { packet: n, buffers: e };
}
function V(s, e) {
    if (!s)
        return s;
    if (X(s)) {
        const t = { _placeholder: !0, num: e.length };
        return e.push(s), t;
    } else if (Array.isArray(s)) {
        const t = new Array(s.length);
        for (let n = 0; n < s.length; n++)
            t[n] = V(s[n], e);
        return t;
    } else if (typeof s == "object" && !(s instanceof Date)) {
        const t = {};
        for (const n in s)
            Object.prototype.hasOwnProperty.call(s, n) && (t[n] = V(s[n], e));
        return t;
    }
    return s;
}
function ot(s, e) {
    return s.data = M(s.data, e), delete s.attachments, s;
}
function M(s, e) {
    if (!s)
        return s;
    if (s && s._placeholder === !0) {
        if (typeof s.num == "number" && s.num >= 0 && s.num < e.length)
            return e[s.num];
        throw new Error("illegal attachments");
    } else if (Array.isArray(s))
        for (let t = 0; t < s.length; t++)
            s[t] = M(s[t], e);
    else if (typeof s == "object")
        for (const t in s)
            Object.prototype.hasOwnProperty.call(s, t) && (s[t] = M(s[t], e));
    return s;
}
const ct = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
    // used by the Node.js EventEmitter
], at = 5;
var a;
(function (s) {
    s[s.CONNECT = 0] = "CONNECT", s[s.DISCONNECT = 1] = "DISCONNECT", s[s.EVENT = 2] = "EVENT", s[s.ACK = 3] = "ACK", s[s.CONNECT_ERROR = 4] = "CONNECT_ERROR", s[s.BINARY_EVENT = 5] = "BINARY_EVENT", s[s.BINARY_ACK = 6] = "BINARY_ACK";
})(a || (a = {}));
class ht {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(e) {
        this.replacer = e;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(e) {
        return (e.type === a.EVENT || e.type === a.ACK) && S(e) ? this.encodeAsBinary({
            type: e.type === a.EVENT ? a.BINARY_EVENT : a.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [this.encodeAsString(e)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(e) {
        let t = "" + e.type;
        return (e.type === a.BINARY_EVENT || e.type === a.BINARY_ACK) && (t += e.attachments + "-"), e.nsp && e.nsp !== "/" && (t += e.nsp + ","), e.id != null && (t += e.id), e.data != null && (t += JSON.stringify(e.data, this.replacer)), t;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(e) {
        const t = it(e), n = this.encodeAsString(t.packet), r = t.buffers;
        return r.unshift(n), r;
    }
}
function te(s) {
    return Object.prototype.toString.call(s) === "[object Object]";
}
class J extends u {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(e) {
        super(), this.reviver = e;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(e) {
        let t;
        if (typeof e == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            t = this.decodeString(e);
            const n = t.type === a.BINARY_EVENT;
            n || t.type === a.BINARY_ACK ? (t.type = n ? a.EVENT : a.ACK, this.reconstructor = new ut(t), t.attachments === 0 && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t);
        } else if (X(e) || e.base64)
            if (this.reconstructor)
                t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + e);
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(e) {
        let t = 0;
        const n = {
            type: Number(e.charAt(0))
        };
        if (a[n.type] === void 0)
            throw new Error("unknown packet type " + n.type);
        if (n.type === a.BINARY_EVENT || n.type === a.BINARY_ACK) {
            const i = t + 1;
            for (; e.charAt(++t) !== "-" && t != e.length;)
                ;
            const o = e.substring(i, t);
            if (o != Number(o) || e.charAt(t) !== "-")
                throw new Error("Illegal attachments");
            n.attachments = Number(o);
        }
        if (e.charAt(t + 1) === "/") {
            const i = t + 1;
            for (; ++t && !(e.charAt(t) === "," || t === e.length);)
                ;
            n.nsp = e.substring(i, t);
        } else
            n.nsp = "/";
        const r = e.charAt(t + 1);
        if (r !== "" && Number(r) == r) {
            const i = t + 1;
            for (; ++t;) {
                const o = e.charAt(t);
                if (o == null || Number(o) != o) {
                    --t;
                    break;
                }
                if (t === e.length)
                    break;
            }
            n.id = Number(e.substring(i, t + 1));
        }
        if (e.charAt(++t)) {
            const i = this.tryParse(e.substr(t));
            if (J.isPayloadValid(n.type, i))
                n.data = i;
            else
                throw new Error("invalid payload");
        }
        return n;
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.reviver);
        } catch {
            return !1;
        }
    }
    static isPayloadValid(e, t) {
        switch (e) {
            case a.CONNECT:
                return te(t);
            case a.DISCONNECT:
                return t === void 0;
            case a.CONNECT_ERROR:
                return typeof t == "string" || te(t);
            case a.EVENT:
            case a.BINARY_EVENT:
                return Array.isArray(t) && (typeof t[0] == "number" || typeof t[0] == "string" && ct.indexOf(t[0]) === -1);
            case a.ACK:
            case a.BINARY_ACK:
                return Array.isArray(t);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
    }
}
class ut {
    constructor(e) {
        this.packet = e, this.buffers = [], this.reconPack = e;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(e) {
        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
            const t = ot(this.reconPack, this.buffers);
            return this.finishedReconstruction(), t;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null, this.buffers = [];
    }
}
const ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Decoder: J,
    Encoder: ht,
    get PacketType() {
        return a;
    },
    protocol: at
}, Symbol.toStringTag, { value: "Module" }));
function m(s, e, t) {
    return s.on(e, t), function () {
        s.off(e, t);
    };
}
const lt = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
});
class pe extends u {
    /**
     * `Socket` constructor.
     */
    constructor(e, t, n) {
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const e = this.io;
        this.subs = [
            m(e, "open", this.onopen.bind(this)),
            m(e, "packet", this.onpacket.bind(this)),
            m(e, "error", this.onerror.bind(this)),
            m(e, "close", this.onclose.bind(this))
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...e) {
        return e.unshift("message"), this.emit.apply(this, e), this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(e, ...t) {
        var n, r, i;
        if (lt.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
        if (t.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(t), this;
        const o = {
            type: a.EVENT,
            data: t
        };
        if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof t[t.length - 1] == "function") {
            const f = this.ids++, y = t.pop();
            this._registerAckCallback(f, y), o.id = f;
        }
        const c = (r = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || r === void 0 ? void 0 : r.writable, h = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
        return this.flags.volatile && !c || (h ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
    }
    /**
     * @private
     */
    _registerAckCallback(e, t) {
        var n;
        const r = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
        if (r === void 0) {
            this.acks[e] = t;
            return;
        }
        const i = this.io.setTimeoutFn(() => {
            delete this.acks[e];
            for (let c = 0; c < this.sendBuffer.length; c++)
                this.sendBuffer[c].id === e && this.sendBuffer.splice(c, 1);
            t.call(this, new Error("operation has timed out"));
        }, r), o = (...c) => {
            this.io.clearTimeoutFn(i), t.apply(this, c);
        };
        o.withError = !0, this.acks[e] = o;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(e, ...t) {
        return new Promise((n, r) => {
            const i = (o, c) => o ? r(o) : n(c);
            i.withError = !0, t.push(i), this.emit(e, ...t);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(e) {
        let t;
        typeof e[e.length - 1] == "function" && (t = e.pop());
        const n = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({ fromQueue: !0 }, this.flags)
        };
        e.push((r, ...i) => n !== this._queue[0] ? void 0 : (r !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), t && t(r)) : (this._queue.shift(), t && t(null, ...i)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(e = !1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const t = this._queue[0];
        t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args));
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(e) {
        e.nsp = this.nsp, this.io._packet(e);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        typeof this.auth == "function" ? this.auth((e) => {
            this._sendConnectPacket(e);
        }) : this._sendConnectPacket(this.auth);
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(e) {
        this.packet({
            type: a.CONNECT,
            data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e) : e
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e);
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(e, t) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t), this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */
    _clearAcks() {
        Object.keys(this.acks).forEach((e) => {
            if (!this.sendBuffer.some((n) => String(n.id) === e)) {
                const n = this.acks[e];
                delete this.acks[e], n.withError && n.call(this, new Error("socket has been disconnected"));
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(e) {
        if (e.nsp === this.nsp)
            switch (e.type) {
                case a.CONNECT:
                    e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                    break;
                case a.EVENT:
                case a.BINARY_EVENT:
                    this.onevent(e);
                    break;
                case a.ACK:
                case a.BINARY_ACK:
                    this.onack(e);
                    break;
                case a.DISCONNECT:
                    this.ondisconnect();
                    break;
                case a.CONNECT_ERROR:
                    this.destroy();
                    const n = new Error(e.data.message);
                    n.data = e.data.data, this.emitReserved("connect_error", n);
                    break;
            }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(e) {
        const t = e.data || [];
        e.id != null && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t));
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            const t = this._anyListeners.slice();
            for (const n of t)
                n.apply(this, e);
        }
        super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(e) {
        const t = this;
        let n = !1;
        return function (...r) {
            n || (n = !0, t.packet({
                type: a.ACK,
                id: e,
                data: r
            }));
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */
    onack(e) {
        const t = this.acks[e.id];
        typeof t == "function" && (delete this.acks[e.id], t.withError && e.data.unshift(null), t.apply(this, e.data));
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(e, t) {
        this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((e) => this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e) => {
            this.notifyOutgoingListeners(e), this.packet(e);
        }), this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        this.subs && (this.subs.forEach((e) => e()), this.subs = void 0), this.io._destroy(this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
        return this.connected && this.packet({ type: a.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(e) {
        return this.flags.compress = e, this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
        return this.flags.volatile = !0, this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(e) {
        return this.flags.timeout = e, this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(e) {
        if (!this._anyListeners)
            return this;
        if (e) {
            const t = this._anyListeners;
            for (let n = 0; n < t.length; n++)
                if (e === t[n])
                    return t.splice(n, 1), this;
        } else
            this._anyListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners)
            return this;
        if (e) {
            const t = this._anyOutgoingListeners;
            for (let n = 0; n < t.length; n++)
                if (e === t[n])
                    return t.splice(n, 1), this;
        } else
            this._anyOutgoingListeners = [];
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const t = this._anyOutgoingListeners.slice();
            for (const n of t)
                n.apply(this, e.data);
        }
    }
}
function v(s) {
    s = s || {}, this.ms = s.min || 100, this.max = s.max || 1e4, this.factor = s.factor || 2, this.jitter = s.jitter > 0 && s.jitter <= 1 ? s.jitter : 0, this.attempts = 0;
}
v.prototype.duration = function () {
    var s = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random(), t = Math.floor(e * this.jitter * s);
        s = (Math.floor(e * 10) & 1) == 0 ? s - t : s + t;
    }
    return Math.min(s, this.max) | 0;
};
v.prototype.reset = function () {
    this.attempts = 0;
};
v.prototype.setMin = function (s) {
    this.ms = s;
};
v.prototype.setMax = function (s) {
    this.max = s;
};
v.prototype.setJitter = function (s) {
    this.jitter = s;
};
class W extends u {
    constructor(e, t) {
        var n;
        super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.opts = t, N(this, t), this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor((n = t.randomizationFactor) !== null && n !== void 0 ? n : 0.5), this.backoff = new v({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;
        const r = t.parser || ft;
        this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this._autoConnect = t.autoConnect !== !1, this._autoConnect && this.open();
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
    }
    reconnectionDelay(e) {
        var t;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (t = this.backoff) === null || t === void 0 || t.setMin(e), this);
    }
    randomizationFactor(e) {
        var t;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (t = this.backoff) === null || t === void 0 || t.setJitter(e), this);
    }
    reconnectionDelayMax(e) {
        var t;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (t = this.backoff) === null || t === void 0 || t.setMax(e), this);
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(e) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new Ze(this.uri, this.opts);
        const t = this.engine, n = this;
        this._readyState = "opening", this.skipReconnect = !1;
        const r = m(t, "open", function () {
            n.onopen(), e && e();
        }), i = (c) => {
            this.cleanup(), this._readyState = "closed", this.emitReserved("error", c), e ? e(c) : this.maybeReconnectOnOpen();
        }, o = m(t, "error", i);
        if (this._timeout !== !1) {
            const c = this._timeout, h = this.setTimeoutFn(() => {
                r(), i(new Error("timeout")), t.close();
            }, c);
            this.opts.autoUnref && h.unref(), this.subs.push(() => {
                this.clearTimeoutFn(h);
            });
        }
        return this.subs.push(r), this.subs.push(o), this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(e) {
        return this.open(e);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        const e = this.engine;
        this.subs.push(
            m(e, "ping", this.onping.bind(this)),
            m(e, "data", this.ondata.bind(this)),
            m(e, "error", this.onerror.bind(this)),
            m(e, "close", this.onclose.bind(this)),
            // @ts-ignore
            m(this.decoder, "decoded", this.ondecoded.bind(this))
        );
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(e) {
        try {
            this.decoder.add(e);
        } catch (t) {
            this.onclose("parse error", t);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(e) {
        L(() => {
            this.emitReserved("packet", e);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(e) {
        this.emitReserved("error", e);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(e, t) {
        let n = this.nsps[e];
        return n ? this._autoConnect && !n.active && n.connect() : (n = new pe(this, e, t), this.nsps[e] = n), n;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(e) {
        const t = Object.keys(this.nsps);
        for (const n of t)
            if (this.nsps[n].active)
                return;
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(e) {
        const t = this.encoder.encode(e);
        for (let n = 0; n < t.length; n++)
            this.engine.write(t[n], e.options);
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        this.subs.forEach((e) => e()), this.subs.length = 0, this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called when:
     *
     * - the low-level engine is closed
     * - the parser encountered a badly formatted packet
     * - all sockets are disconnected
     *
     * @private
     */
    onclose(e, t) {
        var n;
        this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect();
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            const t = this.backoff.duration();
            this._reconnecting = !0;
            const n = this.setTimeoutFn(() => {
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((r) => {
                    r ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", r)) : e.onreconnect();
                }));
            }, t);
            this.opts.autoUnref && n.unref(), this.subs.push(() => {
                this.clearTimeoutFn(n);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const e = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
    }
}
const x = {};
function B(s, e) {
    typeof s == "object" && (e = s, s = void 0), e = e || {};
    const t = et(s, e.path || "/socket.io"), n = t.source, r = t.id, i = t.path, o = x[r] && i in x[r].nsps, c = e.forceNew || e["force new connection"] || e.multiplex === !1 || o;
    let h;
    return c ? h = new W(n, e) : (x[r] || (x[r] = new W(n, e)), h = x[r]), t.query && !e.query && (e.query = t.queryKey), h.socket(t.path, e);
}
Object.assign(B, {
    Manager: W,
    Socket: pe,
    io: B,
    connect: B
});
function Pt(s) {
    const {
        url: e,
        autoConnect: t = !0,
        reconnection: n = !0,
        reconnectionAttempts: r = 2,
        reconnectionDelay: i = 1e3
    } = s;
    let o = null, c = {};
    const h = () => {
        o || (o = B(e, {
            autoConnect: !1,
            reconnection: n,
            reconnectionAttempts: r,
            reconnectionDelay: i
        }), o.on("connect", () => {
            console.log(`Successfully connected to ${e}`), Object.entries(c).forEach(([l, E]) => {
                o?.on(l, E);
            });
        }), o.on("disconnect", (l) => {
            console.warn(`Disconnected: ${l}`);
        }), o.on("connect_error", (l) => {
            console.error(`Connection error: ${l.message}`);
        })), t && o?.connect();
    }, p = () => {
        o?.disconnect();
    }, f = (l, E) => {
        c[l] = E, o?.on(l, E);
    }, y = (l) => {
        delete c[l], o?.off(l);
    }, w = (l, ...E) => {
        o?.emit(l, ...E);
    }, _e = () => o?.connected;
    return h(), {
        connect: h,
        disconnect: p,
        on: f,
        off: y,
        emit: w,
        isConnected: _e
    };
}
function me(s, e) {
    e ? (e.innerHTML = "", e.appendChild(s)) : (document.body.innerHTML = "", document.body.appendChild(s));
}
let H;
function dt(s) {
    H = s;
}
function pt() {
    H && H();
}
function mt(s) {
    const e = document.getElementById("root"), t = window.location.pathname, n = s[t] || s["/"];
    me(n(), e), dt(() => mt(s));
}
let z = {};
function qt(s) {
    z = s;
}
function Dt(s) {
    window.history.pushState({}, "", s), ye();
}
function ye() {
    const s = window.location.pathname, e = z[s] || z["/"];
    if (e) {
        const t = document.getElementById("root");
        me(e(), t);
    }
}
window.addEventListener("popstate", () => {
    ye();
});
function ge(s, e) {
    return s({ ...e });
}
const It = ge;
function Ft(s) {
    return s.children;
}
function Ut(s, e) {
    return ge(s, e);
}
let A = {};
function Vt(s, e) {
    return Object.prototype.hasOwnProperty.call(A, s) ? A[s] : (A[s] = e, e);
}
function Mt(s, e) {
    if (Object.prototype.hasOwnProperty.call(A, s))
        A[s] = e, pt();
    else
        throw new Error(`State "${s}" does not exist`);
}
export {
    be as Alert,
    yt as Button,
    gt as Code,
    _t as Confirm,
    bt as Division,
    wt as Footer,
    Et as Form,
    Ft as Fragment,
    vt as Header,
    xt as Heading,
    kt as Input,
    At as Item,
    Tt as Link,
    Ct as List,
    Ot as Paragraph,
    Rt as Prompt,
    St as Script,
    Vt as createState,
    mt as dynamicRender,
    ge as jsx,
    Ut as jsxDEV,
    It as jsxs,
    Dt as navigate,
    pt as reRender,
    me as render,
    ye as renderRoute,
    dt as setRender,
    qt as setRoutes,
    Mt as updateState,
    Bt as useEffect,
    Lt as useScript,
    Pt as useSocket
};
