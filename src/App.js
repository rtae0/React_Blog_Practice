
import React, { useState } from 'react';
import './App.css';

function App() {
	let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집',"생활관 너무 건조"]);
	let [like,likeM] = useState(0);
	let [modal, modalM] = useState(false);
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
			? <Modal/>
			: null
		}
		{
			글제목.map((a) => {
				return (
					<div className="list">
						<h4>{a}<span onClick={()=>{likeM(like+1);}}>👍</span>{like}</h4>
						<p>12월 20일 발행</p>
						<hr/>
					</div>
				);
			})
		}
    </div>
  );
}

function Modal(){
	return(
		<div className="modal">
			<h2>제목</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;

