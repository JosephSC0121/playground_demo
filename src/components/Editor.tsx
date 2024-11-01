import Editor from '@monaco-editor/react'
import React from 'react'
import { useState } from 'react'

interface CodeEditorProps {
  language: string
}

export function CodeEditor({ language }: CodeEditorProps) {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  language = language.toLocaleLowerCase()
  console.log(language)
  return (
    <main className="flex flex-col w-1/2">
      <div className="w-full flex flex-col gap-2">
        <div className="flex w-full justify-end align-middle gap-2">
        </div>
      </div>
      <Editor
        height="80vh"
        language={language}
        theme="vs-dark"
        className="max-w-5xl"
        value={code}
        onChange={(value) => setCode(value || '')}
      />
      <button
        type="button"
        className="rounded bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
        onClick={() => {
          setOutput("Executing...");
          fetch("http://37.27.11.226:8000/execute", {
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
              if (data.message) {
                setOutput(data.message);
              } else {
                setOutput(data.output);
              }
            });
        }}
      >
        Run
      </button>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6 whitespace-pre">{output}</div>
      </div>
    </main>
  )
}
