


let description = document.getElementById("description");
let reviews = document.getElementById("reviews");
let btn_view_all_reviews = document.getElementById("btn_view_all_reviews");
let btn_open_reviews = document.getElementById("btn_open_reviews");
let btn_open_description = document.getElementById("btn_open_description");


btn_open_description.addEventListener('click', () => {
    description.style.display = 'flex';
    reviews.style.display = 'none';
    btn_open_description.classList.add('active');
    btn_open_reviews.classList.remove('active');
});


btn_view_all_reviews.addEventListener('click', () => {
    showReviews();
});
btn_open_reviews.addEventListener('click', () => {
    showReviews();
});




// let toggleVisibility = ( item , isVisible ) =>{
//     item.style.display = isVisible ? 'none' : 'block';
// }
let showReviews = () => {
    description.style.display = 'none';
    reviews.style.display = 'flex';
    btn_open_reviews.classList.add('active');
    btn_open_description.classList.remove('active');
}



let sub_book_images = document.querySelectorAll('.sub_book_image');
let main_book_image = document.querySelector('#main_book_image');

sub_book_images.forEach(element => {
    element.addEventListener('click', () => {
        main_book_image.src = element.src;
        console.log(5678);
    });
});