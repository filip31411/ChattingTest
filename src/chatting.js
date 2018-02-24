//const socket = io.connect(window.location.host);
const socket = { emit() {} };

class Chatting {
  constructor () {
    this.chatMessage = document.querySelector('.chat_enter_message');
    this.chatSend = document.querySelector('.chat_enter_send');
    this.userName = document.querySelector('.user_name');

    const sendEvent = ev => this.sendEvent(ev);
    this.chatMessage.addEventListener('keypress', sendEvent);
    this.chatSend.addEventListener('click', sendEvent);
  }

  sendMessage (socket, chatMessage) {
    if (this.userName.value=='') return;
    this.chatMessage.value = '';
    socket.emit('newMessage', {text: chatMessage});
  }
  sendEvent (ev) {
    console.log(ev);
    const blockEnter = () => {
      if (ev.type=='keypress' && ev.keyCode==13) ev.preventDefault();
      return Promise.resolve();
    };
    blockEnter().then(() => {
      const chatMessage = this.chatMessage.value;
      if (chatMessage!='') this.sendMessage(socket, chatMessage);
    });
  }
}

export default Chatting;
