import React from 'react';

const InnerHTML = ({ tagName: TagName, __html }) => (
    <TagName
        dangerouslySetInnerHTML={{
            // TODO: XSS
            __html,
        }}
    ></TagName>
);

export default InnerHTML;
