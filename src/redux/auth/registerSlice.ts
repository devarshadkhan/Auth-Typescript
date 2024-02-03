import { RegisterInitialState } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState : RegisterInitialState = { 
   email: "",
   password:"",
   fullName:""
 } 

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers(builder) {
      
  },
})

export const {  } = counterSlice.actions
export default counterSlice.reducer