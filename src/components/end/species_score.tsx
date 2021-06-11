type speciesScore = {
  genus: string;
  species: string;
  pt_name: string;
  old_score: number;
  to_sum: number;
  img_url: string;
};

type speciesScoreProps = {
  spp: speciesScore[];
};

const SpeciesScore = (props: speciesScore) => {
  const { genus, species, pt_name, old_score, to_sum, img_url } = props;
  return (
    <div >
      <h1>{pt_name}</h1>
      <h2>{`${genus} ${species}`}</h2>
      <p>{old_score + to_sum}</p>
    </div>
  );
};

const SpeciesScoreGroup = (props: speciesScoreProps) => {
  const { spp } = props;

  return (
    <div>
      {spp.map((species: speciesScore) => {
        return (
          <div key={species.pt_name}>
            <SpeciesScore {...species}></SpeciesScore>
          </div>
        );
      })}
    </div>
  );
};

export default SpeciesScoreGroup;
