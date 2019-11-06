import Head from 'next/head';
import Layout from '../components/MyLayout'
import PostItem from '../components/PostItem'
import Paginator from '../components/Paginator'
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
        { props.total_pages > 1 ? <Paginator page={props.page} total_pages={props.total_pages}/> : null }
    </Layout>
)

Index.getInitialProps = async context => {
    let page = 1;
    if (context.res) {
        context.res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    }
    if(context.query.page != 'undefined') {
        page = context.query.page;
    }
    const response = await client.query(
        Prismic.Predicates.at('document.type', 'post'),
        { orderings : '[document.first_publication_date desc]', pageSize: 20, page: page },

    )
    return {posts: response.results, page: response.page, total_pages: response.total_pages}
}

export default Index