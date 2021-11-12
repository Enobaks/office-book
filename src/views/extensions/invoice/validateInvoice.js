import React from 'react'
export const validate = (obj)=>{
    let errs = []
    for(let values in obj){
       if(typeof obj[values] === 'function') continue
       if(typeof obj[values] === 'number') continue
       if(typeof obj[values] === 'object' && Array.isArray(obj[values])){
           console.log(obj[values])
           if(obj[values].length <= 0){
               console.log('here')
               errs.push(values)
           }
       }
       if(typeof obj[values] === 'object' && (!Array.isArray(obj[values]))){
           for(let val in obj[values]){
               if(obj[values][val].trim().length < 1){
                    errs.push(val)
               }
           }
       }
    }
    return errs
}
export const setError = (arr, errorObj, callback)=>{
    for(let values of arr){
        if(errorObj.hasOwnProperty(`${values}Errors`)){
            errorObj[`${values}Errors`] = `${values} cannot be empty`
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
            <small style={{color: "red"}}>
                {arr[1].charAt(0).toUpperCase() + arr[1].slice(1)}
            </small>
        )
    }
    return(
        <small style={{color: "red"}}>
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