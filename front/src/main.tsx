import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'

import { AppProviders } from './app/providers/AppProviders.tsx'
import reportWebVitals from './reportWebVitals.ts'

import '@/app/styles/globals.scss'

// Render the app
const rootElement = document.getElementById('app')

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <AppProviders />
    </StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
