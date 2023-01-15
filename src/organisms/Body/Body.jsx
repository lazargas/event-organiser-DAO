import React from 'react'
import { useState } from 'react'
import {Box,styled,Typography,Button} from '@mui/material'
import BuyTicket from './BuyTicket'
import CreateEvent from './CreateEvent'
import TransferTicket from './TransferTicket'
import CreateDialog from './createDiaog'

const Container = styled(Box)`
display: flex;
background:#f5f5dc;
`;

const Wrapper = styled(Box)`
margin: 200px 130px;
padding: 100px 50px;
height: 100;
background: #842727;
border-radius: 5px;

`;

const StyledButton = styled(Button)`
background: #a83e3e;
color:#f5f5dc;
`;


const Body = () => {

    const [dialogOpen,setDialogOpen] = useState(false); 

    const openCreateDialog = () => {
        if (dialogOpen) {
          setDialogOpen(false);
        } else if (!dialogOpen) {
          setDialogOpen(true);
        }
      };

  return (
    <>
    <Container>
        <Wrapper>
            <StyledButton variant='contained' onClick={()=>{openCreateDialog()}}>create Event</StyledButton>
            {dialogOpen?<CreateDialog open={dialogOpen} setOpen={setDialogOpen} />:null}
        </Wrapper>
        <Wrapper>
           <StyledButton variant='contained'>buy ticket</StyledButton> 
        </Wrapper>
        <Wrapper>
            <StyledButton variant='contained'>Transfer ticket</StyledButton>
        </Wrapper>
    </Container>
    </>
  )
}

export default Body