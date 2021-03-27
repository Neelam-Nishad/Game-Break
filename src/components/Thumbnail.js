
const Thumbnail = (props) => {
    return(
        <>
            <div className="thumbnail">
                <img src = {props.source} className="img-thumbnail"/>
                <h4 className="thumbnail-title">{props.title}</h4>
            </div>
        </>
    )
}

export default Thumbnail;