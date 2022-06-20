import './Header.css';
import { Search } from './Search';


export const Header = () => {

    return (
        <header>
            <div id="logo">
                <img scr="../../media/logo.png" alt="redditSearch (logo)" />
            </div>
            <div id="search">
                <Search />
            </div>
        </header>
    )
}