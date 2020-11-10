import Layout from '../../components/Layout';
import { useRouter } from 'next/router'; //NextJS hook

//The page name has been changed to [slug].js to create a dynamic page

const Event = () => {
    const router = useRouter(); //allowing access to the router object
    const { slug } = router.query; //merging {slug} peramater path with the other router query parameters
    return (
        <Layout>
        <h1>{slug}</h1> {/* The page slug will be used as the page title */}
    </Layout>
    )
}
// example: About page title will be <h1>About</h1>
export default Event;