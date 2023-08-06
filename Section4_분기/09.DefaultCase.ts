{
  // case 1
  function sum(x: number, y: number) {
    // Edge case
    x = x || 1; // x가 빈 값일 경우 1로 기본값 설정
    y = y || 1; // y가 빈 값일 경우 1로 기본값 설정

    return x + y;
  }

  sum(100, 200);

  // case 2
  function registerDay(userInputDay) {
    switch (userInputDay) {
      case '월요일':
      case '화요일':
      case '수요일':
      case '목요일':
      case '금요일':
      case '토요일':
      case '일요일':
      default:
        // ✨ 예외처리
        throw new Error('입력값이 유효하지 않습니다.');
    }
  }
  registerDay('워얼요일');
}
