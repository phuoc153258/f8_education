import clsx from 'clsx';
import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Tracks from '../../components/Layout/Tracks/Tracks';
import Content from '../../components/Layout/Content/Content';
import ActionBar from '../../components/Layout/ActionBar/ActionBar';

const Learning = (): JSX.Element => {
    return (
        <div>
            <section className={clsx('index-module_grid', 'index-module_fullWidth')}>
                <Header />
                <Tracks />
                <Content />
                <ActionBar />
            </section>
        </div>
    );
};

export default Learning;
