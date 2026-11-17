const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Keyntsix Bot is Alive! ZIM laughs jokes</h1><p>Tarisa Render Logs kuti u-scan QR</p>');
});
app.listen(10000, () => console.log('Server running'));

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
});

client.on('qr', qr => {
  console.log('SCAN THIS QR:');
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('BOT YABATANIDZWA!');
});

client.on('message', async msg => {
  const text = msg.body.toLowerCase();
  if (text.includes('hi') || text.includes('hello') || text.includes('hie')) {
    msg.reply('Hie boss! 😂 Ndiri Keyntsix Bot! Nyora *joke* kuti ndikuseke!');
  } else if (text.includes('joke')) {
    const jokes = [
      'Sei kombi ye Harare isina brake? Nekuti inoda kuti ufambe nekutenda! 😂',
      'Mukadzi weku Chitungwiza akati kumurume wake: Mari yacho iripi? Murume: Yakaenda ku ECOCASH kunotenga data! 😂',
      'Sei ZESA ichida rudo? Nekuti inogara ichitipa blackout! 😂'
    ];
    msg.reply(jokes[Math.floor(Math.random() * jokes.length)]);
  }
});

client.initialize();
