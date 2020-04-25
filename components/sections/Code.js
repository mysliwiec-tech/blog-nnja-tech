import IframeResizer from 'iframe-resizer-react'
import { RichText } from 'prismic-reactjs'

const Code = (props) => {
    let lang = props.data.lang;
    const code = RichText.asText(props.data.code);
    return (
    <div>
        <IframeResizer
            src={`https://nnja-carbon.now.sh/embed?code=${code}&l=${lang}&bg=rgba(255%2C255%2C255%2C0)&dsyoff=10px&dsblur=31px`}
            style={{ width: '1px', minWidth: '100%', border: 0}}
            sandbox="allow-scripts allow-same-origin">
        </IframeResizer>
    </div>
)}

export default Code