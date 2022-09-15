import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { TutorialsPage } from './pages/tutorials';
import { ReactModuleIntro } from './tutorials/react-module/react-module-intro';
import { UsingFunctionComponent } from './tutorials/react-component/using-function-component';
import { UsingClassComponnt } from './tutorials/react-component/using-class-component';
import { Layout } from './layout';
import { TutorialsHomePage } from './tutorials';
import { NotFoundPage } from './pages/not-found';
import { EventStateCC } from './tutorials/event-state-cc';
import { ClassComponentLifecycle } from './tutorials/class-component-lifecycle';
import UseCssModule from './tutorials/css-module/css-module';
import CalculatorPage from './pages/calculator/calculator-page';
import SateInFC from './tutorials/state-in-fc/state-in-fc';
import { CalculatorFCPage } from './pages/calculator-fc';
import UsersPage from './pages/users/users-page';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='tutorials' element={<TutorialsPage />}>
          <Route index element={<TutorialsHomePage />} />
          <Route path='module-intro' element={<ReactModuleIntro />} />
          <Route path='fc-intro' element={<UsingFunctionComponent />} />
          <Route path='cc-intro' element={<UsingClassComponnt />} />
          <Route path='event-state-cc' element={<EventStateCC />} />
          <Route path='cc-lifecycle' element={<ClassComponentLifecycle />} />
          <Route path='css-module' element={<UseCssModule />} />
          <Route path='state-fc' element={<SateInFC />} />
        </Route>

        <Route path='calculator' element={<CalculatorPage />} />
        <Route path='calculator-fc' element={<CalculatorFCPage />} />
        <Route path='users' element={<UsersPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
