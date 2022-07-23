import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Container from './components/common/Container';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
          </Routes>
        </Container>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
