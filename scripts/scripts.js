let subtitle = document.getElementsByClassName('welcome-window__subtitle');
let chainsawText = document.getElementsByClassName('welcome-window__chainsaw-text');

let flag = false;

setInterval(() => {
  if (flag) {
    chainsawText[0].innerText = 'Бензопилы';
    subtitle[0].innerHTML = `
      Единственное условие – регистрация продукта, которая займет 
      меньше минуты и будет сделана прямо в магазине в момент Вашей покупки!
    `;
  } else {
    chainsawText[0].innerText = 'Мотокосы';
    subtitle[0].innerHTML = 'Как ты тут';
  }

  flag = !flag;
}, 15 * 1000);

