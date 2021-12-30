export const TemplateTTypeMessage = ({styleP,styleMessage,message}) => {
    return (
    <p className={styleP}>
        <span className={styleMessage}>{message}</span>
    </p> 
    )
}
