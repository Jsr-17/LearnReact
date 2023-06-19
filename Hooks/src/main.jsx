import React from 'react';
import ReactDOM from 'react-dom/client';
import { HooksApp } from './HooksApp';
import { CounterApp } from './01-useState/CounterApp';
import { CounterCustomHook } from './01-useState/CounterCustomhook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp></HooksApp> */}
    {/* <CounterApp></CounterApp> */}
    {/* <CounterCustomHook></CounterCustomHook> */}
    <SimpleForm></SimpleForm>

  </React.StrictMode>,
)
