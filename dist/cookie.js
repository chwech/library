/**
 * cookie操作
 * @author chwech
 * @date 2020-01-06
 * @class Cookie
 */
var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    /**
     * 获取cookie
     * @date 2020-01-06
     * @param {string} name
     * @returns {(string | null)}
     * @memberof Cookie
     */
    Cookie.prototype.get = function (name) {
        var cookieName = encodeURIComponent(name) + "=", cookieStart = document.cookie.indexOf(cookieName), cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    };
    /**
     *
     * 设置cookie
     * @date 2020-01-06
     * @param {string} name
     * @param {string} value
     * @param {Date} expires
     * @param {string} path
     * @param {string} domain
     * @param {string} secure
     * @memberof Cookie
     */
    Cookie.prototype.set = function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += "; expires" + expires.toUTCString();
        }
        if (path) {
            cookieText += "; path" + path;
        }
        if (domain) {
            cookieText += "; domain" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    };
    /**
     *
     * 删除cookie
     * @date 2020-01-06
     * @param {string} name
     * @param {string} path
     * @param {string} domain
     * @param {string} secure
     * @memberof Cookie
     */
    Cookie.prototype.unset = function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    };
    return Cookie;
}());
export { Cookie };
