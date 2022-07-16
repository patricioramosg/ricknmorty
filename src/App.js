import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Personajes from './Views/Personajes';
import Lugares from './Views/Lugares';
import Episodios from './Views/Episodios';
import DetallePersonaje from './Views/DetallePersonaje';
import DetalleEpisodios from './Views/DetalleEpisodios';
import DetalleLugares from './Views/DetalleLugares';
import injectContext from './Store/appcontext';
import CreateUser from './Views/CreateUser';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='personajes' element={<Personajes />} />
        <Route path='personajes/:id' element={<DetallePersonaje />} />
        <Route path='lugares' element={<Lugares />} />
        <Route path='lugares/:id' element={<DetalleLugares />} />
        <Route path='episodios' element={<Episodios />} />
        <Route path='episodios/:id' element={<DetalleEpisodios />} />
        <Route path='createuser' element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
