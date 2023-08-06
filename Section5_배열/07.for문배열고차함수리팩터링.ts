{
  const price: string[] = ['2000', '1000', '3000', '5000', '4000'];

  // ✨ good case 2
  const suffixWon = (price: string) => price + '원';

  // plus requirement
  const isOverOneThousand = (price: string) => Number(price) > 1000;

  function getWonPrice(priceList: string[]): string[] {
    // 💩 bad case
    let temp: string[] = [];

    for (let i = 0; i < priceList.length; i++) {
      temp.push(priceList[i] + '원');
    }

    // return temp;

    // ✨ good case 1
    // return priceList.map((price) => price + '원');

    // ✨ good case 2
    return priceList.map(suffixWon);

    // ✨ plus requirement
    const isOverList = priceList.filter(isOverOneThousand);
    console.log('overList', isOverList);
  }

  const result = getWonPrice(price);

  console.log(result);
}
