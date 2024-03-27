import React, { memo } from 'react'
import ButtonPref from './ButtonPref'
import ButtonSgPref from './ButtonSgPref'
import ButtonFullscreen from './ButtonFullscreen'

const ButtonBar = () => (
  <div>
    <ButtonPref />
    <ButtonSgPref />
    <ButtonFullscreen />
  </div>
)

export default memo(ButtonBar)
