import { useState } from "react";
import { scorePercentage } from "../help-functions/scorePercentage";
import type Species from "../types/species";
import SpeciesList from "../spp_list/spp_list";
type deckCardProps = {
  id: number;
  name: string;
  spp: Species[];
  active: boolean;
};

function DeckCard(props: deckCardProps) {
  const [showSpecies, setShowSpecies] = useState(false);
  const { id, name, spp, active } = props;

  const percentage_complete = Math.round(scorePercentage(spp, 5, 1));
  return (
    <div>
      <h1>{name}</h1>
      <h2>{`${percentage_complete}% completos`}</h2>
      {/* {TODO: Create get deck data from server} */}
      <button disabled={!active} onClick={() => console.log(id)}>
        Estudar
      </button>
      {active ? (
        <button onClick={() => setShowSpecies(!showSpecies)}>
          Ver espécies
        </button>
      ) : (
        <p>Complete 75% do nível anterior para desbloquear este nível</p>
      )}
      <SpeciesList visible={showSpecies} spp={spp}></SpeciesList>
    </div>
  );
}

export default DeckCard;
