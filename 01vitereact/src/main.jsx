import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>Custom App !</div>
    )
}

createRoot(document.getElementById('root')).render(
 <>
   <App />
  <MyApp/>
 </> 
  
)
