import {useSession} from "next-auth/react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import DashboardC from "../../components/DashboardC";
import Staff from "../../components/Staff";
import SchemeToggler from "../../components/SchemeToggler";


const Dashboard = () => {

    const { data: session } = useSession();


    if (session) {
        return (
            <>
                <Navigation/>
                <DashboardC/>
                <SchemeToggler/>
                <Staff deleteMode={true}/>
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