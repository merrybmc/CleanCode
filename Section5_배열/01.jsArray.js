{
  /**
   * JavaScript의 배열은 객체다.
   */

  const array = [1, 2, 3];

  // 배열의 구조(?)
  const arr = {
    0: 1,
    1: 2,
    2: 3,
  };

  array[3] = 'test';
  array['property'] = 'string value';
  array['obj'] = {};
  array['{}'] = [1, 2, 3];
  array['func'] = function () {
    return 'hello';
  };

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  const obj = {
    arr: [1, 2, 3],
    3: 'test',
    property: 'string value',
    obj: {},
    '{}': [1, 2, 3],
    func: function () {
      return 'hello';
    },
  };

  console.log(obj);
}
