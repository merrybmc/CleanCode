{
  // 호이스팅
  // 런타임 시기에 선언과 할당이 분리되는 것
  // 런타임시 선언이 최상단으로 끌어올려진다.
  // 문제는 코드를 작성할 때 예측하지 못한 실행 결과가 나오는 것
  // var 사용을 지양, const 사용을 권장 (특히 함수)
  // 함수도 끌어올려지기 때문에 조심해야한다.

  type Global = number | undefined;

  var global: Global = 0;

  function outer() {
    // 선언과 할당이 분리된 상황
    // 메모리 공간을 선언하기 전에 미리 할당
    // var global; 과 같음
    console.log(global); // undefined
    var global: Global = 5;

    // 함수 스코프니까 함수 내부의 global을 사용
    function inner() {
      var global: Global = 10;
      console.log(global); // 10
    }

    inner();

    // 1으로 재할당
    global = 1;

    console.log(global); // 1
  }

  outer();

  function duplicatedVar(): void {
    var a: Global;
    console.log(a); // undefined

    var a: Global = 100;
    console.log(a); // 100
  }

  duplicatedVar();

  // 함수를 만들 땐 const를 사용하고 할당하는 것을 추천

  var sum: () => number;

  // 함수도 호이스팅이 된다.
  // console.log(sum()); // error
  // 매우 혼란함

  sum = function () {
    return 1 + 2;
  };

  console.log(sum()); // 3

  sum = function () {
    return 1 + 2 + 3;
  };

  sum = function () {
    return 1 + 2 + 3 + 5;
  };

  console.log(sum()); // 11
}
