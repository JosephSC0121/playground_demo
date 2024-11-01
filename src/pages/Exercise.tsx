import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownCard } from '../components/Markdown-Card';
import { CodeEditor } from '../components/Editor';
import Sidebar from '../components/Sidebar';
import { useExercise } from '../hooks/useExercise';
import Dialog from '@mui/material/Dialog';
import Chatbot from '../components/Chatbot';
import React from 'react';

function Exercise() {
  const { exercise } = useParams();
  const exerciseTitle = exercise ?? '404';
  const data = useExercise(exerciseTitle);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen p-4 md:p-6">
      <div className="flex flex-row justify-between items-center mb-4">
        <Sidebar />
        <button 
          onClick={openDialog} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
            <path d="M12 2v2" />
            <path d="M9 12v9" />
            <path d="M15 12v9" />
            <path d="M5 16l4 -2" />
            <path d="M15 14l4 2" />
            <path d="M9 18h6" />
            <path d="M10 8v.01" />
            <path d="M14 8v.01" />
          </svg>
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 flex-1">
        <div className="bg-white flex-1 p-4 shadow-lg rounded-md">
          {data && <MarkdownCard>{data.description}</MarkdownCard>}
        </div>
        {data && (
          <div className="bg-white flex-1 shadow-lg rounded-md flex">
            <div className="w-full h-full">
              <CodeEditor language={data.languaje}/>
            </div>
          </div>
        )}
      </div>

      <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth={true} maxWidth="sm">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <Chatbot />
        </div>
      </Dialog>
    </div>
  );
}

export default Exercise;
