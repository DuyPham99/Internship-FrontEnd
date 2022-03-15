import apiClient from "./apiClient";

export const getAllContract= async () => {
  const url = '/contract';
  return await apiClient.get(url);
}

export const createContract= async (contract) => {
  const url = '/contract';
  alert("1")
  console.log(contract);
  return await apiClient.post(url, contract);
}

