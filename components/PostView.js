import { Date, RichText } from 'prismic-reactjs'
import * as moment from 'moment'
import Code from './sections/code'

const PostView = (props) => {
    // console.log(props.post.data)
    const slices = props.post.data.body;
    return (
        <div className="post">
            <p className="time">{moment(Date(props.post.first_publication_date)).format("LLLL")}</p>
            <h2>{RichText.asText(props.post.data.title)}</h2>
            <picture>
                <source media="(max-width: 400px)" srcSet={props.post.data.cover_image.mobile.url} />
                <source media="(max-width: 900px)" srcSet={props.post.data.cover_image.tablet.url} />
                <source srcSet={props.post.data.cover_image.url} />
                <img src={props.post.data.cover_image.url} alt={props.post.data.cover_image.url} />
            </picture>
            <p className="description">{RichText.asText(props.post.data.description)}</p>
            <p>{RichText.render(props.post.data.content)}</p>
            {slices.map(function(slice, index) {
                if (slice.slice_type === 'paragraph') {
                    return <p>{RichText.render(slice.primary.text)}</p>
                } else if (slice.slice_type === 'code') {
                    return <Code gist={RichText.asText(slice.primary.text)} height={slice.primary.height} key={index}></Code>
                } else if (slice.slice_type === 'image_with_caption') {
                    return <img src={slice.primary.image.url} key={index}/>
                }
            })}
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
}

export default PostView
