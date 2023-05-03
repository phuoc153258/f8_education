import React, { Fragment, useState, useEffect } from 'react';
import styles from './Profile.module.scss';
import FallbackAvatar from '../../../Share/FallbackAvatar/FallbackAvatar';
import { ENV } from '../../../../config';
import Box from './Box/Box';
import { Link, useParams, useNavigate } from 'react-router-dom';
import UserService from '../../../../services/user';
import { convertToDate } from '../../../../helpers';

const Profile = (): JSX.Element => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState<any>(false);
    const [user, setUser] = useState<any>(undefined);

    const fetchData = async () => {
        try {
            setShow(false);
            let userResponse: any = await UserService.getUser({}, slug?.split('@')[1]);
            if (userResponse?.data?.data) {
                setUser(userResponse?.data?.data);
            }
            setShow(true);
        } catch (error) {
            console.log(error);
            return navigate('/');
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!show) return <></>;

    return (
        <>
            <div
                className={styles.banner}
                style={
                    {
                        backgroundImage: `url("${ENV.staticFileUrl + 'background-image-user.png'}")`,
                        position: 'relative',
                    } as React.CSSProperties
                }
            >
                <div className={styles.user}>
                    <div className={styles.userAvatar}>
                        <FallbackAvatar
                            image={ENV.staticFileUrl + user.user.avatar}
                            name={user.user.fullname}
                            fontSize={17.2}
                        />
                    </div>
                    <div className={styles.userName}>
                        <span>{user.user.fullname}</span>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <section className="index-module_row">
                    <section className="index-module_col index-module_c-12 index-module_m-12 index-module_l-5">
                        <div className="content-left">
                            <Box
                                content={
                                    <Fragment>
                                        <div className={styles.participation}>
                                            <div className={styles.participationIcon}>
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="user-group"
                                                    className="svg-inline--fa fa-user-group "
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 640 512"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <span>
                                                Thành viên của{' '}
                                                <span className={styles.highlight}>F8 - Học lập trình để đi làm</span>{' '}
                                                từ {convertToDate(user.user.createdAt)}
                                            </span>
                                        </div>
                                    </Fragment>
                                }
                                title={'Giới thiệu'}
                            />
                            <Box
                                content={
                                    <Fragment>
                                        <div className={styles.noResult}>Chưa có hoạt động gần đây</div>
                                    </Fragment>
                                }
                                title={'Hoạt động gần đây'}
                            />
                        </div>
                    </section>
                    <section className="index-module_col index-module_c-12 index-module_m-12 index-module_l-7">
                        <Box
                            title={'Các khóa học đã tham gia'}
                            content={
                                <Fragment>
                                    <>
                                        {user.courses.map((item: any) => {
                                            return (
                                                <div className={styles.inner}>
                                                    <Link className={styles.thumb} to={`/courses/${item.slug}`}>
                                                        <img
                                                            src={ENV.staticFileUrl + item.image}
                                                            className={styles.thumbImage}
                                                            alt={item.title}
                                                        />
                                                    </Link>
                                                    <div className="info">
                                                        <h3 className={styles.infoTitle}>
                                                            <Link to={`/courses/${item.slug}`}>{item.title}</Link>
                                                        </h3>
                                                        <p className={styles.infoDesc}>{item.description}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </>
                                </Fragment>
                            }
                        />
                    </section>
                </section>
            </div>
        </>
    );
};

export default Profile;
