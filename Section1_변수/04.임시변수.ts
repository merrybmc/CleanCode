{
  // ✨ 최대한 임시변수 사용을 자제하자
  // CRUD가 엄청 필요한 경우 아니면 사용 최소화 또는 새로운 함수 사용

  interface Result {
    title: string;
    text: string;
    value: string;
  }

  // ✨ 임시변수 제거하기
  function getObject() {
    // 임시변수
    // 특정 스코프 안에서 전역변수처럼 사용되는 변수

    // bad case
    const result: Result = { title: '', text: '', value: '' };
    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');

    // good case
    // const result:Result = {
    //     result.title = document.querySelector('.title');
    //     result.text = document.querySelector('.text');
    //     result.value = document.querySelector('.value');
    // }

    // very good case
    // return{
    //     title = document.querySelector('.title');
    //     text = document.querySelector('.text');
    //     value = document.querySelector('.value');
    // }
  }

  interface DateTime {
    month: string;
    day: string;
    hour: string;
  }

  function getDateTime(targetDate): DateTime {
    const month = targetDate.getMonth();
    const day = targetDate.getDate();
    const hour = targetDate.Hours();

    return {
      month: month >= 10 ? month : '0' + month,
      day: day >= 10 ? day : '0' + day,
      hour: hour >= 10 ? hour : '0' + hour,
    };
  }

  function getDateTime(): DateTime {
    const currentDateTime = getDateTime(new Date());

    return {
      month: currentDateTime.month + '달 전',
      day: currentDateTime.day + '일 전',
      hour: currentDateTime.hour + '시간 전',
    };
  }

  function genRandomNumber(min: number, max: number): number {
    // 단 하나의 역할만 할 수 있는 함수를 만들어주는게 굉장히 좋다.
    const randomNumber = Math.floor(Math.random() * (max + 1 + min));

    return randomNumber;
  }

  // 💩 혼란하고 명령형에 가까운 코드
  // 최종 return 되는 값을 예측하기 어렵다.
  // 임시변수 사용 자제
  function getSomeValue(params: string | undefined): string {
    let tempVal: string = '';

    for (let index = 0; index < array.length; index++) {
      tempVal = array[index];
      tempVal += array[index];
      tempVal += array[index];
      tempVal += array[index];
    }

    if (temp === '') {
      tempVal = '';
    } else if (tempVal === '') {
      tempVal += '';
    }

    return tempVal;
  }

  // 정리 : 임시변수 사용하면 안되는 이유
  // 1. 명령형으로 가득한 로직
  // 2. 디버깅이 힘듬
  // 3. 함수는 하나의 역할만 하게 해야하는데 함수에 추가적인 코드 작성의 유혹

  // 해결책 : 함수를 나누기
  // 바로 바로 return 하기
  // 고차함수 사용하기(map, filter, reduce)
  // 선언형 코드로 변환
}
