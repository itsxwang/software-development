import { useState } from 'react';
import './index.css'


const App = () => {
  const [count, setCount] = useState(0);

  return <div className="mainT" onClick={function () { console.log('Hello') }}>
      Welcome here to React {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
};



export default App;