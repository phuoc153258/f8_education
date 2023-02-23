export function checkURLIsImage(url: { match: (arg0: RegExp) => null }) {
    return url?.match(/\.(jpeg|jpg|gif|png)$/) != null;
}
