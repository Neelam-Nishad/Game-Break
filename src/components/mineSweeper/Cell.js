

const Cell = (props) => {
    const changeColor = (event) => {
        event.target.className = "changedmineSweeperCellButton";
    }
    return(
        <>
            <div className="mineSweepercell text-center">
                <button className="mineSweeperCellButton" onClick={changeColor}>{props.value}.</button>
            </div>
        </>
    )
}

export default Cell;