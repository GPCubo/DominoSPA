export const TemplateTScore = ({starting,typeTable}) => {
    return (
        <>
            {
            typeTable === 1 ?
            starting.map((el,index) =>{
            return(
                <div className='PlayersAndTable-div-4' key={index}>
                    <h1 className='PlayersAndTable-h1' >{`Mesa ${index}`}</h1>
                    <div className='PlayersAndTable-div-3'>
                        <p className='PlayersAndTable-p'>Score</p>
                        <span className='PlayersAndTable-span'>{el[0]}</span>
                    </div>
                    <div className='PlayersAndTable-div-3'>
                        <p className='PlayersAndTable-p'>Score</p>
                        <span className='PlayersAndTable-span'>{el[1]}</span>
                    </div>
                </div>
                )}
            )
            :
            starting.map((el,index) =>{
            return(
                <div key={index} className='PlayersAndTable-div-4'>
                    <h1 className='PlayersAndTable-h1'>{`Mesa ${index}`}</h1>
                    <div className='PlayersAndTable-div-3'>
                        <p className='PlayersAndTable-p'>Score</p>
                        <span className='PlayersAndTable-span'>{el[0]}</span>
                        <span className='PlayersAndTable-span'>{el[1]}</span>
                    </div>
                    <div className='PlayersAndTable-div-3'>
                        <p className='PlayersAndTable-p'>Score</p>
                        <span className='PlayersAndTable-span'>{el[2]}</span>
                        <span className='PlayersAndTable-span'>{el[3]}</span>
                    </div>
                </div>
                )}
            )
            }
        </>
    )
}
