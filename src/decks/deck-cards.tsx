import {scorePercentage} from "../help-functions/scorePercentage"


type Species = {
    genus: string,
    species: string,
    score: number,
}

type deckCardProps = {
    id: number,
    name: string,
    spp: Species[],

}



const DeckCard = (props:deckCardProps) =>{
    const {id,name,spp} = props

    const percentage_complete = Math.round(scorePercentage(spp,5,1))

    return (
        <div>
            <h1>{name}</h1>
            <h2>{percentage_complete}% completos</h2>
            <button>Ver espécies</button>

        </div>
    )

    
}

export default DeckCard