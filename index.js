const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Keyntsix Bot is Alive! ZIM laughs jokes');
});

app.listen(PORT, () => {
  console.log('Keyntsix Bot running on port ' + PORT);
});
