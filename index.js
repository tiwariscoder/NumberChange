const countValue = document.querySelector("#countValue");
let increment = () => {
    let value = parseInt(countValue.innerText);
    value=value+1;
    countValue.innerText=value;
}
let decrement = () => {
    let value = parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
}