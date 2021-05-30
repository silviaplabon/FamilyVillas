const initialList = {
    wishList: [],
    bookingList: [],
}
const apartmentReducer = (state = initialList, action) => {
    switch (action.type) {
        case 'ADD_TO_WISH_LIST': {
            const newState = {
                ...state,
                wishList: [...state.wishList, action.payload]
            }
            return newState;
        }
        case 'REMOVE_FROM_WISH_LIST': {
            const newState = {
                ...state,
                wishList: state.wishList.filter((w) => w.id !== action.payload)
            }
            return newState;
        }

        case 'ADD_TO_ORDER_LIST': {
            const newState = {
                ...state,
                bookingList: [...state.bookingList, action.payload]
            }
            return newState;
        }
        case 'REMOVE_FROM_ORDER_LIST': {
            const newState = {
                ...state,
                bookingList: state.bookingList.filter((b) => b.id !== action.payload)
            }
            return newState;
        }
        case 'EMPTY_ORDER_LIST': {
            const newState = {
                bookingList: []
            }
            return newState;
        }
        
        default: {
            return state;
        }
    }
}
export default apartmentReducer;