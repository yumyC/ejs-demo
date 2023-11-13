require('./style.scss');
import '@/page/login.ejs'
import loginTemplate from '@/page/login.ejs';
import renderTable from '@/js/table'

let isLogin = true;

document.getElementById('app').innerHTML = loginTemplate({ isLogin: isLogin });
document.querySelector('.login-in').addEventListener('click', () => {
  isLogin = false;
  document.getElementById('app').innerHTML = loginTemplate({ isLogin: isLogin });
  renderTable();
});


