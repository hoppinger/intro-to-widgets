import React from 'react'
import './App.css'

import { Widget, stateful, Action, any, mkWidget } from "widgets-for-react"
import { setter } from "ts-lenses"
import { TextField } from 'office-ui-fabric-react/lib/TextField'
import { Stack } from 'office-ui-fabric-react/lib/Stack'

const JSXWidget = function<s>(w:(setState:(_:s) => void) => JSX.Element) : Widget<s> {
  return mkWidget({run:w})
}

interface State {
  name:string
  surname:string
  age:number
}

const app = () : Widget<State> => 
  stateful<State>()(s0 => 
    any<Action<State>>()([
      JSXWidget(
        setState =>
          <TextField label="Name" value={s0.name} onChange={e => setState(setter("name", (e.target as any).value))} />
      ),
      JSXWidget(
        setState =>
          <TextField label="Surname" value={s0.surname} onChange={e => setState(setter("surname", (e.target as any).value))} />
      ),
      JSXWidget(
        setState =>
          <TextField label="Age" type={"number"} value={s0.age as any} onChange={e => setState(setter("age", (e.target as any).valueAsNumber))} />
        )
    ]).map(a => a(s0)).wrapHTML(_ => <Stack>{_}</Stack>)
  )({ name:"", surname:"", age:18 })

function App() {
  return (
    <div className="App">
      {app().run(s => console.log(`The state is now: ${JSON.stringify(s)}`))}
    </div>
  );
}

export default App;
