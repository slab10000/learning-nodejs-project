import fs from 'fs';
import { generateWords } from './printer.js';

fs.writeFile('myFile.txt', generateWords(), (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully!');
  }
});

console.log('this prints first')