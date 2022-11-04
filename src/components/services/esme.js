import axios from "axios"


const baseUrl = 'https://api.santacatalinafideicomiso.com/esme/'

//const  baseUrl = 'http://localhost:4000/esme/'





const listaCursos = async () => {
 
    const { data } = await axios.get(baseUrl +'listacursos/')
    console.log(data)
    return data
  
  }

  
const alumno = async (id) => {
 
  const { data } = await axios.get(baseUrl +'alumno/'+id)
  console.log(data)
  return data

}

  const clases = async (id) => {
 
    const { data } = await axios.get(baseUrl +'clases/'+id)
    console.log(data)
    return data
  
  }

  const alumnos = async () => {
   
    const { data } = await axios.get(baseUrl +'alumnos/')
    
    return data
  
  }

  const nuevoCurso = async (form) => {

    const { data } = await axios.post(baseUrl +'nuevocurso/', form)
    return data
   
  }
  const nuevaClase = async (form) => {

    const { data } = await axios.post(baseUrl +'nuevaclase/', form)
 
    return data 
  
  
  }

  const nuevoAlumno = async (form) => {

    const { data } = await axios.post(baseUrl +'nuevoalumno/', form)
    
    return data
  
  }
  

export default { alumnos,alumno,nuevoAlumno, listaCursos,nuevoCurso,clases,nuevaClase};