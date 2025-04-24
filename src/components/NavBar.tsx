import {useRef} from "react";
import {Link} from "react-router-dom";

type NavBarInnerListType = {
    id: string,
    items: NavBarItemType[],
}

type NavBarItemType = {
    children: string,
    link: string,
    className?: string;
    innerList?: NavBarInnerListType,
}

const NavBarInnerList = ({id, items}: NavBarInnerListType) => {
    return (
        <div id={id} className="nav-bar__inner-list">
            <div className="nav-bar__inner-list__content">
                <ul>
                    {
                        items.map(item => (
                            <NavBarItem
                                key={crypto.randomUUID()}
                                link={item.link}
                                className="nav-bar__inner-list__item"
                            >
                                {item.children}
                            </NavBarItem>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const NavBarItem = ({children, link, innerList, className = ""}: NavBarItemType) => {
    return (
        <div className={`${className} nav-bar__item`}>
            <Link to={link} className={`nav-bar__item-handler nav-bar__item-link t4 ${innerList ? "nav-bar__item-trigger" : ""}`}>
                {children}
            </Link>
            {
                innerList && innerList.items.length ?
                    <NavBarInnerList
                        id={innerList.id}
                        items={innerList.items}
                    />
                    : null
            }
        </div>

    );
}

const NavBar = () => {
    const items = useRef<NavBarItemType[]>([
        {
            children: "Trade in",
            link: "/catalog",
        },
        {
            children: "Велосипеди",
            link: "/catalog",
            innerList: {
                id: "inner-list__trade-in",
                items: [
                    {
                        children: "Гірські велосипеди",
                        link: "/catalog",
                    },
                    {
                        children: "Міські велосипеди",
                        link: "/catalog",
                    },
                    {
                        children: "Шосейні велосипеди",
                        link: "/catalog",
                    },
                    {
                        children: "Гравійні велосипеди",
                        link: "/catalog",
                    },
                    {
                        children: "Трекові велосипеди",
                        link: "/catalog",
                    },
                    {
                        children: "Велосипеди для тріатлону",
                        link: "/catalog",
                    },
                    {
                        children: "Двопідвісні велосипеди",
                        link: "/catalog",
                    },
                    {
                        children: "Електровелосипеди",
                        link: "/catalog",
                    },
                    {
                        children: "Жіночі велосипеди",
                        link: "/catalog",
                    },
                    {
                        children: "Дитячі велосипеди",
                        link: "/catalog",
                    },
                ]
            }
        },
        {
            children: "Запчастини",
            link: "/catalog",
        },
        {
            children: "Екіпірування",
            link: "/catalog",
        },
        {
            children: "Аксесуари",
            link: "/catalog",
        },
        {
            children: "Велостанки",
            link: "/catalog",
        },
    ]);

    return (
        <nav className="nav-bar">
            <ul className="nav-bar__list">
                {
                    items.current.map(item => (
                        item.innerList ?
                            <NavBarItem
                                key={crypto.randomUUID()}
                                link={item.link}
                                innerList={item.innerList}
                                className="first-level"
                            >
                                {item.children}
                            </NavBarItem>
                            :
                            <NavBarItem
                                key={crypto.randomUUID()}
                                link={item.link}
                                className="first-level"
                            >
                                {item.children}
                            </NavBarItem>
                    ))
                }
            </ul>
        </nav>
    );
};


export default NavBar;