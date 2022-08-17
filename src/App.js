import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const listaTarefas = ['Estudar HTML', 'Estudar CSS', 'Estudar JS'];
  return (<ol>{listaTarefas.map((e) => Task(e))}</ol>);
}

export default App;
