import { useDispatch, useSelector } from "react-redux/es/exports"
import { FcRating } from 'react-icons/fc'
import {FaRupeeSign} from 'react-icons/fa'
import {SiQuantcast} from 'react-icons/si'
import {TbSum} from 'react-icons/tb'
import {BsFillCreditCardFill, BsPlusCircleFill} from 'react-icons/bs'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {AiFillMinusCircle} from 'react-icons/ai'
import { cartActions } from "../../ReduxState/Cart/Cart"

export const Cart = () => {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    return(
        <div className="container">
            <div className="row justify-content-around mt-5"> 
                {
                    cart.cartItems.map((item) => {
                        return(
                            <div key={`${item.image}-${item.id}`} className="col-10 col-sm-6 col-lg-4 shadow p-3">
                                <img src={`${item.image}`} alt={`${item.image}`} style={{height:'250px'}} className='w-100' />
                                
                                <div className="d-flex flex-row justify-content-around align-item-end mt-3">
                                    <div className="text-center">
                                        <FaRupeeSign /><span>{item.price}</span>
                                            <div className="d-flex flex-row jutify-content-center align-items-center mt-2">
                                                <FcRating />&ensp;<span>{item.rating}</span>&emsp;                                          
                                                <SiQuantcast />&ensp;<span>{item.qts}</span>
                                            </div>
                                        <TbSum />&ensp;<span style={{color:'red'}}>{item.price * item.qts}</span>
                                    </div>
                                    <div>
                                        <BsPlusCircleFill style={{fontSize:'20px',fontWeight:'bold',color:'green'}} onClick={() => dispatch(cartActions.addItem(item))} />&ensp;<span>{item.qts}</span>&ensp;<AiFillMinusCircle style={{fontSize:'20px',fontWeight:'bold',color:'red'}}  onClick={() => dispatch(cartActions.removeItem(item))}  />
                                    </div>
                                </div>

                             </div>
                        )
                    })
                }
            </div>
            {
                cart.qts === 0 ? 
                <>
                    <h1 className="text-center">Cart is Empty</h1>
                </>
                :
                <>
                    <div className="row justify-content-around mt-3">
                        <div className="col-9">
                            <div className="d-flex flex-row justify-content-center align-items-center">                
                                <BsFillCreditCardFill style={{fontSize:'40px'}} />&emsp;<span style={{fontSize:'20px',fontWeight:'bold',color:'green'}}>{cart.totalPrice}</span>
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center">                
                                <MdProductionQuantityLimits style={{fontSize:'40px'}} />&emsp;<span style={{fontSize:'20px',fontWeight:'bold',color:'green'}}>{cart.qts}</span>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}