import { apiClient } from "./apiClient";

export const add2whelInsForDet = (requiredData) => {
   return apiClient.post("/twowlerinsquodet", requiredData)
}

export const showadd2whelInsForDet = () => {
  return apiClient.get("/twowlerinsquodet")
}

export const updatePolicy = (id, data) => {
    return apiClient.put(`/twowlerinsquodet/${id}`, data)
}