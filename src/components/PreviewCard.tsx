import {IPreviewCard} from "../types.ts";
import {Link} from "react-router-dom";

interface IProps extends IPreviewCard {
    link: string,
}

const PreviewCard = ({
                         date,
                         hashtags,
                         body,
                         preview,
                         link,
                     }: IProps) => {
    const formattedDate = new Date(date * 1000).toLocaleDateString("ru-RU");

    return (
        <Link to={link} className="preview-card">
            <div className="preview-card__preview">
                <img src={preview} alt="preview"/>
            </div>
            <div className="preview-card__content">
                <time dateTime={formattedDate} className="t2">{formattedDate}</time>
                <div className="preview-card__hashtags">
                    {
                        hashtags.map((hashtag, index) => (
                            <div key={index} className="preview-card__hashtag">
                                #{hashtag}
                            </div>
                        ))
                    }
                </div>
                <div className="preview-card__body sub-h3">{body}</div>
                <Link to="#" className="preview-card__more-btn t2">Детальніше</Link>
            </div>
        </Link>
    );
};

export default PreviewCard;