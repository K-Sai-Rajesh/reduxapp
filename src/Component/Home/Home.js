import { useDispatch, useSelector } from "react-redux"

export const Home = () => {

    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>{counter}</h1>
            <div>
                <button className="btn btn-success" onClick={() =>  dispatch({type:"+"})}>+</button>&emsp;
                <button className="btn btn-danger" onClick={() => dispatch({type:"-"})}>-</button>&emsp;
                <button className="btn btn-primary" onClick={() => dispatch({type:"add",payload : 10})}>10</button>
            </div>
        </div>
    )
}