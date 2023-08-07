{
  // case 1
  function add(num1: number) {
    return function sum(num2: number) {
      return num1 + num2;
    };
  }

  const addOne: number = add(1);
  const addTwo: number = add(2);
  const addThr: number = add(1)(2);

  // case 2
  function add(num1) {
    return function (num2) {
      return function (calculateFn) {
        return calculateFn(num1, num2);
      };
    };
  }

  function sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  function multiple(num1: number, num2: number): number {
    return num1 * num2;
  }

  const sumAdd: number = addOne(sum);
  const sumMultiple: number = addOne(multiple);

  function log(value) {
    return function (fn) {
      fn(value);
    };
  }

  logFoo((v) => console.log(v));
  logFoo((v) => console.info(v));
  logFoo((v) => console.error(v));
  logFoo((v) => console.warn(v));

  const arr = [1, 2, 3, 'A', 'B', 'C'];

  const isNumber = (value: number) => typeof value === 'number';
  const isString = (Value: string) => typeof value === 'string';

  arr.filter(isNumber);

  function isTypeOf(type, value) {
    return typeof value === type;
  }

  const isNumber = (value: string) => isTypeOf('number', value);
  const isString = (value: string) => isTypeOf('string', value);

  function isTypeOf(type) {
    return function (value) {
      return typeof value === type;
    };
  }

  const isNumber = isTypeOf('number');
  const isString = isTypeOf('string');
}
