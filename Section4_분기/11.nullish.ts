{
  /**
   * Nullish coalescing operator (널리쉬 병합 연산자)
   * `??` = null과 undefined인지 평가할 때만 꼭 사용할 것
   */

  // case 1
  function createElement(type: string, width: number, height: number) {
    const element = document.createElement(type || 'div');

    // 💩 base case
    element.style.height = String(height || 10) + 'px'; // 10
    element.style.width = String(width || 10) + 'px'; // 10

    // ✨ good case
    element.style.height = String(height ?? 10) + 'px'; // null, undefined 검사
    element.style.width = String(width ?? 10) + 'px'; // null, undefined 검사

    return element;
  }

  const el = createElement('div', 0, 0); // 숫자 0으로 넣고 싶은데 false로 인식

  // case 2
  function helloWorld(message: string): string {
    // 💩 bad case
    if (!message) return 'Hello World';
    // ✨ good case
    return message ?? 'Hello World';

    // 💩 bad case
    return 'Hello' + (message || 'World');
    // ✨ good case
    return 'Hello' + (message ?? 'World');
  }

  console.log(helloWorld(0)); // false

  function helloWorld(message) {}
}
