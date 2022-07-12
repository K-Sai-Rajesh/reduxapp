import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'
import { useSelector } from "react-redux"
import {GoHome} from 'react-icons/go'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'

export const Navbar = () => {

    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate()

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
                    <li className="nav-item">
                        <Link to='/' className='link' >
                            <GoHome />
                        </Link>
                    </li>&emsp;
                    <li className="nav-item">
                        <Link to='/' className='link' >
                            <CgProfile />
                        </Link>
                    </li>
                    <li className="nav-item"> 
                    </li>
                </ul>
                <form className="d-flex pe-5">
                    <button className="btn btn-success d-flex flex-row justify-content-center align-items-center"
                            onClick={(e) => {e.preventDefault() 
                                navigate('/cart')}}
                    >
                        <Link to='/'className='link'>
                            <AiOutlineShoppingCart style={{color:'#ffffff'}}  />
                        </Link><span style={{fontSize:'13px'}} className="ps-2">{cart.qts}</span> 
                    </button>     
                </form>
                </div>
            </div>
        </nav>
        </>
    )
}