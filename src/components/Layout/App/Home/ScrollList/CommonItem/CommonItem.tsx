import React from 'react';
import styles from './CommonItem.module.scss';
import homeStyles from '../../Home.module.scss';
import buttonStyles from '../../../../../Share/Button/Button.module.scss';
import clsx from 'clsx';
import CourseItem from './CourseItem/CourseItem';

type Props = {
    name: string;
    isRegister: boolean;
    backgroundImage: string;
    href: string;
    typeCommon: number;
};

const CommonItem = (props: Props): JSX.Element => {
    return (
        <div className={clsx(styles.wrapper, homeStyles.courseItem)}>
            <a
                className={clsx(styles.thumb, styles.hasLink)}
                title={props.name}
                target="_self"
                href={props.href}
                style={{
                    backgroundImage: `url(${props.backgroundImage})`,
                }}
            >
                <button className={clsx(buttonStyles.btn, styles.ctaBtn)}>
                    {props.isRegister ? 'Tiếp tục học' : 'Xem khóa học'}
                </button>
            </a>
            <h3 className={styles.title}>
                <a target="_self" href={props.href}>
                    {props.name}
                </a>
            </h3>
            {props.typeCommon === 1 ? <CourseItem /> : ''}
        </div>
    );
};

export default CommonItem;
