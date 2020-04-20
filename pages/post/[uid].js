import Head from 'next/head';
import Layout from '../../components/MyLayout'
import PostView from '../../components/PostView'
import { client } from '../../prismic-configuration'	
import Prismic from 'prismic-javascript'

import { RichText } from 'prismic-reactjs'

const Post = props => {
    return (
        <Layout>
            <Head>
                <title>NNJA.tech - Blog - {RichText.asText(props.post.data.title)}</title>
            </Head>
            <PostView post={props.post}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    const response = await client.query(
        Prismic.Predicates.at('document.type', 'post')
    )
    const paths = response.results.map(post => `/post/${post.uid}`)
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const response = await client.getByUID('post', params.uid);
    return { props: { post: response } }
}

export default Post