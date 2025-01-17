import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import store, {persistor} from './Redux/store.js'
import { BrowserRouter as Routes } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
            <App />
        </Routes>
      </PersistGate>
  </Provider>
)
