"use client"

import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = ({ value, onChange }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="chrome"
      value={value}
      onChange={onChange}
      fontSize={14}
      width="50%"
      height="300px"
    />
  );
};

export default CodeEditor;