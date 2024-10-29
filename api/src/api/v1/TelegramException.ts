export class TelegramException extends Error {
    private httpStatusCode: number | null;
   
    private responseBody: Record<string, any> | any[] | null;

    constructor(
        message: string = "",
        httpStatusCode: number | null = null,
        responseBody: Record<string, any> | any[] | null = null
    ) {
        super(message);
        this.name = "TelegramException";
        this.httpStatusCode = httpStatusCode;
        this.responseBody = responseBody;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TelegramException);
        }
    }


    public getResponseBody(): Record<string, any> | any[] | null {
        return this.responseBody;
    }

   
    public getHttpCode(): number | null {
        return this.httpStatusCode;
    }
}
