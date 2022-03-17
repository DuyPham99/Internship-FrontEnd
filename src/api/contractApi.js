import apiClient from "./apiClient";

export const getAllContract= async () => {
  const url = '/contract';
  return await apiClient.get(url);
}

export const createContract= async (contract) => {
  const url = '/contract';
  console.log(contract);
  return await apiClient.post(url, contract);
}

export const contractApprove= async (id) => {
  const url = '/contract/approve';
  return await apiClient.post(url, id);
}

export const contractClose= async (id) => {
  const url = '/contract/close';
  return await apiClient.post(url, id);
}

export const getStatistic= async (id) => {
  const url = '/contract/statistic';
  return await apiClient.get(url);
}

