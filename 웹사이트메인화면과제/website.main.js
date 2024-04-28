//팝업 창 크기 조절
function loginWindow() {
  let popupWidth = 500;
  let popupHeight = 200;
  let popupX = window.screen.width / 2 - popupWidth / 2;
  let popupY = window.screen.height / 2 - popupHeight / 1.5;
  window.open(
    `../웹사이트메인화면과제/login.html`,
    '로그인 화면',
    "status=no, height=" +
    popupHeight +
    ", width=" +
    popupWidth +
    ", left=" +
    popupX +
    ", top=" +
    popupY
  );
}
function signUpWindow(){
  let popupWidth = 1000;
  let popupHeight = 600;
  let popupX = window.screen.width / 2 - popupWidth / 2;
  let popupY = window.screen.height / 2 - popupHeight / 1.5;
  window.open(
    "../웹사이트메인화면과제/signup.html",
    "회원가입 화면",
    "status=no, height=" +
    popupHeight +
    ", width=" +
    popupWidth +
    ", left=" +
    popupX +
    ", top=" +
    popupY
  );
}
//유저 정보를 담을 객체 생성
let userI = new Array();
let userP = new Array();
let userN = new Array();

userI[0] = "ychanlee92";
userI[1] = "ychanlee91";
userI[2] = "ychanlee90";

userP[0] = "123456";
userP[1] = "111111";
userP[2] = "qwe123!";

userN[0] = "이예찬";
userN[1] = "김";
userN[2] = "박";
//정보 확인용 flag
let b = 0;
//회원가입 함수
function userIdCheck(state) {
  const userId = document.querySelector("#userId");
  const userIdInfo = document.querySelector("#userIdInfo");
  if (state === "blur") {
    if (userId.value === "") {
      userIdInfo.innerHTML = `필수 입력 항목입니다.`;
      return false;
    } else {
      userIdInfo.innerHTML = "&nbsp;";
      return true;
    }
  } else if (state === "focus") {
    userIdInfo.innerHTML = "&nbsp;";
    return false;
  }
}
function idCheck() {
  const idCheck = document.querySelector("#userId");
  for(let i=0; i<userI.length; i++){
    if(idCheck.value===userI[i]){
      b = 1;
    }
  }
  if(b === 1){
    alert(`이미 사용중인 ID입니다!`);
  } else if(idCheck.value === ""){
    alert(`아이디를 입력하세요.`);
  } else {
    alert(`${idCheck.value} 사용 가능한 ID입니다!`);
    return true;
  }
}
function userPwCheck(state) {
  const userPw = document.querySelector("#userPw");
  const userPwInfo = document.querySelector("#userPwInfo");
  if (state === "blur") {
    if (userPw.value === "") {
      userPwInfo.innerHTML = `필수 입력 항목입니다.`;
      return false;
    } else {
      userPwInfo.innerHTML = "&nbsp;";
      return true;
    }
  } else if (state === "focus") {
    userPwInfo.innerHTML = "&nbsp;";
    return false;
  }
}
function userPwEqualCheck(state) {
  const userPw = document.querySelector("#userPw");
  const userPwEqual = document.querySelector("#userPwEqual");
  const userPwEqualInfo = document.querySelector("#userPwEqualInfo");
  if (state === "blur") {
    if (userPwEqual.value === "") {
      userPwEqualInfo.innerHTML = "필수입력 항목입니다.";
      return false;
    } else if (userPwEqual.value === userPw.value) {
      userPwEqualInfo.innerHTML = "비밀번호와 일치합니다.";
      return true;
    } else {
      userPwEqualInfo.innerHTML = "비밀번호와 일치하지 않습니다.";
      return false;
    }
  } else if (state === "focus") {
    userPwEqualInfo.innerHTML = "&nbsp;";
    return false;
  }
}
function userNameCheck(state) {
  const userName = document.querySelector("#userName");
  const userNameInfo = document.querySelector("#userNameInfo");
  let nameExp = /^[가-힣]{2,4}$/;
  if (state === "blur") {
    if (userName.value === "") {
      userNameInfo.innerHTML = `필수입력항목`;
      return false;
    } else {
      if (!userName.value.match(nameExp)) {
        userNameInfo.innerHTML = `한글2~4문자입력바람`;
        return false;
      } else {
        userNameInfo.innerHTML = `ok`;
        return true;
      }
    }
  } else if (state === "focus") {
    userNameInfo.innerHTML = `&nbsp;`;
  }
}
function userEmailCheck(state) {
  const userEmail = document.querySelector("#userEmail");
  const userEmailInfo = document.querySelector("#userEmailInfo");
  let emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i;
  if (state === "blur") {
    if (!userEmail.value.match(emailExp)) {
      userEmailInfo.innerHTML = `이메일 형식에 맞게 입력하세요.`;
      return false;
    } else if (userEmail.value === "") {
      userEmailInfo.innerHTML = `필수입력항목`;
      return false;
    } else {
      userEmailInfo.innerHTML = `ok`;
      return true;
    }
  } else if (state === "focus") {
    userEmailInfo.innerHTML = `&nbsp;`;
  }
}
function allCheck(event) {
  const idCheck = document.querySelector("#userId");
  const userPw = document.querySelector("#userPw");
  const userName = document.querySelector("#userName");
  const userEmail = document.querySelector("#userEmail");
  const userPost = document.querySelector("#userAddressNumber");
  const userAddress = document.querySelector("#userAddress");
  const userAddressDetailed = document.querySelector("#userAddressDetailed");
  const userAddressExtra = document.querySelector("#userAddressExtra");
  const userPhone = document.querySelector("#userPhone");
  const userPhone2 = document.querySelector("#userPhone2");
  const userPhone3= document.querySelector("#userPhone3");
  let c = 0;
  if(userPost.value!==""&&userAddress.value!==""&&userAddressDetailed.value!==""&&userAddressExtra.value!==""&&userPhone.value!==""&&userPhone2.value!==""&&userPhone3.value!==""){
    c = 1;
  }
  if (
    userIdCheck("blur") &&
    userPwCheck("blur") &&
    userPwEqualCheck("blur") &&
    userNameCheck("blur") &&
    userEmailCheck("blur")&&c===1
  ) {
    userI[userI.length]=idCheck.value;
    userP[userI.length]=userPw.value;
    userN[userI.length]=userName.value;
    alert(
      `가입 완료!! \n아이디: ${userI} ${idCheck.value} \n비밀번호: ${userPw.value} \n성명: ${userName.value}\nEmail: ${userEmail.value} `
    );
    event.preventDefault();
    window.close();
    return true;
  } else {
    alert("가입 양식을 완성하세요.");
    event.preventDefault();
  }
}
function sample6_execDaumPostcode() { 
  new daum.Postcode({ 
    oncomplete: function(data) { 
      let addr = ''; 
      let extraAddr = ''; 
      if (data.userSelectedType === 'R') { 
        addr = data.roadAddress; 
      } else {
        addr = data.jibunAddress; 
      } 
      if(data.userSelectedType === 'R'){ 
        if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){ 
          extraAddr += data.bname; 
        }
         if(data.buildingName !== '' && data.apartment === 'Y'){ 
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName); 
        }  if(extraAddr !== ''){ 
          extraAddr = ' (' + extraAddr + ')'; 
        }  
        document.getElementById("userAddressExtra").value = extraAddr;
       } else { 
        document.getElementById("userAddressExtra").value = ''; 
      }  
      document.getElementById('userAddressNumber').value = data.zonecode; 
      document.getElementById("userAddress").value = addr;
      document.getElementById("userAddressDetailed").focus(); 
    } 
  }).open(); 
}
//로그인 함수
function userId2Check(state) {
  const userId2 = document.querySelector("#userId2");
  const loginInfo = document.querySelector("#loginInfo");
  if (state === "blur") {
    if (userId2.value === "") {
      loginInfo.innerHTML = `&nbsp`;
      return false;
    } else {
      loginInfo.innerHTML = "&nbsp;";
      return true;
    }
  } else if (state === "focus") {
    loginInfo.innerHTML = "아이디 혹은 이메일을 입력하세요";
    return false;
  }
}
function userPw2Check(state) {
  const userPw2 = document.querySelector("#userPw2");
  const loginInfo = document.querySelector("#loginInfo");
  if (state === "blur") {
    if (userPw2.value === "") {
      loginInfo.innerHTML = `필수 입력 항목입니다.`;
      return false;
    } else {
      loginInfo.innerHTML = "&nbsp;";
      return true;
    }
  } else if (state === "focus") {
    loginInfo.innerHTML = "비밀번호를 입력하세요.";
    return false;
  }
}
function loginCheck(event) {
  const id2Check = document.querySelector("#userId2");
  const userPw2 = document.querySelector("#userPw2");
  for(let i=0; i<userI.length; i++){
    if(id2Check.value===userI[i] && userPw2.value=== userP[i]){
      b = 1;
    }
  }
  if (userId2Check("blur") && userPw2Check("blur")) {
    if(b === 1){
      alert(`로그인 성공!! \n아이디: ${id2Check.value} \n비밀번호: ${userPw2.value}`);
      event.preventDefault();
      window.close();
      return true;
    } else{
      alert(`회원 정보가 일치하지 않습니다.`)
    }
  } else {
    alert("로그인 양식을 완성하세요.");
    event.preventDefault();
  }
}
function idSearch() {
  let idSearch = prompt(`이름을 입력하세요.`);
  let d = null;
  for(let i=0; i<userN.length; i++){
    if(idSearch===userN[i]){
      b = 1;
      d = userI[i];
    }
  }
  if (idSearch !== null) {
    if (b === 1) {
      alert(`${idSearch}님의 아이디는 ${d} 입니다.`);
    } else {
      alert("회원 정보가 조회되지 않습니다.");
    }
  } else {
    alert("이름을 입력하지 않았습니다.");
  }
}
function pwSearch() {
  let idSearch = prompt(`이름을 입력하세요.`);
  let pwSearch = prompt(`아이디를 입력하세요.`);
  let d = null;
  for(let i=0; i<userN.length; i++){
    if(idSearch===userN[i]&&pwSearch===userI[i]){
      b = 1;
      d = userP[i];
    }
  }
  if (idSearch !== null && pwSearch !== null) {
      if (b === 1) {
        alert(`${idSearch}님의 비밀번호는 ${d} 입니다.`);
      } else {
        alert("회원 정보가 조회되지 않습니다.");
      }
  } else {
    alert("회원 정보을 입력하지 않았습니다.");
  }
}