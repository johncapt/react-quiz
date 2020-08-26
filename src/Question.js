import React from "react";
import { Line } from 'rc-progress';

const Question = (props) => {
    return (
        <div className="flex-container">
            <div className="question">{props.id + 1}. {props.q}</div>
            <div className="flex-container-div" onClick={props.clicked} id={0}>
                {props.a0}
            </div>
            <div className="flex-container-div" onClick={props.clicked} id={1}>
                {props.a1}
            </div>
            <div className="flex-container-div" onClick={props.clicked} id={2}>
                {props.a2}
            </div>
            <div className="divPaddingTop">
                <Line percent={props.percent} strokeWidth="2" strokeColor="#011f4b" />
            </div>
        </div>
    );
}
export default Question;