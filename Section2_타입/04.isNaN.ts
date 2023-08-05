{
  // 숫자를 다루는데 어려운 이유
  // 사람 = 10진수 숫자
  // 컴퓨터 = 2진수 숫자 (부동소수점)

  console.log(Number.MAX_SAFE_INTEGER); // JS에서 표현할 수 있는 정수의 범위
  console.log(Number.isInteger(10)); // true 정수인지 판별

  // isNaN (is Not a Number) // 숫자가 아니다
  // isNaN은 문제가 많으니 가능한한 Number.isNaN으로 검사하기
  // isNaN은 느슨한 검사, Number.isNaN은 엄격한 검사
  // es6부터 생긴 더 엄격한 버전이다.
  console.log(Number.isNaN(123 + '테스트')); // false
}
