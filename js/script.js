const btnMarkRead = document.getElementById('btn-mark-read');
const notification = document.querySelectorAll('.notification');
const numberNotification = document.getElementById('number-notification');

let counter = 3;

btnMarkRead.addEventListener('click', () =>{
    notification.forEach(div =>{
        div.classList.remove('new-notification');
        div.querySelector('.icon').style.display = 'none';
        numberNotification.textContent = 0;
    })
})

notification.forEach(div =>{
    div.addEventListener('click', () =>{
        div.classList.remove('new-notification');
        div.querySelector('.icon').style.display = 'none';
        counter--;
        updateCounter();
    })
})

const updateCounter = () =>{
    numberNotification.textContent = counter;
}