//이벤트 설정
//ul객체를 찾아서 객체참조변수 저장
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');

//앵커에 이벤트 기능 입력
navToggle.addEventListener('click',()=>{
  navMenu.classList.toggle('active');
});