import "./Loading.css";

export type Props = {};

export const Loading: React.FC<Props> = () => {
  return (
    <div className="Loading" role="status" aria-busy="true">
      <span className="sr-only">Loading...</span>
    </div>
  );
};
