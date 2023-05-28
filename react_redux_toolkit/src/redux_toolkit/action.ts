import  axios  from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit'


async function fetchDataRequest() {
    alert(1)
        let res = await axios.get(`https://retoolapi.dev/sjGgh1/data`)
        if(res.data) {
            return res.data
        }
    
}
export const getDataRequest = createAsyncThunk("counter1111", fetchDataRequest)