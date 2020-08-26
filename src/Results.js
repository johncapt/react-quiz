import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam, faFrown, faRedo } from '@fortawesome/free-solid-svg-icons'

const Results = (props) => {
    let percentageSucess = (props.correctAnswers * 10) / 2;
    return (
        <div className="flex-container-div" onClick={props.clicked}>
            <FontAwesomeIcon size="3x" icon={(percentageSucess >= 75 ? faSmileBeam : faFrown)} />
            <h2>{(percentageSucess >= 75 ? 'Passed' : 'Failed')}</h2>
            <div>
                {percentageSucess}%
            </div>
            {(percentageSucess >= 75 ?
                <div className="divPaddingTop">
                    <img width="100" alt="You got it!" src={require('./Australia.png')} />
                </div> : null)}
            <div className="divPaddingTop">
                <FontAwesomeIcon size="2x" icon={faRedo} />
            </div>
        </div>
    );
}
export default Results;