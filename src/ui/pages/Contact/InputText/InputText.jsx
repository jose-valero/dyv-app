import './style.scss';

function InputText({ label }) {

    const onInputClick = (e) => {
        e.target.parentElement.previousElementSibling.classList.toggle('InputLabel-shrink');
        e.target.parentElement.previousElementSibling.classList.toggle('InputLabel-focused');
        e.target.parentElement.classList.toggle('InputLabel-focused');
    }

    return (
        <div className="input__text__wrapper">
            <label className="InputLabel-root InputLabel-animated InputLabel-formControl">{label}</label>
            <div className="input__inner">
                <input className="full_w" type="text" onClick={onInputClick} />
            </div>
        </div>
    )
}

export default InputText;