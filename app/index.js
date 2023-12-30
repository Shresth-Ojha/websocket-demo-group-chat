
const socket = io('ws://localhost:3000');

socket.on('msg', (text) => {
  const el = document.createElement('li');
  el.innerHTML = text;
  console.log(text)
  document.querySelector('ul').appendChild(el);
});
// window.onload = function () {
  // your code
  document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('msg', text);
  };
// };

// const socket = io('ws://localhost:3000');

// socket.on('msg', (text) => {
//   const el = document.createElement('li');
//   el.innerHTML = text;
//   document.querySelector('ul').appendChild(el);
// });

// document.querySelector('button').onclick = () => {
//   const text = document.querySelector('input').value;
//   socket.emit('msg', text);
// };
