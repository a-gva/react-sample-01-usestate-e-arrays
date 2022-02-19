import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCountTwo from './components/HookCountTwo'
import HookCounterThree from './components/HookCounterThree'
import HookCounterFour from './components/HookCounterFour'

function App() {
    return (
        <div className='App'>
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCountTwo /> */}
            {/* <HookCounterThree /> */}
            <HookCounterFour />
        </div>
    )
}

export default App
