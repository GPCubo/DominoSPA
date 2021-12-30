export const ChampionShipCreatedP = ({title,DynamicText}) => {
    return (
    <p className="ChampionShipCreated-p-1-1">
        <span className='ChampionShipCreated-span'>{title}</span>
        {
            DynamicText.map(
                (el,index) =>{
                    return(
                        <span key={index}>{el}</span>
                    )
            })
        }
    </p>
    )
}
