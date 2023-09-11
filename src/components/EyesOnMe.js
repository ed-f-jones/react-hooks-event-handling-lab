// Code EyesOnMe Component Here
export default function EyesOnMe () {
    const focus = function () {
        console.log("Good!")
    }
    const blur = function () {
        console.log("Hey! Eyes on me!")
    }
    return (
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>

    )

}
