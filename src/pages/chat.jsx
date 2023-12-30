import {React, useState} from 'react';
import { RiLogoutCircleLine } from "react-icons/ri";

// import {styles} from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {  MainContainer, Sidebar, Search,  ConversationList,  Conversation, Avatar, ChatContainer,  ConversationHeader,
  VoiceCallButton, VideoCallButton,EllipsisButton,
  MessageList, MessageSeparator,Message,  MessageInput,
  TypingIndicator, StarButton, InfoButton
} from "@chatscope/chat-ui-kit-react";


function Chat() {
  const [messageInputValue, setMessageInputValue] = useState("");

  return (
    <>
    <div style={{ height: "600px",position: "relative" }}>
      <MainContainer responsive>                
        <Sidebar position="left" scrollable={false}>
        <ConversationHeader>
            <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqCtPk35VY_3IA0XHJmNWkd6NoFZOMP4h6A&usqp=CAU"} name="Emily" />
            <ConversationHeader.Content userName="Zoe" />                                   
            <ConversationHeader.Actions>                                                                             
                <StarButton title="Add to favourites" />
                <InfoButton title="Show info" />
                <RiLogoutCircleLine size={24} color='blue' />
            </ConversationHeader.Actions>
          </ConversationHeader>

          <Search placeholder="Search..." />
          <ConversationList>                                                     
            <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar src={"https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg"} name="Lilly" status="available" />
            </Conversation>
            
            <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
              <Avatar src={"https://chatscope.io/storybook/react/static/media/joe.641da105.svg"} name="Joe" status="dnd" />
            </Conversation>
            
            <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you" unreadCnt={3}>
              <Avatar src={"https://chatscope.io/storybook/react/static/media/emily.d34aecd9.svg"} name="Emily" status="available" />
            </Conversation>
            
            <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you" unreadDot>
              <Avatar src={"https://chatscope.io/storybook/react/static/media/eliot.d7038eac.svg"} name="Kai" status="unavailable" />
            </Conversation>
                        
            <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
              <Avatar src={"https://chatscope.io/storybook/react/static/media/akane.b135c3e3.svg"} name="Akane" status="eager" />
            </Conversation>
                                
            <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
              <Avatar src={"https://chatscope.io/storybook/react/static/media/kai.b62f69dc.svg"} name="Eliot" status="away" />
            </Conversation>
                                                
            <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
              <Avatar src={"https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg"} name="Zoe" status="dnd" />
            </Conversation>
            
            <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
              <Avatar src={"https://chatscope.io/storybook/react/static/media/patrik.d89db575.svg"} name="Patrik" status="invisible" />
            </Conversation>                                 
          </ConversationList>
        </Sidebar>
        
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqCtPk35VY_3IA0XHJmNWkd6NoFZOMP4h6A&usqp=CAU"} name="Zoe" />
            <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <EllipsisButton orientation="vertical" />
            </ConversationHeader.Actions>          
          </ConversationHeader>
          <MessageList typingIndicator={<TypingIndicator content="Zoe is typing" />}>
            <MessageSeparator content="Saturday, 30 November 2019" />
            <Message model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Zoe",
                direction: "incoming",
                position: "single"
              }}>
              <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqCtPk35VY_3IA0XHJmNWkd6NoFZOMP4h6A&usqp=CAU"} name="Zoe" />
            </Message>
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Patrik",
              direction: "outgoing",
              position: "single"
            }} avatarSpacer />
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Zoe",
              direction: "incoming",
              position: "first"
            }} avatarSpacer />
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Zoe",
              direction: "incoming",
              position: "normal"
            }} avatarSpacer />
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Zoe",
              direction: "incoming",
              position: "normal"
            }} avatarSpacer />
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Zoe",
              direction: "incoming",
              position: "last"
            }}>
              <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqCtPk35VY_3IA0XHJmNWkd6NoFZOMP4h6A&usqp=CAU"} name="Zoe" />
            </Message>
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Patrik",
              direction: "outgoing",
              position: "first"
            }} />
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Patrik",
              direction: "outgoing",
              position: "normal"
            }} />
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Patrik",
              direction: "outgoing",
              position: "normal"
            }} />
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Patrik",
              direction: "outgoing",
              position: "last"
            }} />
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Zoe",
              direction: "incoming",
              position: "first"
            }} avatarSpacer />
            <Message model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Zoe",
              direction: "incoming",
              position: "last"
            }}>
              <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqCtPk35VY_3IA0XHJmNWkd6NoFZOMP4h6A&usqp=CAU"} name="Zoe" />
            </Message>
          </MessageList>
          <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} />
        </ChatContainer>                         
      </MainContainer>
    </div>
    </>
  )
}

export default Chat
