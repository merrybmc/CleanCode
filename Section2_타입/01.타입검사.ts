{
  // typeof 피연산자를 평가하여 문자열로 반환
  typeof '문자열'; // string
  typeof true; // boolean
  typeof undefined; // undefined
  typeof 123; // number
  typeof Symbol(); // symbol

  // function도 object과 같이 많은 것을 인용하여 위험
  function myFunction(): void {}
  typeof myFunction; // function

  class MyClass {}
  typeof MyClass; // function

  // REFERENCE Object
  const str = new String();
  typeof str; // object
  typeof null; // object, 언어적인 오류
  typeof []; // object
  typeof {}; // object

  function Person(name: string, age: number) {
    this.name = name;
    this.name = age;
  }

  const person = new Person('byeongMin', 29);
  person instanceof Person; // true

  const p: { name: string; age: number } = {
    name: 'test',
    age: 99,
  };

  p instanceof Person; // false

  const arr: string[] = [];
  const func = function (): void {};
  const date = new Date();

  // instanceof type check
  arr instanceof Array; // true
  func instanceof Function; // true
  date instanceof Date; // true

  arr instanceof Object; // true
  func instanceof Object; // true
  date instanceof Object; // true

  // PRIMITIVE(원시값) VS REFERENCE(자료형)
  // PRIMITIVE - 불변성을 가지고 있다.
  // REFERENCE - Object(Array, function, Date) typeof로 감별해내기 어렵다.
  // JS는 동적으로 변하는 언어 - 타입이 동적으로 변함 - 타입 검사가 어려움
}
