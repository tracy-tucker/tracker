import Link from 'next/link';

//Nav setup:
//Create a links array, that stores an object, which stores external link hrefs and link labels.
//Map the array to assign link key
//DOWN BELOW, map the links array again to list the links in an unordered list.
// key is a required key

const links = [
    {href: 'https://zeit.co/now', label: 'ZEIT'},
    {href: 'https://github.com/zeit/next.js', label: 'GITHUB'}
].map(link => {
    link.key = `nav-link-${link.hef}-${link.label}`
    return link
})

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </li>
            {links.map(({key, href, label}) => (
                <li key={key}>
                    <a href={href}>{label}</a>
                </li>
            ))}
        </ul>
    </nav>
)

export default Nav;