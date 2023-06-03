export async function fetcher(input, init) {
    const response = await fetch(input, init);

    const data = await response.json();

    if (response.ok) {
        return data;
    }

    throw new FetchError({
        message: response.statusText,
        response,
        data,
    });
}

export class FetchError extends Error {
    response;
    data;
    constructor({ message, response, data }) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(message);

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, FetchError);
        }

        this.name = "FetchError";
        this.response = response;
        this.data = data ?? { message: message };
    }
}

export function ControllerFetcher(type) {
    switch (type) {
        case "array" : return (res) => res.rows;
        case "count" : return (res) => res.rowCount;
        case "one" : return (res) => res.rowCount > 0 ? res.rows[0] : null;
        case "bool" : return (res) => res.rowCount > 0;

        default: throw new Error("unexpected fetcher type:" + type);
    }
}