import ReactPropTypes  from 'prop-types'

function Header({ text,bgColor,textcolor}){
    const headerStyles ={
        backgroundColor: bgColor,
        color: textcolor,
    }

    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    );
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes ={
    text: ReactPropTypes.string,
    bgColor: ReactPropTypes.string,
    textColor: ReactPropTypes.string,
}
export default Header;