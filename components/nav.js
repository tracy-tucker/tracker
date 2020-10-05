import Link from 'next/link';

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