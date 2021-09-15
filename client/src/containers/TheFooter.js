import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
      © 2021 OSINT Lab.
      </div>

    </CFooter>
  )
}

export default React.memo(TheFooter)
