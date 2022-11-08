import servicioEsme from '../../services/esme'
import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import MUIDataTable from "mui-datatables";
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
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
     
            
              const lotes  = await servicioEsme.alumnosdelcursoclase(id)
              setAlumnos(lotes)            
          
          
           
        } catch (error) {
            
        }
      
      




    }
    const ponerpresente = async (index) => {
        console.log(id)
        const mandar= {
           id_alumnoo: alumnos[index].id_alumno,
            id_clasee: id
        }
    await servicioEsme.ponerpresente(mandar)
    traer()
 
    } 
    const ponerausente = async (index) => {
        console.log(id)
        const mandar= {
           id_alumnoo: alumnos[index].id_alumno,
            id_clasee: id
        }
    await servicioEsme.ponerausente(mandar)
    traer()
 
    } 
    

    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
    <div>
    <Tooltip title="Presente" arrow>
    < PersonOutlineOutlinedIcon
     onClick={() =>  {ponerpresente(dataIndex) }} />
    </Tooltip>
    <Tooltip title="Ausente" arrow>
    < PersonOffOutlinedIcon
      onClick={() =>  {ponerausente(dataIndex) }}  />
    </Tooltip>
   
            </div>
          </>
        );
      }
    // definimos las columnas

    function present(dataIndex, rowIndex, data, onClick) {
        return (
          <>
    <div>
           
            { alumnos[dataIndex].otroo === null ? <>sin def</>:<>{alumnos[dataIndex].otroo} </> }
            </div>
          </>
        );
      }
   
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
            name: "Asistencia",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                present(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },   
        {
            name: "Presente/Ausente",
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
        
            title={'Asistencia'}
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