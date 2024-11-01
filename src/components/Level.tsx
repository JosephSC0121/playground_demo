import * as React from 'react'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { UserContext } from "../context/UserContext"
import { useContext } from 'react'

interface LinearWithValueLabelProps {
  value: number
}

function LinearWithValueLabel(props: LinearWithValueLabelProps): JSX.Element {
  const { value } = props

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={value} />
    </Box>
  )
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }): JSX.Element {
  const { value, ...rest } = props

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#474448'
            },
            '& .MuiLinearProgress-buffer': {
              backgroundColor: '#474448'
            }
          }}
          {...rest}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  )
}

export default function LinearProgressFromUser(): JSX.Element {
  const { user } = useContext(UserContext)
  const [progress, setProgress] = React.useState(user?.level || 0)

  React.useEffect(() => {
    if (user?.level !== undefined && user?.level !== null) {
      setProgress(user.level)
    }
  }, [user?.level])

  return <LinearWithValueLabel value={progress} />
}
