import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './components'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path='/' element={<Homepage />}>
              </Route>
              <Route exact element={<Exchanges />} path='/exchanges'>
              </Route>
              <Route exact element={<Cryptocurrencies />} path='/cryptocurriencies'>
              </Route>
              <Route exact element={<CryptoDetails />} path='/crypto/:coinId '>
              </Route>
              <Route exact element={<News />} path='/news '>
              </Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>

    </div>
  )
}

export default App

