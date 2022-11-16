import {useSession} from "next-auth/react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import DashboardC from "../../components/DashboardC";
import Staff from "../../components/Staff";


const Dashboard = () => {

    const { data: session } = useSession();


    if (session) {
        return (
            <>
                <Navigation/>
                <DashboardC/>
                <Staff deleteMode={false}/>
                <Footer/>
            </>
        )
    }

    return (
        <>
            <Navigation/>
            UNAUTHORIZED PLEASE LOG IN
            <Footer/>
        </>
    )
}

export default Dashboard