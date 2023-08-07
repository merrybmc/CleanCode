{
  // parameter = (Formal Parameter) // 형식을 갖춘 매개 변수

  // 함수 들어와서 사용되는 변수 부분을 parameter
  function example(parameter: string): void {
    console.log(parameter);
  }

  const argument: string = 'foo';

  // Argument = (Actual Parameter) // 실제로 사용되는 인자

  // 함수에 들어가는 변수 부분을 argument
  example(argument);
}
