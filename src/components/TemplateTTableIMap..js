export const TemplateTTableIMap = ({table}) => {
    return (
        <>
            {
                table.map((el,index) => {
                    return(
                        <p key={index} className='TemplateTTable-p'>
                            <span className="TemplateTTableMap-span">{index+1 < 10 ? `0${index + 1}` : `${index + 1}`}</span>
                            <span className="TemplateTTableMap-span-nickname">{el.nickname}</span>
                            <span className="TemplateTTableMap-span">{el.PJ}</span>
                            <span className="TemplateTTableMap-span">{el.PG}</span>
                            <span className="TemplateTTableMap-span">{el.PP}</span>
                            <span className="TemplateTTableMap-span">{el.PTS}</span>
                            <span className="TemplateTTableMap-span">{el.PTaE}</span>
                            <span className="TemplateTTableMap-span">{el.Dif}</span>
                        </p>
                )
                })
            }
        </>
    )
}