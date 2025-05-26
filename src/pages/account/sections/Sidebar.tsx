import {Link, NavLink} from "react-router-dom";

const Sidebar = () => {

    return (
        <aside className="account-sidebar">
            <h4>Мій акаунт</h4>
            <nav>
                <ul className="t3">
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