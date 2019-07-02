let animateSpinner = function(msg, callback){
  setTimeout(() => {
    if(msg.length === 0){
      console.log('\n');
      return;
    }
    callback(msg[0]);
    animateSpinner(msg.slice(1), callback);
  }, 100);
}

animateSpinner("|/-\\|", elem => process.stdout.write(`\r${elem}   `));