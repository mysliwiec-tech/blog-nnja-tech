import PostIntro from './PostIntro'
import ReactMarkdown from 'react-markdown'
// import Code from './sections/Code'

const PostView = (props) => {
    return (
        <div className="post">
            <PostIntro post={props.post.metadata}/>
            <ReactMarkdown source={props.post.body}/>
            <style jsx>{`
                .post {
                    color: white;
                    margin: 0px;
                    border-bottom: 1px solid #BBB;
                    padding: 40px 0px;
                }
            `}</style>
        </div>
    )
}

export default PostView
