import { server } from "@test/server";
import { rest } from "msw";
import { waitFor, screen } from "@testing-library/react";
import { renderWithReactQuery } from "@test/utils";
import { PlanetList } from "./";

describe("PlanetList", () => {
  it("should render a list of planets", async () => {
    server.use(
      rest.get(/planets/i, (req, res, ctx) => {
        return res(
          ctx.json({
            count: 3,
            next: null,
            previous: null,
            results: [{ name: "test1" }, { name: "test2" }, { name: "test3" }],
          })
        );
      })
    );
    renderWithReactQuery(<PlanetList />);
    await waitFor(() =>
      expect(screen.queryAllByRole("listitem")).toHaveLength(3)
    );
  });
  it("should show a loading spinner", () => {
    server.use(
      rest.get(/planets/i, (req, res, ctx) => {
        return res(ctx.delay(500), ctx.json({ results: [] }));
      })
    );
    renderWithReactQuery(<PlanetList />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
  it("should show an error message", async () => {
    server.use(
      rest.get(/planets/i, (req, res, ctx) => {
        return res(ctx.status(400, "error"));
      })
    );
    renderWithReactQuery(<PlanetList />);
    await waitFor(() => expect(screen.getByText(/ups/i)).toBeInTheDocument());
  });
});
