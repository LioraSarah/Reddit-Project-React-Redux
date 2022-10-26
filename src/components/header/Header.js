import './Header.css';
import { Search } from './searchBar/Search';
import logo from "../../media/logo.png";
import profilePic from "../../media/profile.png";

export const Header = () => {

    return (
        <header>
            <div id="logo">
                <img src={logo} alt="redditSearch (logo)" />
            </div>
            <div id="search">
                <Search />
            </div>
            <div id="profile">
                <img id="profile-pic" alt="Profile" src={profilePic} />
            </div>
        </header>
    )
}