// const fetch = require('node-fetch');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const callApi = async (msg) => {
    const url = "https://text-to-image-dev-api-3exmci5toq-de.a.run.app/chat-bot";
    const payload = {
      human_msg: msg
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
};

// (async () => {
//   in
//   const response = await callApi('Hello, world!');
//   console.log(response);
// })();

const startConversation = () => {
  rl.question('Enter your message (type "exit" to quit): ', async (msg) => {
    if (msg.toLowerCase() === 'exit') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    const response = await callApi(msg);
    console.log('Response from API:', response);

    // Call startConversation again to prompt for the next message
    startConversation();
  });
};

startConversation();
