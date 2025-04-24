type Props = {
    className?: string,
}
const Loader = ({className}: Props) => {
    return (
        <span className={`${className} loader`}></span>
    );
};

export default Loader;