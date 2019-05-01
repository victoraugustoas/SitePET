import React from 'react';

export default props => (
    <div
        onMouseOver={e => e.currentTarget.classList.add('animated', props.effect)}
        onMouseOut={e => e.currentTarget.classList.remove('animated', props.effect)}
    >
        {props.children}
    </div>
)