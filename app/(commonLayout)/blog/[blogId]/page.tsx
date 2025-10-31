import React from 'react';

const DynamicBlogPage = async({params}: {params: Promise<{blogId: string}>}) => {

    console.log( await params);
    return (
        <div>
            Blog details page blog: 1
        </div>
    );
};

export default DynamicBlogPage;