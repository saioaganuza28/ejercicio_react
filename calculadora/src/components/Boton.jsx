import './Boton.css';

Boton.propTypes = {
  variante: String,
  activo: String,
  onClick: String,
};

function Boton({ variante, activo, onClick }) {
  let contenido;

  switch (variante) {
    case 'suma':
      contenido = 'Sumar';
      break;
    case 'resta':
      contenido = 'Restar';
      break;
    case 'multiplicacion':
      contenido = 'Multiplicar';
      break;
    case 'division':
      contenido = 'Dividir';
      break;
    default:
      contenido = 'Botón';
  }

  return (
    <button 
      className={`boton__calculadora ${activo ? 'activo' : ''}`}
      onClick={onClick}
    >
      {contenido}
    </button>
  );
}

export default Boton;
