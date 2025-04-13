import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataContextProvider } from './Contexts/DataContextProvider'


createRoot(document.getElementById('root')).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
)
