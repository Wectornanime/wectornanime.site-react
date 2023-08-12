import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import data from './assets/data.json'

import Header from './components/Header.tsx'
import SocialMedia from './components/SocialMedia.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header
    name={data.name}
    subName={data.subName}
    imageURL={data.imageURL}
    >
      <SocialMedia
      icon="logo-linkedin"
      url={data.linkedinURL}
      />

      <SocialMedia
      icon="logo-github"
      url={data.githubURL}
      />

    </Header>
    <App />
  </React.StrictMode>,
)
