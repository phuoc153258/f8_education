import * as React from 'react';
import { useState, Fragment, useEffect } from 'react';
import { FaInfoCircle, FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import CourseAdminService from '../../../../services/admin/course';
import { ENV } from '../../../../config';
import LevelAdminService from '../../../../services/admin/level';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import photoStyles from '../../../Layout/Setting/PhotoField/PhotoField.module.scss';
import clsx from 'clsx';
import WillLearnAdminRouter from '../../../../services/admin/willLearn';
import RequirementRouter from '../../../../services/admin/requirement';
import TrackAdminService from '../../../../services/admin/track';
import TextEditor from '../../../Share/TextEditor/TextEditor';
import StepAdminService from '../../../../services/admin/step';
import { ContentState, EditorState, convertFromHTML, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import YouTube from 'react-youtube';

function Course() {
    const navigate = useNavigate();
    const [isFetchData, setIsFetchData] = useState<any>(false);

    const [filters, setFilters] = useState<any>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const [showModalCreate, setShowModalCreate] = useState<any>(false);
    const [showModalDelete, setShowModalDelete] = useState<any>(false);
    const [showModalDetail, setShowModalDetail] = useState<any>(false);
    const [showModalDetailCourse, setShowModalDetailCourse] = useState<any>(false);
    const [showModalDetailWillLearn, setShowModalDetailWillLearn] = useState<any>(false);
    const [showModalDetailRequirement, setShowModalDetailRequirement] = useState<any>(false);
    const [showModalCreateTrack, setShowModalCreateTrack] = useState<any>(false);
    const [showModalUpdateTrack, setShowModalUpdateTrack] = useState<any>(false);
    const [showModalCreateStep, setShowModalCreateStep] = useState<any>(false);
    const [showModalUpdateStep, setShowModalUpdateStep] = useState<any>(false);

    const [courses, setCourses] = useState<any>([]);

    const [levels, setLevels] = useState<any>([]);
    const [title, setTitle] = useState<any>('');
    const [description, setDescription] = useState<any>('');
    const [image, setImage] = useState<any>(null);
    const [icon, setIcon] = useState<any>(null);
    const [level, setLevel] = useState<any>(null);
    const [isPro, setIsPro] = useState<any>(false);
    const [price, setPrice] = useState<any>(0);

    const [deleteCourseId, setDeleteCourseId] = useState<any>(null);
    // const [detailCourseId, setDetailCourseId] = useState<any>(null);

    const [detailCourse, setDetailCourse] = useState<any>(null);

    const [titleCourseDelete, setTitleCourseDelete] = useState<any>(null);

    const [courseDetailUpdate, setCourseDetailUpdate] = useState<any>({
        id: null,
        title: '',
        description: '',
        level: null,
        isPro: false,
        price: 0,
        isPublished: false,
    });
    const [file, setFile] = useState('');
    const [imageShow, setImageShow] = useState<any>('');
    const [fileIcon, setFileIcon] = useState('');
    const [iconShow, setIconShow] = useState<any>('');

    const [courseWillLearnsDetail, setCourseWillLearnsDetail] = useState<any>([]);

    const [courseRequirementsDetail, setCourseRequirementsDetail] = useState<any>([]);

    const [positionTrack, setPositionTrack] = useState<any>({});

    const [trackCreate, setTrackCreate] = useState<any>({ title: '', position: 0, isPublished: true });

    const [trackUpdate, setTrackUpdate] = useState<any>({ _id: null, title: '', position: 0, isPublished: true });

    const [positionStep, setPositionStep] = useState<any>({});
    const [stepCreate, setStepCreate] = useState<any>({
        trackId: null,
        trackName: '',
        title: '',
        description: '',
        duration: 0,
        videoUrl: '',
        imageUrl: '',
        position: 0,
        isPublished: true,
    });
    const [stepUpdate, setStepUpdate] = useState<any>({
        trackId: null,
        trackName: '',
        title: '',
        description: '',
        duration: 0,
        videoUrl: '',
        imageUrl: '',
        position: 0,
        isPublished: true,
    });

    const [editorState, setEditorState] = useState<EditorState>(() => EditorState.createEmpty());

    const [editorUpdateStepState, setEditorUpdateStepState] = useState<EditorState>(() => EditorState.createEmpty());

    const handleEditorChange = (newEditorState: EditorState) => {
        setEditorState(newEditorState);
    };

    const handleEditorUpdateStepChange = (newEditorState: EditorState) => {
        setEditorUpdateStepState(newEditorState);
    };

    const convertToHTML = (): string => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const contentStateWithEntity = convertFromRaw(rawContentState);
        const html = stateToHTML(contentStateWithEntity);
        return html;
    };

    const convertToHTMLStep = (): string => {
        const contentState = editorUpdateStepState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const contentStateWithEntity = convertFromRaw(rawContentState);
        const html = stateToHTML(contentStateWithEntity);
        return html;
    };

    const handleCreateCourse = async () => {
        try {
            let formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('image', image);
            formData.append('icon', icon);
            formData.append('levelId', level);
            formData.append('isPro', isPro);
            formData.append('price', price);
            const courseResponse: any = await CourseAdminService.create(formData);
            if (courseResponse?.data?.data) {
                setCourses([...courses, courseResponse?.data?.data]);
                setShowModalCreate(false);
                toast('Tạo khóa học thành công!');
                setIsFetchData((prevState: any) => !prevState);
            }
        } catch (error: any) {
            if (error?.response?.data?.message) toast(error?.response?.data?.message);
        } finally {
            setTitle('');
            setDescription('');
            setImage(null);
            setIcon(null);
            setLevel(null);
            setIsPro(false);
            setPrice(0);
        }
    };

    const handleDeleteCourse = async () => {
        try {
            const courseResponse: any = await CourseAdminService.delete({}, deleteCourseId);
            if (courseResponse?.data?.data) {
                toast('Xóa khóa học thành công');
                setCourses(
                    courses.filter((item: any) => {
                        return item._id !== courseResponse?.data?.data?._id;
                    }),
                );
                setShowModalDelete(false);
                setIsFetchData((prevState: any) => !prevState);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setDeleteCourseId(null);
        }
    };

    const handleShowDetail = async (id: any) => {
        try {
            const courseResponse: any = await CourseAdminService.detail({}, id);
            if (courseResponse?.data?.data) setDetailCourse(courseResponse?.data?.data);
            const trackResponse: any = await TrackAdminService.position({}, id);
            if (trackResponse?.data?.data) setPositionTrack(trackResponse?.data?.data);
            setShowModalDetail(true);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleImageChange = (event: any) => {
        setFile(event.target.files[0]);
        const selectedImage = event.target.files[0];
        setImageShow(URL.createObjectURL(selectedImage));
    };

    const handleIconChange = (event: any) => {
        setFileIcon(event.target.files[0]);
        const selectedImage = event.target.files[0];
        setIconShow(URL.createObjectURL(selectedImage));
    };

    const handleUpdateDetailCourse = async () => {
        try {
            let formData = new FormData();
            formData.append('title', courseDetailUpdate.title);
            formData.append('description', courseDetailUpdate.description);
            formData.append('image', file);
            formData.append('icon', fileIcon);
            formData.append('level', courseDetailUpdate.level);
            formData.append('isPro', courseDetailUpdate.isPro);
            formData.append('price', courseDetailUpdate.price);
            formData.append('isPublished', courseDetailUpdate.isPublished);
            const courseResponse: any = await CourseAdminService.update(formData, courseDetailUpdate.id);
            if (courseResponse?.data?.data) {
                setDetailCourse(courseResponse?.data?.data);
                const newCourses = courses.map((item: any) => {
                    if (item._id === courseResponse?.data?.data._id) return courseResponse?.data?.data;
                    else return item;
                });
                setCourses(newCourses);
            }
            setShowModalDetailCourse(false);
            toast('Tạo khóa học thành công!');
            setIsFetchData((prevState: any) => !prevState);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleUpdateWillLearn = async (index: any) => {
        try {
            const courseResponse: any = await WillLearnAdminRouter.update(
                { content: courseWillLearnsDetail[index].content, courseId: courseWillLearnsDetail[index].courseId },
                courseWillLearnsDetail[index]._id,
            );
            if (courseResponse?.data?.data) {
                setDetailCourse(courseResponse?.data?.data);
                const clone: any = courseResponse?.data?.data?.willLearns.map((x: any) => ({
                    ...x,
                }));
                setCourseWillLearnsDetail(clone);
            }
            // setShowModalDetailCourse(false);
            toast('Cập nhật thông tin thành công!');
            setIsFetchData((prevState: any) => !prevState);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleDeleteWillLearn = async (index: any) => {
        try {
            // eslint-disable-next-line no-restricted-globals
            if (confirm('Xóa mục này !')) {
                const courseResponse: any = await WillLearnAdminRouter.delete({}, courseWillLearnsDetail[index]._id);
                if (courseResponse?.data?.data) {
                    setDetailCourse(courseResponse?.data?.data);
                    const clone: any = courseResponse?.data?.data?.willLearns.map((x: any) => ({
                        ...x,
                    }));
                    setCourseWillLearnsDetail(clone);
                }
                // setShowModalDetailCourse(false);
                toast('Xóa thành công!');
                setIsFetchData((prevState: any) => !prevState);
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleCreateWillLearn = async () => {
        try {
            let willLearn = prompt('Nhập thông tin', '');
            if (willLearn != null) {
                const courseResponse: any = await WillLearnAdminRouter.create({
                    content: willLearn,
                    courseId: detailCourse._id,
                });
                if (courseResponse?.data?.data) {
                    setDetailCourse(courseResponse?.data?.data);
                    const clone: any = courseResponse?.data?.data?.willLearns.map((x: any) => ({
                        ...x,
                    }));
                    setCourseWillLearnsDetail(clone);
                }
                // setShowModalDetailCourse(false);
                toast('Thêm thành công!');
                setIsFetchData((prevState: any) => !prevState);
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleUpdateRequirement = async (index: any) => {
        try {
            const courseResponse: any = await RequirementRouter.update(
                {
                    content: courseRequirementsDetail[index].content,
                    courseId: courseRequirementsDetail[index].courseId,
                },
                courseRequirementsDetail[index]._id,
            );
            if (courseResponse?.data?.data) {
                setDetailCourse(courseResponse?.data?.data);
                const clone: any = courseResponse?.data?.data?.requirements.map((x: any) => ({
                    ...x,
                }));
                setCourseRequirementsDetail(clone);
            }
            // setShowModalDetailCourse(false);
            toast('Cập nhật thông tin thành công!');
            setIsFetchData((prevState: any) => !prevState);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleDeleteRequirement = async (index: any) => {
        try {
            // eslint-disable-next-line no-restricted-globals
            if (confirm('Xóa mục này !')) {
                const courseResponse: any = await RequirementRouter.delete({}, courseRequirementsDetail[index]._id);
                if (courseResponse?.data?.data) {
                    setDetailCourse(courseResponse?.data?.data);
                    const clone: any = courseResponse?.data?.data?.requirements.map((x: any) => ({
                        ...x,
                    }));
                    setCourseRequirementsDetail(clone);
                }
                // setShowModalDetailCourse(false);
                toast('Xóa thành công!');
                setIsFetchData((prevState: any) => !prevState);
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleCreateRequirement = async () => {
        try {
            let requirement = prompt('Nhập thông tin', '');
            if (requirement != null) {
                const courseResponse: any = await RequirementRouter.create({
                    content: requirement,
                    courseId: detailCourse._id,
                });
                if (courseResponse?.data?.data) {
                    setDetailCourse(courseResponse?.data?.data);
                    const clone: any = courseResponse?.data?.data?.requirements.map((x: any) => ({
                        ...x,
                    }));
                    setCourseRequirementsDetail(clone);
                }
                // setShowModalDetailCourse(false);
                toast('Thêm thành công!');
                setIsFetchData((prevState: any) => !prevState);
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    function createTrackElements() {
        let elements = [];
        for (let i = 0; i <= positionTrack.position; i++) {
            elements.push(<option value={i}>{i + 1}</option>);
        }
        return elements;
    }

    function createTrackUpdateElements() {
        let elements = [];
        for (let i = 0; i < positionTrack.position; i++) {
            elements.push(
                <option value={i} selected={trackUpdate.position === i}>
                    {i + 1}
                </option>,
            );
        }
        return elements;
    }

    function createStepElements() {
        let elements = [];
        for (let i = 0; i <= positionStep.position; i++) {
            elements.push(<option value={i}>{i + 1}</option>);
        }
        return elements;
    }

    function createStepUpdateElements() {
        let elements = [];
        for (let i = 0; i <= positionStep.position; i++) {
            elements.push(
                <option value={i} selected={stepUpdate.position === i}>
                    {i + 1}
                </option>,
            );
        }
        return elements;
    }

    const handleCreateTrack = async () => {
        try {
            const trackResponse: any = await TrackAdminService.create({
                title: trackCreate.title,
                position: parseInt(trackCreate.position),
                isPublished: trackCreate.isPublished,
                courseId: detailCourse._id,
            });
            if (trackResponse?.data?.data) {
                setDetailCourse(trackResponse?.data?.data);
            }
            const positionResponse: any = await TrackAdminService.position({}, detailCourse._id);
            if (positionResponse?.data?.data) setPositionTrack(positionResponse?.data?.data);
            setShowModalCreateTrack(false);
            toast('Thêm thành công!');
            setIsFetchData((prevState: any) => !prevState);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleDeleteTrack = async (id: any) => {
        try {
            // eslint-disable-next-line no-restricted-globals
            if (confirm('Xóa mục này !')) {
                const trackResponse: any = await TrackAdminService.delete({}, id);
                if (trackResponse?.data?.data) {
                    setDetailCourse(trackResponse?.data?.data);
                }
                const positionResponse: any = await TrackAdminService.position({}, detailCourse._id);
                if (positionResponse?.data?.data) setPositionTrack(positionResponse?.data?.data);
                setShowModalCreateTrack(false);
                toast('Xóa thành công!');
                setIsFetchData((prevState: any) => !prevState);
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleUpdateTrack = async () => {
        try {
            const trackResponse: any = await TrackAdminService.update(
                {
                    title: trackUpdate.title,
                    position: parseInt(trackUpdate.position),
                    isPublished: trackUpdate.isPublished,
                },
                trackUpdate._id,
            );
            if (trackResponse?.data?.data) {
                setDetailCourse(trackResponse?.data?.data);
            }
            setShowModalUpdateTrack(false);
            toast('Cập nhật thông tin thành công!');
            setIsFetchData((prevState: any) => !prevState);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handlePositionStep = async (id: any) => {
        try {
            const stepResponse: any = await StepAdminService.position({}, id);
            if (stepResponse?.data?.data) {
                setPositionStep(stepResponse?.data?.data);
            }
            // const positionResponse: any = await TrackAdminService.position({}, detailCourse._id);
            // if (positionResponse?.data?.data) setPositionTrack(positionResponse?.data?.data);
            // setShowModalCreateTrack(false);
            // toast('Thêm thành công!');
            setIsFetchData((prevState: any) => !prevState);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleCreateStep = async () => {
        try {
            const stepResonse: any = await StepAdminService.create({
                title: stepCreate.title,
                description: convertToHTML(),
                duration: parseInt(stepCreate.duration),
                imageUrl: stepCreate.imageUrl,
                videoUrl: stepCreate.videoUrl,
                isPublished: stepCreate.isPublished,
                position: stepCreate.position,
                trackId: stepCreate.trackId,
            });
            if (stepResonse?.data?.data) {
                setDetailCourse(stepResonse?.data?.data);
            }
            setShowModalCreateStep(false);
            toast('Thêm thành công!');
            setIsFetchData((prevState: any) => !prevState);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleDeleteStep = async (id: any) => {
        try {
            // eslint-disable-next-line no-restricted-globals
            if (confirm('Xóa mục này !')) {
                console.log(id);
                const stepResponse: any = await StepAdminService.delete({}, id);
                if (stepResponse?.data?.data) {
                    setDetailCourse(stepResponse?.data?.data);
                }

                toast('Xóa thành công!');
                setIsFetchData((prevState: any) => !prevState);
            }
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const handleUpdateStep = async () => {
        try {
            const stepResonse: any = await StepAdminService.update(
                {
                    title: stepUpdate.title,
                    description: convertToHTMLStep(),
                    duration: parseInt(stepCreate.duration),
                    imageUrl: stepUpdate.imageUrl,
                    videoUrl: stepUpdate.videoUrl,
                    isPublished: stepUpdate.isPublished,
                    position: stepUpdate.position,
                    trackId: stepUpdate.trackId,
                },
                stepUpdate._id,
            );
            if (stepResonse?.data?.data) {
                setDetailCourse(stepResonse?.data?.data);
            }
            setShowModalUpdateStep(false);
            toast('Cập nhật thông tin thành công!');
            setIsFetchData((prevState: any) => !prevState);
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    const fecthData = async () => {
        try {
            const courseResponse: any = await CourseAdminService.list({});
            if (courseResponse.data.data) {
                const course = courseResponse.data.data.map((item: any) => {
                    const newCourse = {
                        id: item._id,
                        title: item.title,
                        image: (
                            <Fragment>
                                <img
                                    className="object-cover h-48 rounded-2xl"
                                    src={ENV.staticFileUrl + item.image}
                                    alt=""
                                />
                            </Fragment>
                        ),
                        studentCount: item.studentCount,
                        isPro: item.isPro,
                        price: item.price + 'VND',
                        action: (
                            <Fragment>
                                <div className="flex gap-5 justify-center">
                                    <FaInfoCircle
                                        onClick={() => {
                                            handleShowDetail(item._id);
                                        }}
                                    />
                                    <FaTrash
                                        onClick={() => {
                                            setShowModalDelete(true);
                                            setDeleteCourseId(item._id);
                                            setTitleCourseDelete('Xóa khóa học ' + item.title);
                                        }}
                                    />
                                </div>
                            </Fragment>
                        ),
                    };
                    return newCourse;
                });
                setCourses(course);
            }

            const levelResponse: any = await LevelAdminService.list({});
            if (levelResponse.data.data) {
                setLevels(levelResponse.data.data);
                setLevel(levelResponse.data.data[0]._id);
            }
        } catch (error) {
            navigate('/');
            console.log(error);
        }
    };

    const checkElapsedTime = (e: any) => {
        const duration = e.target.getDuration();
        if (duration) setStepCreate({ ...stepCreate, duration: duration });
    };
    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    useEffect(() => {
        fecthData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFetchData]);

    return (
        <>
            <div id="player"></div>
            <div className="flex-1 p-10 bg-gray-100">
                <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5 className="mb-3 mt-3 text-6xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Quản lý khóa học
                    </h5>
                    <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
                        <div className="flex items-center w-2/12 gap-5">
                            <label
                                htmlFor="countries"
                                className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                            >
                                Thêm :
                            </label>
                            <button
                                type="button"
                                className="text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-6 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                onClick={() => {
                                    setShowModalCreate(true);
                                }}
                            >
                                Thêm khóa học
                            </button>
                        </div>

                        <div>
                            <label htmlFor="table-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <InputText
                                    onInput={(e: any) => {
                                        setFilters({
                                            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS },
                                        });
                                    }}
                                    type="text"
                                    id="table-search-users"
                                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search for users"
                                />
                            </div>
                        </div>
                    </div>

                    <DataTable
                        value={courses}
                        className="w-full text-2xl mt-4  text-left text-gray-500 dark:text-gray-400"
                        filters={filters}
                        sortMode="multiple"
                        paginator
                        rows={5}
                    >
                        <Column field="id" header="ID" sortable className="w-1/12 px-6 py-5 text-2xl" />
                        <Column field="title" header="Tên khóa học" sortable className="px-6 py-5 text-2xl " />
                        <Column field="image" header="Ảnh" sortable className="px-6 py-5 text-2xl " />
                        <Column
                            field="studentCount"
                            header="Số lượng học viên"
                            sortable
                            className="px-6 py-5 text-2xl "
                        />
                        <Column field="isPro" header="Khóa học Pro" sortable className="px-6 py-5 text-2xl " />
                        <Column field="price" header="Giá" sortable className="px-6 py-5 text-2xl " />
                        <Column field="action" header="Hành động" sortable className="px-6 py-5 text-2xl " />
                    </DataTable>
                </div>
            </div>

            {showModalCreate === true && (
                <div
                    id="extralarge-modal"
                    tabIndex={-1}
                    className={`z-[991] flex justify-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
                >
                    <div className="mb-5 flex justify-center item-center  relative p-4 w-full h-max top-[50px]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[900px]">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-4xl font-medium font-medium text-gray-900 dark:text-white m-0">
                                    Thêm khóa học
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="extralarge-modal"
                                    onClick={() => {
                                        setShowModalCreate(false);
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Tên khóa học
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Tên khóa học..."
                                        onChange={(e) => {
                                            setTitle(e.target.value);
                                        }}
                                        value={title}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Mô tả về khóa học
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={2}
                                        className="block p-2.5 w-full text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Mô tả về khóa học..."
                                        value={description}
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
                                    ></textarea>
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                        htmlFor="file_input"
                                    >
                                        Ảnh khóa học
                                    </label>
                                    <input
                                        className="block w-full text-2xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        aria-describedby="file_input_help"
                                        id="file_input"
                                        type="file"
                                        onChange={(e: any) => {
                                            setImage(e.target.files[0]);
                                        }}
                                    />
                                    <p className="mt-1 text-2xl text-gray-500 dark:text-gray-300" id="file_input_help">
                                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                                    </p>
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                        htmlFor="file_input"
                                    >
                                        Icon khóa học
                                    </label>
                                    <input
                                        className="block w-full text-2xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        aria-describedby="file_input_help"
                                        id="file_input"
                                        type="file"
                                        onChange={(e: any) => {
                                            setIcon(e.target.files[0]);
                                        }}
                                    />
                                    <p className="mt-1 text-2xl text-gray-500 dark:text-gray-300" id="file_input_help">
                                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                                    </p>
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Cấp độ khóa học
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            setLevel(e.target.value);
                                        }}
                                    >
                                        <>
                                            {levels.map((item: any, index: any) => {
                                                return (
                                                    <option key={index} value={item._id}>
                                                        {item.name}
                                                    </option>
                                                );
                                            })}
                                        </>
                                    </select>
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Khóa học Pro
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            if (e.target.value === '1') setLevel(true);
                                            else setIsPro(false);
                                        }}
                                    >
                                        <option value="1">Có</option>
                                        <option value="2">Không</option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Giá
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Tên khóa học..."
                                        value={price}
                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    onClick={() => {
                                        setShowModalCreate(false);
                                    }}
                                    className="text-gray-500 text-2xl p-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    Hủy
                                </button>
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    className="text-white text-2xl p-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleCreateCourse}
                                >
                                    Tạo khóa học
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModalDelete === true && (
                <div
                    id="deleteModal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className=" overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50  fixed top-0 right-0 left-0 z-[992] justify-center items-center w-full md:inset-0 h-modal md:h-full"
                >
                    <div className="relative pt-[6.5rem] w-full max-w-md h-full md:h-auto t-0 r-0 l-0 m-auto">
                        {/* Modal content */}
                        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                            <button
                                type="button"
                                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="deleteModal"
                                onClick={() => setShowModalDelete(false)}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-[2rem] h-[2rem]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <svg
                                className="text-gray-400 dark:text-gray-500 w-[6rem] h-[6rem] mb-3.5 mx-auto"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="mb-4 text-gray-500 dark:text-gray-300 text-2xl">{titleCourseDelete}</p>
                            <div className="flex justify-center items-center space-x-4">
                                <button
                                    data-modal-toggle="deleteModal"
                                    type="button"
                                    onClick={() => setShowModalDelete(false)}
                                    className="py-[1rem] px-[1.5rem] text-2xl font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="py-[1rem] px-[1.5rem] text-2xl font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                                    onClick={() => {
                                        handleDeleteCourse();
                                    }}
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModalDetail === true && (
                <div
                    id="extralarge-modal"
                    tabIndex={-1}
                    className={`z-[991] flex justify-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
                >
                    <div className="mb-5 flex justify-center item-center  relative p-4 w-full h-max top-[50px]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[1400px]">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-4xl font-medium font-medium text-gray-900 dark:text-white m-0">
                                    Chi tiết khóa học
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="extralarge-modal"
                                    onClick={() => {
                                        setShowModalDetail(false);
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="w-full ">
                                        <div className="mb-6 flex gap-6 relative">
                                            <div
                                                className="absolute top-0 right-0 cursor-pointer"
                                                onClick={() => {
                                                    setShowModalDetailCourse(true);
                                                    setImageShow(ENV.staticFileUrl + detailCourse.image);
                                                    setIconShow(ENV.staticFileUrl + detailCourse.icon);
                                                    setCourseDetailUpdate({
                                                        id: detailCourse._id,
                                                        title: detailCourse.title,
                                                        description: detailCourse.description,
                                                        level: detailCourse.level._id,
                                                        isPro: detailCourse.isPro,
                                                        price: detailCourse.price,
                                                        isPublished: detailCourse.isPublished,
                                                    });
                                                }}
                                            >
                                                <FaPen className="w-[15px] h-[15px]" />
                                            </div>
                                            <label
                                                htmlFor="large-input"
                                                className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                            >
                                                Icon:
                                            </label>
                                            <figure className="max-w-lg">
                                                <img
                                                    className="h-auto max-w-full rounded-lg"
                                                    src={ENV.staticFileUrl + detailCourse.icon}
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="large-input"
                                                className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                            >
                                                Ảnh:
                                            </label>
                                            <figure className="max-w-lg">
                                                <img
                                                    className="h-auto max-w-full rounded-lg"
                                                    src={ENV.staticFileUrl + detailCourse.image}
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Tên khóa học
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="Tên khóa học..."
                                                    readOnly
                                                    value={detailCourse.title}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Mô tả về khóa học
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    className="block p-2.5 w-full text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Mô tả về khóa học..."
                                                    value={detailCourse.description}
                                                    onChange={(e) => {
                                                        setDescription(e.target.value);
                                                    }}
                                                    readOnly
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Slug
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="Slug..."
                                                    value={detailCourse.slug}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Khóa học Pro
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="isPro..."
                                                    value={detailCourse.isPro}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Giá
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="Giá..."
                                                    value={detailCourse.price}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Cấp độ khóa học
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="Cấp độ khóa học..."
                                                    value={detailCourse.level.name}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Số lượng học viên
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="Số lượng học viên..."
                                                    value={detailCourse.studentCount}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Mở khóa học:
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="Mở khóa học..."
                                                    value={detailCourse.isPublished}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Mở khóa học vào
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="Mở khóa học vào..."
                                                    value={detailCourse.publishedAt}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Ngày tạo khóa học
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="Ngày tạo khóa học..."
                                                    value={detailCourse.createdAt}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="w-[50%]">
                                                <label
                                                    className="block text-2xl text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name"
                                                >
                                                    Ngày cập nhật khóa học
                                                </label>
                                            </div>
                                            <div className="w-full">
                                                <input
                                                    className="bg-gray-200 text-2xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-full-name"
                                                    type="text"
                                                    alt="Ngày cập nhật khóa học..."
                                                    value={detailCourse.updatedAt}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full ">
                                        <div className="mb-6 relative">
                                            {' '}
                                            <div className="absolute top-0 right-0 cursor-pointer">
                                                <FaPen
                                                    className="w-[15px] h-[15px]"
                                                    onClick={() => {
                                                        setShowModalDetailWillLearn(true);
                                                        const clone: any = detailCourse.willLearns.map((x: any) => ({
                                                            ...x,
                                                        }));
                                                        setCourseWillLearnsDetail(clone);
                                                    }}
                                                />
                                            </div>
                                            <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                                                Bạn sẽ học được gì:
                                            </h2>
                                            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-2xl">
                                                <>
                                                    {detailCourse.willLearns.map((item: any, index: any) => {
                                                        return <li key={index}>{item.content}</li>;
                                                    })}
                                                </>
                                            </ul>
                                        </div>
                                        <div className="mb-6 relative">
                                            {' '}
                                            <div className="absolute top-0 right-0 cursor-pointer">
                                                <FaPen
                                                    className="w-[15px] h-[15px]"
                                                    onClick={() => {
                                                        setShowModalDetailRequirement(true);
                                                        const clone: any = detailCourse.requirements.map((x: any) => ({
                                                            ...x,
                                                        }));
                                                        setCourseRequirementsDetail(clone);
                                                    }}
                                                />
                                            </div>
                                            <h2 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                                                Yêu cầu:
                                            </h2>
                                            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-2xl">
                                                <>
                                                    {detailCourse.requirements.map((item: any, index: any) => {
                                                        return <li key={index}>{item.content}</li>;
                                                    })}
                                                </>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <div className="flex gap-5 justify-between items-center	 px-8 font-bold text-3xl">
                                    <h3>Nội dung khóa học</h3>
                                    <button>
                                        <FaPlus
                                            onClick={() => {
                                                setShowModalCreateTrack(true);
                                            }}
                                        />
                                    </button>
                                </div>
                                <>
                                    {detailCourse.tracks.map((item: any, index: any) => {
                                        return (
                                            <>
                                                {/* component */}
                                                <div className="container mx-auto py-5 flex justify-center" key={index}>
                                                    <style
                                                        dangerouslySetInnerHTML={{
                                                            __html: '\n  #journal-scroll::-webkit-scrollbar {\n            width: 4px;\n            cursor: pointer;\n            /*background-color: rgba(229, 231, 235, var(--bg-opacity));*/\n\n        }\n        #journal-scroll::-webkit-scrollbar-track {\n            background-color: rgba(229, 231, 235, var(--bg-opacity));\n            cursor: pointer;\n            /*background: red;*/\n        }\n        #journal-scroll::-webkit-scrollbar-thumb {\n            cursor: pointer;\n            background-color: #a0aec0;\n            /*outline: 1px solid slategrey;*/\n        }\n',
                                                        }}
                                                    />
                                                    <div className="w-screen px-6 flex flex-col">
                                                        <div className="bg-white text-2xl text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300 flex gap-5 justify-between">
                                                            <p>
                                                                {index + 1}. {item.title}
                                                            </p>
                                                            <div className="flex gap-5">
                                                                <button
                                                                    onClick={() => {
                                                                        setShowModalCreateStep(true);
                                                                        setStepCreate({
                                                                            ...stepCreate,
                                                                            trackId: item._id,
                                                                            trackName: item.title,
                                                                        });
                                                                        handlePositionStep(item._id);
                                                                    }}
                                                                >
                                                                    <FaPlus />
                                                                </button>
                                                                <button
                                                                    onClick={() => {
                                                                        setShowModalUpdateTrack(true);
                                                                        setTrackUpdate(item);
                                                                    }}
                                                                >
                                                                    <FaPen />
                                                                </button>
                                                                <button
                                                                    onClick={() => {
                                                                        handleDeleteTrack(item._id);
                                                                    }}
                                                                >
                                                                    <FaTrash />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="w-full overflow-auto shadow bg-white"
                                                            id="journal-scroll"
                                                        >
                                                            <table className="w-full">
                                                                <tbody className="">
                                                                    <>
                                                                        {item.steps.map((step: any, idx: any) => {
                                                                            return (
                                                                                <tr
                                                                                    key={idx}
                                                                                    className="relative transform scale-100 text-xs py-1 border-b-2 border-blue-100 cursor-default"
                                                                                >
                                                                                    <td className="whitespace-no-wrap text-2xl flex gap-5 justify-between px-5">
                                                                                        <div className="text-gray-400">
                                                                                            {step.title}
                                                                                        </div>
                                                                                        <div className="flex gap-5">
                                                                                            <button
                                                                                                onClick={() => {
                                                                                                    setShowModalUpdateStep(
                                                                                                        true,
                                                                                                    );
                                                                                                    setStepUpdate(step);
                                                                                                    handlePositionStep(
                                                                                                        step.trackId,
                                                                                                    );
                                                                                                    const blocksFromHTML =
                                                                                                        convertFromHTML(
                                                                                                            step.description,
                                                                                                        );
                                                                                                    const contentState =
                                                                                                        ContentState.createFromBlockArray(
                                                                                                            blocksFromHTML.contentBlocks,
                                                                                                            blocksFromHTML.entityMap,
                                                                                                        );
                                                                                                    const newEditorState =
                                                                                                        EditorState.createWithContent(
                                                                                                            contentState,
                                                                                                        );
                                                                                                    setEditorUpdateStepState(
                                                                                                        newEditorState,
                                                                                                    );
                                                                                                }}
                                                                                            >
                                                                                                <FaPen />
                                                                                            </button>
                                                                                            <button
                                                                                                onClick={() => {
                                                                                                    handleDeleteStep(
                                                                                                        step._id,
                                                                                                    );
                                                                                                }}
                                                                                            >
                                                                                                <FaTrash />
                                                                                            </button>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            );
                                                                        })}
                                                                    </>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModalDetailCourse === true && (
                <div
                    id="extralarge-modal"
                    tabIndex={-1}
                    className={`z-[992] flex justify-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
                >
                    <div className="mb-5 flex justify-center item-center  relative p-4 w-full h-max top-[50px]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[900px]">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-4xl font-medium font-medium text-gray-900 dark:text-white m-0">
                                    Chỉnh sửa khóa học
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="extralarge-modal"
                                    onClick={() => {
                                        setShowModalDetailCourse(false);
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Tên khóa học
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Tên khóa học..."
                                        value={courseDetailUpdate.title}
                                        onChange={(e) => {
                                            setCourseDetailUpdate({ ...courseDetailUpdate, title: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Mô tả về khóa học
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={3}
                                        className="block p-2.5 w-full text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Mô tả về khóa học..."
                                        value={courseDetailUpdate.description}
                                        onChange={(e) => {
                                            setCourseDetailUpdate({
                                                ...courseDetailUpdate,
                                                description: e.target.value,
                                            });
                                        }}
                                    ></textarea>
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                        htmlFor="file_input"
                                    >
                                        Ảnh khóa học
                                    </label>
                                    <div
                                        className={photoStyles.contentImage}
                                        style={
                                            {
                                                width: '40%',
                                                margin: 0,
                                            } as React.CSSProperties
                                        }
                                    >
                                        <div
                                            className={photoStyles.avatar}
                                            style={
                                                {
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '5%',
                                                    margin: 0,
                                                } as React.CSSProperties
                                            }
                                        >
                                            <img
                                                src={imageShow}
                                                alt={detailCourse.title}
                                                style={
                                                    {
                                                        width: '100%',
                                                    } as React.CSSProperties
                                                }
                                            />
                                        </div>
                                        <label form="avatar">
                                            <div
                                                className={photoStyles.chooseAva}
                                                style={
                                                    {
                                                        top: 0,
                                                        right: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        margin: 'auto',
                                                    } as React.CSSProperties
                                                }
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="camera"
                                                    className={clsx(
                                                        'svg-inline--fa',
                                                        'fa-camera',
                                                        photoStyles.chooseImg,
                                                    )}
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
                                            <div className={photoStyles.pickAva}>
                                                <input
                                                    type="file"
                                                    accept="image/jpg, image/jpeg, image/png"
                                                    id="avatar"
                                                    onChange={handleImageChange}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-6 flex gap-8 items-center">
                                    <label
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                        htmlFor="file_input"
                                    >
                                        Icon khóa học:
                                    </label>
                                    <div
                                        className={photoStyles.contentImage}
                                        style={
                                            {
                                                width: '5%',
                                                margin: 0,
                                            } as React.CSSProperties
                                        }
                                    >
                                        <div
                                            className={photoStyles.avatar}
                                            style={
                                                {
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '5%',
                                                    margin: 0,
                                                } as React.CSSProperties
                                            }
                                        >
                                            <img
                                                src={iconShow}
                                                alt={detailCourse.title}
                                                style={
                                                    {
                                                        width: '100%',
                                                    } as React.CSSProperties
                                                }
                                            />
                                        </div>
                                        <label form="avatar">
                                            <div
                                                className={photoStyles.chooseAva}
                                                style={
                                                    {
                                                        top: 0,
                                                        right: 0,
                                                        left: 0,
                                                        bottom: 0,
                                                        margin: 'auto',
                                                        width: '30px',
                                                        height: '30px',
                                                    } as React.CSSProperties
                                                }
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="camera"
                                                    className={clsx(
                                                        'svg-inline--fa',
                                                        'fa-camera',
                                                        photoStyles.chooseImg,
                                                    )}
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
                                            <div className={photoStyles.pickAva}>
                                                <input
                                                    type="file"
                                                    accept="image/jpg, image/jpeg, image/png"
                                                    id="avatar"
                                                    onChange={handleIconChange}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Cấp độ khóa học
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            setCourseDetailUpdate({ ...courseDetailUpdate, level: e.target.value });
                                        }}
                                    >
                                        <>
                                            {levels.map((item: any, index: any) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        selected={item._id === detailCourse.level._id}
                                                        value={item._id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                );
                                            })}
                                        </>
                                    </select>
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Khóa học Pro
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            setCourseDetailUpdate({
                                                ...courseDetailUpdate,
                                                isPro: e.target.value === '1' ? true : false,
                                            });
                                        }}
                                    >
                                        <option value="1" selected={detailCourse.isPro === true}>
                                            Có
                                        </option>
                                        <option value="2" selected={detailCourse.isPro === false}>
                                            Không
                                        </option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Giá
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Giá khóa học..."
                                        value={courseDetailUpdate.price}
                                        onChange={(e) => {
                                            setCourseDetailUpdate({ ...courseDetailUpdate, price: e.target.value });
                                        }}
                                    />
                                </div>{' '}
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Công khai
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            setCourseDetailUpdate({
                                                ...courseDetailUpdate,
                                                isPublished: e.target.value === '1' ? true : false,
                                            });
                                        }}
                                    >
                                        <option value="1" selected={detailCourse.isPublished === true}>
                                            Có
                                        </option>
                                        <option value="2" selected={detailCourse.isPublished === false}>
                                            Không
                                        </option>
                                    </select>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    onClick={() => {
                                        setShowModalDetailCourse(false);
                                    }}
                                    className="text-gray-500 text-2xl p-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    Hủy
                                </button>
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    className="text-white text-2xl p-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleUpdateDetailCourse}
                                >
                                    Cập nhật khóa học
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModalDetailWillLearn === true && (
                <div
                    id="extralarge-modal"
                    tabIndex={-1}
                    className={`z-[992] flex justify-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
                >
                    <div className="mb-5 flex justify-center item-center  relative p-4 w-full h-max top-[50px]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[900px]">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-4xl font-medium font-medium text-gray-900 dark:text-white m-0">
                                    Bạn sẽ học được gì
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="extralarge-modal"
                                    onClick={() => {
                                        setShowModalDetailWillLearn(false);
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <div className="mb-6 flex gap-6 items-center justify-between">
                                    <div className="flex items-center w-[50%]">
                                        {' '}
                                        <label
                                            htmlFor="large-input"
                                            className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white w-[30%]"
                                        >
                                            Tên khóa học
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            alt="Tên khóa học..."
                                            value={detailCourse.title}
                                            readOnly={true}
                                        />
                                    </div>
                                    <button>
                                        <FaPlus
                                            className="w-[20px] h-[20px]"
                                            onClick={() => {
                                                handleCreateWillLearn();
                                            }}
                                        />
                                    </button>
                                </div>
                                <div className="mb-6">
                                    <div className="relative overflow-x-auto">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-2xl">
                                                        ID
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-2xl">
                                                        Nội dung
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-2xl text-center"
                                                        style={{ height: '50px' }}
                                                    >
                                                        Hành động
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <>
                                                    {courseWillLearnsDetail.map((item: any, index: any) => {
                                                        return (
                                                            <tr
                                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                                key={index}
                                                            >
                                                                <th
                                                                    scope="row"
                                                                    className="text-2xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                                >
                                                                    {item._id}
                                                                </th>
                                                                <td className="text-2xl px-6 py-4">
                                                                    {' '}
                                                                    <input
                                                                        type="text"
                                                                        id="voice-search"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                        placeholder="Bạn sẽ học được..."
                                                                        value={item.content}
                                                                        onChange={(e) => {
                                                                            let newArr = [...courseWillLearnsDetail];
                                                                            newArr[index].content = e.target.value;
                                                                            setCourseWillLearnsDetail(newArr);
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td className="text-2xl px-6 py-4 flex gap-8 items-center justify-center">
                                                                    <FaPen
                                                                        onClick={() => {
                                                                            handleUpdateWillLearn(index);
                                                                        }}
                                                                    />
                                                                    <FaTrash
                                                                        onClick={() => {
                                                                            handleDeleteWillLearn(index);
                                                                        }}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* Modal footer */}
                            {/* <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button
                                        data-modal-hide="extralarge-modal"
                                        type="button"
                                        onClick={() => {
                                            setShowModalDetailWillLearn(false);
                                        }}
                                        className="text-gray-500 text-2xl p-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    >
                                        Hủy
                                    </button>
                                    <button
                                        data-modal-hide="extralarge-modal"
                                        type="button"
                                        className="text-white text-2xl p-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={handleUpdateDetailCourse}
                                    >
                                        Cập nhật khóa học
                                    </button>
                                </div> */}
                        </div>
                    </div>
                </div>
            )}

            {showModalDetailRequirement === true && (
                <div
                    id="extralarge-modal"
                    tabIndex={-1}
                    className={`z-[992] flex justify-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
                >
                    <div className="mb-5 flex justify-center item-center  relative p-4 w-full h-max top-[50px]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[900px]">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-4xl font-medium font-medium text-gray-900 dark:text-white m-0">
                                    Yêu cầu của khóa học
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="extralarge-modal"
                                    onClick={() => {
                                        setShowModalDetailRequirement(false);
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <div className="mb-6 flex gap-6 items-center justify-between">
                                    <div className="flex items-center w-[50%]">
                                        {' '}
                                        <label
                                            htmlFor="large-input"
                                            className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white w-[30%]"
                                        >
                                            Tên khóa học
                                        </label>
                                        <input
                                            type="text"
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            alt="Tên khóa học..."
                                            value={detailCourse.title}
                                            readOnly={true}
                                        />
                                    </div>
                                    <button>
                                        <FaPlus
                                            className="w-[20px] h-[20px]"
                                            onClick={() => {
                                                handleCreateRequirement();
                                            }}
                                        />
                                    </button>
                                </div>
                                <div className="mb-6">
                                    <div className="relative overflow-x-auto">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-2xl">
                                                        ID
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-2xl">
                                                        Nội dung
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-2xl text-center"
                                                        style={{ height: '50px' }}
                                                    >
                                                        Hành động
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <>
                                                    {courseRequirementsDetail.map((item: any, index: any) => {
                                                        return (
                                                            <tr
                                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                                key={index}
                                                            >
                                                                <th
                                                                    scope="row"
                                                                    className="text-2xl px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                                >
                                                                    {item._id}
                                                                </th>
                                                                <td className="text-2xl px-6 py-4">
                                                                    {' '}
                                                                    <input
                                                                        type="text"
                                                                        id="voice-search"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                        placeholder="Bạn sẽ học được..."
                                                                        value={item.content}
                                                                        onChange={(e) => {
                                                                            let newArr = [...courseRequirementsDetail];
                                                                            newArr[index].content = e.target.value;
                                                                            setCourseWillLearnsDetail(newArr);
                                                                        }}
                                                                    />
                                                                </td>
                                                                <td className="text-2xl px-6 py-4 flex gap-8 items-center justify-center">
                                                                    <FaPen
                                                                        onClick={() => {
                                                                            handleUpdateRequirement(index);
                                                                        }}
                                                                    />
                                                                    <FaTrash
                                                                        onClick={() => {
                                                                            handleDeleteRequirement(index);
                                                                        }}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* Modal footer */}
                            {/* <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button
                                        data-modal-hide="extralarge-modal"
                                        type="button"
                                        onClick={() => {
                                            setShowModalDetailWillLearn(false);
                                        }}
                                        className="text-gray-500 text-2xl p-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                    >
                                        Hủy
                                    </button>
                                    <button
                                        data-modal-hide="extralarge-modal"
                                        type="button"
                                        className="text-white text-2xl p-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={handleUpdateDetailCourse}
                                    >
                                        Cập nhật khóa học
                                    </button>
                                </div> */}
                        </div>
                    </div>
                </div>
            )}

            {showModalCreateTrack === true && (
                <div
                    id="extralarge-modal"
                    tabIndex={-1}
                    className={`z-[992] flex justify-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
                >
                    <div className="mb-5 flex justify-center item-center  relative p-4 w-full h-max top-[50px]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[900px]">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-4xl font-medium font-medium text-gray-900 dark:text-white m-0">
                                    Thêm chương
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="extralarge-modal"
                                    onClick={() => {
                                        setShowModalCreateTrack(false);
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Tiêu đề
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Tiêu đề..."
                                        value={trackCreate.title}
                                        onChange={(e) => {
                                            setTrackCreate({ ...trackCreate, title: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Vị trí
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            setTrackCreate({ ...trackCreate, position: e.target.value });
                                        }}
                                    >
                                        <>{createTrackElements()}</>
                                    </select>
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Công bố
                                    </label>
                                    <select
                                        onChange={(e) => {
                                            setTrackCreate({
                                                ...trackCreate,
                                                isPublished: e.target.value === '1' ? true : false,
                                            });
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="1" selected={true}>
                                            Có
                                        </option>
                                        <option value="2">Không</option>
                                    </select>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    onClick={() => {
                                        setShowModalCreateTrack(false);
                                    }}
                                    className="text-gray-500 text-2xl p-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    Hủy
                                </button>
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    className="text-white text-2xl p-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleCreateTrack}
                                >
                                    Tạo chương
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModalUpdateTrack === true && (
                <div
                    id="extralarge-modal"
                    tabIndex={-1}
                    className={`z-[992] flex justify-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
                >
                    <div className="mb-5 flex justify-center item-center  relative p-4 w-full h-max top-[50px]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[900px]">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-4xl font-medium font-medium text-gray-900 dark:text-white m-0">
                                    Chỉnh sửa chương
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="extralarge-modal"
                                    onClick={() => {
                                        setShowModalUpdateTrack(false);
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Tiêu đề
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Tiêu đề..."
                                        value={trackUpdate.title}
                                        onChange={(e) => {
                                            setTrackUpdate({ ...trackUpdate, title: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Vị trí
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            setTrackUpdate({ ...trackUpdate, position: e.target.value });
                                        }}
                                    >
                                        <>{createTrackUpdateElements()}</>
                                    </select>
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Công bố
                                    </label>
                                    <select
                                        onChange={(e) => {
                                            setTrackUpdate({
                                                ...trackUpdate,
                                                isPublished: e.target.value === '1' ? true : false,
                                            });
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="1" selected={trackUpdate.isPublished === true}>
                                            Có
                                        </option>
                                        <option value="2" selected={trackUpdate.isPublished === false}>
                                            Không
                                        </option>
                                    </select>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    onClick={() => {
                                        setShowModalUpdateTrack(false);
                                    }}
                                    className="text-gray-500 text-2xl p-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    Hủy
                                </button>
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    className="text-white text-2xl p-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleUpdateTrack}
                                >
                                    Cập nhật chương
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModalCreateStep === true && (
                <div
                    id="extralarge-modal"
                    tabIndex={-1}
                    className={`z-[992] flex justify-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
                >
                    <div className="mb-5 flex justify-center item-center  relative p-4 w-full h-max top-[50px]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[900px]">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-4xl font-medium font-medium text-gray-900 dark:text-white m-0">
                                    Tạo bài học
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="extralarge-modal"
                                    onClick={() => {
                                        setShowModalCreateStep(false);
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Tiêu đề
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Tiêu đề..."
                                        value={stepCreate.title}
                                        onChange={(e) => {
                                            setStepCreate({ ...stepCreate, title: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Mô tả
                                    </label>
                                    <TextEditor editorState={editorState} handleEditorChange={handleEditorChange} />
                                </div>
                                {/* <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Thời lượng
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Thời lượng..."
                                        value={stepCreate.duration}
                                        onChange={(e) => {
                                            setStepCreate({ ...stepCreate, duration: e.target.value });
                                        }}
                                    />
                                </div> */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Video URL1
                                    </label>{' '}
                                    <div hidden={true}>
                                        <YouTube
                                            videoId={stepCreate.videoUrl}
                                            onStateChange={(e) => checkElapsedTime(e)}
                                            opts={opts}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Video URL..."
                                        value={stepCreate.videoUrl}
                                        onChange={(e) => {
                                            setStepCreate({ ...stepCreate, videoUrl: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Image URL..."
                                        value={stepCreate.imageUrl}
                                        onChange={(e) => {
                                            setStepCreate({ ...stepCreate, imageUrl: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Vị trí
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            setStepCreate({ ...stepCreate, position: e.target.value });
                                        }}
                                    >
                                        <>{createStepElements()}</>
                                    </select>
                                </div>{' '}
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Công bố
                                    </label>
                                    <select
                                        onChange={(e) => {
                                            if (e.target.value === '1')
                                                setStepCreate({ ...stepCreate, isPublished: true });
                                            else setStepCreate({ ...stepCreate, isPublished: false });
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="1" selected={true}>
                                            Có
                                        </option>
                                        <option value="2">Không</option>
                                    </select>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    onClick={() => {
                                        setShowModalCreateStep(false);
                                    }}
                                    className="text-gray-500 text-2xl p-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    Hủy
                                </button>
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    className="text-white text-2xl p-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleCreateStep}
                                >
                                    Tạo bài học
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showModalUpdateStep === true && (
                <div
                    id="extralarge-modal"
                    tabIndex={-1}
                    className={`z-[992] flex justify-center bg-gray-900 bg-opacity-50  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0  w-full md:inset-0 h-modal md:h-full`}
                >
                    <div className="mb-5 flex justify-center item-center  relative p-4 w-full h-max top-[50px]">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[900px]">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-4xl font-medium font-medium text-gray-900 dark:text-white m-0">
                                    Chỉnh sửa bài học
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="extralarge-modal"
                                    onClick={() => {
                                        setShowModalUpdateStep(false);
                                    }}
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-10 h-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Tiêu đề
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Tiêu đề..."
                                        value={stepUpdate.title}
                                        onChange={(e) => {
                                            setStepUpdate({ ...stepUpdate, title: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Mô tả
                                    </label>
                                    <TextEditor
                                        editorState={editorUpdateStepState}
                                        handleEditorChange={handleEditorUpdateStepChange}
                                    />
                                </div>
                                {/* <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Thời lượng
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Thời lượng..."
                                        value={stepUpdate.duration}
                                        onChange={(e) => {
                                            setStepUpdate({ ...stepUpdate, duration: e.target.value });
                                        }}
                                    />
                                </div> */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Video URL
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Video URL..."
                                        value={stepUpdate.videoUrl}
                                        onChange={(e) => {
                                            setStepUpdate({ ...stepUpdate, videoUrl: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label
                                        htmlFor="large-input"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        alt="Image URL..."
                                        value={stepUpdate.imageUrl}
                                        onChange={(e) => {
                                            setStepUpdate({ ...stepUpdate, imageUrl: e.target.value });
                                        }}
                                    />
                                </div>{' '}
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Chương
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            setStepUpdate({ ...stepUpdate, trackId: e.target.value });
                                            handlePositionStep(e.target.value);
                                        }}
                                    >
                                        <>
                                            {detailCourse.tracks.map((item: any, index: any) => {
                                                return (
                                                    <option value={item._id} selected={stepUpdate.trackId === item._id}>
                                                        {item.title}
                                                    </option>
                                                );
                                            })}
                                        </>
                                    </select>
                                </div>{' '}
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Vị trí
                                    </label>
                                    <select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={(e) => {
                                            setStepUpdate({ ...stepUpdate, position: e.target.value });
                                        }}
                                    >
                                        <>{createStepUpdateElements()}</>
                                    </select>
                                </div>{' '}
                                <div className="mb-6 ">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
                                    >
                                        Công bố
                                    </label>
                                    <select
                                        onChange={(e) => {
                                            if (e.target.value === '1')
                                                setStepCreate({ ...stepCreate, isPublished: true });
                                            else setStepCreate({ ...stepCreate, isPublished: false });
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="1" selected={true}>
                                            Có
                                        </option>
                                        <option value="2">Không</option>
                                    </select>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    onClick={() => {
                                        setShowModalUpdateStep(false);
                                    }}
                                    className="text-gray-500 text-2xl p-5 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                    Hủy
                                </button>
                                <button
                                    data-modal-hide="extralarge-modal"
                                    type="button"
                                    className="text-white text-2xl p-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleUpdateStep}
                                >
                                    Chỉnh sửa bài học
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Course;
