{
  /**
   * 명시적인 연산자 사용 지양하기
   * 연산자 우선순위를 항상 생각해야한다. ex. (2+(2*2))
   * 예측 가능하고 디버깅하기 쉬운 코드 구현
   */

  function increment(): void {
    // 💩 bad case
    number++;

    // ✨ good case 읽기 쉽고 이해가 빠르다.
    number = number + 1;
  }
}
