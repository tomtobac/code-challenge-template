import { useQuery } from "@tanstack/react-query";
import { fetchPlanets } from "@services/fetchPlanets";

export const usePlanets = () => {
  return useQuery(["planets"], ({ signal }) => fetchPlanets({ signal }), {
    initialData: [],
  });
};
