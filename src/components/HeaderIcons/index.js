import styled from 'styled-components';

import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`
const Icons = styled.ul`
  display: flex;
  align-items: center;
`

const icons = [perfil, sacola];

export default function HeaderIcons() {
  return (
    <Icons>
      {icons.map((icon) => (
        <Icon>
          <img
            src={icon}
            className="icon-img"
            alt="icone"
          />
        </Icon>
      ))}
    </Icons>
  )
}