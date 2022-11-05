import servicioEsme from '../../services/esme'
import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import Tooltip from '@material-ui/core/Tooltip';
import Nuevo from './NuevaClase'

const TablaNotificaciones = () => {
    let params = useParams()
    let id = params.id
    const [alumnos, setAlumnos] = useState([''])
    const [clase, setClase] = useState([])
    const [usuario, setUsuario] = useState([''])
    const navigate = useNavigate();
    useEffect(() => {
        traer()
       
     
     
      }, [])


    const traer = async () => {
        try {
     
            
              const lotes  = await servicioEsme.alumnosdelcurso(id)
              setAlumnos(lotes)            
          
          
           
        } catch (error) {
            
        }
      
      




    }

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
    <div>
            < EditIcon/>
         
            </div>
          </>
        );
      }
    // definimos las columnas
   
    const columns = [
        {
            name: "nombre",
            label: "nombre",

        },
        {
            name: "apellido",
            label: "apellido",
        },
       
        {
            name: "dni",
            label:"dni",
           
        },
    
        {
            name: "Ver/Contestar",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderer(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },   
 

    ];

const options = {

    /*    rowsPerPage: 10,
       download: false, // hide csv download option
       onTableInit: this.handleTableInit,
       onTableChange: this.handleTableChange, */
};
// renderiza la data table
return (
    <div>
   
   <h2>  {clase ? <>{clase.nombre}</>:<>etc</>}</h2>
   
        <MUIDataTable
        
            title={'Alumnos del curso'}
            data={alumnos}
            columns={columns}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                }
            ]}
            options={options}


        />
    </div>
)
}
export default TablaNotificaciones