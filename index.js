const fs = require('fs');

// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

// The text to synthesize
const text = 'Dave Coplin is trying to explain to me why people.across two continents are , suddenly allowing their employers to put microchips under their skin.';

// Construct the request
const request = {
  input: {text: text},
  // Select the language and SSML Voice Gender (optional)
  voice: { languageCode: 'en-US', ssmlGender: 'MALE',name : 'en-US-Wavenet-F'
},
  // Select the type of audio encoding
  audioConfig: {audioEncoding: 'MP3'},
};

// Performs the Text-to-Speech request
client.synthesizeSpeech(request, (err, response) => {
  if (err) {
    console.error('ERROR:', err);
    return;
  }

  // Write the binary audio content to a local file
  fs.writeFile('output.mp3', response.audioContent, 'binary', err => {
    if (err) {
      console.error('ERROR:', err);
      return;
    }
    console.log('Audio content written to file: output1.mp3');
  });
});