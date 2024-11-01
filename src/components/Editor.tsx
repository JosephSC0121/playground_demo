import Editor from '@monaco-editor/react';
import React, { useState } from 'react';

interface CodeEditorProps {
  language: string;
}

export function CodeEditor({ language }: CodeEditorProps) {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  
  language = language.toLocaleLowerCase();
  console.log(language);
  
  const executeCode = () => {
    setLoading(true);
    setOutput("Executing...");
    fetch("http://37.27.11.226:8000", {
      method: "POST",
      body: JSON.stringify({
        language: language,
        code: code
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.message || data.output);
      })
      .catch((error) => {
        setOutput("Error executing code: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full flex flex-col gap-2">
        <div className="flex w-full justify-end align-middle gap-2">
        </div>
      </div>
      <Editor
        height="80vh" 
        language={language}
        theme="vs-dark"
        className="max-w-full w-full h-full"
        value={code}
        onChange={(value) => setCode(value || '')}
      />
      <button
        type="button"
        className="rounded bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={executeCode}
        disabled={loading}
      >
        {loading ? "Running..." : "Run"}
      </button>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6 whitespace-pre">{output}</div>
      </div>
    </div>
  );
}
