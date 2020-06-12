import React from 'react';
import './App.css';
import Contact from './container/contactPage/contact';
import Header from './component/header/header';
import Footer from './component/footer/footer';

class App extends React.Component {
  render(){ 
    return(<>
        <Header />
        <Contact />
        <Footer />
      </>
    )
  }
}

export default App;
