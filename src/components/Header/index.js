import styled from 'styled-components';

import HeaderIcons from '../HeaderIcons';
import HeaderOptions from '../HeaderOptions';
import Logo from '../Logo';


const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center
`

export default function Header() {
  return (
    <HeaderContainer>
      < Logo />
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer >
  );
}