import logo from './logo.svg';
import './App.css';

import { ReactModuleIntro } from './tutorials/react-module/react-module-intro'
import { UsingFunctionComponent } from './tutorials/react-component/using-function-component'
import { UsingClassComponnt } from './tutorials/react-component/using-class-component'
import { Layout } from './layout';

function App() {
  return (
    <Layout >
      {/* <ReactModuleIntro /> */}
      {/* <UsingFunctionComponent /> */}
      <UsingClassComponnt />
    </Layout>
  );
}

export default App;
