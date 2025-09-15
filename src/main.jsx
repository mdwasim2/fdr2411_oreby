import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import App from './App.jsx';
import { ContextApi } from './components/ContextApi.jsx';
import './index.css';
import { store } from './store';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextApi>
      <App />
    </ContextApi>
  </Provider>
);
