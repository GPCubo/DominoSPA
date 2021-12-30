export const TemplateTTypeMessageTwo = ({message,nickname}) => {
    return (
    <p className='TemplateTMessageOnChat-p-other'>
        <span className='TemplateTMessageOnChat-span-nickname'>{nickname.toUpperCase()}</span>
        <span className='TemplateTMessageOnChat-span-other'>{message}</span>
    </p> 
    )
}
