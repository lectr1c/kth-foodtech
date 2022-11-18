import {useSession} from "next-auth/react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import DashboardC from "../../components/DashboardC";
import Staff from "../../components/Staff";
import SchemeToggler from "../../components/SchemeToggler";
import { useEffect, useState } from "react";
import axios from "axios";


const Dashboard = () => {

    const { data: session } = useSession();

    const [auth, setAuth] = useState<Boolean>(false);

    useEffect(() => {
        axios.get("/api/authorise").then(res => {
            if (res.status === 200) {
                setAuth(true);
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])
    


    if (session && auth) {
        return (
            <>
                <Navigation/>
                <DashboardC/>
                <Staff deleteMode={true}/>
                <Footer/>
            </>
        )
    } else {
        return (
            <>
                <Navigation/>
                UNAUTHORIZED PLEASE LOG IN
                <Footer/>
            </>
        )
    }
}

export default Dashboard