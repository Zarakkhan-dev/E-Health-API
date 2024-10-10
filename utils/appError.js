class AppError extends Error {
    constructor(message, statusCode) {
        super(message); // Call the Error constructor with the message
        this.statusCode = statusCode; // Set the status code
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; // Determine if it's a client or server error
        this.isOperational = true; // Mark as an operational error (vs. programming errors)

        // Capture the stack trace for debugging
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;
