import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
      © 2021 Analysta.GG.
      </div>

    </CFooter>
  )
}

export default React.memo(TheFooter)
