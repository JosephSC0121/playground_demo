import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import { Link } from 'react-router-dom'

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      className="bg-primary text-white"
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 2,
        paddingRight: 2,
        height: '100%'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: 'Aprender', icon: <MenuBookRoundedIcon className="text-white" />, link: '/main' },
          {
            text: 'Perfil',
            icon: <AccountCircleRoundedIcon className="text-white" />,
            link: '/profile'
          },
        ].map((item) => (
          <ListItem key={item.text} disablePadding component={Link} to={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <List>
        {['Salir'].map((text) => (
          <ListItem key={text} disablePadding component={Link} to="/">
            <ListItemIcon>
              <PowerSettingsNewRoundedIcon className="text-white" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>
        <MenuRoundedIcon className="text-black" />
      </Button>
      <SwipeableDrawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </div>
  )
}
