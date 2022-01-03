export const TemplateTInputsMap = ({title,limitPlayers}) => {
    return (
        <>
            <div className="TemplateTInputs-div">
                <h1 className="TemplateTInputsMap-h1">{title}</h1>
                <form className="TemplateTInputsMap-form">
                {
                    limitPlayers.map(
                        (el,index) =>{
                            return(
                            <input className='TemplateTInputsMap-input' key={index} type="text" placeholder="Nickname del jugador" />
                        )}
                    )
                }
                </form>
            </div>
        </>
    )
}
