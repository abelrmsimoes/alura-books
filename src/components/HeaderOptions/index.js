import './style.css';

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

export default function HeaderOptions() {
  return (
    <ul className="options">
      {optionsText.map((text) => (
        <li className='option'>{text}</li>
      ))}
    </ul>
  );
}