import PostIntro from './PostIntro'
import ReactMarkdown from 'react-markdown'
// import Code from './sections/Code'

const PostView = (props) => {
    return (
        <div className="post">
            <PostIntro post={props.post.metadata}/>
            <ReactMarkdown source={props.post.body} 
                transformImageUri={
                    uri => require(`../public/${uri}?resize&size=650`)
                }
            />
            <style jsx>{`
                .post {
                    color: white;
                    margin: 0px;
                    border-bottom: 1px solid #BBB;
                    padding: 40px 0px;
                }
            `}</style>
            <style global jsx>{`
                a:link, a:hover, a:active {
                    color: white;
                }
                a:visited {
                    color: #CCCCCC; 
                }
                code {
                    
                }
            `}</style>
        </div>
    )
}

export default PostView
