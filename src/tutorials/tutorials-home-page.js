import React from 'react';
import { BaseTutorialsPage } from '../components/base-tutorials-page';
import { useSelector } from 'react-redux';

const TutorialsHomePage = () => {
  const helloRedux = useSelector((state) => state.hello.message);

  return (
    <BaseTutorialsPage title={'React Totorials'}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, earum ipsa tempore placeat
        exercitationem adipisci sint eum id commodi magnam tenetur nisi, doloribus nihil deserunt
        voluptates natus odio ipsam odit.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, earum ipsa tempore placeat
        exercitationem adipisci sint eum id commodi magnam tenetur nisi, doloribus nihil deserunt
        voluptates natus odio ipsam odit.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, earum ipsa tempore placeat
        exercitationem adipisci sint eum id commodi magnam tenetur nisi, doloribus nihil deserunt
        voluptates natus odio ipsam odit.
      </p>
      <hr />
      <p>This message recived from redux store <strong>{helloRedux}</strong></p>
    </BaseTutorialsPage>
  );
};

export default TutorialsHomePage;
