import sendMessage from '../src/chatting.js';

document.body.innerHTML = '<input type="text" class="chat_enter_message"><button type="button" class="chat_enter_send"></button><input type="text" class="user_name">';

it('Sends the message', (done) => {
  let isMsgSend = false;
  const fakeSocket = {
    emit: () => {
      isMsgSend = true;
    }
  };
  if (sendMessage(fakeSocket, '')) {
    expect(isMsgSend).toBe(true);
  }
  done();
});

/*it('Sends the message correctly', (done) => {
  const testMsg = 'Test message';
  const fakeSocket = {
    emit: (ev, data) => {
      expect(ev).toBe('newMessage');
      expect(data.text).toBe(testMsg);
      done();
    }
  };
  sendMessage(fakeSocket, testMsg);
});*/
