import { vi } from "vitest";
import { debounce } from "../";

describe("debounce", () => {
  it("should be only called once", () => {
    vi.useFakeTimers();
    const testFn = vi.fn();
    const debouncedTestFn = debounce(testFn, 500);
    for (let idx = 0; idx < 10; idx++) {
      debouncedTestFn();
    }

    vi.runAllTimers();
    expect(testFn).toBeCalledTimes(1);
  });
});
