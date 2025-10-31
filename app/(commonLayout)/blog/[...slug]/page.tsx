import React from 'react';

const CatchAllRoutes = async({params}: {params:Promise<{blogId: string}>}) => {

    console.log( await params);
    return (
        <div>
            <h2>Catch all routes</h2>
        </div>
    );
};

export default CatchAllRoutes;