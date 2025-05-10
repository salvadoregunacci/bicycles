interface IProps {
    className?: string,
}

const Map = ({className = ""}: IProps) => {
    return (
        <picture>
            <source
                srcSet="/images/main/map/bg@1x.avif, /images/main/map/bg@2x.avif 2x"
                type="image/avif"
            />
            <img
                src="/images/main/map/bg@1x.webp"
                srcSet="/images/main/map/bg@2x.webp"
                alt="map"
                className={`map-bg ${className}`}
            />
        </picture>
    );
};

export default Map;