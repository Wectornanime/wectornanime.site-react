import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Header from './components/Header.tsx'
import SocialMedia from './components/SocialMedia.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header
    name="Wectornanime"
    subName="Fullstack studant"
    imageURL="images/no-image.png"
    >
      <SocialMedia
      icon="logo-linkedin"
      url="https://linkedin.com/in/wectornanime-nascimento"
      />

      <SocialMedia
      icon="logo-github"
      url="https://github.com/wectornanime"
      />

    </Header>
    <App />
  </React.StrictMode>,
)
