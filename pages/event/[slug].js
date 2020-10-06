import Layout from '../../components/Layout';
import { useRouter } from 'next/router'; //NextJS hook

//The page name has been changed to [slug].js to create a dynamic page

const Event = () => {
    const router = useRouter(); //assigned router to useRouter
    const { slug } = router.query; //pulls in the dynamic slug
    return (
        <Layout>
        <h1>{slug}</h1> {/*Changed from Event to {slug}*/}
    </Layout>
    )
}

export default Event;