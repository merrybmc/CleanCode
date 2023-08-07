{
  // 파라미터가 무조건 많은게 나쁜건 아니다.
  // 대신 파라미터의 맥락과 흐름을 파악할 수 있는 파라미터를 써야 한다.

  // ✨ good case
  function toggleDisplay(isToggle: boolean): void {}

  function sum(sum1: string, sum2: string): void {}

  function genRandomNumber(min: number, max: number): void {}

  function timer(start: string, stop: string, end: string): void {}

  function genSquare(top: string, right: string, bottom: string, left: string): void {}

  interface CreateCar {
    name: string;
    brand: string;
    color: string;
    type: string;
  }

  function createCar({ name, brand, color, type }: CreateCar): CreateCar {
    return { name, brand, color, type };
  }

  const Car = {
    name: 'car',
    brand: 'kia',
    color: 'red',
    type: 'car',
  };

  console.log(createCar(Car));
}
