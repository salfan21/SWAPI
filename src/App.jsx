import { React} from 'react';
import { Route, Routes} from 'react-router-dom';

import Layout from './components/Layout';
import { Characters } from './pages/characters';
import { Films } from './pages/films';
import { Species } from './pages/species';
import { Starships } from './pages/starships';
import { Planets } from './pages/planets';
import { Vechiles } from './pages/vehicles';
import { Error } from './pages/error';
import { Single } from './pages/single';

function App() {
return (
  <Routes>
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<null/>}/>
        <Route path='people/page/:id' element={<Characters/>}/>
        <Route path='films/page/:id' element={<Films/>}/>
        <Route path='species/page/:id' element={<Species/>}/>
        <Route path='starships/page/:id' element={<Starships/>}/>
        <Route path='vehicles/page/:id' element={<Vechiles/>}/>
        <Route path='planets/page/:id' element={<Planets/>}/>
        <Route path=':slug/:id' element={<Single/>}/>
        <Route path='*' element={<Error/>}/>
    </Route>
  </Routes>
);
}
export default App;