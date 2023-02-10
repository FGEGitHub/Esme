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
  
const alumnosdelcurso = async (id) => {
 
  const { data } = await axios.get(baseUrl +'alumnosdelcurso/'+id)
  console.log(data)
  return data

}
const alumnosdelcursoclase = async (id) => {
 
  const { data } = await axios.get(baseUrl +'alumnosdelcursoclase/'+id)
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
  const asignarcurso = async (form) => {

    const { data } = await axios.post(baseUrl +'asignarcurso/', form)
    
    return data
  
  }
  const ponerpresente = async (form) => {

    const { data } = await axios.post(baseUrl +'ponerpresente/', form)
    
    return data
  
  }
  const ponerausente = async (form) => {

    const { data } = await axios.post(baseUrl +'ponerausente/', form)
    
    return data
  
  }

  const borrarcurso = async (id) => {

    const { data } = await axios.get(baseUrl +'borrarcurso/'+ id)
    
    return data
  
  }


  const borrarclase = async (id) => {

    const { data } = await axios.get(baseUrl +'borrarclase/'+ id)
    
    return data
  
  }
  
export default {borrarcurso, borrarclase,ponerausente,ponerpresente,alumnosdelcursoclase,alumnos,alumno,nuevoAlumno,alumnosdelcurso, asignarcurso,listaCursos,nuevoCurso,clases,nuevaClase};
