// !Do not remove the Layout import
import Layout from '@layouts/VerticalLayout'

import classnames from 'classnames'
import { Navbar } from 'reactstrap'
const CustomNavbar = () => {
    return (

        <Navbar
            expand='lg'
            light
            className={classnames(
                `header-navbar navbar align-items-center navbar-shadow`
            )}
        >

            <div className='navbar-container d-flex content'>
                <h1>Admin Dashboard</h1>
            </div>
        </Navbar>
    )
}
const VerticalLayout = props => {
    return (
        <Layout navbar={<CustomNavbar />} {...props}>
            {props.children}
        </Layout>
    )
}
export default VerticalLayout
