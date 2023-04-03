import React, { useState, useEffect } from 'react';
import styles from './CurriculumOfCourse.module.scss';
import clsx from 'clsx';
import {
    getTotalChapter,
    getTotalLesson,
    convertNumberToTimeVIE,
    convertNumberToTimeENG,
} from '../../../../../helpers';

const CurriculumOfCourse = ({ course, times }: any): JSX.Element => {
    const [chapters, setChapters] = useState<any>(0);
    const [lessons, setLessons] = useState<any>(0);

    let indexLesson = 1;

    useEffect(() => {
        setChapters(getTotalChapter(course));
        setLessons(getTotalLesson(course));
    }, [course]);

    return (
        <div className={styles.curriculumOfCourse}>
            <div className={styles.headerSticky}>
                <div className={styles.headerBlock}>
                    <h2 className={styles.floatLeft}>Nội dung khóa học</h2>
                </div>
                <div className={styles.subHeadWrapper}>
                    <ul>
                        <li className={styles.hiddenMobile}>
                            <strong>{chapters}</strong> chương
                        </li>
                        <li className={clsx(styles.dot, styles.hiddenMobile)}>•</li>
                        <li>
                            <strong>{lessons} </strong> bài học
                        </li>
                        <li className={styles.dot}>•</li>
                        <li>
                            <span>
                                Thời lượng <strong>{convertNumberToTimeVIE(times)}</strong>
                            </span>
                        </li>
                    </ul>
                    <div className={styles.toggleBtn}>Mở rộng tất cả</div>
                </div>
            </div>
            <div className={styles.curriculumPanel}>
                <div className={styles.panelGroup}>
                    <div>
                        <>
                            {course.courseContents
                                ? course.courseContents.map((chapter: any, index: any) => {
                                      return (
                                          <div className={styles.panel} key={chapter.id} onClick={() => {}}>
                                              <div
                                                  className={clsx(styles.panelHeading, 'noselect', styles.activePanel)}
                                              >
                                                  <h5 className={styles.panelTitle}>
                                                      <div className={styles.headline}>
                                                          <span className={clsx(styles.floatLeft, styles.groupName)}>
                                                              <strong>
                                                                  {index + 1}. {chapter.name}
                                                              </strong>
                                                          </span>
                                                          <span
                                                              className={clsx(styles.floatRight, styles.timeOfSection)}
                                                          >
                                                              {chapter.lessons.length} bài học
                                                          </span>
                                                      </div>
                                                  </h5>
                                              </div>
                                              <div className={clsx(styles.collapse, styles.in)}>
                                                  <div className={styles.panelBody}>
                                                      <div>
                                                          <div>
                                                              <>
                                                                  {chapter.lessons
                                                                      ? chapter.lessons.map((lesson: any) => {
                                                                            return (
                                                                                <div
                                                                                    className={styles.lessonItem}
                                                                                    key={lesson.id}
                                                                                >
                                                                                    <span
                                                                                        className={clsx(
                                                                                            styles.floatLeft,
                                                                                            styles.iconLink,
                                                                                        )}
                                                                                    >
                                                                                        <svg
                                                                                            aria-hidden="true"
                                                                                            focusable="false"
                                                                                            data-prefix="fas"
                                                                                            data-icon="circle-play"
                                                                                            className={clsx(
                                                                                                'svg-inline--fa',
                                                                                                'fa-circle-play',
                                                                                                styles.icon,
                                                                                                styles.video,
                                                                                            )}
                                                                                            role="img"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            viewBox="0 0 512 512"
                                                                                        >
                                                                                            <path
                                                                                                fill="currentColor"
                                                                                                d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
                                                                                            ></path>
                                                                                        </svg>
                                                                                        <div
                                                                                            className={
                                                                                                styles.lessonName
                                                                                            }
                                                                                        >
                                                                                            {indexLesson++}.{' '}
                                                                                            {lesson.name}
                                                                                        </div>
                                                                                    </span>
                                                                                    <span className={styles.floatRight}>
                                                                                        {convertNumberToTimeENG(
                                                                                            lesson.lessonLength,
                                                                                        )}
                                                                                    </span>
                                                                                </div>
                                                                            );
                                                                        })
                                                                      : ''}
                                                              </>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      );
                                  })
                                : ''}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurriculumOfCourse;
