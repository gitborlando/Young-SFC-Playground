import CodeMirror from 'codemirror'
import compile from './compile'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/matchbrackets'

var editor, editor2, parsedCode

function fromText() {
  const option = {
    lineNumbers: true,
    matchBrackets: true,
    mode: 'javascript',
    theme: 'neo',
    smartIndent: true,
    tabSize: 2,
    autoCloseBrackets: true,
  }

  editor = CodeMirror.fromTextArea(document.getElementById('editor'), option)
  editor2 = CodeMirror.fromTextArea(document.getElementById('editor2'), option)
}

function parser() {
  editor.save()
  const text = editor.getTextArea().value
  parsedCode = compile.parser(text)
  return parsedCode
}

function toBrowser() {
  return compile.browserfy(parsedCode)
}

function setValue(value) {
  editor2.setValue(value)
}

function getTextAreaValue() {
  return editor.getTextArea().value
}

export default {
  fromText, parser, toBrowser, setValue, getTextAreaValue
}