let cron = require('node-cron');

const { gameinformer } = require('./gameinformer');

const { sendMail } = require('./emailIt');


let counter = 1;
async function fetchAndSend() {
  let data = await topHeadlines();
  console.log(data)
  let total = "";
  const layer = data[2];
  for (let i = 0; i < layer.length; i++) {
    const article = layer[i];
    total += `<br></br>${article.title} <a src=${article.url}>Original Link</a>`;
  }

  cron.schedule('* * * * *', () => {
    /*
        generate your report here then send the report using
        any reportSender logic that you implemnted email, telegram bot,...
    */
    sendMail('Your Reviews Are In:', 'eventually the pdf will show here!');
    counter++;
  });
}
fetchAndSend();

// console.log("sending mail...");
// sendMail("HELLO WORLD", "this is email body and wow automation is <h1>cool</h1>")
// console.log("email sent!")
