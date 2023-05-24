import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from "react-router-dom";
import PrimaryNav from "./primary-nav/PrimaryNav";

function App() {

    return (
        <div className='App'>
            <PrimaryNav />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
