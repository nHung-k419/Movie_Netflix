import { Fragment,useState } from 'react';
import { Route, Routes } from 'react-router-dom' 
import { PublicRoutes } from './Routes/index.jsx'
import DefaultLayout from "./Component/Layout/DefaultLayout/index.jsx";
import React from 'react';

function App() {
  const [Toogle, setToogle] = useState('');
  const [getLocalStorage, setgetLocalStorage] = useState(() => {
    const MovieSaves = localStorage.getItem('MovieSave');
    return JSON.parse(MovieSaves);
  });
  const toggle = (toogle) => {
    setToogle(toogle);
  };
  console.log(PublicRoutes);
  return (
    
      <div className="w-[100%] h-full bg-slate-800">
        <Routes>
          {PublicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route?.path}
                element={
                  <Layout>
                    <Page toggle={toggle} Toogle={Toogle} getLocalStorage={getLocalStorage} />
                  </Layout>} />)
          })}
        </Routes>
      </div>
   
  );
}

export default App;