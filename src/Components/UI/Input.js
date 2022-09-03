

const Input =props=>
{
return(
    <div className="inputComponent">
        <label htmlFor={props.input.id}>{props.label}</label>
        <input />

    </div>
)


}

export default Input;