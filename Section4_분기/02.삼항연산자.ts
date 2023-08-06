{
  // case 1 bad case
  // 조건 ? 참(식) : 거짓(식)
  function example(): string {
    return condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;
  }

  // case 2 bad case
  function example2(): string {
    if (condition1) {
      return value1;
    } else if (condition2) {
      return value2;
    } else if (condition3) {
      return value3;
    } else {
      return value4;
    }
  }

  // case 3 ✨ good case switch문 고려하여 사용
  const temp: boolean[] = [condition1, condition2, condition3];

  switch (temp) {
    case value:
      break;
    default:
      break;
  }

  // case 4
  // 사람이 보는 가독성을 위해 코드를 작성하는걸 고려하기
  const example: string = condition1 ? (a === 0 ? 'zero' : 'positive') : 'negative';

  // case 5
  const welcomeMessage = (isLogin: boolean) => {
    // isLogin이 true일 때 getName을 받기
    // if문 보다 유용하게 사용 가능
    const name = isLogin ? getName() : '이름없음';

    // if case
    if (isLogin) {
      return `안녕하세요 ${getName()}`;
    }

    return `안녕하세요 ${name} 님`;
  };

  // case 6 bad case
  function alertMessage(isAdult: boolean): void {
    // 억지로 삼항연산자 숏코딩 금지
    isAdult ? alert('입장이 불가능합니다.') : alert('입장이 가능합니다.');

    if (isAdult) {
      alert('입장이 불가능합니다.');
    } else {
      alert('입장이 가능합니다.');
    }
  }

  // 그럼 삼항 연산자는 언제 사용?
  // 무언가의 값을 만들거나 변수로 담아낼 때 사용
  // 함수가 값을 반환해내는 경우
  // 좌항, 우항을 따졌을 때 3개의 피연산자가 필요할 때 사용 (조건 ? 참 : 거짓)
  // 조건을 기준으로 거짓 또는 참 만 필요한 경우 삼항연산자 금지
}
