import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/scss/now-ui-kit.scss'

// styles for this kit
import "bootstrap/scss/bootstrap.scss";
import "../assets/scss/paper-kit.scss?v=1.3.0";
import "../assets/demo/demo.css?v=1.3.0";
// old
// import "../assets/scss/now-ui-kit.scss?v=1.4.0";
// import "../assets/demo/demo.css?v=1.4.0";
// import "../assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// redux
import configureStore from '../redux/store/store'
import { Provider } from "react-redux";
const { store } = configureStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}



export default MyApp
