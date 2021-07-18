import React from 'react';
import styled from 'styled-components';

const BotButtonDiv = styled.div`
    // width: 250px;
    margin-left: 20px;
    margin-top: 10px;
    clear: left;
`;

const Button = styled.button`
    width: fit-content;
    padding: 10px;
    border-radius: 5px;
    display: block;
    margin-left: 20px;
    margin-top: 10px;
    cursor: pointer;
`;

const BotButton = props => {
    return(
        <>
            <BotButtonDiv>
                <Button id="button" onClick={props.handleBotButton}>
                    {props.title}
                </Button>
            </BotButtonDiv>  
        </>
    );
}

export default BotButton;