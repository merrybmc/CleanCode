{
  function register(): void {
    const isConfirm: boolean = confirm('회원가입 성공');
    if (isConfirm) {
      redirectUserInfoPage();
    }
  }

  function login(): void {
    const isConfirm: boolean = alert('로그인 성공');

    if (isConfirm) {
      redirectIndexPage();
    }
  }

    someElement.addEventListener('click', function (e) {
      console.log(someElement + '이 클릭이 되었습니다.');
    });

    DOM.prototype.addEventListener = Function (
      eventType,
      cbFunc
    ){
      if(eventType==='click'){
          const clickEventObject = {
              target:{}
          };
          cbFunc(clickEventObject);
      }
    }

  function confirmModal(message, cbFunc) {
    const isConfirm = confirm(message);

    if (isConfirm && cbFunc) {
      cbFunc();
    }
  }
}
