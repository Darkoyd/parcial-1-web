import { FormattedMessage, IntlProvider } from 'react-intl'
import { useState, useEffect } from 'react'
import localeEs from './locales/es.json'
import localeEn from './locales/en.json'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'
import Coffee from './components/Coffee'

function App() {
  const [locale, setLocale] = useState(navigator.language)
  const [localeStrings, setLocaleStrings] = useState({})

  useEffect(() => {
    if (locale === 'en-GB') setLocaleStrings(localeEn)
    else setLocaleStrings(localeEs)

  }, [locale])

  return (
    <IntlProvider
      locale={locale}
      messages={localeStrings}
      defaultLocale='en-GB'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout children={<Login />} />} />
          <Route path='/coffee' element={<Layout children={<Coffee />} />} />
          <Route path='*' />
        </Routes>
      </Router>
      <div className='absolute bottom-0 left-0 hover:cursor-pointer' onClick={() => setLocale(locale === 'en-GB' ? 'es' : 'en-GB')}><FormattedMessage id='translate' /></div>
    </IntlProvider>
  )
}

export default App

