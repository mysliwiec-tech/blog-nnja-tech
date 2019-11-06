const Paginator = props => {
    
    const currentPage = Number(props.page);
    const totalPages = Number(props.total_pages);
    
    return (
        <div>
            <ul>
                {currentPage > 1 && <li>&lt;</li>}
                {currentPage >= 3 && <li>1</li>}
                {currentPage > 3 && <li className="dots">&hellip;</li>}
                {currentPage-1 > 0 && <li>{currentPage-1}</li>}
                <li className="selected">{props.page}</li>
                {currentPage+1 < totalPages && <li>{currentPage+1}</li>}
                {currentPage+1 < totalPages-1 && <li className="dots">&hellip;</li>}
                {currentPage < totalPages && <li>{totalPages}</li>}
                {currentPage+1 <= totalPages && <li>&gt;</li>}
            </ul>
            <style jsx>{`
                div {
                    text-align: center;
                    padding: 10px 0px 10px 0px;
                    border-bottom: 1px solid #DDD;
                    font-size: 0.8em;
                    color: #BBB;
                }

                li {
                    display: inline;
                    margin: 0px 4px;
                    padding: 0px 5px;
                    border: 1px solid;
                }

                .selected {
                    border: 2px solid;
                    border-color: white;
                    color: white;
                }

                .dots {
                    border: none;
                    // margin: 0px 2px;
                    padding: 0px 0px;
                }
            `}</style>
        </div>
    )
}

export default Paginator
