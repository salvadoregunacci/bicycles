import Modal from "../../../components/Modal.tsx";
import React, {useRef, useState} from "react";
import ReactPlayer from 'react-player/lazy';

const Video = () => {
    const [activeModal, setActiveModal] = useState(false);
    const playerRef = useRef<ReactPlayer | null>(null);

    const handleClickPlay: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (playerRef.current) {
            playerRef.current?.seekTo(0);
        }

        setActiveModal(true);
    }

    const handleCloseModalVideo = (): void => {
        setActiveModal(false);
    }

    return (
        <section className="section section_video">
            <h2 className="sr-only">Video presentation</h2>

            <button
                className="btn video__play-btn"
                title="Відтворити"
                onClick={handleClickPlay}
            >
                <svg width="53" height="60" viewBox="0 0 53 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M49.5259 25.6729C52.8523 27.5987 52.8523 32.4013 49.5259 34.3271L7.50518 58.6549C4.17185 60.5847 2.10133e-07 58.1794 3.7803e-07 54.3278L2.49896e-06 5.67224C2.66686e-06 1.82058 4.17185 -0.584717 7.50518 1.34511L49.5259 25.6729Z"
                        fill="#F57520"/>
                </svg>
            </button>

            <Modal
                isActive={activeModal}
                onClose={handleCloseModalVideo}
                className="video-modal"
            >
                <ReactPlayer
                    ref={playerRef}
                    url="https://www.youtube.com/embed/w8qJSRurD5o"
                    playing={activeModal}
                    className="video-player"
                    controls={true}
                    volume={0.1}
                    width="auto"
                    height="auto"
                />
            </Modal>
        </section>
    );
};

export default Video;