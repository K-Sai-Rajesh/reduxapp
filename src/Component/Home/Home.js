import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../../ReduxState/Cart/Cart"
import { BsCartPlus } from 'react-icons/bs'
import { useEffect, useState } from "react"
import { FcRating } from 'react-icons/fc'
import {FaRupeeSign} from 'react-icons/fa'
import {SiQuantcast} from 'react-icons/si'

export const Home = () => {

    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const [store,setStore] = useState(null)

    function handleSubmit(item){
        dispatch(cartActions.addItem({
            category: item.category,
            id: item.id,
            image: item.image,
            price: item.price,
            rating: item.rating.rate,
            title: item.title,
            qts : 1
        }))
    }

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) =>{
            setStore(data)
        })
        .catch((err) => console.log(err))

    }, [])

    return(
        <div className="container">
          <div className="row justify-content-around">
            {
                store !== null ? 
                <>
                {
                    store.map((item) => {
                        return(
                            <>
                            <div className="col-9 col-sm-5 col-lg-3 mt-2 card shadow p-3">    
                                <img src={`${item.image}`} style={{height:'250px'}} className='w-100 p-3' alt={`${item.id}`} />
                                <div className="d-flex flex-row justify-content-around align-item-end">
                                    <div>
                                        <FaRupeeSign /><span>{item.price}</span>
                                        <div >
                                            <div className="d-flex flex-row jutify-content-center align-items-center">
                                                <FcRating />&ensp;<span>{item.rating.rate}</span>
                                            </div>
                                            <div className="d-flex flex-row jutify-content-center align-items-center">                                            
                                                <SiQuantcast />&ensp;<span>{item.rating.count}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="align-self-end">
                                        <button className="btn btn-success" onClick={() => handleSubmit(item)}>
                                            <BsCartPlus />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
                </> : 
                <>
                <div class="spinner-border mt-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </>
            }
          </div>
        </div>
    )
}