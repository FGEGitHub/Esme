
import Navbar from "../components/Navbar";
//////////esme
import CursosEsme from '../Paginas/Esme/Cursos';
import Curso from '../Paginas/Esme/Curso'
import Alumnos from '../Paginas/Esme/Alumnos'
import Alumno from '../Paginas/Esme/Alumno'



const Rutas = [
	 <Navbar/> ,

	

	
	/*{	path: '/',	element: <NotFound />
		}, */
		{ path: '/esme/cursos', element: <CursosEsme /> },
		{ path: '/esme/curso/:id', element: <Curso /> },
		{ path: '/esme/alumnos', element: <Alumnos /> },
		{ path: '/esme/alumno/:id', element: <Alumno /> },


];

export default Rutas;