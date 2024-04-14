const copyBtn = document.querySelector("#copy-btn");
const copyMsg = document.querySelector("#copy-msg");

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(
        "HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9"
    );

    async function copyToClipboard() {
        const type = "text/plain";
        const blob = new Blob(
            ["HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9"],
            { type }
        );

        const clipboardItem = new ClipboardItem({
            [type]: blob,
        });

        navigator.clipboard.write([clipboardItem]).catch(function (error) {
            console.error("Произошла ошибка при копировании текста: ", error);
        });
    }

    copyToClipboard();

    document.getElementById("dukonomics-address").select();
    document.execCommand("copy");

    document.activeElement.blur();

    copyMsg.classList.add("dukonomics__main-tag-msg_active");
    setTimeout(() => {
        copyMsg.classList.remove("dukonomics__main-tag-msg_active");
    }, 3000);
});

const headerHamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__inner");

headerHamburger.addEventListener("click", () => {
    document.body.style.overflow = headerHamburger.classList.contains(
        "hamburger__active"
    )
        ? "auto"
        : "hidden";
    headerHamburger.classList.toggle("hamburger__active");
    headerMenu.classList.toggle("header__inner__active");
});

const links = document.querySelectorAll(".header__link");
links.forEach((item) => {
    item.addEventListener("click", () => {
        headerHamburger.classList.remove("hamburger__active");
        headerMenu.classList.remove("header__inner__active");
        document.body.style.overflow = "auto";
    });
});

let slider = new Swiper(".swiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        651: {
            pagination: false,
            spaceBetween: 0,
            enabled: false,
        },
    },
});

window.onload = function () {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    console.log(window.innerWidth);
    if (window.innerWidth <= 651) {
        viewportMeta.setAttribute("content", "width=375");
    } else {
        viewportMeta.setAttribute("content", "width=1480");
    }
};
