const notifications = document.getElementsByClassName('notification-group');
const numOfNotifElem = document.querySelector('.number-of-notif');
const readAllNotifElem = document.querySelector('.read-all-notif');

let numOfNotif = notifications.length;

changeNumOfNotif(numOfNotif);
for(let i = 0; i < notifications.length; i++) {
    let notif = notifications[i];
    notif.addEventListener('click', () => {
        if(notif.classList.contains('unread')) {
            notif.classList.remove('unread');
            numOfNotif--;
            changeNumOfNotif(numOfNotif);
        }
        notif.classList.toggle('active');
    });
}
readAllNotifElem.addEventListener('click', readAllNotif);


function changeNumOfNotif(x) {
    numOfNotifElem.innerText = x;
}
function readAllNotif() {
    numOfNotifElem.innerText = 0;
    for(let i = 0; i < notifications.length; i++) {
        let notif = notifications[i];
        if(notif.classList.contains('unread'))
            notif.classList.remove('unread');
    }
}