import React from 'react';
import styles from './VideoPlayer.module.scss';

const VideoPlayer = (): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.player}
                style={
                    {
                        width: '100%',
                        height: '100%',
                    } as React.CSSProperties
                }
            >
                <div
                    style={
                        {
                            width: '100%',
                            height: '100%',
                        } as React.CSSProperties
                    }
                >
                    <iframe
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        title="useEffect() with timer functions"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/zGNOhVjrWFw?autoplay=1&amp;mute=0&amp;controls=1&amp;origin=https%3A%2F%2Ffullstack.edu.vn&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
                        id="widget2"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
