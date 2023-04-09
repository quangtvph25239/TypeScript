import {Outlet} from 'react-router-dom'

import UserFooter from "../userFooter"
import UserHeader from "../userHeader"


const UserProduct = () => {
    return <>
        <UserHeader/>
        <Outlet/>
        <UserFooter/>
    </>
}

export default UserProduct
