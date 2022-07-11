import { useDispatch, useSelector } from "react-redux"
import { action } from "../../ReduxState/store"

export const Home = () => {

    const counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>{counter}</h1>
            <div>
                <button className="btn btn-success" onClick={() =>  dispatch(action.increament())}>+</button>&emsp;
                <button className="btn btn-danger" onClick={() => dispatch(action.decreament())}>-</button>&emsp;
                <button className="btn btn-primary" onClick={() => dispatch(action.addBy(10))}>10</button>
            </div>
        </div>
    )
}