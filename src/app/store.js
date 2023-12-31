import {configureStore} from '@reduxjs/toolkit'
import  jobDetails  from '../features/jobSlice'


export const store= configureStore({
    reducer: {
        app: jobDetails
    },
})