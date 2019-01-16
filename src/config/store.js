import {createStore, combineReducers} from 'redux'
import cartReducer from "../features/cart/reducer"
import selectedItem from "../features/cart/itemView"

const rootReducer = combineReducers({
    cart: cartReducer,
    itemView: selectedItem
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store