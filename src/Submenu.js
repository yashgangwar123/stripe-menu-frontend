import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context';

const Submenu = () => {

  const { isSubmenuOpen, location, page } = useGlobalContext()
  const container = useRef(null)
  const [columns,setColumns] = useState('col-2')



  useEffect(() => {
    container.current.style.left = ` ${location.btnCenter}px`
    container.current.style.top = ` ${location.btnBottom}px`
    if (page.links.length === 3) {
      setColumns('col-3')
    }
    if (page.links.length > 3) {
      setColumns('col-4')
    }
  }, [location])



  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <section>
        <h4>{page.page}</h4>
        <div className={`submenu-center ${columns}`}>
          {
            page.links.map((link, index) => {
              const { url, icon, label } = link
              return (
                <a key={index} href={url}>
                  {icon}
                  {label}
                </a>
              )
            })
          }
        </div>
      </section>
    </aside>
  )
}

export default Submenu
