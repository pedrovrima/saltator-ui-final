import { fireEvent, render, screen } from "@testing-library/react";
import DeckCard from "./deck-cards";

describe("deck-cards", () => {
  const name = "Espécies comuns";
  const spp = [
    { score: 2, genus: "a", species: "a" },
    { score: 1, genus: "a", species: "b" },
    { score: 4, genus: "a", species: "c" },
    { score: 5, genus: "a", species: "d" },
  ];

  test("active deck", async () => {
    render(<DeckCard id={1} name={name} spp={spp} active={true} />);
    const button = screen.getByText("Ver espécies");

    expect(screen.getByText("Ver espécies")).toBeInTheDocument();
    expect(screen.getByText("Espécies comuns")).toBeInTheDocument();
    expect(screen.getByText("50% completos")).toBeInTheDocument();
    expect(screen.getByText("50% completos")).toBeInTheDocument();
    expect(screen.queryByText("a a")).toBeNull();
    expect(screen.getByText("Estudar")).toBeEnabled();
    expect(
      screen.queryByText(
        "Complete 75% do nível anterior para desbloquear este nível"
      )
    ).toBeNull();

    await fireEvent.click(button);
    expect(screen.getByText("a a")).toBeInTheDocument();
    expect(screen.getByText("a b")).toBeInTheDocument();
  });

  test("inactive deck", async () => {
    render(<DeckCard id={1} name={name} spp={spp} active={false} />);
    expect(screen.queryByText("Ver espécies")).toBeNull();
    expect(
      screen.queryByText(
        "Complete 75% do nível anterior para desbloquear este nível"
      )
    ).toBeInTheDocument();

    expect(screen.getByText("Estudar")).toBeDisabled();
  });
});
