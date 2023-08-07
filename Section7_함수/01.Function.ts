{
  /**
   * 함수
   * 1급 객체
   * - 변수나 데이터에 담길 수 있다.
   * - 매개변수로 전달 가능하다. (콜백 함수)
   * - 함수가 함수를 반환한다. (고차 함수)
   */

  // 함수
  function func(): void {
    return this;
  }

  // 객체 메서드
  // 객체에 의존성이 있는 함수, 객체지향 OOP 행동을 의미
  const obj = {
    method(): void {
      return this;
    },
  };

  // 생성자 함수
  // 인스턴스를 생성하는 역할 => Class
  function Func(): void {
    return this;
  }

  func();

  obj.method();

  const funct = new Func();
}
