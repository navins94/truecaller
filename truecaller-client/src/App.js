import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './screens/home/Home';
import PostDetail from './screens/postdetail/PostDetail';
import Categories from './screens/categories/categoriesDetail';
import Tags from './screens/tags/tagsDetail';
import NotFound from './screens/notfound/NotFound';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';
import Footer from './component/footer/Footer';
import ScrollToTop from './component/scrolltotop/ScrollToTop';
import HeaderAds from './component/headerads/HeaderAds';
import './App.css';

const App = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <HeaderAds />
    <div className="container">
      <div className="row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={PostDetail} />
          <Route path="/categories/:slug" component={Categories} />
          <Route path="/tag/:slug" component={Tags} />
          <Route component={NotFound} />
        </Switch>
        <Sidebar />
      </div>
    </div>
    <Footer />
  </Router>
);

export default App;
