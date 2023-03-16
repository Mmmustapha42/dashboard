import React from 'react'
import './App.css';
import { CssBaseline } from '@mui/material';
import { Topbar } from './scenes/global/Topbar';
import {Routes, Route} from 'react-router-dom'
import Dashboard from './scenes/dashboard/Dashboard';
import { Sidebarr } from './scenes/global/Sidebarr';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices/Invoices';
import FAQ from './scenes/faq/Faq';
import Bar from './scenes/bar';
import Pie from './scenes/piechart/PieChart';
import Line from './scenes/line/LineChart';
import Geography from './scenes/geo/GeographyChart';
import { ProgressCircle } from './components/ProgressCircle';



function App() {

  return (
    <>
    <CssBaseline/>
    <div className="app">
      <Sidebarr/>
      <main className='content'>
        <Topbar/>
        <Routes>

          <Route path='/' element={<Dashboard/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/invoices' element={<Invoices/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/bar-chart' element={<Bar/>}/>
          <Route path='pie-chart' element={<Pie/>}/>
          <Route path='/line-chart' element={<Line/>}/>
          <Route path='/geography' element={<Geography/>}/>
          {/* <Route path='/progress' element={<ProgressCircle/>}/> */}

        </Routes>
      </main>
    </div>
    </>
     
  
  
  );
}

export default App;
