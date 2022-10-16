import { Loading } from "@components/Loading";
import { usePlanets } from "@hooks/usePlanets";
import "./PlanetList.css";

export type Props = {};

export const PlanetList: React.FC<Props> = () => {
  const { isLoading, data, isError, isFetched } = usePlanets();
  console.log({ isLoading, data, isError, isFetched });
  return (
    <section>
      <h1>Hi PlanetList</h1>
      {isLoading && <Loading />}
      {isError && <p>ups, someting went wrong!</p>}
      {isFetched && (
        <ol>
          {data.map((planet) => (
            <li key={planet.name}>{planet.name}</li>
          ))}
        </ol>
      )}
    </section>
  );
};
