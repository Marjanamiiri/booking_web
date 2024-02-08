import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Menu } from './components/Menu'

import './App.css'

function App() {
  const [section, setSection] = useState(0);
  // const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
    <Menu
          onSectionChange={setSection}
          // menuOpened={menuOpened}
          // setMenuOpened={setMenuOpened}
        />
    </>
  )
}

export default App
