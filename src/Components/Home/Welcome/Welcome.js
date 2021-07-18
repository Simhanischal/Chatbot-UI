import React from 'react';
import WelcomeBubble from '../WelcomeBubble';
import WelcomeCircle from '../WelcomeCircle';
import Image from '../../../Images/logo192.png';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 50px;
    /*for mobile dispalys*/
    @media (max-width: 600px){
        right: 0;
    }
`;

const Welcome = props => {
    return(
        <WelcomeContainer>
            <WelcomeBubble 
                welcomeMessage={props.welcomeMessage} 
                closeWelcomeMessage={props.closeWelcomeMessage}
                handleChangeIcon={props.handleChangeIcon}      
            />
            <WelcomeCircle
                changeIcon={props.changeIcon} 
                handleChangeIcon={props.handleChangeIcon}
                welcomeMessage={props.welcomeMessage} 
                closeWelcomeMessage={props.closeWelcomeMessage} 
                image={Image} 
                width="50" 
            />
        </WelcomeContainer>
    );
}

export default Welcome;