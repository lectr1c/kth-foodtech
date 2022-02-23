import styled from "styled-components";

// @ts-ignore

interface mainProps {
    readonly green?: boolean;
}
const MainContainer = styled.main<mainProps>`
  height: 95vh;
  width: 100%;
  background-color: ${props => props.green ? "lightgreen" : "lightgray"};
  
  :hover {
    background-color: ${props => props.green ? "lightgray" : "lightgreen"};
  }
  
  @media screen and (min-height: 1440px){
    height: 1440px;
  }
`

const Main = (props: object) => {
    return (
        <MainContainer green>

        </MainContainer>
    )
}

export default Main;