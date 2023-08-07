{
  function sumTotal(initValue: number, ...sum: number[]): number {
    return sum.reduce((acc, curr) => acc + curr, initValue);
  }

  console.log(sumTotal(100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}
