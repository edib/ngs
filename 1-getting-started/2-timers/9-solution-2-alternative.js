let counter = 0;
const greeting = delay =>
  setTimeout(() => {
    console.log('Hello World. ' + delay*100);
    ++counter;
    if (counter % 5 === 0) {
      ++delay;
    }
    greeting(delay);
  }, delay * 100);

greeting(1);
