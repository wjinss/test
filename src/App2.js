import {useState} from "react"

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos,setToDos] = useState([])
  const onChange = (e) => setToDo(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault()
    if(toDo === ""){
      return
    }
    else{
      setToDos(currentArray => [toDo, ...currentArray])
      // 배열에서 [a, ... b]는 b라는 배열 안에 a를 추가로 넣어 배열을 새로 만든다~ 라는 형식
      setToDo("")
    }
  }



  return (
    <div>
      <h1>My to do list ({toDos.length})</h1>
     <form onSubmit={onSubmit}>
      <input type="text" value={toDo} onChange={onChange} placeholder="Todo 리스트를 작성해주세요!" />
      <button>Add To Do</button>
     </form>
     <hr/>
     <ul>
      {toDos.map((item,index) => <li key={index}>{item}</li>)}
     </ul>
    </div>
  );
}

export default App;
