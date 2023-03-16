export const rerenderStyleBlock = (css: string): void => {
    const head = document.head || document.getElementsByTagName('head')[0]
    const style = (head.querySelector("style"))
        ? head.querySelector("style")
        : (() => {
            head.appendChild(document.createElement('style'))
            return head.querySelector("style")
        })()
    style.innerHTML = css
}