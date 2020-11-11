import Link from 'next/link';

//Nav setup:
//Create a links array, that stores an object, which stores external link hrefs and link labels.
//Map the array to assign link key
//DOWN BELOW, map the links array again to list the links in an unordered list.
// key is a required key

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav;