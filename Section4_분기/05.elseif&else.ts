{
  // else if & else 피하기
  const x = 1;

  // 💩 bad case
  if (x >= 0) {
    console.log('x는 0과 같거나 크다.'); // ok
  } else if (x > 0) {
    console.log('x는 0보다 크다.');
  } else {
    console.log('Else');
  }

  // ✨ good case
  if (x >= 0) console.log('x는 0과 같거나 크다');
  if (x > 0) console.log('x는 0보다 크다');

  // 불가피한 경우 switch문으로 변경하여 사용
}
