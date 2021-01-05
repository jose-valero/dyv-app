import './style.scss';

function InputText({ id, label }) {
    const onInputClick = (e) => {
        e.target.parentElement.previousElementSibling.classList.toggle('InputLabel-shrink');
        e.target.parentElement.previousElementSibling.classList.toggle('InputLabel-focused');
        e.target.parentElement.classList.toggle('InputLabel-focused');
    }

    return (
        <div className="input__text__wrapper">
            <label className="InputLabel-root InputLabel-animated InputLabel-formControl">{label}</label>
            <div className="input__inner">
                <input 
                    id={id && id} 
                    className="full_w" 
                    type="text" 
                    onFocus={onInputClick} 
                    onBlur={onInputClick}
                />
            </div>
        </div>
    )
}

export default InputText;