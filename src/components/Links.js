function Links(props) {
    return (
        <>
        <h3>Links</h3>
        
        <a href={props.text.github}>{props.text.github}</a>
        <a href={props.text.linkedin}>{props.text.linkedin}</a>
        </>
    );
}

export default Links