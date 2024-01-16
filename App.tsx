import React, {useEffect} from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import Homepage from './pages/Home/homepage';
import Searchpage from './pages/Search/searchpage';
import Layout from './components/Layout/layout';
import Chatpage from './pages/Chat/chatpage';
import SettingPage from './pages/Setting/settingpage';
import Messangerpage from './pages/messanger/messanger';
import PhoneSignIn from './pages/login/login';
import persistStore from 'redux-persist/es/persistStore';
import {store} from './context/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<Layout Component={Homepage} />} />
            <Route path="/search" element={<Layout Component={Searchpage} />} />
            <Route path="/chat" element={<Layout Component={Chatpage} />} />
            <Route path="/setting" element={<PhoneSignIn />} />
            {/* <Route path="/setting" element={<Layout Component={SettingPage} />} /> */}
            <Route path="/messanger" element={<Messangerpage />} />
          </Routes>
        </NativeRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
