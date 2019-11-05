import Head from 'next/head';
import Layout from '../components/MyLayout'
import PostItem from '../components/PostItem'
import { client } from '../prismic-configuration'

import Prismic from 'prismic-javascript'

const Index = props => (
    <Layout>
        <Head>
            <title>NNJA.tech - Blog</title>
        </Head>
        {props.posts.map((post) => 
            <PostItem post={post}/>
        )}
    </Layout>
)

Index.getInitialProps = async context => {
    const response = await client.query(
        Prismic.Predicates.at('document.type', 'post')
    )
    return {posts: response.results }
}

export default Index