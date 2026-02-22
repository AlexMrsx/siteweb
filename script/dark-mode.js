document.querySelector(".darkmode").addEventListener("click", () => {
    console.log("Dark mode toggled");
  document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        whileblackcolor();
    } else {
        document.querySelectorAll("img").forEach((img) => {
            img.style.filter = "none";
        });
    }
    document.querySelectorAll("div a").forEach((link) => {
        link.addEventListener("mouseover", () => {
            if (document.documentElement.classList.contains("dark")) {
                link.style.color = "white";
            } else {
                link.style.color = "black";
            }

    });
});
});




function whileblackcolor()  {
    document.querySelectorAll("img").forEach((img) => {
        img.style.filter = "grayscale(1)";
    });
}