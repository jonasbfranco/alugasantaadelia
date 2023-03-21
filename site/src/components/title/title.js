import './title.css'
function Title(props) {
    console.log(props.children)
    return (
        <h1 className='title'>{props.children}</h1>
    )
}

export default Title