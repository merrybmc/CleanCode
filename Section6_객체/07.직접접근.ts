{
  const model = {
    isLogin: false,
    isValidToken: false,
  };

  // 💩 직접 접근 지양하기
  function login() {
    model.isLogin = true;
    model.isValidToken = true;
  }

  function logout() {
    model.isLogin = false;
    model.isValidToken = false;
  }

  // 모델에 접근하는 권한을 확실하게 하기
  function setLogin(bool) {
    model.isLogin = bool;
  }

  function setValidToken(bool) {
    model.isValidToken = bool;
  }

  someElement.addEventListner('click', login);
}
