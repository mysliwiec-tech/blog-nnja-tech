import Link from 'next/link'
import * as moment from 'moment'

const PostItem = (props) => (
    <div className="post">
        <p className="time">{moment(Date(props.post.metadata.created_on)).format("LLLL")}</p>
        <picture>
            <source style={{maxWidth: "100%", height: "auto"}} media="(max-width: 500px)" srcSet={require(`../public/images/ipfs-world.jpg?resize&size=500`)} />
            <img style={{maxWidth: "100%", height: "auto"}} src={require(`../public/images/ipfs-world.jpg?resize&size=500`)} alt={props.post.metadata.cover_image_author} />
        </picture>
        <h2>{props.post.metadata.title}</h2>
        <p className="description">{props.post.metadata.description}</p>
        <Link href='/post/[uid]' as={'/post/' + props.post.post_id}><a className="read_more">Read More</a></Link>
        <style jsx>{`
            .post {
                color: white;
                margin: 0px;
                border-bottom: 1px solid #BBB;
                padding: 40px 0px;
            }

            .time {
                font-size: 0.8em;
                color: #BBB;
                margin-top: 0px;
            }

            .description {
                color: #BBB;
            }

            .read_more {
                text-transform: uppercase;
                margin-bottom: 0px;
                color: white;
            }
        `}</style>
    </div>
)

export default PostItem
