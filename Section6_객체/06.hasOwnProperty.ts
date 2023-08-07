{
  const person: { name: string } = {
    name: 'byeong min',
  };

  person.hasOwnProperty('age');

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
    }
  }

  const foo = {
    hasOwnProperty: function () {
      return 'hasOwnProperty';
    },
    bar: 'string',
  };

  foo.hasOwnProperty('bar');

  Object.prototype.hasOwnProperty.call(foo, 'bar');
}
