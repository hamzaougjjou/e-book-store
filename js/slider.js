


const silider_main_text1 = document.getElementById("silider_main_text1");
const silider_main_text2 = document.getElementById("silider_main_text2");

const txt1 = silider_main_text1.textContent.trim();
const txt2 = silider_main_text2.textContent;


silider_main_text1.textContent = " ";
silider_main_text2.textContent = " ";

let index = 0;
let index2 = 0;
const intervalTime = 100;

console.log(txt1.length);

let func1 = () => {
    const headertext1Interval = setInterval(() => {
        silider_main_text1.textContent += txt1.substring(index, index + 1);
        index = index + 1;
        if (index == txt1.trim().length) {
            clearInterval(headertext1Interval);
        }

    }, intervalTime);

}

let func2 = () => {
    const headertext2Interval = setInterval(() => {
        silider_main_text2.textContent += txt2.substring(index2, index2 + 1);
        index2 = index2 + 1;
        if (index2 == txt2.length) {
            clearInterval(headertext2Interval);
        }
    }, intervalTime);
}


func1();
func2();


