import React, {useState} from 'react';
// state 사용법 UseState내장함수 하나를 쓰겠다. 
import logo from './logo.svg';
import './App.css';

function App() {
  let [a,b] = useState('State 사용법');
  // 선언시 첫 번째에는 데이터, 두번쨰에는 데이터 수정 함수로 구성된 배열이 생성
  // destructing이라는 문법이다
  // state에 데이터를 저장하면 HTML이 변경될시 자동으로 재 렌더링이 되어 새로고침이 필요없기 때문
  let [좋아요, 좋아요변경] = useState(0);
  let posts = '데이터';
  function r100(){
    return 100
  }
  function change_title(){
    var newArray = [...a];
    // deepcopy방법
    newArray = 'state변수 변경';
    b(newArray);
  }
  return (
    // 소괄호만 열면 HTML 작성 가능
    // 리액트 내에선 jsw 
    <div className="App">
      {/* class 대신 className */}
      <div className="black-nav">
        <div style = {{color : 'blue', fontSize : '30px'}}>
          {/* 클래스 명으로 쓰는게 편하다 */}
          제목
        </div>
      </div>
      <button onClick ={change_title}>버튼</button>
       {/* 함수 이름 적을때 소괄호는 ㄴㄴ */}
      <div className="list">
          <h2>{a} <span onClick ={() => {좋아요변경(좋아요+=1)}}>✌</span> {좋아요}</h2>
          {/* state는 병경함수를 사용하여야 한다 */}
          <h3>{posts}</h3>
          <h4>{ r100() }</h4>
          {/* React의 장점: 위와 같이  Data binding이 매우 쉽다 */}
          {/* 코드가 간경하고 직관적임 */}
          <p> 21.08.03</p>
          <hr/>
      </div>
      <Modal />
      {/* <img src = {logo}/> */}
      {/* 이미지 바인딩 하는 법 */}
      
      
    </div>
  );
}

// 컴포넌트 만드는 법, 항상 대문자로 시작 소괄호안에 HTML담기 
function Modal(){
  return(
    <div className="modal">
      <h2>제목</h2>
      <p> 날짜 </p> 
      <p> 상세내용 </p>
    </div>
  )
}

export default App;
