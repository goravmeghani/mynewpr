import React from 'react'

const Username = async ({ params }) => {
  const { username } = await params; // Await the params promise

  return (
    <div>
      {username}
    </div>
  )
}

export default Username