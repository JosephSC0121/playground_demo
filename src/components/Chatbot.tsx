import React, { useState } from 'react'
import axios from 'axios'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material'

export default function Chatbot() {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value)
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const res = await axios.post('https://api-playground.josephsilvacasas.com/chat/chat', { question })
      setResponse(res.data.response.content)
    } catch (error) {
      console.error('Error:', error)
      setResponse('An error occurred. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div>
      <Box textAlign="center" mb={3}>
        <Typography variant="h4" gutterBottom>
          ¿Estás estancado? Pregúntale al chatbot
        </Typography>
      </Box>

      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" position="fixed" top={0} bottom={0} left={0} right={0} bgcolor="rgba(255, 255, 255, 0.7)" zIndex={10}>
          <CircularProgress size={50} />
        </Box>
      )}

      <Box mb={3} p={2} bgcolor="white" borderRadius="8px" boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)">
        <Typography variant="body1" style={{ whiteSpace: 'pre-wrap', color: response ? '#333' : '#888' }}>
          {response || 'Aquí aparecerá la respuesta del chatbot.'}
        </Typography>
      </Box>

      <TextField
        fullWidth
        label="Pregunta lo que quieras..."
        variant="outlined"
        value={question}
        onChange={handleInputChange}
        sx={{ marginBottom: '20px', borderRadius: '8px', backgroundColor: 'white' }}
      />

      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
          sx={{
            width: '150px',
            height: '45px',
            borderRadius: '25px',
            backgroundColor: '#1976d2',
            ':hover': { backgroundColor: '#1565c0' }
          }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Enviar'}
        </Button>
      </Box>
    </div>
  )
}
