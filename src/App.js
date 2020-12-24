import React, { useState } from 'react';
import './App.css';

function App() {
	let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집',"생활관 너무 건조"]);
	let [like,likeM] = useState(0);
	let [modal, modalM] = useState(false);
	let [clickTitle, clickTitleM] = useState(0);
	return (
	<div className="App">
		<div className="black-nav">
			<div>개발 Blog</div>
		</div>
		<div className="list">
			<h4 onClick={() => {modalM(!modal)}}>{글제목[2]}</h4>
			<p>12월 20일 발행</p>
			<hr/>
		</div>
		{
			modal === true
			? <Modal 글제목={글제목} clickTitle={clickTitle}/>
			: null
		}
		{
		글제목.map((a, i) => {
			return (
				<div className="list">
					<h4 onClick={()=>{clickTitleM(i)}}>{a}<span onClick={()=>{likeM(like+1);}}>👍</span>{like}</h4>
					<p>12월 20일 발행</p>
					<hr/>
				</div>
			);
		})
	}
    </div>
  );
}

function Modal(props){
	return(
		<div className="modal">
			<h2>{props.글제목[props.clickTitle]}</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;