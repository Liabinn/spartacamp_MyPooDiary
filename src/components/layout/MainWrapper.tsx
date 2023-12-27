import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

const MainWrapper = ({children}: Props) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default MainWrapper