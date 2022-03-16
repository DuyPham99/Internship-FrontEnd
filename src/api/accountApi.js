import apiClient from "./apiClient";

export const getAllAccount = () => {
    const url = '/account';
    return apiClient.get(url);
}

export const saveAccount = (data) => {
    const url = '/account';
    return apiClient.post(url, data);
}

export const getAllRole = () => {
    const url = '/role';
    return apiClient.get(url);
}

export const deleteAccounts = (ids) => {
    const url = '/account/delete';
    return apiClient.post(url, ids);
}

export const login = (account) => {
  const url = '/login';
  console.log(account);
  return apiClient.post(url, account);
}

