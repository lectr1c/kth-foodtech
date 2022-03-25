import styled from 'styled-components';;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const StyledFooterContainer = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: fit-content;
  background: #111517;
  z-index: 1;
`;
const StyledFooterList = styled.div`
  display: flex;
  justify-content: center;
  list-style-type: none;
  align-items: center;
  color: white;
  padding-left: 0;
  font-family: ubuntu;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const StyledTitle = styled.p`
  font-family: ubuntu;  
  font-size: 14px;
  margin: 15px;
`;
const StyledCopywrightIcon = styled.span``;


const Footer = () => {

    return (
        <div>
          <StyledFooterContainer>
            <StyledFooterList>
              <StyledCopywrightIcon>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </StyledCopywrightIcon>
              <StyledTitle><a>info@kthfoodtech.se</a></StyledTitle>
            </StyledFooterList>
            <StyledFooterList>
              <StyledCopywrightIcon>
                <FontAwesomeIcon icon={faMapMarked} size="2x" />
              </StyledCopywrightIcon>
              <StyledTitle>Drottning Kristinas väg 15-19, 114 28 Stockholm</StyledTitle>
            </StyledFooterList>
          </StyledFooterContainer>    
        </div>
    )
}

export default Footer;