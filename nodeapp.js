setInterval(() => console.log('.'), 500);

const handle = (SIGNAL) => process.on(SIGNAL, () => {
  console.log(`Got signal ${SIGNAL}...`);
  setTimeout(() => {
    console.log('Bye!');
    process.exit(0);
  }, 1000);
});

handle('SIGBREAK');
handle('SIGHUP');
handle('SIGINT');
handle('SIGPIPE');
handle('SIGTERM');
handle('SIGUSR1');
handle('SIGWINCH');

console.log(`PID: ${process.pid}`);
console.log(process.argv);
