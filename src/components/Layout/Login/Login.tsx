import React from 'react';
import styles from './Login.module.scss';
import clsx from 'clsx';

const App = (): JSX.Element => {
    return (
        <div className={clsx(styles.wrapper, styles.hasBg)}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <a href="/">
                            <img className={styles.logo} src="/assets/icon/f8_icon.png" alt="F8" />
                        </a>
                        <h1 className={styles.title}>Đăng nhập vào F8</h1>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.formBody}>
                            <div className="FormControl_wrapper__WJGST">
                                <div className="FormInput_wrapper__agiKS">
                                    <div className="FormInput_labelGroup__pDJ+V">
                                        <label className="FormInput_label__kIc-w">Email</label>
                                        <label className="FormInput_label__kIc-w FormInput_right__y8Rz2">
                                            Đăng nhập với SĐT
                                        </label>
                                    </div>
                                    <div className="FormInput_inputWrap__mjtRx">
                                        <input placeholder="Địa chỉ email" name="email" maxLength={50} value="" />
                                    </div>
                                </div>
                            </div>
                            <div className="FormControl_wrapper__WJGST">
                                <div className="FormInput_wrapper__agiKS">
                                    <div className="FormInput_labelGroup__pDJ+V"></div>
                                    <div className="FormInput_inputWrap__mjtRx">
                                        <input
                                            name="password"
                                            placeholder="Mật khẩu"
                                            type="password"
                                            value=""
                                            autoComplete="password"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="ranks-module_primary__3Sh2z base-module_button__2kgqC sizes-module_m__2XF5n Login_submitBtn__h5Ikm tooltip-module_tooltip__3Q4cn"
                                disabled={true}
                                type="button"
                            >
                                <div className="base-module_inner__182n1 sizes-module_inner__3Ua2h">
                                    <span className="base-module_text__1MM8s">Đăng nhập</span>
                                </div>
                            </button>
                        </div>
                        <p className={styles.dontHaveAcc}>
                            Bạn chưa có tài khoản? <a href="/register?continue=">Đăng ký</a>
                        </p>
                        <p className={styles.forgotPassword}>Quên mật khẩu?</p>
                    </div>
                </div>
                <div className={styles.about}></div>
            </div>
        </div>
    );
};

export default App;
