import React from 'react';
import ReposItems from '../repos-items/repos-items.component';

import './repos-list.styles.scss';

const ReposList = () => {
    return(
        <div className="repos-list_container">
            <ReposItems />
            <ReposItems />
            <ReposItems />
        </div>
    )
};

export default ReposList