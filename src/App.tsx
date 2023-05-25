import "./App.css";
import Home from "./page/home";
import Login from "./page/login";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </header>
      </div>
    </Provider>
  );
}

export default App;
