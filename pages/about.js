import Head from 'next/head';
import Layout from '../components/MyLayout'
import { client } from '../prismic-configuration'

const Index = props => (
    <Layout>
        <Head>
            <title>NNJA.tech - Blog - About</title>
        </Head>
        <img src={props.content.url} />
    </Layout>
)

export async function getStaticProps() {
    const response = await client.getSingle('about');
    return { props: {content: response.data.picture } }
}

export default Index