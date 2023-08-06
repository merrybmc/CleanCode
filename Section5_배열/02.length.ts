{
  const array: number[] = [1, 2, 3];
  console.log(array);

  array.length = 10;
  console.log(array);

  console.log(array.length > 10 && array.map((el) => el));

  array.length = 11;
  console.log(array.length > 10 && array.map((el) => el));
}
