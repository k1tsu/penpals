const app = require('express')();

app.get('/api/test', (req, res) => {
  res.end(`
        Hello and welcome to the PenPals REST api.  
    `);
});

app.listen(process.env.PORT || 8000, '0.0.0.0', () => console.log(`Listening on port ${process.env.PORT || 8000}.`));
