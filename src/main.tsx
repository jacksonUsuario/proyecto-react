import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Card from './components/Card.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <div className='containerCards'>
      <VariosCard/>
      <VariosCard/>
    </div>
  </React.StrictMode>,
)


function VariosCard() {
  return(
    <>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </>
  )
}
