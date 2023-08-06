{
  interface User {
    name?: string;
    age?: number;
  }

  // case 1
  function getActiveUserName(user: User): string {
    // 💩 bad case
    if (user.name) {
      return user.name;
    } else {
      return '이름없음';
    }

    // ✨ good case 단축속성 사용
    return user.name || '이름없음';
  }

  // case 2
  function getHelloCustomer(user: User) {
    // 💩 bad case
    if (user.age < 20) {
      return user;
    } else {
      return '안녕하세요';
    }

    // ✨ good case 삼항연산자 단축 가능
    return user.age < 20 ? user : '안녕하세요';
    // or else 없이도 가능
    if (user.age < 20) {
      return user;
    }
    return '안녕하세요';
  }
}
