import './Header.css';
import { Search } from './searchBar/Search';
import logo from "../../media/logo.png";

export const Header = () => {

    return (
        <header>
            <div id="logo">
                <img src={logo} alt="redditSearch (logo)" height="100px" />
            </div>
            <div id="search">
                <Search />
            </div>
        </header>
    )
}