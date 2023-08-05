{
  // null의 혼란함
  // 값이 없음을 명시
  console.log(null); // null
  console.log(!null); // true null의 반대는 true다?
  console.log(!!null); // false null은 그럼 false다?
  console.log(null === false); // false null과 false가 같지 않다?
  //   console.log(null + 123); // 123

  // undefined
  // 선언했지만 값은 할당하지 않음
  let varb: undefined;
  console.log(varb); // undefined
  console.log(typeof varb); // undefined
  //   console.log(undefined + 10); // NaN
  console.log(!undefined); // true

  // 혼란한 undefined과 null
  console.log(undefined == null); // true
  console.log(undefined === null); // false
  console.log(!undefined === null); // false
  console.log(!undefined === !null); // true
}
