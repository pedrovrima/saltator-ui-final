import Progress from "./progress";
import { render, screen } from "@testing-library/react";

test("options", async () => {
  render(<Progress old_score={10} to_sum={2} />);
  expect(screen.getByText("12% completos")).toBeInTheDocument();
});
