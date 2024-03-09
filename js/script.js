
let main_left_menu = document.getElementById("main_left_menu");
let btn_open_main_menu = document.getElementById("btn_open_main_menu");



btn_open_main_menu.addEventListener("click" , ()=>{
    main_left_menu.style.display = "block";

    console.log('====================================');
    console.log( main_left_menu );
    console.log('====================================');
})