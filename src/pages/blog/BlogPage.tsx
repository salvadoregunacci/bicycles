import Page from "../Page.tsx";
import SectionHeader from "../../components/SectionHeader.tsx";
import Breadcrumbs, {BreadcrumbsItem} from "../../components/Breadcrumbs.tsx";
import "../../scss/pages/blog.scss";
import Footer from "../../components/Footer.tsx";
import Header from "../../components/Header.tsx";
import UpBtn from "../../components/ui/UpBtn.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import PreviewCard from "../../components/PreviewCard.tsx";
import Container from "../../components/Container.tsx";
import {useEffect} from "react";
import {getBlogItems} from "../../redux/slices/shop/asyncThunks.ts";
import {Link} from "react-router-dom";

const BlogPage = () => {
    const dispatch = useAppDispatch();
    const blogItems = useAppSelector(state => state.shop.blogItems);

    useEffect(() => {
        if (blogItems === null) {
            dispatch(getBlogItems());
        }
    }, []);

    return (
        <Page title="Блог" className="blog-page">
            <UpBtn/>
            <Header/>
            <SectionHeader title="Блог" className="section-header_blog">
                <Breadcrumbs>
                    <BreadcrumbsItem link="/">Головна</BreadcrumbsItem>
                    <BreadcrumbsItem isActive={true}>Блог</BreadcrumbsItem>
                </Breadcrumbs>
            </SectionHeader>
            <Container className="blog-page__container">
                {
                    blogItems ?
                        <>
                            <div className="blog-page__items">
                                {
                                    blogItems.map((item, index) => (
                                        <PreviewCard
                                            key={index}
                                            link="/blog-item"
                                            {...item}
                                        ></PreviewCard>
                                    ))
                                }
                            </div>
                            <div className="all-link-wrap">
                                <Link
                                    to="#"
                                    className="items-section__view-all-btn t4">
                                    Показати всe
                                </Link>
                            </div>
                        </>
                        :
                        <div className="empty-label">Пусто</div>
                }
            </Container>
            <Footer/>
        </Page>
    );
};

export default BlogPage;