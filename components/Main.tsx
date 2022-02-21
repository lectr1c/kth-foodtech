// @ts-ignore
import styled from "styled-components";

const MainContainer = styled.main`
  height: 95vh;
  width: 100%;
  background-color: lightgrey;
  
  @media screen and (min-height: 1440px){
    height: 1440px;
  }
`

const Main = (props: object) => {
    return (
        <MainContainer>
            Main Container
        </MainContainer>
    )
}

export default Main;