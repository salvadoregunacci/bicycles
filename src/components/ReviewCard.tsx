import {IReview} from "../types.ts";
import {Link} from "react-router-dom";

interface IProps extends IReview {

}

const ReviewCard = ({
                        date,
                        hashtags,
                        body,
                        preview
                    }: IProps) => {
    const formattedDate = new Date(date * 1000).toLocaleDateString("ru-RU");

    return (
        <div className="review-card">
            <div className="review-card__preview">
                <img src={preview} alt="preview"/>
            </div>
            <div className="review-card__content">
                <time dateTime={formattedDate} className="t2">{formattedDate}</time>
                <div className="review-card__hashtags">
                    {
                        hashtags.map((hashtag, index) => (
                            <div key={index} className="review-card__hashtag">
                                #{hashtag}
                            </div>
                        ))
                    }
                </div>
                <div className="review-card__body sub-h3">{body}</div>
                <Link to="#" className="review-card__more-btn t2">Детальніше</Link>
            </div>
        </div>
    );
};

export default ReviewCard;