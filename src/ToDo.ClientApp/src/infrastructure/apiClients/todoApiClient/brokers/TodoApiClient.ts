import ApiClientBase from "@/infrastructure/apiClients/apiClientBase/ApiClientBase";
import { TodoEndpointsDetails } from "@/infrastructure/apiClients/todoApiClient/brokers/TodoEndpointsDetails";

export class TodoApiClient {
    private readonly client: ApiClientBase;
    public readonly baseUrl: string;

    constructor() {
        this.baseUrl = "https://localhost:7214";

        this.client = new ApiClientBase({
            baseURL: this.baseUrl
        });

        this.todos = new TodoEndpointsDetails(this.client);
    }

    public todos: TodoEndpointsDetails;
}