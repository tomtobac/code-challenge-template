import { useQuery } from "react-query";
import { fetchPlanets } from "@services/fetchPlanets";

export const usePlanets = () => {
  return useQuery(["planets"], async ({ signal }) => fetchPlanets({ signal }), {
    initialData: [],
  });
};
