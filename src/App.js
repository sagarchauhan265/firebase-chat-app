

import React, { useEffect, useState } from 'react';
import { Container, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { auth } from './firebase';
import { getDatabase ,ref, push, set,onChildAdded} from "firebase/database";
const App = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const db = getDatabase();
  const ChatListRef = ref(db, 'chats');


  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // Send a message
      const ChatRef = push(ChatListRef);
      set(ChatRef, { text: message, sender: 'Me' });
      setMessage('');
    }
  };

  useEffect(() => {
    onChildAdded(ChatListRef, (data) => {
     // addCommentElement(postElement, data.key, data.val().text, data.val().author);
     setMessages(messages =>[...messages, data.val()]);
     console.log("ChatListRef",data.val());
    });
  }, [])
  






  return (
    <Container maxWidth="sm">
      <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'center' }}>
        <h2>Chat Application </h2>
      </div>

      <Paper elevation={3} style={{ padding: '20px', height: '400px', overflowY: 'auto' }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={msg.sender}
                secondary={msg.text}
                primaryTypographyProps={{ variant: 'subtitle2' }}
                secondaryTypographyProps={{ variant: 'body1' }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </div>
    </Container>
  );
};

export default App;

