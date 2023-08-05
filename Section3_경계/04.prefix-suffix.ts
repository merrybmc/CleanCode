{
  /** prefix = 접두사 문자열의 앞쪽에 붙는 것
   * suffix = 접미사 문자열의 뒤쪽에 붙는 것
   * 코드의 앞 뒤에 컨벤션을 작성하여 사용
   */
  interface Obj {
    log: string[];
    getLatest: () => string;
  }

  const obj: Obj = {
    log: ['a', 'b', 'c'],
    getLatest() {
      if (this.log.length === 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    },
  };
  console.log(obj.getLatest());
}
