import React from 'react';
import useState from './component/hook/useState';

function App() {
  const { state, setState } = useState({
    count: 1,
    age: 15,
    mange: 20,
  });
  return (
    <div>
      <div
        onClick={() => {
          setState({ count: state.count + 1 });
        }}
      >
        {state.count}
      </div>
      <div
        onClick={() => {
          setState({ age: state.age + 1 });
        }}
      >
        {state.age}
      </div>
      <div
        onClick={() => {
          setState({ mange: state.mange + 1 });
        }}
      >
        {state.mange}
      </div>
    </div>
  );
}

export default App;
