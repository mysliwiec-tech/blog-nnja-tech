import Index from '../index';
import { client } from '../../prismic-configuration'
import Prismic from 'prismic-javascript'

const IndexPage = Index

export async function getStaticPaths() {
    const response = await client.query(
        Prismic.Predicates.at('document.type', 'post'),
        { orderings : '[document.first_publication_date desc]', pageSize: 20, page: 1},
    )
    const total_pages = response.total_pages;
    let paths = [];
    for(var i = 1; i <= total_pages; i++) {
        paths.push(`/p/${i}`)
    }
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const response = await client.query(
        Prismic.Predicates.at('document.type', 'post'),
        { orderings : '[document.first_publication_date desc]', pageSize: 20, page: params.page },

    )
    return { props: { posts: response.results, page: response.page, total_pages: response.total_pages } }
}

export default IndexPage