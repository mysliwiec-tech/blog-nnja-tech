import { Date, RichText } from 'prismic-reactjs'
import * as moment from 'moment'
import Code from './sections/Code'

const PostView = (props) => {
    console.log(props)
    return (
        <div className="post">
            <p className="time">{moment(Date(props.post.metadata.created_on)).format("LLLL")}</p>
            <picture>
                <source style={{maxWidth: "100%", height: "auto"}} media="(max-width: 500px)" srcSet={props.post.metadata.cover_image} />
                <img style={{maxWidth: "100%", height: "auto"}} src={props.post.metadata.cover_image} alt={props.post.metadata.cover_image_author} />
            </picture>
            <h2>{props.post.metadata.title}</h2>
            <p className="description">{props.post.metadata.description}</p>
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
}

export default PostView
