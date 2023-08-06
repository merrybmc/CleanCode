{
  // 배열 요소 접근하기

  // 요소 3개로 이루어진 배열
  const array: string[] = [1, 2, 3];
  const [firstInput, secondInput]: string[] = array;

  // case 1
  function operateTime(input: string, operators, is) {
    // 💩 bad case
    input[0].split('').forEach((num) => {
      cy.get('.digit').contains(num).click();
    });

    input[1].split('').forEach((num) => {
      cy.get('.digit').contains(num).click();
    });

    // ✨ good case
    const [firstInput, secondInput] = input;
    firstInput.split('').forEach((num) => {
      cy.get('.digit').contains(num).click();
    });

    secondInput.split('').forEach((num) => {
      cy.get('.digit').contains(num).click();
    });
  }

  // case 2
  function clickGroupButton() {
    // 💩 bad case
    const confirmButton = document.getElementsByTagName('button')[0];
    const cancelButton = document.getElementsByTagName('button')[1];
    const resetButton = document.getElementsByTagName('button')[2];

    // ✨ good case
    const [confirmButton, cancelButton, resetButton] = document.getElementsByTagName('button');
  }

  // case 3
  function formatDate(targetDate: string) {
    // 💩 bad case
    const date = targetDate.toISOString().split('T')[0];

    // ✨ good case
    const [date] = targetDate.toISOString().split('T');

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;
  }
}
