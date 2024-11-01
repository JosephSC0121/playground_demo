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
      const res = await axios.post('http://localhost/chat/chat', { question })

      setResponse(res.data.response.content)
    } catch (error) {
      console.error('Error:', error)
      setResponse('An error occurred. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Box marginTop="20px">
          <Typography variant="h4" gutterBottom>
            ¿Estás estancado? Pregúntale al chatbot
          </Typography>
        </Box>
        <div className="m-10">
          <div className="m-10">
            <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
              {response}
            </Typography>
          </div>
          <TextField
            fullWidth
            label="Pregunta lo que quieras!..."
            variant="outlined"
            value={question}
            onChange={handleInputChange}
            style={{ marginBottom: '20px' }}
          />
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Enviar'}
            </Button>
          </Box>
        </div>
      </Container>
    </div>
  )
}
