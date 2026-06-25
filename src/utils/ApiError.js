class ApiError extends Error {
    constructor(
        message = "Something went wrong",
         statusCode,
          error=[],
        statck="") {
        super(message);
        this.statusCode = statusCode;
        this.data =null
        this.errors =errors
        this.message = message
        this.sucesss =false;

        if(statck){

            this.stack = statck
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }

        export default ApiError;
    }
}