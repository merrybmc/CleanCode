{
  function handleClick() {
    return setState(false);
  }

  function showAlert(message: string) {
    return alert(message);
  }

  function test(num1: number, num2: number): void {
    const result = num1 + num2;
  }

  function isAdult(age: number): boolean {
    return age > 19;
  }

  function getUserName(name: string): string {
    return '유저 ' + name;
  }

  const isFlag: boolean = isAdult(10);
  typeof isFlag;
}
