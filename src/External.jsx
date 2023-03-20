function External(props){
    const style ={
        backgroundColor: "lightpink",
        padding: "20px",
        borderRadius: "10px",
        margin: "10px"
    }
    return(
        <div style={style}>
            <h3>Name: {props.nam}</h3>
            <p>Email: {props.email}</p>
        </div>
    )
}
export default External;