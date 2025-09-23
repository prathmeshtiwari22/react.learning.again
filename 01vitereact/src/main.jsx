import React from 'react';
import { createRoot } from 'react-dom/client'


// sasasaASDGHJM, NZA gfc
const reactElement= React.createElement(
  'a',
  {
    href:'https:google.com',
    target:'_blank'
  },
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
   reactElement
)
