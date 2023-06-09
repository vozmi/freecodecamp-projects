/**
 * Stripes non alphabetical characters from string
 * @param str input string
 * @returns string without non alphabetical characters (punctuation, spaces and symbols)
 */
export function stripNonAlphaChars(str: string) {
    const pattern = /[^A-Za-z0-9]/g;
    return str.replace(pattern, '');
}
