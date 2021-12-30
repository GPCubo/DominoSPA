export const ChampionShipCreatedOperadorT = ({title,comparador,trueFalse}) => {
    return (
    <p className="ChampionShipCreated-p-2-1">
        <span className='ChampionShipCreated-span'>{title}</span>
        {
            comparador === ""
            ?
            <span  className='ChampionShipCreated-span--italic'>{trueFalse[0]}</span>
            :
            <span  className='ChampionShipCreated-span--italic'>{trueFalse[1]}</span>
        }
    </p>
    )
}
