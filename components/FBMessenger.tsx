import { MessengerChat } from "react-messenger-chat-plugin";


const FBMessenger = () => {

    return (
        <>
            <MessengerChat pageId={"618271412009538"} loggedInGreeting={"Welcome to KTH Foodtech! Have anything in mind? Ask here!"} loggedOutGreeting={"Goodbye!"} themeColor={"#00e304"}/>
        </>
    )

}

export default FBMessenger;