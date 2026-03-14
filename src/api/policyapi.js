import { apiClient } from "./apiClient";

export const showPolicies = ()=> {
    return apiClient.get("/policies")
}