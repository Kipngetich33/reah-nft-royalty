import React, {useState} from 'react'
import * as backend from '../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib'

const reach = loadStdlib(process.env);
const { standardUnit } = reach;

function App() {

  console.log(standardUnit.length)

  return (
    <div>
      hello world, Here is a simple reach app
    </div>
  );
}

export default App;