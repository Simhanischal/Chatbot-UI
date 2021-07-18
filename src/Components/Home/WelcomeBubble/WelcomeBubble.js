import React from 'react';
import styled from 'styled-components';
import CancelIcon from '@material-ui/icons/Cancel';

const Bubble = styled.div`
    padding: 10px;
    border-radius: 5px;
    max-width: 220px;
    display: inline-block; /* to get auto height and width based on content */
    position: relative;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /* to get the small triangle on the right so as to make it look like a bubble */
    &:after{
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-left-color: #FFFFFF;
        border-right: 0;
        border-bottom: 0;
        margin-top: -5px;
        margin-right: -10px;
    }
`;

const StyledCancelIcon = styled(CancelIcon)`
    margin-bottom: 25px;
    color: grey;
    cursor: pointer;
`;

const WelcomeBubble = props => {
    //if welcomeMessage is true, show the welcome bubble, else, hide it
    return(
        props.welcomeMessage && <>
            <StyledCancelIcon id="cancel" fontSize="small" onClick={props.closeWelcomeMessage} />
            <Bubble id="bubble" onClick={props.handleChangeIcon}>
                Hey there, welcome back! 
                Anything I can help you with?
            </Bubble>
        </> 
    );
}

export default WelcomeBubble;