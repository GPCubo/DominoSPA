import { TemplateTTypeMessage } from './TemplateTTypeMessage';
import { TemplateTTypeMessageTwo } from './TemplateTTypeMessageTwo';

export const TemplateTMapMessageOnChat = ({chat,user}) => {
    return (
        chat.map(
            (message,index) =>{
                if(user.nickname === message.nickname ){
                    return(
                        <TemplateTTypeMessage styleP='TemplateTMessageOnChat-p' styleMessage='TemplateTMessageOnChat-span-mine' message={message.message} /> 
                    )}
                if(index>0 && message.nickname===chat[index -1].nickname){
                    return(
                        <TemplateTTypeMessage styleP='TemplateTMessageOnChat-p-other' styleMessage='TemplateTMessageOnChat-span-other' message={message.message} />
                    )}
                else{
                    return(
                        <TemplateTTypeMessageTwo message={message.message} nickname={message.nickname}/>
                    )}
        })
    )
}
