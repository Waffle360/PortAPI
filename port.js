function buttonclick() {
if(editor.find('on')){
serialLEDController.write('1');
}
if(editor.find('off')){
serialLEDController.write('0');
}
if(editor.find('getSerialMessage()')){
console.log(getSerialMessage());
}
}
async function getSerialMessage() {
      serialMessagesContainer.innerText += await serialLEDController.read() + '\n';
}
