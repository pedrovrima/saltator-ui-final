import React from "react";
import DeckCard from "./deck-cards";

const deckChooser = () => {
  const user_decks = [];
  const rare = user_decks.filter((deck) => deck.name === "rare");
  const medium = user_decks.filter((deck) => deck.name === "medium");
  return (
    <>
      <div>
        {user_decks.map((deck) => {
          <DeckCard active={true} {...deck} />;
        })}

        {medium.length === 0 ? (
          <DeckCard active={false} name="medium" spp={[]} />
        ) : (
          ""
        )}

        {rare.length === 0 ? (
          <DeckCard active={false} name="rare" spp={[]} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
