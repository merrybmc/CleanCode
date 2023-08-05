{
  // ✨ var는 최대한 사용을 지양하고 const를 사용하자

  var global: string = '전역변수';
  let global2: string = '전역변수';

  if (global === '전역') {
    var global = '지역변수';
    let global2 = '지역변수';
    // 전역 공간까지 영향을 준다.
    // var는 블록 단위 스코프가 아닌 함수 단위 스코프이기 때문에 위험하다.
    console.log(global);

    // let은 블록 단위 스코프라 지역 안에서 합당하는 값을 출력한다.
    console.log(global2);
  }

  // 지역변수 출력
  console.log(global);

  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: 'cho',
    age: 29,
  };
  console.log(person);

  // const는 재할당이 금지되어있다.
  //   person = { name: 'jang', age: 30 };
  //   console.log(person);

  // const는 객체 내부의 값은 재할당이 가능하다.
  person.name = 'lee';
  person.age = 31;
  console.log(person);

  interface Person2 {
    name: string;
    age: number;
  }

  const person2: Person2[] = [
    {
      name: 'cho',
      age: 29,
    },
  ];
  console.log(person2);

  // const는 배열 객체 내부의 값도 재할당이 가능하다.
  person2.push({ name: 'jang', age: 30 });
  console.log(person2);

  // const는 본연의 객체, 배열 같은 래퍼런스 객체들을 조작할 때는 문제가 없다.
}
