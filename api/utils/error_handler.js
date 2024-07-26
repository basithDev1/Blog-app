
//this util function is to create a custome error with the status code and message
export const errorHandler=(statusCode,message)=>{
    const err = new Error();
    err.statusCode = statusCode;
    err.message = message;
    return err
}