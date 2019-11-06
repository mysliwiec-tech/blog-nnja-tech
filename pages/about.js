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

Index.getInitialProps = async context => {
    if (context.res) {
        context.res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    }
    const response = await client.getSingle('about');
    console.log(response);
    return {content: response.data.picture }
}

export default Index