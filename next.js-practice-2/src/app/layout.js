import React from 'react'
function layout({children}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default layout