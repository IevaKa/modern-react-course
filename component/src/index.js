import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" image={faker.image.avatar()} comment="Cool story, bro" /> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="James" image={faker.image.avatar()} comment="No one cares" /> 
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));