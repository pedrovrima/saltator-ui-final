
type speciesScore = {
    genus:string
    species:string
    pt_name:string
    old_score:number
    to_sum:number
    img_url:string
}

type speciesScoreProps ={
    spp: speciesScore[]
}

const SpeciesScore = (props:speciesScoreProps)=>{
    const {spp} = props

    return(
        <div>
        spp

        </div>
    )
}


export default SpeciesScore