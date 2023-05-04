import React, { Fragment } from 'react';
import styles from './Setting.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import GroupField from './GroupField/GroupField';
import FieldWrapper from './FieldWrapper/FieldWrapper';
import InputField from './InputField/InputField';
import PhotoField from './PhotoField/PhotoField';
import { useParams } from 'react-router-dom';
import { useStore } from '../../../hooks';

const Setting = (): JSX.Element => {
    const { slug } = useParams();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useStore();

    return (
        <div className={styles.settingWrapper}>
            <div className={styles.sidebarWrapper}>
                <h1 className={styles.heading}>Cài đặt</h1>
                <ul className={styles.sidebarList}>
                    <li>
                        <Link
                            aria-current="page"
                            className={slug === 'personal' ? styles.active : ''}
                            to="/settings/personal"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="user"
                                className={clsx('svg-inline--fa', 'fa-user', styles.icon)}
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"
                                ></path>
                            </svg>
                            <span>Cài đặt tài khoản</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings/security" className={slug === 'security' ? styles.active : ''}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="shield"
                                className={clsx('svg-inline--fa', 'fa-shield', styles.icon)}
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M466.5 83.71l-192-80C269.6 1.67 261.3 0 256 0C250.7 0 242.5 1.67 237.6 3.702l-192 80C27.7 91.1 16 108.6 16 127.1c0 257.2 189.2 384 239.1 384c51.1 0 240-128.2 240-384C496 108.6 484.3 91.1 466.5 83.71zM256 446.5l.0234-381.1c.0059-.0234 0 0 0 0l175.9 73.17C427.8 319.7 319 417.1 256 446.5z"
                                ></path>
                            </svg>
                            <span>Bảo mật và đăng nhập</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings/notifications">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="bell"
                                className={clsx('svg-inline--fa', 'fa-bell', styles.icon)}
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"
                                ></path>
                            </svg>
                            <span>Thông báo</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.pageWrapper}>
                <section className="index-module_row">
                    <section className="index-module_col index-module_c-12 index-module_m-12 index-module_l-12">
                        <div className={styles.wrapper}>
                            {slug === 'personal' ? (
                                <GroupField
                                    heading={'Thông tin cá nhân'}
                                    content={
                                        <Fragment>
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Họ tên'}
                                                            description={
                                                                'Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình luận của bạn.'
                                                            }
                                                            placeholder={'Thêm tên của bạn'}
                                                            isFieldBtn={true}
                                                            valueInput={state.currentUser.fullname}
                                                            keyName={'fullname'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Bio'}
                                                            description={
                                                                'Bio hiển thị trên trang cá nhân và trong các bài viết (blog) của bạn.'
                                                            }
                                                            placeholder={'Thêm giới thiệu'}
                                                            isFieldBtn={true}
                                                            valueInput={state.currentUser.bio}
                                                            keyName={'bio'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Số điện thoại'}
                                                            placeholder={'Thêm số điện thoại'}
                                                            isFieldBtn={true}
                                                            description={'Điện thoại liên kết với F8.'}
                                                            valueInput={state.currentUser.phone}
                                                            keyName={'phone'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <PhotoField
                                                            image={state.currentUser.avatar}
                                                            name={state.currentUser.fullname}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Email'}
                                                            placeholder={'Thêm email'}
                                                            isFieldBtn={false}
                                                            valueInput={state.currentUser.email}
                                                            keyName={'email'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Username'}
                                                            placeholder={'Thêm tên người dùng'}
                                                            description={`URL: https://fullstack.edu.vn/@nguyendonphuoc`}
                                                            isFieldBtn={false}
                                                            valueInput={state.currentUser.slug}
                                                            keyName={'slug'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                        </Fragment>
                                    }
                                />
                            ) : (
                                ''
                            )}

                            {slug === 'security' ? (
                                <GroupField
                                    heading={'Mạng xã hội'}
                                    content={
                                        <Fragment>
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Facebook'}
                                                            placeholder={'Eg. https://www.facebook.com/hoclaptrinhf8'}
                                                            isFieldBtn={true}
                                                            valueInput={state.currentUser.facebook_link}
                                                            keyName={'facebook_link'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Youtube'}
                                                            placeholder={'Eg. https://www.youtube.com/c/F8VNOfficial'}
                                                            isFieldBtn={true}
                                                            valueInput={state.currentUser.youtube_link}
                                                            keyName={'youtube_link'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Linkedin'}
                                                            placeholder={
                                                                'Eg. https://www.linkedin.com/in/hoclaptrinhf8/'
                                                            }
                                                            isFieldBtn={true}
                                                            valueInput={state.currentUser.linkedin_link}
                                                            keyName={'linkedin_link'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Instagram'}
                                                            placeholder={'Eg. https://www.instagram.com/hoclaptrinhf8/'}
                                                            isFieldBtn={true}
                                                            valueInput={state.currentUser.instagram_link}
                                                            keyName={'instagram_link'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                            <FieldWrapper
                                                content={
                                                    <Fragment>
                                                        <InputField
                                                            fieldName={'Twitter'}
                                                            placeholder={'Eg. https://twitter.com/hoclaptrinhf8'}
                                                            isFieldBtn={true}
                                                            valueInput={state.currentUser.twitter_link}
                                                            keyName={'twitter_link'}
                                                            dispatch={dispatch}
                                                        />
                                                    </Fragment>
                                                }
                                            />
                                        </Fragment>
                                    }
                                />
                            ) : (
                                ''
                            )}
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Setting;
