import React from 'react';
import styles from './CourseStep.module.scss';
import { Link } from 'react-router-dom';
import { ENV } from '../../../../../config';

const CourseStep = ({ course }: any): JSX.Element => {
    return (
        <Link
            className={styles.wrapper}
            to={`/courses/${course.slug}`}
            style={{ '--progress': 'grayscale(73%);' } as React.CSSProperties}
        >
            <img src={ENV.staticFileUrl + course.icon} alt={course.title} />
        </Link>
    );
};

export default CourseStep;
