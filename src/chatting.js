//const socket = io.connect(window.location.host);
const socket = { emit() {} };

const ChatMessage = document.querySelector('.chat_enter_message');
const ChatSend = document.querySelector('.chat_enter_send');
const UserName = document.querySelector('.user_name');

const sendMessage = (socket, chatMessage) => {
  if (UserName.value=='') return;
  ChatMessage.value = '';
  ChatMessage.addEventListener('keypress', messageKeypress);
  socket.emit('newMessage', {text: chatMessage});
};

const messageKeypress = (ev) => {
  const chatMessage = ChatMessage.value;
  const keyCode = ev.which || ev.keyCode;
  if (ev.keyCode==13) { ev.preventDefault();
    if (chatMessage!='') sendMessage(socket, chatMessage);
  }
};
const sendButtonClick = () => {
  const chatMessage = ChatMessage.value;
  if (chatMessage!='') sendMessage(chatMessage);
};
ChatMessage.addEventListener('keypress', messageKeypress);
ChatSend.addEventListener('click', sendButtonClick);

export default sendMessage;
