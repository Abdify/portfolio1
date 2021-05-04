export function isChrome(){
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    return isChrome;
}