const initialList = {
    wishList: [],
    bookingList:[],
}
const apartmentReducer = (state =initialList, action)=>{
    switch(action.type){
        case 'ADD_TO_WISH_LIST':{
            const newState = {
                ...state,
                wishList: [...state.wishList, action.payload]
            }
            return newState;
        }
        case 'REMOVE_FROM_WISH_LIST':{
            return state;
        }
        default:{
            return state;
        }
    }
}
export default apartmentReducer