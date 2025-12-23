import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import './styles/tailwind.css'
import { Provider } from 'react-redux'
import store from './store/store'

// MSW setup for mocking
if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/server')
  await worker.start({ onUnhandledRequest: 'bypass' })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)