
const sendMessage = (message: { to: string; text?: string }) => {
    if(message.text){
 return message.text.toUpperCase();
};
    }
 

sendMessage({ to: 'Alice' });