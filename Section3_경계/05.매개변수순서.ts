{
  /**
   * 매개변수의 순서가 경계다.
   * 호출하는 함수의 네이밍 파라미터 순서의 연관성을 고려
   * 가능하면 함수의 인자가 2개를 넘지 않도록 한다.
   * 만약 파라미터가 너무 많을 경우
   * - 1. 파라미터를 객체로 받는다.
   * - 2. 파라미터를 rest parameter로 받는다.
   * - 3. 콜백함수를 통해 파라미터를 객체에 담아서 넘긴다.
   */

  function someFunc(someArg, someArg) {}

  //   genRandomNumber(1, 50); // min/max
  //   getDates('2023-01-01', '2021-01-31'); // begin/end
  //   genShuffleArray(1, 5); // first/last
}
