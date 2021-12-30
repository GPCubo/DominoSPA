export const RegisterMapOptions = ({arrayStrings,handleChangeFormRegister,Map}) => {
    console.log(arrayStrings,Map)
    return (
        <select className={arrayStrings[0]} onChange={handleChangeFormRegister} name={arrayStrings[1]}>
            {
                Map.map(
                    (el,index) =>{
                        return(
                            <option className={"Register-option"+index} key={index}>
                                {el}
                            </option>
                        )
                })
            }
        </select>
    )
}
