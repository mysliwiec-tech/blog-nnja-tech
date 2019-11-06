import { Date, RichText } from 'prismic-reactjs'
import Link from 'next/link'
import * as moment from 'moment'

const PostItem = (props) => (
    <div className="post">
        <p className="time">{moment(Date(props.post.first_publication_date)).format("LLLL")} ({moment(Date(props.post.first_publication_date)).fromNow()})</p>
        <h2>{RichText.asText(props.post.data.title)}</h2>
        <p className="description">{RichText.asText(props.post.data.description)}</p>
        <Link href='/post/[uid]' as={'/post/' + props.post.uid}><a className="read_more">Read More</a></Link>
        <style jsx>{`
            .post {
                color: white;
                margin: 0px;
                border-bottom: 1px solid #BBB;
                padding: 16px 0px;
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
