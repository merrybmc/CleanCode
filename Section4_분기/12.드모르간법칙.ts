{
  // 드모르간 법칙
  // true is not true
  // false is not false

  const isValidUser: boolean = true;
  const isValidToken: boolean = true;

  if (isValidToken && isValidUser) {
    console.log('로그인 성공');
  }

  if (isValidToken || isValidUser) {
    console.log('로그인 실패');
  }

  // if (!(A || B))=== if (!A && !B)
}
