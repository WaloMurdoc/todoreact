import './App.css';
import Logo from './componentes/Logo';
import waloDevLogo from './imagenes/LogoHorizontalNoFondo.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <Logo 
        dirLogo={waloDevLogo} />
      <div className='tareas-lista-principal'>
        <h1 >Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
