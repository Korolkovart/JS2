function form(){
    let regName = /^[a-zа-яё]+$/gi,
        regMail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
        regPhone = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$/,
        regMas = /[a-zа-яё0-9]/;


    let name = document.getElementsByName('name')[0].value,
        email = document.getElementsByName('email')[0].value,
        phone = document.getElementsByName('phone')[0].value,
        message = document.getElementsByName('message')[0].value;



    if(regName.test(name) === true){
        document.getElementById('name').className = 'done'
    } else{
        document.getElementById('name').className = 'err';  
    }
    if(regPhone.test(phone) === true) {
        document.getElementById('phone').className = 'done';
    } else {
        document.getElementById('phone').className = 'err';
    }

    if(regMail.test(email) === true) {
        document.getElementById('email').className = 'done';
    } else {
        document.getElementById('email').className = 'err';
    }
    // Проверяем сообщение
    if(regMas.test(message) === true) {
        document.getElementById('message').className = 'done';
    } else {
        document.getElementById('message').className = 'err';
    }
}
document.querySelector('.button').addEventListener("click", form);
