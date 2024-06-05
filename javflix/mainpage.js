//콜백함수(onLoad call back func)
function call_js(){
  //ui 객체 참조 변수 선언
  let slideshow = document.querySelector("#sectionNav");
  let slideshow_slides = document.querySelector("#slideImg");
  //<a herf='#'><img></a> ui 객체 배열
  let slides = document.querySelectorAll("#slideImg>a");
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  let indicators = document.querySelectorAll("#slideButton>a");
  //회전목마 현재 위치 값, 시간 설정, 슬라이드 수
  let currentIndex = 0;
  let timer = null;
  let slideCount = slides.length;
  //회전목마 이미지를 우측으로 배치시켜준다.
  for(let i=0;i<slideCount;i++){
    let newLeft= i*100+'%';
    slides[i].style.left = newLeft;
  }
  //회전목마를 움직인다. () slideshow_slides 왼쪽으로 -100% 이동
  function gotoSlide(index){
    currentIndex = index;
    let newLeft = index*-100+'%';
    slideshow_slides.style.left = newLeft;
    indicators.forEach((e)=>{
      e.classList.remove("active");
    });
    indicators[currentIndex].classList.add("active");
  }
  gotoSlide(0);
  function startTimer(){
   timer = setInterval(()=>{
    currentIndex+=1;
    let index = currentIndex % slideCount;
    gotoSlide(index);
   },3000);
  };
  startTimer();
 slideshow_slides.addEventListener("mouseenter", function(){
  clearInterval(timer);
 });
 slideshow_slides.addEventListener("mouseleave", function(){
  startTimer();
 });
 prev.addEventListener("mouseenter", function(){
  clearInterval(timer);
 });
 next.addEventListener("mouseenter", function(){
  clearInterval(timer);
 });
 prev.addEventListener("click", function(e){
  e.preventDefault(); //앵커의 tag 기본 기능을 막는다.
  currentIndex-= 1;
  if(currentIndex<0){
    currentIndex = slideCount -1;
  }
  gotoSlide(currentIndex);
 });
 next.addEventListener("click", function(e){
  e.preventDefault(); //앵커의 tag 기본 기능을 막는다.
  currentIndex += 1;
  if(currentIndex > slideCount-1){
    currentIndex = 0;
  }
  gotoSlide(currentIndex);
 });
 indicators.forEach((e)=>{
  e.addEventListener("mouseenter",function(){
    clearInterval(timer);
  });
 });
 for(let i=0;i<indicators.length;i++){
  indicators[i].addEventListener("click",(e)=>{
    e.preventDefault();
    gotoSlide(i);
  });
 }
}