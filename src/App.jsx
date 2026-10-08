import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador de Hábitos</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador <= 1 ? 0 : contador - 1)}>-1</button>
      <button onClick={() => setContador(0)}> Resetar </button>
       
   


    </div>
  );
}
    
export default App;