import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib'
import Mint from '../Pages/mint'

const reach = loadStdlib(process.env);
const { standardUnit } = reach;

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/mint' component={Mint}/>
      </Routes>
    </Router>
  );
}

export default App;