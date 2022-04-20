import { renderHook } from "@testing-library/react-hooks";
import useFocus from "./use-focus.hook";

test("hook returns null for current ref", async () => {
  const { result } = renderHook(() => useFocus());

  expect(result.current.htmlElRef.current).toBe(null);
});
