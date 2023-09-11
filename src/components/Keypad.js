// Code Keypad Component Here

function Keypad (){
    const pad = function() {
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={pad}></input>
        </div>
    )
}

export default Keypad;