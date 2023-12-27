import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import { ContextScreen } from '@screens/ContextScreen';
import { GettingStartedScreen } from '@screens/GettingStartedScreen';

export const Routes = () => (
  <Router>
    <_Routes>
      <Route path="/" element={<GettingStartedScreen />} />
      <Route path="/context" element={<ContextScreen />} />
    </_Routes>
  </Router>
);
