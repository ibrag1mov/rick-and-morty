export const FilterBTN = ({text}) => {
    return (
        <div>
            <input
                type="radio"
                className="btn-check"
                id="btn-check-outlined"
                autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">
               {text}
            </label>
        </div>
    );
};
