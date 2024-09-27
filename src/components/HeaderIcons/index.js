import './style.css';

import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const icons = [perfil, sacola];

export default function HeaderIcons() {
  return (
    <ul className="icons">
      {icons.map((icon) => (
        <li className='icon'>
          <img
            src={icon}
            className="icon-img"
            alt="icone"
          />
        </li>
      ))}
    </ul>
  )
}