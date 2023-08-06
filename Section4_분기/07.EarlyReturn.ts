{
  // 의존성 제거

  // case 1
  function loginService(isLogin: boolean, user: { nickName: string }) {
    // 💩 bad case
    if (!isLogin) {
      // 로그인이 안되어 있다면
      if (!checkToken()) {
        // 토큰이 있는지 체크
        if (!user.nickName) {
          // 유저의 닉네임이 존재하지 않는다면
          return registerUser(user); // 회원가입으로 리다이렉트
        } else {
          refreshToken(); // 존재한다면 리프레쉬 토큰 제공

          return '로그인 성공'; // 로그인
        }
      }
    } else {
      throw new Error('No Token'); // 토큰이 없으면 에러
    }

    // ✨ good case Early Return
    if (isLogin) return; // 로그인이 되어있다면 함수 종료

    if (!checkToken()) {
      // 토큰이 없다면 에러
      throw new Error('No Token');
    }

    if (!user.nickName) {
      // 유저의 닉네임이 존재하지 않으면
      return registerUser(user); // 회원가입으로 리다리엑트
    }

    refreshToken(); // 존재한다면 리프레쉬토큰 제공
    return '로그인 성공';
  }

  // case 2
  function today(condition: string, weather: string, isJob: string) {
    // 💩 bad case
    if (condition === 'GOOD') {
      study();
      game();
      watchYoutube();

      if (weater === 'GOOD') {
        exercise();
        washing();
      }

      if (isJob === 'GOOD') {
        overWork();
        earlySlepp();
      }
    }

    // ✨ good case
    if (condition !== 'GOOD') return;

    study();
    game();
    watchYoutube();

    if (weather === 'GOOD') {
      exercise();
      washing();
    }

    if (isJob === 'GOOD') {
      overWork();
      earlySlepp();
    }
  }
}
