import React from 'react';
import styles from './Item.module.scss';
import { ENV } from '../../../../../../config/env';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

type Props = {
    bannerNumer: number;
    heading: string;
    title: string;
    btnContent: string;
    btnHref: string;
};

const Item = (props: Props): JSX.Element => {
    return (
        <div>
            <div className={clsx(styles.item, styles['banner_' + props.bannerNumer])}>
                <div className={styles.left}>
                    <h2 className={styles.heading}>
                        <Link rel="noreferrer noopener noreferrer" target="_blank" to={props.btnHref}>
                            {props.heading}
                            {props.bannerNumer === 1 ? (
                                <span className={styles.crownIcon}>
                                    <img src={ENV.apiUrl + '/api/v1/file/crown_icon.svg'} alt="" />
                                </span>
                            ) : (
                                ''
                            )}
                        </Link>
                    </h2>
                    <p className={styles.desc}>{props.title}</p>
                    <div>
                        <a
                            rel="noreferrer noopener noreferrer"
                            className={styles.ctaBtn}
                            target="_blank"
                            href={props.btnHref}
                        >
                            {props.btnContent}
                        </a>
                    </div>
                </div>
                <div className={styles.right}>
                    <Link rel="noreferrer noopener noreferrer" target="_blank" to={props.btnHref}>
                        <img
                            className={styles.img}
                            src={`${ENV.apiUrl}/api/v1/file/banner_${props.bannerNumer}.png`}
                            alt="Khóa Học HTML CSS Pro"
                            title="Khóa học HTML CSS Pro"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
