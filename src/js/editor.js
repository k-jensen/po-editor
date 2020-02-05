import CodeMirror from 'codemirror';
import overlayMode from 'codemirror/addon/mode/overlay.js';
import searchCursor from 'codemirror/addon/search/searchcursor.js';
import markSelection from 'codemirror/addon/selection/mark-selection.js';
import lightTheme from 'codemirror/theme/duotone-light.css';
import darkTheme from 'codemirror/theme/duotone-dark.css';

export default class Editor {
    
    constructor(textArea, handleTrackUpdate){
        
        this.widgets = [];
        this.handleTrackUpdate = handleTrackUpdate;
        this.editor = CodeMirror.fromTextArea(textArea, {
            lineNumbers: true,
            mode: 'po',
            styleSelectedText: true,
            theme: 'duotone-light'
          });

        this.setupEventListeners();
          
    }

    setupEventListeners(){
        
        // let waiting;
        // this.editor.on('change', event => {
        //     clearTimeout(waiting);
        //     waiting = setTimeout(this.updateHints.bind(this), 500);
        // })
        // setTimeout(this.updateHints.bind(this), 100);

        this.editor.on('drop', event => {
            // clear the editor first before displaying file contents
            editor.setValue('');
        })

    }

    setText(text){
        this.editor.setValue(text);
        this.editor.save();
        console.log('text saved')
    }

    saveText(){
      this.editor.save();
    }

    getValue(){
      return this.editor.getValue();
    }

    

    updateHints(){
        // let widgets = this.widgets;
        // let editor = this.editor;
        // let handleTrackUpdate = this.handleTrackUpdate;
        
        // // remove line classes
        // editor.eachLine(line => {
        //     editor.removeLineClass(line, "background", "styled-background")  
        // })

        // editor.operation(function(){
        //     // remove line widgets
        //     widgets.forEach(widget => {
        //         editor.removeLineWidget(widget)
        //     })
        //     widgets.length = 0;

        //     let result = testVTT(editor.getValue());
            
        //     if(result.valid){
        //         handleTrackUpdate(result.input);
        //     }

        //     result.errorMarkers.forEach(marker => {
        //         let lineNumber = marker.marker.line - 1;
        //         let msg = document.createElement('div');
        //         let icon = msg.appendChild(document.createElement('span'));
        //         icon.innerHTML = "!!";
        //         icon.className = "lint-error-icon";
        //         msg.appendChild(document.createTextNode(marker.message))
        //         msg.className = "lint-error";
        //         editor.addLineClass(lineNumber, "background", "styled-background");
        //         widgets.push(editor.addLineWidget(lineNumber, msg, {coverGutter: false, noHScroll: true}))
        //     })
        // })
    }
}

CodeMirror.defineMode("po", function (config, parserConfig) {
    var poOverlay = {
      token: function (stream, state) {
          
        if (stream.match("msgid")) {
          return "keyword"
        }

        if (stream.match("msgstr")) {
            return "keyword"
        }

        let re = /#.*/
        if (stream.match(re)) {
          return 'comment'
        }

        while (stream.next() != null) { }
        return null;
      }
    };
    return CodeMirror.overlayMode(CodeMirror.getMode(config, parserConfig.backdrop || "text/plain"), poOverlay);
  });