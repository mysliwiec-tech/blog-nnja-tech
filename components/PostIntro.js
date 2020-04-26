import * as moment from 'moment'

const PostIntro = (props) => {
    return (
    <>
        <p className="time">{moment(Date(props.post.created_on)).format("Do MMMM YYYY")}</p>
        <div style={{width: "100%", maxHeight: "300px", overflow: "hidden", borderRadius: "5px"}}>
            <picture>
                {/* WebP */}
                <source media="(min-width: 900px)" srcSet={require(`../public/${props.post.cover_image}?resize&size=650&webp`)} type="image/webp"/>
                <source media="(max-width: 500px)" srcSet={require(`../public/${props.post.cover_image}?resize&size=500&webp`)} type="image/webp"/>
                {/* just resized */}
                <source media="(min-width: 900px)" srcSet={require(`../public/${props.post.cover_image}?resize&size=650`)}/>
                <source media="(max-width: 500px)" srcSet={require(`../public/${props.post.cover_image}?resize&size=500`)}/>
                {/* fallback & parameters */}
                <img style={{maxWidth: "100%", height: "auto"}} src={require(`../public/${props.post.cover_image}?resize&size=650`)} alt={props.post.cover_image_author} />
            </picture>
        </div>
        <h1>{props.post.title}</h1>
        <p className="description">{props.post.description}</p>
        <style jsx>{`
            .time {
                font-size: 0.8em;
                color: #BBB;
                margin-top: 0px;
            }

            .description {
                color: #BBB;
            }
        `}</style>
    </>
)}

export default PostIntro
