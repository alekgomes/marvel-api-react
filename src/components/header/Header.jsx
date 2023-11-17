import styled from "styled-components";
import MarvelLogo from "../../assets/images/logo/Group.png";

const StyledHeader = styled.header`
  text-align: center;

  h1 {
    text-transform: uppercase;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={MarvelLogo} alt="Marvel's Logo" />
      <h1>explore o universo</h1>
      <p>
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </p>
    </StyledHeader>
  );
};

export default Header;
