{
  /**
   * let과 const는 es6에 나왔고 이전에는 어쩔 수 없이 var를 썼다.
   * var는 함수, 스코프를 가지고 있다.
   * let과 const는 블록 단위의 스코프와 TDZ라는 Dead Zone을 갖고 있다.
   */

  // var는 재할당과 재선언이 가능하여 위험하다.
  var name: string = '이름';
  console.log(name);
  var name: string = '이름2';
  console.log(name);

  // let은 재선언이 불가능하다.
  let name2: string = '이름';
  console.log(name2);
  let name2: string = '이름2';
  console.log(name2);

  // const는 재할당과 재선언이 불가능하다.
  const name3: string = '이름3';
  console.log(name3);
  name3 = '이름4';
  console.log(name3);
}
