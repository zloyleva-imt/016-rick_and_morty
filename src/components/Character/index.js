import React from 'react';

export default (props) => {

    const {match:{params}} = props;

    console.log(params);

    return (
        <div>Character { params.id }</div>
    )
}