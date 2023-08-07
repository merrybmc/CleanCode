{
  let num1 = 10;
  let num2 = 20;

  // bad case
  function impureSum1(): number {
    return num1 + num2;
  }

  function impureSum2(newNum: number): number {
    return num1 + newNum;
  }

  impureSum1(); // 30

  num = 30;

  impureSum1(); // 50

  impureSum2(30); // 40

  num1 = 100;

  impureSum2(30); // 130

  // ✨ 예측 가능한 함수를 만들자
  function pureSum(num1: number, num2: number): number {
    return num1 + num2;
  }

  pureSum(10, 20);
  pureSum(130, 100);

  function changeValue(num: number): number {
    num++;

    return num;
  }

  changeValue(1); // 2
  changeValue(3); // 4
  changeValue(1); // 2

  const obj: { one: number } = { one: 1 };

  function changeObj(targetObj): number {
    targetObj.one = 100;

    return targetObj;
  }

  console.log(obj);
}
