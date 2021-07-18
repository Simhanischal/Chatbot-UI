import React from 'react';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import QuestionAnswerIconOutlined from '@material-ui/icons/QuestionAnswerOutlined';
import CloseIcon from '@material-ui/icons/Close';

const Avatar = styled.button`
    padding: 7px 7px;
    border: 2px solid #000000;
    border-radius: 50%; /* to get a circular shape */
    cursor: pointer;
    background-color: #000000;
    ${'' /* border-color: #FFFFFF; */}
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const WelcomeCircle = props => {
    let display, icon;

    //if changeIcon = true,
    if(props.changeIcon){
        icon = <CloseIcon style={{ fontSize: 40, color: "#5851DB" }} /> //set the icon to 'x' icon
    }
    //if changeIcon = false,
    else{
        //set the icon to chat icon
        icon = <QuestionAnswerIconOutlined style={{ fontSize: 40, color: "#5851DB" }} />
    }

    //if welcomeMessage = true,
    if(props.welcomeMessage){
        //set the display to having the welcome circle avatar with a badge indicating there's a new
        //message
        display = (
            <>
                &nbsp;&nbsp;
                <Badge badgeContent={1} overlap="circle" color="error">
                    <Avatar onClick={props.handleChangeIcon}>
                        <img alt="test" src={props.image} width={props.width} />
                    </Avatar>
                </Badge> 
            </>
        );
    }
    //if welcomeMessage = false,
    else{
        //set the display to have just the chat icon or 'x' icon depending on changeIcon state which 
        //alternates on each mouse click on the avatar
        display = (
            <Avatar onClick={props.handleChangeIcon}>
                { icon }
            </Avatar>
        );
    }

    return display;
}

export default WelcomeCircle;