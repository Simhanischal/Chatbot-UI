import React from 'react';
import styled from 'styled-components';
import Image from '../../../Images/logo192.png';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';

const Banner = styled.div`
    background-color: #5851DB;
    z-index: 100;
    color: #FFFFFF;
    width: 370px;
    height: 50px;
    display: flex;
    align-items: center; 
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`;

const BannerAvatar = styled.div`
    width: fit-content;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    background-color: #FFFFFF;
    padding: 2px 4px;
    margin-left: 20px;
`;

const BannerBotDetails = styled.div`
    line-height: 1px;
    padding-left: 10px;
`;

const ChatBanner = () => {
    return(
        <>
            <Banner>
                <BannerAvatar>
                    <img alt="Chat Avatar" src={Image} width="20" />
                </BannerAvatar>
                <BannerBotDetails>
                    <Typography variant="body2">Dummy BOT</Typography>
                    <Typography variant="caption" style={{ fontSize: 11, color: green[300], marginLeft: -50}} >
                        Online
                    </Typography>
                </BannerBotDetails>
            </Banner>
        </>
    );
}

export default ChatBanner;