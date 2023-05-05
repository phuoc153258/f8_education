import React from 'react';
import styles from './SuggestionBox.module.scss';
import { ENV } from '../../../config';

const SuggestionBox = (): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h2>Tham gia cộng đồng học viên F8 trên Facebook</h2>
                <p>
                    Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau
                    trong quá trình học nhé.
                </p>
                <a
                    className={styles.cta}
                    target="_blank"
                    href="https://www.facebook.com/groups/f8official"
                    rel="noopener noreferrer"
                >
                    Tham gia nhóm
                </a>
            </div>
            <div className={styles.image}>
                <img src={ENV.staticFileUrl + 'fb-group-cards.png'} alt="Học lập trình web (F8 - Fullstack.edu.vn)" />
            </div>
        </div>
    );
};

export default SuggestionBox;
