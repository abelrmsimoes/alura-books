import styled from 'styled-components';

import logo from '../../images/logo.svg';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  white-space: nowrap;
`
const LogoImg = styled.img`
  margin-right: 10px;
`

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImg
        src={logo}
        alt="logo"
      />
      <p><strong>Alura</strong> Books</p>
    </LogoContainer>)

}
