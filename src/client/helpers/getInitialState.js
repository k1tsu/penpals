const helloLetter = {
  title: 'Hey there! 👋',
  text: 'Welcome to the PenPals app.'
};

const getInitialState = async () => {
  const read = localStorage.getItem('read');

  if (read === false || read === undefined) {
    return [helloLetter];
  }

  return [];
};

export default getInitialState;
