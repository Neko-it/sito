import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return( 
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags nome-top'>&lt;Neko&gt;</span>

            <Outlet />
            
            <span className='tags nome-bottom'>
            &lt;/ Matteo Frigo
            <FontAwesomeIcon icon={faPaw} color="Red"/>&gt;
            </span>  
        </div>
    </div>
    )
}

export default Layout