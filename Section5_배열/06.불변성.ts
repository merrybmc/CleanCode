{
  /**
   * immutable 불변성
   * 불변성을 지키는 법
   * 1. 스프레드(...)로 배열을 복사한다.
   * 2. 새로운 배열을 반환하는 메서드들을 활용한다. (콜백함수 map, filter, slice 등)
   */

  const originArray: (number | string)[] = ['123', '456', '789'];

  const newArray: (number | string)[] = originArray;
  console.log(newArray);

  originArray.push(10);
  originArray.push(11);
  originArray.push(12);
  originArray.unshift(0);
  console.log('origin', originArray);
  console.log('origin', newArray); // 💩 orginArray === newArray

  // 불변성을 지키는 방법

  // case 1
  const originArray2: (number | string)[] = ['123', '456', '789'];
  const newArray2: (number | string)[] = [...originArray2];

  originArray2.push(10);
  originArray2.push(11);
  originArray2.push(12);
  originArray2.unshift(0);
  console.log('new', originArray2);
  console.log('new', newArray2); // originArray !== newArray

  const originArray3: (number | string)[] = ['123', '456', '789'];
  const newArray3: (number | string)[] = originArray3.map((data) => data);

  originArray3.push(10);
  originArray3.push(11);
  originArray3.push(12);
  originArray3.unshift(0);
  console.log('new2', originArray3);
  console.log('new2', newArray3); // originArray !== newArray
}
