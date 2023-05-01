import Navbar from '../navbar/index.jsx'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (<>
        <Navbar />
        <Outlet />

    </>);
}

export default Layout; <>
    <Navbar />
    <Outlet />

</>