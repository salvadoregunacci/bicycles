import {IColor} from "../../types.ts";

interface IProps {
    colors: IColor[],
    onChange: (color: string) => void,
    className?: string,
}

const ColorPick = ({colors, className = "", onChange}: IProps) => {
    return (
        <div className={`color-pick ${className}`}>
            {
                colors.map((color, index) => (
                    <div
                        key={index}
                        className={`color-pick__item ${color.isSelected ? "_selected" : ""}`}
                        style={{background: color.value}}
                        onClick={() => onChange(color.value)}
                    >
                    </div>
                ))
            }
        </div>
    );
};

export default ColorPick;