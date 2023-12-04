import React from 'react';
import Subir from "./components/Subir";
import Cerrar from "./components/Cerrar";
import Ver from "./components/Ver";
import MyMenu from "./components/MyMenu";
import { Routes, Route, Hashrouter } from "react-router-dom";
import MiResumen from './components/Miresumen';

function App() {
 const [resumenVisible, setResumenVisible]=React.useState(false)
  return (
    <>
<MyMenu setResumenVisible={setResumenVisible}/>
<Routes>
<Route exact path="/subir" element={   <Subir /> }/>
<Route exact path="/ver" element={<Ver />} />
<Route exact path="/cerrar" element={<Cerrar />} />
<Route exact path="/resumen" element={<MiResumen resumenVisible={resumenVisible}/>} />
</Routes>
</>
  );
}

export default App;

