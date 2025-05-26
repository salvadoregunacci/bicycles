import Page from "../Page.tsx";
import Container from "../../components/Container.tsx";
import {Outlet} from "react-router-dom";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Sidebar from "./sections/Sidebar.tsx";
import "../../scss/pages/account.scss";
import UpBtn from "../../components/ui/UpBtn.tsx";

const AccountPage = () => {
    return (
        <Page title="Мій аккаунт" className="account-page">
            <UpBtn/>
            <Header/>
            <Container className="account-page__container">
                <Sidebar/>
                <Outlet/>
            </Container>
            <Footer/>
        </Page>
    );
};

export default AccountPage;