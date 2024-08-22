
import { Outlet } from 'react-router-dom';
import NavBar from '../WebHeading/NavBar';
import Footer from '../Footer/Footer';

const FixedElement = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-510px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FixedElement;