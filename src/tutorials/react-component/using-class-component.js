import React from 'react'
import { BaseTutorialsPage } from '../../components/base-tutorials-page'
import { ClassComponent1, ClassComponent2, ClassComponent3 } from './class-component'

export function UsingClassComponnt() {
  return (
    <BaseTutorialsPage title={'React Class Components'}>
     <ClassComponent1 />   

     <ClassComponent2 title='Hello React Class Component (2)' message='using props' color='red'/>

     <ClassComponent2 title='Hello React Class Component (2)' message='using props' color='rgb(200,150,50)'>
        <div style={{ background: 'greenyellow' }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non modi illum sed qui debitis
            quas voluptatum harum voluptatem autem.
          </p>
        </div>
      </ClassComponent2>
      
     <ClassComponent3 title='Hello React Class Component (3)' message='using destructuring props'>
        <div style={{ background: 'greenyellow' }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non modi illum sed qui debitis
            quas voluptatum harum voluptatem autem.
          </p>
        </div>
      </ClassComponent3>

    </BaseTutorialsPage>
  )
}
