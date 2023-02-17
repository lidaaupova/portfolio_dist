// Hamburher menu
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Change color
const linkStyle = document.querySelectorAll('.sidepanel__link i');
 
document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 500){
    linkStyle.forEach(el => el.style.color = 'black');
}else{
    linkStyle.forEach(el => el.style.color='');
  }
});

const MenuDevider = document.querySelectorAll('.sidepanel__divider');
document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 400){
    MenuDevider.forEach(el => el.style.backgroundColor = 'black');
  }else{
    MenuDevider.forEach(el => el.style.backgroundColor='');
  }
});

const TextMenu = document.querySelectorAll('.sidepanel__text');
document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 300){
    TextMenu.forEach(el => el.style.color = 'black');
  }else{
    TextMenu.forEach(el => el.style.color='');
  }
});


// Price persents
const percents = document.querySelectorAll('.skills__progress-percent'),
      lines = document.querySelectorAll('.skills__progress-line span');

percents.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

// Modal

// function Click () {
//   const sendForm = document.querySelector('.contacts__triggers button'),
//       overlay = document.querySelector('.overlay'),
//       closeForm = document.querySelector('.modal__close'),
//       thanks = document.querySelector('.modal');

//   sendForm.addEventListener('click', () => {
//     overlay.classList.add('active');
//     thanks.classList.add('active');
//   });
//   closeForm.addEventListener('click', () => {
//     overlay.classList.remove('active');
//     thanks.classList.remove('active');
//   });
// }

// Click.


// Send Form

const sendForm = document.querySelector('.contacts__triggers button'),
      overlay = document.querySelector('.overlay'),
      closeForm = document.querySelector('.modal__close'),
      thanks = document.querySelector('.modal');

function close() {
  closeForm.addEventListener('click', () => {
        overlay.classList.remove('active');
        thanks.classList.remove('active');
      });
}


function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  let req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response); // Ебанный internet explorer 11
        console.log(json);
          
        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          // alert("Сообщение отправлено");
          overlay.classList.add('active');
          thanks.classList.add('active');
          close();
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
}

// Smooth scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', e => {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}