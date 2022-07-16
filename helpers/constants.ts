import { fetchSampleResponse } from "./requestHandlers"

export const REACT_QUERY_KEYS = {
    TEST: {
        key: 'test',
        handler: fetchSampleResponse,
    }
}