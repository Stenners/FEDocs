import React from 'react'

const Colour = (props) => {
  
  let colourBlock = []
  const hasBorder = props.border ? '1px solid #ebebeb' : ''

  Object.keys(props).forEach(function (key) {
    if (key!=='border') {
      colourBlock.push(<div>{props[key]}</div>)
    }
  })

  return (
    <div className="colour-wrap">
      <div className="colour-block" style={{backgroundColor: props.hex, border: hasBorder}}></div>
      {colourBlock}
    </div>
  )
}

export default Colour
