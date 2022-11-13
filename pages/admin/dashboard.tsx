import {useSession} from "next-auth/react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import DashboardC from "../../components/DashboardC";


const Dashboard = () => {

    const { data: session } = useSession();


    if (session) {
        return (
            <>
                <Navigation/>
                <DashboardC/>
                <Footer/>
            </>
        )
    }

    return <>UnAuthorised</>
}

export default Dashboard