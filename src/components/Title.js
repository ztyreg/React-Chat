import React from 'react';
import {PageHeader} from 'antd';

const Title = () => {
    return (
        <div className="site-page-header-ghost-wrapper" style={{marginBottom: 16}}>
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Title"
                subTitle="This is a subtitle"
                extra={[
                ]}
            >
            </PageHeader>
        </div>
    );
}

export default Title;
