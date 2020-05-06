import Head from 'next/head';
import Layout from '../components/MyLayout'
import PostItem from '../components/PostItem'
import Paginator from '../components/Paginator'
import matter from 'gray-matter'
import Config from '../config';

const Index = props => (
    <Layout>
        <Head>
            <title>NNJA.tech - Blog</title>
        </Head>
        {props.posts.map((post, i) => 
            <PostItem post={post} key={i}/>
        )}
        <Paginator page={props.page} total_pages={props.total_pages}/>
    </Layout>
)

export async function getStaticProps() {

  const all_posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)
  
    const data = keys.map((key, index) => {
      // Create slug from filename
      const postId = key
        .replace(/^.*[\\\/]/, '') //remove everything before last "/"
        .split('-')
        .slice(3) //remove the date from the front
        .join('-')
        .slice(0, -3) //remove .md
      const value = values[index]
      const document = matter(value.default)
      return {
        metadata: document.data,
        body: document.content,
        post_id: postId,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/)).reverse()

  const start = 0
  const end = start + Config.itemsPerPage
  
  const posts = all_posts.slice(start, end)

  return { props: { posts: posts , page: 1, total_pages: Math.ceil(all_posts.length/Config.itemsPerPage) }}
}

export default Index