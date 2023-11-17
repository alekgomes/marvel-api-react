import styled from "styled-components";

const StyledInput = styled.input.attrs({
  type: "text",
  placeholder: "Procure por heróis",
})`
  border-radius: 2.2rem;
  background-color: var(--salmon);
  border: none;
  padding: 0.6rem;
  padding-left: 4rem;
  line-height: 2;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;

  &:before {
    content: url("/src/assets/icons/Shape.png");
    transform: translate(200%, 2px);
  }
`;

function SearchInput() {
  return (
    <StyledLabel>
      <StyledInput />
    </StyledLabel>
  );
}

export default SearchInput;