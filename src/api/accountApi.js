import apiClient from "./apiClient";

export const getAllAccount = () => {
    const url = '/account';
    return apiClient.get(url);
}

export const deleteAccounts = (ids) => {
    const url = '/account/delete';
    return apiClient.post(url, ids);
}

