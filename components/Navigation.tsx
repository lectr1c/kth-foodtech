import {NextComponentType} from "next";
// @ts-ignore
import styled from "styled-components";

const NavContainer = styled.nav`
  height: 5vh;
  width: 100%;
  background-color: darkgrey;
`

const Navigation: NextComponentType = () => {
    return (
        <NavContainer>
            Test.
        </NavContainer>
    )
}

export default Navigation;