import './Header.css';
import { Search } from './Search';


export const Header = () => {

    return (
        <header>
            <div id="logo">
                <img/>
            </div>
            <div id="search">
                <Search />
            </div>
        </header>
    )
}