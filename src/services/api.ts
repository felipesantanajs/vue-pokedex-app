import axios, { AxiosInstance } from "axios";


export const api: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
})

export const evolutionApi: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/evolution-chain/"
})