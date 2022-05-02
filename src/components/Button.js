const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>
                <i className="next-btn_quote fa-solid fa-circle-chevron-right"></i>
            </button>
        </div>
    );
};

export default Button;