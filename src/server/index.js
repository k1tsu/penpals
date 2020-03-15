const app = require('express')();

app.get('/api/test', (req, res) => {
  const initialState = {
    text: 'Good afternoon!',
    letters: [{
      author: 'the Team 🌎',
      text: 'Welcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etcWelcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etcWelcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etcWelcome to the PenPals app \\n\\n Here you can send digital letters to a random person on the world, reply them and etc'
    }]
  };

  res.json(initialState);
});

app.listen(process.env.PORT || 8000, '0.0.0.0', () => console.log(`Listening on port ${process.env.PORT || 8000}.`));
