import { MessengerChat } from "react-messenger-chat-plugin";


const FBMessenger = () => {

    return (
        <>
            <MessengerChat pageId={"618271412009538"} loggedInGreeting={"Hello!"} loggedOutGreeting={"Goodbye!"} themeColor={"#007d00"}/>
        </>
    )

}

export default FBMessenger;