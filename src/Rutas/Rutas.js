import CursosEsme from '../Paginas/Esme/Cursos';
import Curso from '../Paginas/Esme/Curso'
import Alumnos from '../Paginas/Esme/Alumnos'







const Rutas = [


{ path: '/esme/cursos', element: <CursosEsme /> },
{ path: '/esme/curso/:id', element: <Curso /> },
{ path: '/esme/alumnos', element: <Alumnos /> },


]

export default Rutas;