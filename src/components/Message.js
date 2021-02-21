import React from 'react'
import styled from 'styled-components';
import moment from 'moment';

function Message({message,timestamp,user,userImage}) {
    return (
        <MessageContainer>
            <img src={userImage} alt="d"/>
            <MessageInfo>
                <h4>
                {user}{' '}
                <span>{moment((new Date(timestamp?.toDate()).toUTCString())).fromNow()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message;

const MessageContainer = styled.div`
   display:flex;
   align-items:center;
   padding:20px;

   >img{
       height:50px;
       border-radius:8px;
   }
`;
const MessageInfo = styled.div`
   padding-left:10px;

   >h4 > span {
       color:gray;
       font-weight:300;
       margin-left:4px;
       font-size:10px;
   }
`;
