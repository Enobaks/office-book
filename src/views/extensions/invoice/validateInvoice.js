import React from 'react'
export const validate = (obj)=>{
    let errs = []
    for(let values in obj){
       if(typeof obj[values] === 'function') continue
       if(typeof obj[values] === 'number') continue
       if(typeof obj[values] === 'object' && Array.isArray(obj[values])){
           console.log(obj[values])
           if(obj[values].length <= 0){
               errs.push(values)
           }
       }
       if(typeof obj[values] === 'object' && (!Array.isArray(obj[values]))){
           for(let val in obj[values]){
               if(obj[values][val].trim().length < 1){
                    errs.push(val)
               }
               if((val === 'email' || val.includes('mail')) && obj[values][val].trim().length > 0){
                    if(!validateEmail(obj[values][val].toLowerCase())){
                        errs.push({value: val, message: 'Kindly input a valid email'})
                        continue
                    }
               }
           }
       }
    }
    return errs
}
export const resetErrorObj=(obj, callback)=>{
    for(let val in obj){
        obj[val] = ''
    }
    callback(obj)
}
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export const setError = (arr, errorObj, callback)=>{
    for(let values of arr){

        if(typeof values === 'object' && values.value){
            const {value, message} = values
            if(errorObj.hasOwnProperty(`${value}Errors`)){
                errorObj[`${value}Errors`] = message
                continue
            }
        }
        if(typeof values === 'string'){
            if(errorObj.hasOwnProperty(`${values}Errors`)){
                errorObj[`${values}Errors`] = `${values} cannot be empty`
            }
        }
    }
    callback(errorObj)
}
export const resetFields = (errorObj, callback)=>{
    for(let values in errorObj){
        errorObj[values] = ''
    }
    callback(errorObj)
}
export const displayError = (error)=>{
    if(error.includes("_")){
        const arr = error.split('_')
        return(
            <small className="error-txt">
                {arr[1].charAt(0).toUpperCase() + arr[1].slice(1)}
            </small>
        )
    }
    return(
        <small className="error-txt">
            {error.charAt(0).toUpperCase() + error.slice(1)}
        </small>
    )
}
export const createDate = ()=>{
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
}