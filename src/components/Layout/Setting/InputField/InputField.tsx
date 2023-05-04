import React, { useRef, useState } from 'react';
import styles from './InputField.module.scss';
import Button from '../Button/Button';
import UserService from '../../../../services/user';
import { actions } from '../../../../store';
import { setUser } from '../../../../utils';

const InputField = ({
    fieldName,
    description,
    placeholder,
    isFieldBtn = false,
    valueInput,
    keyName,
    dispatch,
}: any): JSX.Element => {
    const [showEditButton, setShowEditButton] = useState<any>(false);
    const [disableInput, setDisableInput] = useState<any>(true);
    const [input, setInput] = useState<any>(valueInput);
    const ref = useRef<any>(null);

    function handleChange(event: any) {
        setInput(event.target.value);
    }

    async function updateInfoUser() {
        try {
            let formData = new FormData();
            formData.append(ref.current.name, input);
            let userResponse: any = await UserService.updateCurrentUser(formData);
            if (userResponse?.data?.data) {
                dispatch(actions.setCurrentUserInfo(undefined));
                dispatch(actions.setCurrentUserInfo(userResponse.data.data));
                setUser(JSON.stringify(userResponse.data.data));
                setShowEditButton(false);
                setDisableInput(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={styles.fieldContent}>
                <h3 className={styles.fieldContentLabel}>{fieldName}</h3>
                <div>
                    <div className={styles.fieldContentEdit}>
                        <input
                            type="text"
                            name={keyName}
                            className={styles.fieldContentInput}
                            placeholder={placeholder}
                            disabled={disableInput}
                            value={input}
                            ref={ref}
                            onChange={handleChange}
                        />
                        <div className={styles.description}>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.fieldBtn}>
                {isFieldBtn ? (
                    !showEditButton ? (
                        <Button
                            content={'Chỉnh sửa'}
                            handleButton={() => {
                                setShowEditButton(true);
                                setDisableInput(false);
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
                                    setShowEditButton(false);
                                    setDisableInput(true);
                                }}
                            />
                        </div>
                    )
                ) : (
                    ''
                )}
            </div>
        </>
    );
};

export default InputField;
