import React, { Component, PropTypes } from 'react'

const Echo = ({message, enabled, onEcho}) => (
    <p>
        <button onClick={onEcho} disabled={!enabled}>
            Echo!
        </button>
        message: {message}
    </p>
)

Echo.propTypes = {
    message: PropTypes.string.isRequired,
    enabled: PropTypes.bool,
    onEcho: PropTypes.func.isRequired
}

export default Echo
