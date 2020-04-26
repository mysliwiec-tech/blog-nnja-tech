import Link from 'next/link'
import PostIntro from './PostIntro'

const PostItem = (props) => {
    return (
    <div className="post">
        <PostIntro post={props.post.metadata}/>
        <Link href='/post/[uid]' as={'/post/' + props.post.post_id}><a className="read_more">Read More</a></Link>
        <style jsx>{`
            .post {
                color: white;
                margin: 0px;
                border-bottom: 1px solid #BBB;
                padding: 40px 0px;
            }

            .read_more {
                text-transform: uppercase;
                margin-bottom: 0px;
                color: white;
            }
        `}</style>
    </div>
)}

export default PostItem
