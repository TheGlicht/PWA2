function getConnectedUser() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation
      setTimeout(() => {
        // Resolve the promise with the connected user
        resolve("LoboS2");
      }, 1000);
    });
  }
  
  // Use the function to get the connected user
  getConnectedUser().then(user => {
    console.log(`El usuario ${user} está conectado`);
  });