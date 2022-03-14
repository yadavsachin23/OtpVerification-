import React from 'react';
import StepForm from './component/stepForm.js';
import Home from './component/home.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

	return (
		<div>
	<BrowserRouter>
      <div>
        <Routes>
				<Route exact path="/" element={<StepForm/>}/>
        <Route exact path="/home" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
		</div>
	);
}

export default App;
