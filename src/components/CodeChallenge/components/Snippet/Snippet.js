// Libraries
import React from 'react';
import LineIcon from 'react-lineicons';

// Style
import './Snippet.scss';

function Snippet(props) {

  /**
   *
   */
  return (
    <div className="text-center">
      <div className="icon">
        <LineIcon name={props.img} />
      </div>
      <h3 className="snippet-title">{props.title}</h3>
      <p className="snippet-name">{props.text}</p>
    </div>
  );
}

export default Snippet;
