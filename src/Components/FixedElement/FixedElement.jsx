
import { Outlet } from 'react-router-dom';
import NavBar from '../WebHeading/NavBar';
import Footer from '../Footer/Footer';

const FixedElement = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FixedElement;