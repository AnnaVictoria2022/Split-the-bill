gsap.to('.container', {opacity:1, duration:2, delay:0.7})

const addTip = document.querySelector('.addTip')
addTip.addEventListener('click', showTip);

function showTip(e){
    e.preventDefault();
    document.querySelector('.tip').style.display = "block";
}


const calculateButton = document.querySelector('.calculate');
calculateButton.addEventListener('click', calculate);

function calculate(e){
    e.preventDefault();
const bill = document.querySelector('.bill').value;
console.log(bill);
const people = document.querySelector('.people').value;
const tips = document.querySelector('.tip').value;
if (bill === "" || people === "" || people < 1){
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter a valid number',
    })
}
else if(isNaN(bill) || isNaN(people)){
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter a valid number',
    })
}

let billPerPers = bill/people;

let tipPerPers = (bill*tips)/people;

let totalAmountPerPers = billPerPers + tipPerPers;

billPerPers = billPerPers.toFixed(2);
tipPerPers = tipPerPers.toFixed(2);
totalAmountPerPers = totalAmountPerPers.toFixed(2);


document.querySelector('.billPP').textContent = billPerPers;
document.querySelector('.tipsPP').textContent = tipPerPers;
document.querySelector('.totalPP').textContent = totalAmountPerPers;

}
