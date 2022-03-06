import "./Container.css"

function Container({ children, title, isExtended, setIsExtended }) {
    const style = {
        maxWidth: title === "Editor" ? "600px" : "800px",
    }

    return (
        <div className="container" style={style}>
            <div className="container-head">
                <div>
                    <i className="fa fa-free-code-camp"></i>
                    <strong>{title}</strong>
                </div>
                {isExtended !== "both" ? (
                    <i 
                        className="fa fa-compress"
                        onClick={() => {
                            setIsExtended("both")
                        }}
                    ></i>
                ) : (
                    <i 
                        className="fa fa-arrows-alt"
                        onClick={() => {
                            setIsExtended(title)
                        }}
                    ></i>
                )}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Container
