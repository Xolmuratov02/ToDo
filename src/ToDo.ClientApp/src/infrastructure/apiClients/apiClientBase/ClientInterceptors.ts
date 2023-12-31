import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { ApiResponse } from "./ApiResponse";
import { ProblemDetails } from "./ProblemDetails";
import type { IMappable } from "../../mappers/IMappable";
// import { createInstance } from "@/infrastructure/extensions/InstanceProvider";

export class ClientInterceptors {

    public static registerResponseConverter(client: AxiosInstance) {
        client.interceptors.response.use(<TResponse extends IMappable<TResponse>>(response: AxiosResponse<TResponse>) => {
                // Extract the data type from the response
                // const data: TResponse = response.data as TResponse;

                // Call mapFrom on the data
                // const mappedData = data.mapFrom(data);
                // console.log(typeof mappedData.dueDate);

                return {
                    ...response,
                    data: new ApiResponse(response.data as TResponse, null, response.status)
                }
            },
            (error: AxiosError) => {
                return {
                    ...error,
                    data: new ApiResponse(null, error.response?.data as ProblemDetails, error.response?.status ?? 500)
                };
            }
        );
    }
}