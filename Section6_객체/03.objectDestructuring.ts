{
  function Person(name: string, age: number, location: string) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  const bmc = new Person('bmc', 29, 'korea');

  interface Persons {
    name: string;
    age: number;
    location: string;
  }

  function Person2({ name, age, location }: Persons) {
    name;
    age;
    location;
  }

  const bmc2 = new Person2({ name: 'bmc', age: 29, location: 'korea' });
  console.log(bmc2);

  function Person3(name, { age, location }: Persons) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  const orders: string[] = ['First', 'Second', 'Third'];

  const st: string = orders[0];
  const rd: string = orders[2];

  // 구조분해할당 case 1
  const [first, , third] = orders;

  // 구조분해할당 case 2
  const { 0: st2, 2: rd2 }: { 0: string; 2: string } = orders;
}
