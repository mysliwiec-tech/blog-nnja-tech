import { Date, RichText } from 'prismic-reactjs'
import * as moment from 'moment'
import Code from './sections/Code'

const PostView = (props) => {
    const slices = props.post.data.body;
    return (
        <div className="post">
            <p className="time">{moment(Date(props.post.first_publication_date)).format("LLLL")}</p>
            <picture>
                <source style={{maxWidth: "100%", height: "auto"}} media="(max-width: 500px)" srcSet={props.post.data.cover_image.mobile.url+'&mask=corners&corner-radius=5,5,5,5'} />
                <source style={{maxWidth: "100%", height: "auto"}} srcSet={props.post.data.cover_image.url+'&mask=corners&corner-radius=5,5,5,5'} />
                <img style={{maxWidth: "100%", height: "auto"}} src={props.post.data.cover_image.url+'&mask=corners&corner-radius=5,5,5,5'} alt={props.post.data.cover_image.url} />
            </picture>
            <h2>{RichText.asText(props.post.data.title)}</h2>
            <p className="description">{RichText.asText(props.post.data.description)}</p>
            {slices.map(function(slice, index) {
                if (slice.slice_type === 'paragraph') {
                    return (<>
                        <>{RichText.render(slice.primary.header) || ''}</>
                        <>{RichText.render(slice.primary.text)}</>
                    </>)
                } else if (slice.slice_type === 'code') {
                    return <Code data={slice.primary} key={index}></Code>
                } else if (slice.slice_type === 'image_with_caption') {
                    return <img src={slice.primary.image.url} key={index}/>
                }
            })}
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
