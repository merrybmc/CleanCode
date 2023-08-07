{
  // 💩 bad case
  setTimeout(() => {
    scrollToTop();
  }, 3 * 60 * 1000);

  // ✨ good case
  // 스네이크 케이스 - 중요한 값임을 강조
  const COMMON_DELAY_MS: number = 3 * 60 * 1000;

  setTimeout(() => {
    scrollToTop();
  }, COMMON_DELAY_MS);

  // 💩 bad case
  const PRICE: { readonly MIN: number; MAX: number } = {
    MIN: 1000000, // 1백만
    MAX: 100000000, // 1억
  };

  // ✨ good case Numeric Operator
  const PRICE: { readonly MIN: number; MAX: number } = {
    MIN: 1_000_000, // 1백만
    MAX: 100_000_000, // 1억
  };

  const CAR_NAME_LENGTH = Object.freeze({
    MIN: 1,
    MAX: 5,
  });

  function isValidName(name) {
    // 💩 bad case
    return carName.length >= 1 && carName.length <= 5;

    // ✨ good case
    return carName.length >= CAR_NAME_LENGTH.MIN && carName.length <= CAR_NAME_LENGTH.MAX;
  }

  const notValidName = (value) => {
    if (!isArrayItemLengthRange(names, CAR_NAME_LENGTH.MIN, CAR_NAME_LENGTH.MAX)) {
      alert('');
    }
  };
}
