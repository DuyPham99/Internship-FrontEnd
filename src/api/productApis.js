import apiClient from "./apiClient";

export const getAllProduct = async () => {
    const url = '/product';
    return await apiClient.get(url);
}