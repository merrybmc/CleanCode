{
  interface ArrayLikeObject {
    0: string;
    1: string;
    length: number;
  }

  //   const arrayLikeObject: ArrayLikeObject = {
  //     0: 'Hello',
  //     1: 'World',
  //     length: 2,
  //   };

  const arrayLikeObject = {
    0: 'Hello',
    1: 'World',
    length: 2,
  };
  console.log(arrayLikeObject);

  const arr: string[] = Array.from(arrayLikeObject);
  console.log(arr); // ['Hello', 'World']

  console.log(Array.isArray(arrayLikeObject)); // false
  console.log(Array.isArray(arr)); // true

  console.log(arrayLikeObject.length); // 2
  console.log(arr.length); // 2

  function generatePriceList(...num: number[]): void {
    console.log(Array.isArray(arguments)); // false
    for (let index = 0; index < arguments.length; index++) {
      const element = arguments[index];
      console.log(element);
    }
  }
  generatePriceList(1, 2, 3, 4, 5, 6);
}
