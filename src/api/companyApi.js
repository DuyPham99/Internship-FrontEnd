import apiClient from "./apiClient";

export const getAllCompany= async () => {
  const url = '/company';
  return await apiClient.get(url);
}
