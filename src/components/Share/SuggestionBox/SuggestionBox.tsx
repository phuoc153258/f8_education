import React from 'react';
import styles from './SuggestionBox.module.scss';
import { ENV } from '../../../config';
import { Link } from 'react-router-dom';

const SuggestionBox = ({ content }: any): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <Link className={styles.cta} target="_blank" to={content.href} rel="noopener noreferrer">
                    {content.btn}
                </Link>
            </div>
            <div className={styles.image}>
                <img src={ENV.staticFileUrl + 'fb-group-cards.png'} alt="Học lập trình web (F8 - Fullstack.edu.vn)" />
            </div>
        </div>
    );
};

export default SuggestionBox;
