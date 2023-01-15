import React from 'react'
import { useState,useContext } from 'react';
import { EventContext } from '../../context/Event';
import {InputBase, styled, Divider} from '@mui/material'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '../Input/Input';
import {InputField} from '@mui/material'

const dialogStyle = {
    height: '95%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden',
    backgroundColor: '#f5f5dc'
}

const StyledDialogTitle = styled(DialogTitle)`
font-weight: 600;
color: ##7a1100 ;
`;

const styledTextField = styled(TextField)`
margin: 10px 0;
padding: 10px 0;
`;

const styledDialogContent = styled(DialogContent)`
display: flex-box;
`;


export default function FormDialog({open,setOpen}) {
    
    const {formInput,setFormInput} = useContext(EventContext);
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    

  
    return (
        <div>
        <Dialog maxWidth={'md'} PaperProps={{ sx: dialogStyle }} open={open} onClose={handleClose}>
          <StyledDialogTitle>Create Your Event</StyledDialogTitle>
          <DialogContent>
         
          <InputBase
              name="Event Name"
              placeholder='Event Name'
              required={true}
              fullWidth
              margin='dense'
              sx={{
                margin:'20px 0'
              }}
              onChange= {(e) => setFormInput({ ...formInput, name: e.target.value })  }
            />
            <Divider/>
            <InputBase
              name="Date"
              placeholder='Event Date'
              required={true}
              fullWidth
              margin='dense'
              sx={{
                margin:'20px 0'
              }}
              onChange= {(e) => setFormInput({ ...formInput, date: (e.target.value).toString() })  }
              type='date'
            />
            <Divider/>
            <InputBase
              name="Ticket Price"
              placeholder='₹ Ticket Price'
              required={true}
              fullWidth
              margin='dense'
              sx={{
                margin:'20px 0'
              }}
              onChange= {(e) => setFormInput({ ...formInput, price: e.target.value })  }
            />
            <Divider/>
           <InputBase
              name="tickets"
              placeholder='No. of Tickets'
              required={true}
              fullWidth
              margin='dense'
              sx={{
                margin:'20px 0'
              }}
              onChange= {(e) => setFormInput({ ...formInput, ticketCount: e.target.value })  }
            />
            <Divider/>


          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
            {console.log(formInput)}
          </DialogActions>
        </Dialog>
      </div>
    );
  }