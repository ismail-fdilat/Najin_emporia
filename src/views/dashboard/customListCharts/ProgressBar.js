import React from 'react'

const Progress_bar = ({ bgcolor, progress, height }) => {

    const Parentdiv = {
        height,
        width: '98%',
        backgroundColor: '#EBEBEB',
        borderRadius: 7,
        marginX: 20,
        marginTop: 10
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 7,
        textAlign: 'right',
        paddingTop: "5px"
    }

    const progresstext = {
        padding: 20,
        paddingTop: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default Progress_bar
