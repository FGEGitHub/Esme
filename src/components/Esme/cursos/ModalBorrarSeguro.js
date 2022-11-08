import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import servicioEsme from '../../services/esme'
import {  useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [completo, setCompleto] = React.useState(false);
  const [form, setForm] = useState ({
    id:props.id
   })
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const rechazar =async (event)  => {
   
   
   const respuesta = await servicioEsme.borrarclase(props.id)
 
   props.getClients()
  window.location.reload(true)
 }
 const handleChange = (e) =>{
 setForm({  ...form, [e.target.name]: e.target.value })
 setCompleto(true)
 console.log(form)}

  return (
    <div>
      <DeleteIcon variant="outlined" onClick={handleClickOpen}>
       Borrar
      </DeleteIcon>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Borrar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Seguro que desea borrar?
          </DialogContentText>
          <form  onSubmit={rechazar}>
         
          
          
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <div><Button onClick={rechazar}>Borrar</Button> </div> 
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
