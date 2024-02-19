

const icon = document.getElementsByClassName("iconmenu")[0];
const littlemenu = document.getElementsByClassName("littlemenu")[0];

icon.addEventListener("click", () => {
    if (littlemenu.style.display === "block") {
        littlemenu.style.display = "none";
    } else {
        littlemenu.style.display = "block";
    }
});

const slider = document.querySelector('.slider');
let counter = 0;
const slides = document.querySelectorAll('.slide');
const size = 100;

function slide(direction) {
    if (direction === 'right') {
        counter = (counter + 1) % slides.length;
    } else if (direction === 'left') {
        counter = (counter - 1 + slides.length) % slides.length;
    }
    slider.style.transform = `translateX(${-size * counter}%)`;
}

slider.addEventListener('click', function (event) {
    const rect = slider.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    if (offsetX > rect.width / 2) {
        slide('right');
    } else {
        slide('left');
    }
});

setInterval(() => slide('right'), 3000);

function toggleTab(tabNumber) {
    var contentId = "content" + tabNumber;
    var content = document.getElementById(contentId);

    if (content.style.display === "none") {
        var allContents = document.querySelectorAll('.content');
        allContents.forEach(function (item) {
            item.style.display = "none";
        });
    }

    content.style.display = "block";
}

toggleTab(1);
toggleTab(2);
toggleTab(3);



