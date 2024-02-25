const shareButton = document.getElementById("js-item-share-buttons");
const title = document.querySelector("header h2")?.textContent;
const shopUrl = document.querySelector("header.shop__text a[data-product-list='from market_show via market_item_detail to shop_index']")?.getAttribute("href");
var url = window.location.href;

if (url.startsWith("https://booth.pm/") && shopUrl != null)
{
    url = url.replace(/https?:\/\/booth\.pm\/..\//i, shopUrl)
}
shareButton.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=booth_pm`);
})