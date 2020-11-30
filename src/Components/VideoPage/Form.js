import React from 'react'

function Form() {
  return (
    <form id="channel-form">
      <div className="input-field col s6">
        <input type="text" placeholder="Enter Channel Name" id="channel-input" />
        <input type="submit" defaultValue="Get Channel Data" className="btn grey" />
      </div>
    </form>
  )
}

export default Form
