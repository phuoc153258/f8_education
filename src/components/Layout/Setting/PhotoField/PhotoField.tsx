import React, { useState, useRef } from 'react';
import styles from './PhotoField.module.scss';
import FallbackAvatar from '../../../Share/FallbackAvatar/FallbackAvatar';
import { ENV } from '../../../../config';
import Button from '../Button/Button';
import clsx from 'clsx';
import { actions } from '../../../../store';
import UserService from '../../../../services/user';
import { setUser } from '../../../../utils';

const PhotoField = ({ image, name, dispatch }: any): JSX.Element => {
    const [showEditImage, setShowEditImage] = useState<any>(false);
    const [file, setFile] = useState('');
    const [imageShow, setImageShow] = useState<any>(ENV.staticFileUrl + image);
    const ref = useRef<any>(null);

    const handleImageChange = (event: any) => {
        setFile(event.target.files[0]);
        const selectedImage = event.target.files[0];
        setImageShow(URL.createObjectURL(selectedImage));
    };

    async function updateInfoUser() {
        try {
            let formData = new FormData();
            formData.append('avatar', file);
            let userResponse: any = await UserService.updateCurrentUser(formData);
            if (userResponse?.data?.data) {
                dispatch(actions.setCurrentUserInfo(undefined));
                dispatch(actions.setCurrentUserInfo(userResponse.data.data));
                setUser(JSON.stringify(userResponse.data.data));
                setShowEditImage(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={styles.fieldContent}>
                <h3 className={styles.fieldContentLabel}>Avatar</h3>
                <div className={styles.fieldContentEdit}>
                    <div className={styles.contentBody}>Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.</div>
                    <div className={styles.contentImage}>
                        <div className={styles.avatar}>
                            <FallbackAvatar image={imageShow} name={name} fontSize={8.9} />
                        </div>
                        <label form="avatar">
                            {showEditImage ? (
                                <>
                                    {' '}
                                    <div className={styles.chooseAva}>
                                        <svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="camera"
                                            className={clsx('svg-inline--fa', 'fa-camera', styles.chooseImg)}
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className={styles.pickAva}>
                                        <input
                                            ref={ref}
                                            type="file"
                                            accept="image/jpg, image/jpeg, image/png"
                                            id="avatar"
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                </>
                            ) : (
                                ''
                            )}
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles.fieldBtn}>
                {!showEditImage ? (
                    <Button
                        content={'Chỉnh sửa'}
                        handleButton={() => {
                            setShowEditImage(true);
                        }}
                    />
                ) : (
                    <div className={styles.editMode}>
                        <Button
                            classButton={'fieldButtonSave'}
                            content={'Lưu'}
                            handleButton={() => {
                                updateInfoUser();
                            }}
                        />
                        <Button
                            content={'Hủy'}
                            handleButton={() => {
                                setShowEditImage(false);
                            }}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default PhotoField;
