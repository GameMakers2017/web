

const GameList = (props) => {

    return (
         <div className="proejct-main-item">
            <div className="project-main-item-container">
                <img
                src={props.img}
                alt="Subtitle_Star"
                ></img>
                <div className="project-main-item-title">
                    <span>{props.title}</span>
                </div>
            </div>
        </div>
    )
}

export default GameList;