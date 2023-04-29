import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Layout/Header/Header';
import Tracks from '../../components/Layout/Tracks/Tracks';
import Content from '../../components/Layout/Content/Content';
import ActionBar from '../../components/Layout/ActionBar/ActionBar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CourseService from '../../services/course';

const Learning = (): JSX.Element => {
    const search = useLocation().search;
    const navigate = useNavigate();
    const id = new URLSearchParams(search).get('id');
    const { slug } = useParams();
    const [show, setShow] = useState<any>(false);
    const [showTrack, setShowTrack] = useState<any>(true);
    const [steps, setSteps] = useState<any>({});
    const [tracks, setTracks] = useState<any>({});

    const fetchData = async () => {
        try {
            setShow(false);
            if (!id) {
                let stepsResponse: any = await CourseService.steps({}, slug);
                if (stepsResponse?.data?.data) {
                    setSteps(stepsResponse?.data?.data);
                }
            } else {
                let stepsResponse: any = await CourseService.stepDetails({}, slug, id);
                if (stepsResponse?.data?.data) {
                    setSteps(stepsResponse?.data?.data);
                }
            }
            let tracksResponse: any = await CourseService.tracks({}, slug);
            if (tracksResponse?.data?.data) {
                setTracks(tracksResponse?.data?.data);
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
    else
        return (
            <div>
                <section className={clsx('index-module_grid', 'index-module_fullWidth')}>
                    <Header tracks={tracks} course={steps.course} />
                    <>{showTrack ? <Tracks slug={slug} tracks={tracks} steps={steps} /> : <></>}</>
                    <Content steps={steps} w100={!showTrack ? 'w-100' : ''} />
                    <ActionBar steps={steps} slug={slug} setShowTrack={setShowTrack} showTrack={showTrack} />
                </section>
            </div>
        );
};

export default Learning;
