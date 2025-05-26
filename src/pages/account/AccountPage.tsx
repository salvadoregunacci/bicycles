import Page from "../Page.tsx";
import Container from "../../components/Container.tsx";
import {Outlet} from "react-router-dom";
import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import Sidebar from "./sections/Sidebar.tsx";
import "../../scss/pages/account.scss";

const AccountPage = () => {
    return (
        <Page title="Мій аккаунт" className="account-page">
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