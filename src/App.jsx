import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import FadeRegion from './components/FadeRegion/FadeRegion.jsx';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <FadeRegion style={{height: '15000px'}}>
                <h1>text fade test</h1>
            </FadeRegion>
            <FadeRegion>
                <h1 style={{fontSize: '5em'}}>Deepen your connection with the Qur&apos;an</h1>
            </FadeRegion>
            <FadeRegion>
                <h1 style={{fontSize: '10em'}}>Deepen your connection with the Qur&apos;an</h1>
            </FadeRegion>
            <FadeRegion>
                <h1 style={{fontSize: '5em'}}>Deepen your connection with the Qur&apos;an</h1>
            </FadeRegion>
            <FadeRegion>
                <h1 style={{fontSize: '10em'}}>Deepen your connection with the Qur&apos;an</h1>
            </FadeRegion>

            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>ChatGPT 5.0</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}