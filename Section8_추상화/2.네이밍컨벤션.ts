{
  // 네이밍 컨벤션
  // 저장소, 폴더, 파일, 함수, 변수, 상수, 깃 브랜치, 커밋 등
  // 프로그래밍 전반적으로 이름의 네이밍을 위한 규칙이나 관습을 만드는 것
  // 대표적인 케이스
  // 1. camelCase
  // 2. PascalCase
  // 3. SNAKE_CASE
  // 4. kebab-case
  //
  // 접두사(prefix), 접미사(suffix)
  // data-id
  // data-name
  // data-value
  //
  // AppContainer
  // BoxContainer
  //
  // ListComponent
  // ItemComponent
  //
  // ICar
  // TCar
  //
  // AType
  // BType
  //
  // 함수는 동사로 시작한다. - 규칙을 지킨다.
  // _ - private
  // # - private

  // for문 중첩 컨벤션 i, j, k
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {}
    }
  }

  // TypeScript Generic 컨벤션
  function func<T, U, V>(name: T, value: U);

  // 자료형 표현
  const inputNumber: number = 10;
  const someArr: [] = [];
  const strToNum: string = 'some code';

  // 이벤트 표현
  // function on-* // 실행할 때, 자주 쓰임
  // function handle-* // 사용자의 이벤트를 핸들링할 때, 자주 쓰임
  // function *-Action // 자주 쓰임
  // function *-Event // 자주 쓰임
  // function take-*
  // function *-Query
  // function *-All

  // CRUD
  // function generator-*
  // function gen-*
  // function make-*
  // function get
  // function set
  // function create
  // function delete
  // function remove

  // Flag // 특정 시점, if문에 조건문으로 넣어서 구분하기 위해 쓰이는 것
  // isSubmit
  // isDisabled
  // isString
  // isNumber

  // ETC
  // function selectById(id)
}
