import apiClient from "./apiClient";

export const accountApi = () => {
    getAll = () => {
        const url = '/account';
        return apiClient.get(url);
    };
}