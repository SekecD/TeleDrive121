export class TelegramResponse {

    public body: Record<string, any> | any[];

    public statusCode: number | null;

    public error: string | null;
    /**
     * TelegramResponse constructor.
     *
     * @param body - The response body from the Telegram API.
     * @param statusCode - The HTTP status code of the response.
     * @param error - Any error message associated with the response.
     */
    constructor(
        body: Record<string, any> | any[],
        statusCode: number | null = null,
        error: string | null = null
    ) {
        this.body = body;
        this.statusCode = statusCode;
        this.error = error;
    }
}
