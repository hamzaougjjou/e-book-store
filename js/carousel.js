let currentIndex = 0;
const slides = document.querySelectorAll('.carousel_item');
const container = document.querySelector('.carousel_container');

const new_books_next_btn = document.getElementById("new_books_next_btn");
const new_books_prev_btn = document.getElementById("new_books_prev_btn");

nextPrevBtnsStyling();

function showSlide(index, dir = null) {
    nextPrevBtnsStyling();
    const slideWidth = slides[0].clientWidth;
    let offset = -index * slideWidth;
    if (dir != null) {
        offset = -index * slideWidth - 200;
    }
    container.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
}

function nextSlide() {
    if (currentIndex === slides.length - 1) {
        return false;
    }

    const totalSlides = document.querySelectorAll('.carousel_item').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex, "next");
}

function prevSlide() {
    if (currentIndex === 0) {
        return false;
    }
    const totalSlides = document.querySelectorAll('.carousel_item').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}
showSlide(currentIndex);

function nextPrevBtnsStyling(){
    if( currentIndex === 0 ){
        new_books_prev_btn.style.backgroundColor = "rgb(201, 201, 201)";
    }else if( currentIndex === slides.length-1 ){
        new_books_next_btn.style.backgroundColor = "rgb(201, 201, 201)";
    }else{
        new_books_prev_btn.style.backgroundColor = "var(--main-orange)";
        new_books_next_btn.style.backgroundColor = "var(--main-orange)";
    }
}