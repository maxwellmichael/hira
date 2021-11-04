import { toast } from 'react-toastify';

export const HandleErrorResponse = (response)=>{
    if(!response.hasError){
        return console.log('Cannot handle error response because the provided response does not contain any error',response)
    }
    console.log(response.error)
    return toast.error(`An Error Occured Please Try again Later`);
    
}