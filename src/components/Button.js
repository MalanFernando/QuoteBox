const Button = (props) => {
    return (
        <div>
            <i onClick={props.onClick} className="next-btn_quote fa-solid fa-circle-chevron-right"></i>
        </div>
    );
};

export default Button;