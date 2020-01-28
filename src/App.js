import React from 'react';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import Bloque from './components/Blockly/src/Bloques'
import Contenido from './components/Contenido';
import ListaAlumnos from './pages/teacher/ListaAlumnos';
import Azar from './pages/teacher/Azar';
import Grupos from './pages/teacher/Grupos';
import Temporizador from './pages/teacher/Temporizador';
import Trivia from './pages/teacher/Trivia';

function App() {
  return (
    <BrowserRouter>
      <Contenido>
        <Switch>
          <Route exact path="/lista" component={ListaAlumnos} />
          <Route exact path="/azar/:user" component={Azar} />
          <Route exact path="/grupos/:user" component={Grupos} />
          <Route exact path="/temporizador/:user" component={Temporizador} />
          <Route exact path="/trivia/:user" component={Trivia} />
<<<<<<< HEAD
          <Route exact path="/chat" component={Chat} />
=======
          <Route exact path="/blockly" component={Bloque} />

>>>>>>> 9711e3cf4419017f4700e783408651f4f8a91ce9
          {/* <Route path="/404" component={NotFound} /> */}
          <Redirect from="/" to="/lista" />
        </Switch>
      </Contenido>
    </BrowserRouter>
  );
}

export default App;
