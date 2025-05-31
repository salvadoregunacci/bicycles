import {Link, NavLink} from "react-router-dom";
import {useEffect, useRef} from "react";

const Sidebar = () => {
    const ulRef = useRef<HTMLUListElement | null>(null);
    const sidebarRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const ul = ulRef.current;
        const sidebar = sidebarRef.current;

        if (!ul || !sidebar) return;

        const hasHorizontalScroll = ul.scrollWidth > ul.clientWidth;
        sidebar.classList.toggle('_overflow', hasHorizontalScroll);

        const lastLi = ul.querySelector('li:last-child');
        if (!lastLi) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                sidebar.classList.toggle('_scrolled', entry.isIntersecting);
            },
            {root: ul, threshold: 0.9}
        );

        observer.observe(lastLi);

        const resizeObserver = new ResizeObserver(() => {
            const hasHorizontalScroll = ul.scrollWidth > ul.clientWidth;
            sidebar.classList.toggle('_overflow', hasHorizontalScroll);
        });
        resizeObserver.observe(ul);

        return () => {
            observer.disconnect();
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <aside className="account-sidebar" ref={sidebarRef}>
            <h4>Мій акаунт</h4>
            <nav>
                <ul className="t3" ref={ulRef}>
                    <li>
                        <NavLink
                            to="/account/order_history"
                            className={({isActive}) => (isActive ? '_active' : '')}
                        >
                            Історія замовлень
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/account/personal_data"
                            className={({isActive}) => (isActive ? '_active' : '')}
                        >
                            Персональні дані
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/account/change_password"
                            className={({isActive}) => (isActive ? '_active' : '')}
                        >
                            Зміна пароля
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/account/wishlist"
                            className={({isActive}) => (isActive ? '_active' : '')}
                        >
                            Список бажань
                        </NavLink>
                    </li>
                    <li className="logout">
                        <Link to="#">Вийти</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;