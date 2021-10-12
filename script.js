let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count =0;
function increament() {
    count += 1;
    countEl.textContent = count ;
}
function save() {
    saveEl.textContent += count  + ' - ';
    countEl.innerText = 0;
    count = 0;

}
