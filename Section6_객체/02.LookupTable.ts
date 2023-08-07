{
  /** 순람표 Lookup Table
   * 배열 데이터 구조에서 key와 value로 관리되어 나열된 형태
   */

  function getUserType(type) {
    // 💩 bad case, 요구사항이 추가될 때 마다 불필요한 코드가 늘어남
    if (type === 'ADMIN') {
      return '관리자';
    } else if (type === 'INSTRUCTOR') {
      return '강사';
    } else if (type === 'STUDENT') {
      return '수강생';
    } else {
      return '해당 없음';
    }

    // ✨ better case 똑같은 분기문이지만 case가 명확하게 구분되어진다.
    switch (key) {
      case 'ADMIN':
        return '관리자';
      case 'INSTRUCTOR':
        return '강사';
      case 'STUDENT':
        return '수강생';
      default:
        return '해당 없음';
    }

    // 🎉 good case lookupTable
    const USER_TYPE = {
      ADMIN: '관리자',
      INSTRUCTOR: '강사',
      STUDENT: '수강생',
    };

    // return USER_TYPE[type] || '해당 없음';
    return USER_TYPE[type] && '해당없음';
  }
}
