import React, { Fragment, useState, useEffect } from 'react';
import styles from './Login.module.scss';
import formControlStyles from '../../Share/FormControl/FormControl.module.scss';
import clsx from 'clsx';
import FormControl from '../../Share/FormControl/FormControl';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../../services/auth';
import { isAuthenticate, setToken, setUser } from '../../../utils';
import UserService from '../../../services/user';

const Login = (): JSX.Element => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState<any>('');

    const handleLogin = async () => {
        try {
            const responseAuth: any = await AuthService.login({ email, password });
            if (responseAuth?.data?.data) {
                setToken(responseAuth?.data?.data.token);
                const responseUser: any = await UserService.getMe();

                if (responseUser?.data?.data) {
                    setUser(JSON.stringify(responseUser?.data?.data));
                }
                return navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const isAuth = isAuthenticate();
        if (isAuth) navigate('/');
    }, [navigate]);

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
                        <h1 className={styles.title}>Đăng nhập vào F8</h1>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.formBody}>
                            <FormControl
                                label={
                                    <Fragment>
                                        <label className={formControlStyles.label}>Email</label>
                                    </Fragment>
                                }
                                placeholder={'Địa chỉ email'}
                                name={'email'}
                                maxLength={50}
                                type={'text'}
                                data={email}
                                setData={setEmail}
                            />
                            <FormControl
                                placeholder={'Mật khẩu'}
                                name={'password'}
                                maxLength={50}
                                type={'password'}
                                message={
                                    <Fragment>
                                        <div className={formControlStyles.message}>
                                            Tài khoản hoặc mật khẩu không chính xác
                                        </div>
                                    </Fragment>
                                }
                                data={password}
                                setData={setPassword}
                            />
                            <button
                                className={clsx(
                                    'ranks-module_primary',
                                    'base-module_button',
                                    'sizes-module_m',
                                    'tooltip-module_tooltip',
                                    styles.submitBtn,
                                )}
                                type="button"
                                onClick={handleLogin}
                            >
                                <div className="base-module_inner sizes-module_inner">
                                    <span className="base-module_text">Đăng nhập</span>
                                </div>
                            </button>
                        </div>
                        <p className={styles.dontHaveAcc}>
                            Bạn chưa có tài khoản? <Link to="/register?continue=">Đăng ký</Link>
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

export default Login;
