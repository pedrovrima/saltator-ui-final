import {sumArray} from "./sumArray";

type percentageGroup = {
    score:number
}

const scorePercentage = (group:percentageGroup[],maxScore:number,minScore:number) =>{
    return 100*sumArray(group.map(grp=>grp.score-minScore))/(group.length*(maxScore-1));
}


export {scorePercentage}