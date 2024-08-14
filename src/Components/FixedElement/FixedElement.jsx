
import { Outlet } from 'react-router-dom';
import NavBar from '../WebHeading/NavBar';

const FixedElement = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default FixedElement;