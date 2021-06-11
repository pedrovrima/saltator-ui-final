import SpeciesScoreGroup from "./species_score";
import { render, screen } from "@testing-library/react";

const spp = [
  {
    genus: "a",
    species: "b",
    pt_name: "c",
    old_score: 10,
    to_sum: 5,
    img_url: "string;",
  },
  {
    genus: "d",
    species: "e",
    pt_name: "f",
    old_score: 10,
    to_sum: 5,
    img_url: "string;",
  },
];

test("options", async () => {
  render(<SpeciesScoreGroup spp={spp} />);
  expect(screen.getByText("a b")).toBeInTheDocument();

  expect(screen.getByText("c")).toBeInTheDocument();
  expect(screen.getByText("d e")).toBeInTheDocument();
});
