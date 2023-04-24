import React, { Fragment } from 'react';
import styles from './TippyModule.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import userMenuStyles from '../UserMenu/UserMenu.module.scss';
import UserMenuUser from '../UserMenu/UserMenuUser';
import UserMenuList from '../UserMenu/UserMenuList';
import { Logout } from '../../../utils/';
import { useStore } from '../../../hooks';
import { actions } from '../../../store';

const Tippy_module = ({ user }: any): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useStore();

    return (
        <ul className={clsx(styles.wrapper, userMenuStyles.wrapper, 'hide-on-click')}>
            <UserMenuUser user={user} />
            <hr />
            <UserMenuList
                content={
                    <Fragment>
                        <li>
                            <Link className={userMenuStyles.item} to={`/@${user.slug}`}>
                                {'Trang cá nhân'}
                            </Link>
                        </li>
                    </Fragment>
                }
            />
            <hr />
            <UserMenuList
                content={
                    <Fragment>
                        <li>
                            <Link className={userMenuStyles.item} to={'/new-post'}>
                                {'Viết blog'}
                            </Link>
                        </li>
                        <li>
                            <Link className={userMenuStyles.item} to={'/me/posts/drafts'}>
                                {'Bài viết của tôi'}
                            </Link>
                        </li>
                    </Fragment>
                }
            />
            <hr />
            <UserMenuList
                content={
                    <Fragment>
                        <Link className={userMenuStyles.item} to={'/me/bookmark/posts'}>
                            {'Bài viết đã lưu'}
                        </Link>
                    </Fragment>
                }
            />
            <hr />
            <UserMenuList
                content={
                    <Fragment>
                        <Link className={userMenuStyles.item} to={'/settings/personal'}>
                            {'Cài đặt'}
                        </Link>
                        <li>
                            <span
                                className={userMenuStyles.item}
                                onClick={() => {
                                    Logout();
                                    dispatch(actions.userLogIn(''));
                                    dispatch(actions.setCurrentUserInfo(undefined));
                                }}
                            >
                                {'Đăng xuất'}
                            </span>
                        </li>
                    </Fragment>
                }
            />
        </ul>
    );
};

export default Tippy_module;
