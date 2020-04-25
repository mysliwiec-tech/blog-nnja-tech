import Head from 'next/head';
import Layout from '../../components/MyLayout'
import PostView from '../../components/PostView'
import matter from 'gray-matter'
const glob = require('glob')

const Post = props => {
    return (
        <Layout>
            <Head>
                <title>NNJA.tech - Blog - {props.post.metadata.title}</title>
            </Head>
            <PostView post={props.post}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    //get all .md files in the posts dir
    const posts = glob.sync('posts/*.md')

    //remove path and extension to leave filename only
    const postsIds = posts.map(file =>
        file
        .replace(/^.*[\\\/]/, '') //remove everything before last "/"
        .slice(11, -3)
    )

    const paths = postsIds.map(postId => `/post/${postId}`)
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const posts = glob.sync('posts/*.md');
    let post = posts.filter(filename => filename.endsWith(`${params.uid}.md`))
    post.length == 1 ? post = post[0] : ''

    const content = await import(`../../${post}`)
    const data = matter(content.default)
    console.log(data)

    return {
        props: {
            post: {
                metadata: data.data,
                body: data.content,
            }
        },
    }
    // return { props: { post: response } }
}

export default Post