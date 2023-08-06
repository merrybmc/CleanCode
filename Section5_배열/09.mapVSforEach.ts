{
  const prices: string[] = ['1000', '2000', '3000'];

  // forEach 반환이 없음
  const newPriceForEach = prices.forEach((price: string) => price + '원');
  console.log(newPriceForEach); // undefined

  // map 반환이 있음, 배열을 새로 생성
  const newPriceMap: string[] = prices.map((price: string) => price + '원');
  console.log(newPriceMap); // ['1000원','2000원','3000원']
}
