const initialData = {
    list:[]
} ;

const todoReducer = (state=initialData, action)=>{
    console.log(`Action ${action.payload}`)
    switch(action.type){
        case "Add":
            const {id, data}= action.payload
            console.log(id, data)
            if(data.length >2){
                
                return {
                    ...state,
                    list:[
                        ...state.list,
                        {
                            id:id,
                            data:data
                        }]
                    }
                }

            case "Delete":
               const newList = state.list.filter((element)=>element.id !== action.id)
                return {
                    ...state,
                   list:newList
                }
        // case "Delete":
        // case "Remove":
        default: return state
    }

}

export default todoReducer;