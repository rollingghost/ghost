/**
 * Retrieves the value of a specified cookie from a cookie string.
 *
 * @param cookies - The string containing all cookies.
 * @param name - The name of the cookie to retrieve.
 * @returns The value of the specified cookie, or `null` if the cookie is not found.
 */
export function ghostGetCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
}

/**
 * Sets a cookie with the specified name, value, and expiration in days.
 *
 * @param name - The name of the cookie.
 * @param value - The value of the cookie.
 * @param days - The number of days until the cookie expires.
 */
export function ghostSetCookie(
    name: string,
    value: string,
    days: number,
): void {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

/**
 * Deletes a cookie with the specified name.
 *
 * @param name - The name of the cookie to delete.
 */

export function ghostDeleteCookie(name: string): void {
    document.cookie =
        `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export default { ghostDeleteCookie, ghostGetCookie, ghostSetCookie };

// [FILEPATH] src/utils/cookie.ts [/FILEPATH]
