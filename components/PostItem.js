const PostItem = (props) => (
    <div className="post">
        <p className="time">Wednesday, February 6th 2019 (about 9 hours ago)</p>
        <h2>Test</h2>
        <p className="description">Description</p>
        <p className="read_more">Read More</p>
        <style jsx>{`
            .post {
                color: white;
                margin: 0px;
                border-bottom: 1px solid #BBB;
                padding: 64px 0px;
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
            }
        `}</style>
    </div>
)

export default PostItem
