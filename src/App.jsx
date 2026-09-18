import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
function App() {
return (
<main>
<h1>Task Manager</h1>
<input type="text" name="username" placeholder="Introdu denumirea sarcini"></input>
<button>Adauga</button>

</main>
);
}
export default App;