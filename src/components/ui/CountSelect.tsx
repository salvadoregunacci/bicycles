interface IProps {
    onUp: () => void,
    onDown: () => void,
    value: number,
    maxCount: number,
}

const CountSelect = ({
                         onUp,
                         onDown,
                         value,
                         maxCount,
                     }: IProps) => {
    return (
        <div className="count-select">
            <div
                className={`count-select__handler down t1 ${value <= 1 ? "_disabled" : ""}`}
                onClick={onDown}
            >
                <span>-</span>
            </div>
            <div className="count-select__value t1">
                {value}
            </div>
            <div
                className={`count-select__handler up t1  ${value >= maxCount ? "_disabled" : ""}`}
                onClick={onUp}
            >
                <span>+</span>
            </div>
        </div>
    );
};

export default CountSelect;