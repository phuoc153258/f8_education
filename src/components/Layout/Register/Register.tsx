import React, { Fragment } from 'react';
import styles from './Register.module.scss';
import formControlStyles from '../../Share/FormControl/FormControl.module.scss';
import clsx from 'clsx';
import FormControl from '../../Share/FormControl/FormControl';
import { Link } from 'react-router-dom';

const Register = (): JSX.Element => {
    return (
        <div className={clsx(styles.wrapper, styles.hasBg)}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <Link to="/">
                            <img
                                className={clsx(styles.logo, 'm-0-auto')}
                                src="http://localhost:3001/api/v1/file/f8_icon44x44.png"
                                alt="F8"
                            />
                        </Link>
                        <h1 className={styles.title}>Đăng ký tài khoản F8</h1>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.formBody}>
                            <FormControl
                                label={
                                    <Fragment>
                                        <label className={formControlStyles.label}>Tên của bạn?</label>
                                    </Fragment>
                                }
                                placeholder={'Họ và tên của bạn'}
                                name={'name'}
                                maxLength={50}
                                type={'text'}
                            />
                            <FormControl
                                label={
                                    <Fragment>
                                        <label className={formControlStyles.label}>Email</label>
                                    </Fragment>
                                }
                                placeholder={'Email'}
                                name={'email'}
                                maxLength={50}
                                type={'email'}
                            />
                            <FormControl placeholder={'Password'} name={'password'} maxLength={50} type={'password'} />
                            <FormControl
                                placeholder={'Confirm password'}
                                name={'confirmPassword'}
                                maxLength={50}
                                type={'password'}
                            />
                            <button
                                className={clsx(
                                    'ranks-module_primary',
                                    'base-module_button',
                                    'sizes-module_m',
                                    'tooltip-module_tooltip',
                                    styles.submitBtn,
                                )}
                                disabled={true}
                                type="button"
                            >
                                <div className="base-module_inner sizes-module_inner">
                                    <span className="base-module_text">Đăng ký</span>
                                </div>
                            </button>
                        </div>
                        <p className={styles.dontHaveAcc}>
                            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                        </p>
                        <p className={styles.forgotPassword}>Quên mật khẩu?</p>
                    </div>
                    <div className={styles.acceptTerm}>
                        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                        <a href="https://fullstack.edu.vn/terms">Điều khoản sử dụng</a> của chúng tôi.
                    </div>
                </div>
                <div className={styles.about}>
                    <a href="https://fullstack.edu.vn/about-us" target="_blank" rel="noopener noreferrer">
                        Giới thiệu về F8
                    </a>
                    <span>|</span>
                    <a href="https://www.youtube.com/c/F8VNOfficial" target="_blank" rel="noopener noreferrer">
                        F8 trên Youtube
                    </a>
                    <span>|</span>
                    <a href="https://www.facebook.com/groups/f8official" target="_blank" rel="noopener noreferrer">
                        F8 trên Facebook
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
