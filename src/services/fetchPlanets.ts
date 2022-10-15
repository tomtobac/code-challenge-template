import api from "./api";
import { Planet } from "@domain/Planet";
import { SignalPayload, SwapiResponse, ApiRoutes } from "./types";

export const fetchPlanets = async ({ signal }: SignalPayload) => {
  const response = await api.get<SwapiResponse<Planet[]>>(ApiRoutes.PLANETS, {
    signal,
  });
  return response.data.results;
};
