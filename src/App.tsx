import { useState } from 'react';
import './App.css';
import { ReservaCanchas } from './components/reserva-canchas';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReservaCanchas />
    </>
  );
}

export default App;
