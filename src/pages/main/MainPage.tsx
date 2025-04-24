import Page from "../Page.tsx";
import Promo from "./sections/Promo.tsx";
import "../../scss/pages/main.scss";
import Header from "../../components/Header.tsx";
import Marquee from "./sections/Marquee.tsx";
import News from "./sections/News.tsx";
import Catalog from "./sections/Catalog.tsx";
import Blog from "./sections/Blog.tsx";
import Video from "./sections/Video.tsx";
import Advantages from "./sections/Advantages.tsx";
import Best from "./sections/Best.tsx";
import Presentation from "./sections/Presentation.tsx";
import Benefits from "./sections/Benefits.tsx";
import Outfit from "./sections/Outfit.tsx";
import Reviews from "./sections/Reviews.tsx";
import Contacts from "./sections/Contacts.tsx";
import Footer from "../../components/Footer.tsx";
import UpBtn from "../../components/ui/UpBtn.tsx";

const MainPage = () => {
    return (
        <Page title="Головна" className="page_main">
            <UpBtn/>
            <Header/>
            <Promo/>
            <Marquee/>
            <News/>
            <Catalog/>
            <Blog/>
            <Video/>
            <Advantages/>
            <Best/>
            <Presentation/>
            <Benefits/>
            <Outfit/>
            <Reviews/>
            <Contacts/>
            <Footer/>
        </Page>
    );
};

export default MainPage;