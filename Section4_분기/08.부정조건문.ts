{
  // 부정조건문 지양하기 `!`
  /**
   * 1. 생각을 여러번 해야할 수 있다.
   * 2. 프로그래밍 언어 자체로 if문이 처음부터 오고 true부터 실행시킨다.
   * 3. 헷갈리고 실수할 가능성이 커진다.
   *
   * 부정조건문은 언제 사용해야 하면 좋은가?
   * 1. Early Return
   * 2. Form Validation
   * 3. 보안 혹은 검사하는 로직
   */

  const isCondition: boolean = true;
  const isNotCondition: boolean = false;

  // ✨
  if (isNotCondition) {
    console.log('거짓인 경우에만 실행');
  }

  // 💩
  if (!isCondition) {
    console.log('거짓일 경우에만 실행');
  }
}
