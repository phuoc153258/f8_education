import clsx from 'clsx';
import React from 'react';
import Header from '../../components/Layout/Header/Header';

const Learning = (): JSX.Element => {
    return (
        <div>
            <section className={clsx('index-module_grid', 'index-module_fullWidth')}>
                <Header />
            </section>
        </div>
    );
};

export default Learning;
