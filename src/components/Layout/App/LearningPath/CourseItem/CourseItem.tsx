import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './CourseItem.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../../Share/Button/Button';
import { ENV } from '../../../../../config';

function CourseItem({ course }: any) {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <div className={styles.thumb}>
                        <a href="/courses/windows-terminal-wsl">
                            <img src={ENV.staticFileUrl + course.image} alt={course.title} />
                        </a>
                    </div>
                    <div className={styles.info}>
                        <h2 className={styles.title}>
                            <Link to={`/courses/${course.slug}`}>
                                {course.title}
                                <span className={styles.freeTitle}>Miễn phí</span>
                            </Link>
                        </h2>
                        <div className={styles.price}></div>
                        <p className={styles.desc}>{course.description}</p>
                        <Button href={`/courses/${course.slug}`} content={`Xem khóa học`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseItem;
