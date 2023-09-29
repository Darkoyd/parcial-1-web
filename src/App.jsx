import { IntlProvider } from 'react-intl'
import { useState, useEffect } from 'react'
import localeEs from './locales/es.json'
import localeEn from './locales/en.json'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { login } from './api/AuthService'
import Login from './components/Login'
import Layout from './components/Layout'
import Coffee from './components/Coffee'

function App() {
  const [locale, setLocale] = useState(navigator.language)
  const [localeStrings, setLocaleStrings] = useState({})

  useEffect(() => {
    if (locale === 'en-US') setLocaleStrings(localeEn)
    else setLocaleStrings(localeEs)

  }, [locale])

  return (
    <IntlProvider
      locale={locale}
      messages={localeStrings}
      defaultLocale='en-US'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout children={<Login />} />} />
          <Route path='/coffees' element={<Layout children={<Coffee />} />} />
          <Route path='*' />
        </Routes>
      </Router>

    </IntlProvider>
  )
}

export default App

