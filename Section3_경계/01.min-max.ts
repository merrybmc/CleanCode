{
  /** min-max
   * 1. 최소값과 최대값을 다룬다.
   * 2. 최소값과 최대값 포함 여부를 결정해야 한다. (이상-초과 / 이하-미만)
   * 3. ✨ 네이밍에 최소값과 최대값 포함 여부를 네이밍 한다.
   */
  const MIN_NUMBER: number = 1;
  const MAX_NUMBER: number = 45;

  function genRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  console.log(genRandomNumber(MIN_NUMBER, MAX_NUMBER));

  const MIN_IN_LIMIT: number = 1;
  const MAX_IN_LIMIT: number = 20;

  function isAdult(Age: number): boolean {
    // 최소, 최대값이 포함되는지 안되는지 여부 필요
    // 이상, 초과 vs 이하, 미만
    if (age >= 20) {
      return;
    }
  }
}
