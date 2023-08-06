{
  const price: string[] = ['2000', '1000', '3000', '5000', '4000'];

  const suffixWon = (price: string) => price + '원';
  const isOverOneThousand = (price: string) => Number(price) > 1000;
  const ascendingList = (a: string, b: string) => a - b;

  function getWonPrice(priceList: string[]): string[] {
    // 💩 bad case
    const isOverList: string[] = priceList.filter(isOverOneThousand);
    const sortList: string[] = isOverList.sort(ascendingList);

    // return sortList.map(suffixWon);

    // ✨ good case 메서드 체이닝
    return priceList
      .filter(isOverOneThousand) // filter로 원하는 조건에 맞는 배열 리스트 생성
      .sort(ascendingList) // sort 정렬
      .map(suffixWon); // map 배열 요소 정리
  }

  const result: string[] = getWonPrice(price);

  console.log(result);
}
