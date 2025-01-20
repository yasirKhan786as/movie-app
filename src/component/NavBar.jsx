import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav-img'>
      <NavLink to="/">
      <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/2e427ce7-b2f7-4c9a-a79b-8c473fadcb55/bfbc3beb-7902-41e6-b139-e6110c8c7983.png" alt="" />
      </NavLink>
    </div>
  )
}

export default NavBar