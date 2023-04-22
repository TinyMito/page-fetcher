const request = require('request');
const fs = require('fs');
const command = process.argv.slice(2); // Input from node

request(`${command[0]}`, (error, response, body) => {
  const size = body.length; // Get the file size 1 byte per character

  if (error) {
    // Print the error if one occurred
    console.log('error:', error);
  }
  if (response) {
    // Print the response status code if a response was received
    console.log('statusCode:', response && response.statusCode);
  }

  fs.writeFile(`${command[1]}`, body, err => {
    // Write to file

    if (err) {
      // If error, output error message.
      console.error(err);
    }

    console.log(`Downloaded and saved ${size} bytes to ${command[1]}`); // If success
  });

});






