
export const Button = ({ id, handleClick }) => {

    return (
        <div>
            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    )
}