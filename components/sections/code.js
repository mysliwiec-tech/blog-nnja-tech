const Code = (props) => (
    <div>
        <iframe
            src={`https://carbon.now.sh/embed/${props.gist}?bg=rgba(255%2C255%2C255%2C0)&dsyoff=10px&dsblur=31px`}
            style={{ width: '650px', height: props.height, border: 0, overflow: 'hidden'}}
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </div>
)

export default Code