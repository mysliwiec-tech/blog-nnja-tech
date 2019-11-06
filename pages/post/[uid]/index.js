import Head from 'next/head';
import Layout from '../../../components/MyLayout'
import PostView from '../../../components/PostView'
import { client } from '../../../prismic-configuration'

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

Post.getInitialProps = async context => {
    if (context.res) {
        context.res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    }
    const response = await client.getByUID('post', context.query.uid)
    return {post: response}
}

export default Post