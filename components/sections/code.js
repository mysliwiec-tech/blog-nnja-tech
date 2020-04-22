import IframeResizer from 'iframe-resizer-react'

const Code = (props) => (
    <div>
        <IframeResizer
            src={`https://carbon.now.sh/embed/${props.gist}?bg=rgba(255%2C255%2C255%2C0)&dsyoff=10px&dsblur=31px`}
            style={{ width: '100%', minHeight: props.height + 'px', border: 0}}
            sandbox="allow-scripts allow-same-origin">
        </IframeResizer>
    </div>
)

export default Code