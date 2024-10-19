import { useState } from 'react';
import './App.css';
import { ReservaCanchasColorida } from './components/reserva-canchas-colorida';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReservaCanchasColorida />
    </>
  );
}

export default App;
