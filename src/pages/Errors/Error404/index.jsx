import { useRouteError } from "react-router-dom";

import'./Error404.css';

const Error404 = () => {
    const error = useRouteError();

    return (
        <div className='container'>
            <h3 className='title'>{error.status} Ops!</h3>
            <p className='description'>{error.data}</p>
        </div>
    );
};

export default Error404;