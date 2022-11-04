import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, CircularProgress } from '@mui/material';
import { Paper } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import BackupIcon from '@material-ui/icons/Backup';
import servicioEsme from '../../services/esme'

import React, { useCallback, useState, Fragment } from "react";





export default function Modal(props) {
  const [open, setOpen] = React.useState(false);
  //const usuario  = useUser().userContext
  const [enviarr, setEnviarr] = useState();
  const [fileUpload, setFileUpload] = useState(null);
  const [loading, setLoading] = useState(false)

  const [ultima, setUltima] = useState([''])
  const [habilitado, setHabilitado] = useState(false)
  const [pago, setPago] = useState({

    id: props.id,
  })

  const [cursos, setCursos] = useState([''])
  const [completo, setCompleto] = useState(false);




  const traer = async () => {
  
  

    const cbuss = await servicioEsme.listaCursos()
  
    setCursos(cbuss)




  }
  



  const handleClickOpen = () => {
    traer()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e) => {

    console.log(pago)

    // setPago({ ...pago, ['id']: props.id })
    setPago({ ...pago, [e.target.name]: e.target.value })


  }
  ////

  const [currency, setCurrency] = React.useState('EUR');




  const onDrop = useCallback((files, acceptedFiles) => {
    setLoading(true)
    const formData = new FormData();
    setFileUpload(acceptedFiles);
    formData.append('file', files[0]);
    setEnviarr(formData)
    setLoading(false)



  });





  
  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <Button variant="outlined" onClick={handleClickOpen}>

        Subir comprobante Zona {props.zona} Fraccion {props.fraccion} Manzana{props.manzana} {props.zona === 'PIT' ? <>Parcela {props.parcela} </> : <>Lote {props.lote} </> } 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div>
            


            <TextField component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate


              id="outlined-select-currency"
              select
              label="Elegir Curso"
            
              name="curso"
              onChange={handleChange}
              helperText="Por favor ingrese su CBU"
            >
              {
                cursos.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.nombre}-  {option.profesor}
                  </MenuItem>
                ))}
            </TextField>


            <br />

            <div>
              {/*  <NativeSelect
                  defaultValue={30}
                  onChange={handleChange}
                  inputProps={{
                    name: 'id',
                    id: 'uncontrolled-native',

                  }}

                >          
                        <option key={index} value={item['id']}>Elegir</option>
                        <option key={index} value={item['id']}>  {item['zona']}F{item['fraccion']}M{item['manzana']}P{item['parcela']}</option>
                      

                </NativeSelect>
 */}

            </div>







            <br />

            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField onChange={handleChange}
                id="filled-basic"
                label="Monto"
                name="monto"
                variant="filled"
                type="number" />
            </Box>
        


            

          


          </div>
        </DialogContent>
      </Dialog>
    </Box >




  );
}