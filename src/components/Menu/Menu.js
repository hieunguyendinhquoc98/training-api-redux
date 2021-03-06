import React from 'react';
import { Route, Link } from 'react-router-dom';


const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/product-list',
        exact: false
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            exact={activeOnlyWhenExact}
            path={to}
            children={({match}) => {
                var active = match ? 'active' : ''
                return (
                    <li className={`${active}`}>
                        <Link to={to}>{label}</Link>
                    </li>
                );
            }}
        ></Route>
    );
}
class Menu extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">Call API</a>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </div>
        );
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    ></MenuLink>
                );
            })
        }
        return result;
    }
}

export default Menu;
