import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"


export const fetchData = createAsyncThunk(
    "products/fetchData",
   async (_,{rejectWithValue}) =>{
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          return data
        }
      } catch (err) {
        return rejectWithValue({error:"Data Not Found"});
      }
   }
)


export const upDateserver = createAsyncThunk(
  "products/upDateserver",
  async (item,{rejectWithValue})=>{
    const options = {
      method:"PATCH",
      headers:{
        "Content-Type":"application/json;Charset=UTF=8"
      },
      body:JSON.stringify(item)
    }
    console.log(item)
    try {
      const newurl = `${"https://fakestoreapi.com/products"}/${item.id}`
      const response = await fetch(newurl,options);
      if (response.ok) {
        const data = await response.json();
        console.log(item);
        return data
      }
    } catch (err) {
      return rejectWithValue({error:"Data Not Updated"});
    }
 })










export const productSlice = createSlice({
    name:"productSlice",
    initialState:{
      productdata:[],
      cartItems:[],
      error:"",
      isLoading:false
    },
    reducers:{
           addtoCart:(state,{payload})=>{
            state.cartItems = [...state.cartItems,{...payload,count:1}]
            console.log(state.cartItems)
           },
           removeItem:(state,action)=>{
            state.cartItems = state.cartItems.filter((val)=>val.id !== action.payload.id)
            console.log(state.cartItems)
           },
           modifyData:(state,action)=>{
              const index = state.cartItems.findIndex((val)=>val.id === action.payload.id)
              state.cartItems = [...state.cartItems.slice(0,index),
                {...state.cartItems[index],count:action.payload.count},
                ...state.cartItems.slice(index+1)]
           }
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchData.pending,(state)=>{
          state.isLoading = true
      })
      .addCase(fetchData.fulfilled,(state,action)=>{
        state.isLoading = false
        state.productdata = action.payload
        console.log(state.productdata)
        console.log(action.payload)
        state.error = ""
      })
      .addCase(fetchData.rejected,(state,action)=>{
        state.error = action.payload.error
      })
      .addCase(upDateserver.pending,(state)=>{
        state.isLoading = true
      })
      .addCase(upDateserver.fulfilled,(state,action)=>{
        state.isLoading = false
        const index = state.productdata.findIndex((val)=>val.id === action.payload.id)
        state.cartItems = [...state.cartItems.slice(0,index),
          {...state.list[index],qty:action.payload.qty},
        ]
            console.log(action.payload)
            console.log(state.cartItems)
       state.error = ""
      })
      .addCase(upDateserver.rejected,(state,action)=>{
        state.isLoading = false
        state.error = action.payload.error
      })
    }
})

export const {addtoCart,modifyData,removeItem} = productSlice.actions

export default productSlice.reducer