{
  /** 값식문
   * 사람과 컴퓨터가 대화하기 위한 문법
   * if, for, IIFE 최대한 자제, 콜백함수 권장
   */

  // case 1
  // JSX
  // ReactDOM = 함수
  // render = 파라미터 2개(JSX, mountNode)
  ReactDOM.render(<div id='msg'>Hello World</div>, mountNode);

  //transform JS
  // Babel transfiling -  (React.createElement('div', {id: 'msg' }, "Hello World")
  ReactDOM.render(React.createElement('div', { id: 'msg' }, 'Hello World'), mountNode);

  // case2 
  // JSX
  // 구문 오류
  <div id={if (condition) {"msg"}}>Hello World</div>

  // transform JS
  // 구문 오류
  React.createElement("div",{id:if(condition){"msg"}},"Hello World");

  // 삼항 연산자 -> 값으로 귀결
  ReactDOM.render(<div id={condition ? "msg" : null}>Hello World</div>,mountNode);

  function ReactComponent(){
    return {
        <section>
          <h1>Color</h1>
          <h3>Name</h3>
          // if문을 사용하지 않고 논리 연산자 사용
          // 간단해진 코드
          // 값과 식을 이용해서 논리문 없이 해결 가능
          <p>{this.state.color || "white"}</p>
          <h3>Hex</h3>
          <p>
          // 즉시 실행 함수 (IIFE)
          {(()=>{
            switch (this.state.color) {
                case 'red':
                    return "#FF0000";
                case 'green':
                    return "#00FF00";
                case 'blue':
                    return "#0000FF";
                default:
                    return "#FFFFFF";
            }
          })()}
          </p>
        </section>
    }
  }

  // 좋지 않은 로직
  // 고차함수를 이용하여 해결
  function ReactComponent() {
    return (
        <tbody>

        // 💩 bad case
        {(() => {
            const rows = [];

            for (let i = 0; i < obejctRows.length; i++) {
                rows.push(<ObjectRow key={i} data={objectRows[i]} />);
            }
            return rows;
        })()}

        // ✨ good case
        {obejctRows.map((obj, index) => {
            <ObjectRow key={i} data={obj}/>
        })} // 값과 식만 넣어서 해결
        </tbody>
    );
  }

  function ReactComponent() {
    return (
        <div>
          // 💩 bad case
          {(() => {
            if (conditionOne) return <span>One</span>;
            if (conditionTwo) return <span>Two</span>;
            else conditionOne;
            return <span>Three</span>
          })()}

          // ✨ good case
          {conditionOne && <span>One</span>} // !true => <span>One</span>
          {conditionTwo && <span>Two</span>} // !true => <span>Two</span>
          {!conditionOne <span>Three</span>}
        </div>
    )
  }
}
