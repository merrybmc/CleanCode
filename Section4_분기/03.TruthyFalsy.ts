{
  // case 1

  // 💩 bad case
  if ('string'.length > 0) {
  }
  // ✨ good case truthy
  if ('string'.length) {
  }

  // 💩 bad case
  if (isNaN(10)) {
  }

  // ✨ good case
  if (10) {
  }

  // 💩 bad case
  if (boolean === true) {
  }

  // ✨ true
  if (boolean) {
  }

  // true case
  //   if(true)
  //   if({})
  //   if([])
  //   if(42)
  //   if("0")
  //   if("false")
  //   if(new Date())
  //   if(-42)
  //   if(12n)
  //   if(3.14)
  //   if(-3.14)
  //   if(Infinity)
  //   if(-Infinity)

  // false case
  //   if(false)
  //   if(null)
  //   if(undefined)
  //   if(0)
  //   if(-0)
  //   if(0n)
  //   if(NaN)
  //   if("")

  // case 2
  function printName(name: string): string {
    // 💩 bad case
    if (name === undefined || name === null) {
      return '사람이 없네요';
    }

    // ✨ good case
    if (!name) {
      return '사람이 없네요';
    }

    return '안녕하세요 ' + name + '님';
  }
}
