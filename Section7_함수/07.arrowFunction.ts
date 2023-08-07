{
  const user = {
    name: 'cho',
    // 화살표 함수 사용의 문제점 this 사용 에러

    // 💩 error
    getName: () => {
      return this.name;
    },

    // ✨
    getName() {
      return this.name;
    },
  };

  user.getName();

  // 💩 error
  //   const Person = (name, city) => {
  //     this.name = name;
  //     this.city = city;
  //   };

  // ✨
  function Person(name: string, city: string) {
    this.name = name;
    this.city = city;
  }

  const person = new Person('cho', 'korea');
  console.log(person);
}
