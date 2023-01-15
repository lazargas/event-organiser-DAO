import React, { useContext } from 'react'
import { Box, AppBar, Typography, Button, Toolbar, styled } from '@mui/material'
import {IconButton, Menu} from '@mui/icons-material'
import { EventProvider } from '../../context/Event'
import { EventContext } from '../../context/Event'

const Container = styled(Box)`
background-color:#7a1100;
color:#FFFFFF;
`;

const StyledText = styled(Typography)`
font-size: 25px;
font-weight: 600;
font-family: 'Poppins', sans-serif;
`;

const NavBar = () => {
    const {connectWallet, currentAccount } = useContext(EventContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Container position="static">
      <Toolbar>
        
        
        <StyledText variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BookYourShow
        </StyledText>
        <Button color="inherit" onClick={()=>{connectWallet()}}>
            {
                currentAccount ? currentAccount : <p>Connect</p>
            }
        </Button>
      </Toolbar>
    </Container>
  </Box>
  )
}

export default NavBar