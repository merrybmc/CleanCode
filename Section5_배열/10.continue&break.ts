{
  // continue, break 특정 문의 흐름을 제어
  const orders: string[] = ['first', 'second', 'third'];

  orders.forEach(function (order) {
    if (order === ' second') {
      continue; // 불가능
      break; // 불가능
      // return 사용
    }
  });
  console.log(order);

  for (let index = 0; index < orders.length; index++) {
    const order: string = orders[index];

    if (order === 'second') {
      continue; // 다음으로 넘어가기
      break; // 종료 시키기
    }

    console.log(order);
  }
}
