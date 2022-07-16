import { SampleTestResponse } from "./types";

export const fetchSampleResponse = (): Promise<void | SampleTestResponse> => fetch('http://localhost:8080/ping').then(res =>
    res.json()
);


