import React, { Fragment } from 'react';
import styles from './LearningPathItem.module.scss';
import Button from '../../../Share/Button/Button';
import CircularProgressBar from '../../../Share/CircularProgressBar/CircularProgressBar';
import CourseStep from './CourseStep/CourseStep';
import { Link } from 'react-router-dom';
import { ENV } from '../../../../config';

const LearningPathItem = ({ item }: any): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <div className={styles.info}>
                    <h2 className={styles.title}>
                        <Link to={`/learning-paths/${item.slug}`}>{item.name}</Link>
                    </h2>
                    <p className={styles.desc}>{item.description}</p>
                </div>
                <div className={styles.thumbWrap}>
                    <Link className={styles.thumbRound} to={`/learning-paths/${item.slug}`}>
                        <img className={styles.thumb} src={ENV.staticFileUrl + item.image} alt={item.name} />
                    </Link>
                </div>
            </div>
            <div className={styles.cta}>
                <>
                    {item.courses.map((course: any, index: any) => {
                        return (
                            <CircularProgressBar
                                key={index}
                                progress={100}
                                content={
                                    <Fragment>
                                        <CourseStep course={course} />
                                    </Fragment>
                                }
                            />
                        );
                    })}
                </>
            </div>
            <div>
                <Button href={'/learning-paths/' + item.slug} content={'Xem chi tiết'} />
            </div>
        </div>
    );
};

export default LearningPathItem;
