/**
 * Generic information about an error
 */
export class ErrorInformation {
    /** Error is managed by logic or is external */
    public external: boolean;
    /** Error code */
    public code: string;
    /** Error message */
    public message: string;
    /** Error Id */
    public messageId: string;
    /** Error message parts */
    public messageParts: string[];

    constructor(external: boolean, code: string, message: string, messageId: string, messageParts: string[]) {
        this.external = external;
        this.code = code;
        this.message = message;
        this.messageId = messageId;
        this.messageParts = messageParts;
    }

    public IsError(): boolean {
        return true;
    }
}

/**
 * Information about unexpected error in the request
 */
export class RequestError extends ErrorInformation {

    /**
     * Create a new instance using the request error response
     * @param requestErrorResponse Error request response
     */
    constructor(requestErrorResponse: any) {
        super(true, requestErrorResponse.status, requestErrorResponse.message, '', []);
    }
}

/**
 * Information about a logic managed error
 */
export class LogicError extends ErrorInformation {

    /**
     * Create a new instance using the logic error response
     * @param logicErrorResponse Logic error response.
     *      {resultCode: string,
     *       resultDescription: string,
     *       resultMessageId: string,
     *       resultMessageParts: string[]}
     */
    constructor(logicErrorResponse: any) {
        super(false, logicErrorResponse.resultCode, logicErrorResponse.resultDescription,
            logicErrorResponse.resultMessageId, logicErrorResponse.resultMessageParts);
    }

    public IsError(): boolean {
        return this.code !== '000' && this.code !== '';
    }
}

/**
 * Contains the answer to a generic query
 */
export class QueryResponse {
    /** Existing Total instances */
    public totalItems = 0;
    /** Instances */
    public results: any[] = [];

    constructor(queryResponse: any) {
        this.totalItems = queryResponse.totalItems;
        this.results = queryResponse.results;
    }
}
