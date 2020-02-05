import { saveAs } from 'file-saver';
import Editor from './js/editor.js';
import styles from './css/index.css';

let defaults = {
  po1 : './assets/po1.po',
  po2 : './assets/po2.po',
}

let po1Raw = document.getElementById('po1Raw');
let po1Filename = document.getElementById('po1Filename');
let po1Download = document.getElementById('po1Download');

let po2Raw = document.getElementById('po2Raw');
let po2Filename = document.getElementById('po2Filename');
let po2Download = document.getElementById('po2Download');

let po1Editor = new Editor(po1Raw, handlePo1Update);
let po2Editor = new Editor(po2Raw, handlePo2Update);

fetch(defaults.po1)
  .then((response) => {
    return response.text()
  })
  .then((poText) => {
    po1Editor.setText(poText)
  });

fetch(defaults.po2)
  .then((response) => {
    return response.text()
  })
  .then((poText) => {
    po2Editor.setText(poText)
  });

po1Download.addEventListener('click', handleClick);
po2Download.addEventListener('click', handleClick);

function handlePo1Update(input){  
  console.log('updating po1...')
  
}

function handlePo2Update(input){
  console.log('updating po2...')

}

function handleClick(event) {
  let content, filename;

  if (event.target === po1Download) {
    content = po1Raw.value;
    filename = po1Filename.value + '.po';
  }
  if (event.target === po2Download) {
    content = po2Raw.value;
    filename = po2Filename.value + '.po';
  }
  if (content && filename) {
    var blob = new Blob([content], {
      type: "text/plain;charset=utf-8"
    });
    
    saveAs(blob, filename);
  }
}
