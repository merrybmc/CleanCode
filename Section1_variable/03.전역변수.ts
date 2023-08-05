/**  ✨ 전역 공간 사용 최소화
 * 전역 공간은 window와 global로 나뉜다.
 * window = 브라우저 환경에서 돌아가는 경우 Window가 최상위
 * global = nodeJS 환경에서 global이 최상위
 */
// global 환경에서 실행 가능
//   console.log(global);
// web 환경에서 실행 가능
//   console.log(window);

// window에 전역으로 만든 globalVar가 생성됨 / console.log로 확인 가능
// 코드 파일이 많을 때 다른 파일에서도 사용 가능
// 코드의 구역이 나뉘는게 아님
var globalVar: string = 'global';
console.log(globalVar);

// bad case
// var setTimeout: string = 'setTimeout';

// setTimeout 함수 사용 불가능
// setTimeout(() => {
//   console.log('1초');
// }, 1000);

const array: number[] = [10, 20, 30];

// for 문의 var를 전역 공간에서 사용 할 수도 있으며 let과 const 사용을 권장
for (var index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// 알아두면 좋은 개념
// IIFE
// Module
// Closure
// let, const

// 전역 공간을 더럽히지 않기
// 1. 어디서나 접근 가능
// 2. 스코프 분리가 위험
// 3. 애초에 전역변수를 생성하지 않기
// 4. 지역변수를 만든다
// 5. 전역변수를 통해 window.global을 조작하지 않는다.
// 6. let과 const를 사용하여 많은 부분을 해결 가능
