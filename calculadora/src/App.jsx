import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';

function App() {
  const [valorA, setValorA] = useState('');
  const [valorB, setValorB] = useState('');
  const [resultado, setResultado] = useState('');
  const [activoSuma, setActivoSuma] = useState(false);
  const [activoResta, setActivoResta] = useState(false);
  const [activoDivision, setActivoDivision] = useState(false);
  const [activoMultiplicacion, setActivoMultiplicacion] = useState(false);
  
  const resetActivos = () => {
    setActivoSuma(false);
    setActivoResta(false);
    setActivoDivision(false);
    setActivoMultiplicacion(false);
  };

  const Sumar = () => {
    resetActivos();
    setActivoSuma(true);
    setResultado(Number(valorA) + Number(valorB));
  };

  const Restar = () => {
    resetActivos();
    setActivoResta(true);
    setResultado(Number(valorA) - Number(valorB));
  };

  const Dividir = () => {
    resetActivos();
    setActivoDivision(true);
    if (Number(valorB) !== 0) {
      setResultado(Number(valorA) / Number(valorB));
    } else {
      setResultado('Error: División por 0');
    }
  };

  const Multiplicar = () => {
    resetActivos();
    setActivoMultiplicacion(true);
    setResultado(Number(valorA) * Number(valorB));
  };

  return (
    <div className="contenedor">
      <h2>CALCULADORA</h2>
      <div className="inputs-container">
        <label>
          Valor A
          <input
            type="number"
            placeholder="Inserte un valor"
            value={valorA}
            onChange={(e) => setValorA(e.target.value)}
            className="input__numero"
          />
        </label>
        <label>
          Valor B
          <input
            type="number"
            placeholder="Inserte un valor"
            value={valorB}
            onChange={(e) => setValorB(e.target.value)}
            className="input__numero"
          />
        </label>
      </div>
      <div className="botones">
        <Boton variante='suma' activo={activoSuma} onClick={Sumar} />
        <Boton variante="resta" activo={activoResta} onClick={Restar} />
        <Boton variante="multiplicacion" activo={activoMultiplicacion} onClick={Multiplicar} />
        <Boton variante="division" activo={activoDivision} onClick={Dividir} />
      </div>
      <label className="resultado">
        Resultado
        <input readOnly type="text" className="input__numero" value={resultado} />
      </label>
    </div>
  );
}

export default App;
