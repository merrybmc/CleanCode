{
  // eqeq 줄이기
  // eqeq = 동등 연산자
  // 가능한한 명시적인 형변환을 하기
  // 명시적은 변환을 하여 예측하기 쉬운 타입 변환을 하기

  // type casting
  // '==' 은 위험 (느슨한 검사)
  // 암묵적인 형 변환이 일어난다.
  // 원한다면 어떻게든 형변환을 하여 검사 수행
  console.log('1' == 1); // true (?)
  console.log(1 == true); // true (?)

  // '===' 엄격한 동등 연산자 필수 사용
  console.log('1' === 1); // false
  console.log(1 === true); // false

  // 형변환 주의하기 (암묵적 형변환)
  11 + '문자와 결합'; // string
  !!'문자열'; //true
  !!''; // false
  Boolean('문자열'); // true
  Boolean(''); // false
  Number('11'); // 11
  parseInt('9.9999', 10); // 9 / 2번째 파라미터는 진수 변환
}
