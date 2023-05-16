import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import { ContextScreen } from '@screens/ContextScreen';

export const Routes = () => {
  return (
    <Router>
      <_Routes>
        {['/', '/context'].map((path) => (
          <Route key={path} path={path} element={<ContextScreen />} />
        ))}
      </_Routes>
    </Router>
  );
};
