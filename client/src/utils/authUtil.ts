export function parseCookie(): Array<string> {
    /**
     * Returns an array where each key represents a cookie identifier.
     */
    const rawCookiesStr = document.cookie;
    const regex = /; |;/g;
    const rawCookieArr = rawCookiesStr.split(regex);
    const cookiesKeyArr: Array<string> = [];
    rawCookieArr.forEach((cookie, idx) => {
        const cookieArr = cookie.split('=');
        const cookieKey = cookieArr[0];
        cookiesKeyArr.push(cookieKey);
    })
    return cookiesKeyArr;
} 

export function checkUserExist() {
    /**
     * Returns a boolean that indicates whether the user is authenticated or not.
     */
    const sessionIdKey = "sessionID";
    const userIdKey = "u_Id";
    const docCookieArr = parseCookie();
    // Require at least cookie
    if (docCookieArr.length < 2) {
        return false;
    }
    return docCookieArr.includes(sessionIdKey)
            && docCookieArr.includes(userIdKey);
}