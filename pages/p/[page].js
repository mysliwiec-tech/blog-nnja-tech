import Index from '../index';
import Config from '../../config';
import matter from 'gray-matter'
const glob = require('glob');

const IndexPage = Index

export async function getStaticPaths() {
    const posts = glob.sync('posts/*.md');
    const total_pages = Math.ceil(posts.length/Config.itemsPerPage);
    let paths = [];
    for(var i = 1; i <= total_pages; i++) {
        paths.push(`/p/${i}`)
    }
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    let all_posts = (context => {
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
    })(require.context('../../posts', true, /\.md$/)).reverse()

    const start = (params.page-1) * Config.itemsPerPage
    const end = start + Config.itemsPerPage
    
    const posts = all_posts.slice(start, end)

    return { props: { posts: posts , page: params.page, total_pages: Math.ceil(all_posts.length/Config.itemsPerPage) }}
}

export default IndexPage