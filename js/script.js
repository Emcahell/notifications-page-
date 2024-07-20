const btnMarkRead = document.getElementById('btn-mark-read');
const notification = document.querySelectorAll('.notification');
const numberNotification = document.getElementById('number-notification');

let counter = 3;

btnMarkRead.addEventListener('click', () =>{
    notification.forEach(div =>{
        div.classList.remove('new-notification');
        numberNotification.textContent = 0;
    })
})

notification.forEach(div =>{
    div.addEventListener('click', () =>{
        div.classList.remove('new-notification');
        counter--;
        updateCounter();
    })
})

const updateCounter = () =>{
    numberNotification.textContent = counter;
}