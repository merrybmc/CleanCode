{
  // 단축평가 short-circuit evaluation

  // && AND 앞이 true면 뒤로 도달 가능 아닐 시 앞의 값 출력
  true && true && '도달 O'; // 도달 O
  true && false && '도달 X'; // false

  // || 앞이 false면 뒤로 도달 가능 아닐 시 앞의 값 출력
  false || false || '도달 O'; // 도달 O
  true || true || '도달 X'; // 도달 X

  // case 1
  function fetchData() {
    // if (state.data) {
    //   return state.data;
    // } else {
    //   return 'Fetching...';
    // }

    // 💩 bad case
    return state.data ? state.data : 'Fetching...';

    // ✨ good case
    // 앞의 값이 false면 뒤의 값 출력 아닐 시 앞의 값 출력
    return state.data || 'Fetching';
  }

  // case 2
  function favortieDog(someDog:string):string {
    let favoriteDog:string;

    // 💩 bad case
    if (someDog) {
      favoriteDog = someDog;
    } else {
      favoriteDog = '냐옹';
    }

    // ✨ good case
    return (someDog || '냐옹') + '입니다';
  }

  // case 3
  const getActiveUserName(user:string,isLogin:boolean):string {
    // 💩 bad case
    if(isLogin && user){
        if(user.name){
            return user.name
        } else{
            return '이름없음'
        }
    }

    //  isLogin, user 둘 다 참이어야만 로직이 실행
    // ✨ good case
    if(isLogin && user) {
       return user.name || '이름없음'
    }
  }
}
