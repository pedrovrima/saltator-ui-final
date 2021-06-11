type progressProps = {
    old_score:number,
    to_sum: number
}

const Progress = (props:progressProps)=>{
    const{old_score,to_sum} = props
    return(
        <p>{`${old_score+to_sum}% completos`}</p>
    )
}

export default Progress