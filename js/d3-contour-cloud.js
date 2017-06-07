// http://www.quasimondo.com/StackBlurForCanvas Version 0.5.0. Copyright 2010 Mario Klingemann.
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.StackBlur = e.StackBlur || {})
}(this, function (e) {
    "use strict";
    function t(e, t) {
        if (!(isNaN(t) || t < 1)) {
            t |= 0;
            var o, i, u, x, a, d, l, c, s, p, h, v = e.data, y = e.width, w = e.height, b = t + t + 1, j = y - 1,
                k = w - 1, m = t + 1, B = m * (m + 1) / 2, N = new r, S = N;
            for (u = 1; u < b; u++)if (S = S.next = new r, u == m)var _ = S;
            S.next = N;
            var g = null, M = null;
            l = d = 0;
            var O = n[t], P = f[t];
            for (i = 0; i < w; i++) {
                for (p = c = 0, s = m * (h = v[d]), c += B * h, S = N, u = 0; u < m; u++)S.r = h, S = S.next;
                for (u = 1; u < m; u++)x = d + ((j < u ? j : u) << 2), c += (S.r = h = v[x]) * (m - u), p += h, S = S.next;
                for (g = N, M = _, o = 0; o < y; o++)v[d] = c * O >> P, c -= s, s -= g.r, x = l + ((x = o + t + 1) < j ? x : j) << 2, p += g.r = v[x], c += p, g = g.next, s += h = M.r, p -= h, M = M.next, d += 4;
                l += y
            }
            for (o = 0; o < y; o++) {
                for (p = c = 0, d = o << 2, s = m * (h = v[d]), c += B * h, S = N, u = 0; u < m; u++)S.r = h, S = S.next;
                for (a = y, u = 1; u <= t; u++)d = a + o << 2, c += (S.r = h = v[d]) * (m - u), p += h, S = S.next, u < k && (a += y);
                for (d = o, g = N, M = _, i = 0; i < w; i++)x = d << 2, v[x] = c * O >> P, c -= s, s -= g.r, x = o + ((x = i + m) < k ? x : k) * y << 2, c += p += g.r = v[x], g = g.next, s += h = M.r, p -= h, M = M.next, d += y
            }
            return e
        }
    }

    function r() {
        this.r = 0, this.next = null
    }

    var n = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        f = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
    e.R = t, Object.defineProperty(e, "__esModule", {value: !0})
});