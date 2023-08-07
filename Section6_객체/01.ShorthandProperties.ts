const firstName: string = 'Cho';
const lastName: string = 'Byeong Min';

interface Person {
  firstName: string;
  lastName: string;
  getFullName?: () => string;
}

// Shorthand Properties 미사용 예제
const perosn: Person = {
  // 💩 bad case
  firstName: 'Cho',
  lastName: 'Byeong Min',
  getFullName: function () {
    return this.firstName + '' + this.lastName;
  },

  // ✨ good case 코드 단축 가능
  firstName,
  lastName,
  getFullName() {
    return this.firstName + '' + this.lastName;
  },
};
