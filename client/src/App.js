import { BrowserRouter } from 'react-router-dom';

import Login from "./pages/login";
import Routes from "./routes";

function App() {
  return(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
export default App;
