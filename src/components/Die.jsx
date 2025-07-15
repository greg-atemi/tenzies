export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    };

    return (
        <>
            <button 
                className="die" 
                style={styles} 
                onClick={props.hold} // Trigger the onClick function passed from parent
            >
                {props.value}
            </button>
        </>
    );
}
