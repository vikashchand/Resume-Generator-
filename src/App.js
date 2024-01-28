
import Builder from './components/Builder';
import './App.css'


import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);

const  App = () => {

  return(

  <div>
  <Authenticator signUpAttributes={[]} className='auth'>
  {({ signOut, user }) => (
        <div className="container">
      
        <h1 className='headings'>Online Resume Maker</h1>
          <Builder/>

          <div className='blob'/>
        </div>

        )}
        </Authenticator>
  </div>
  );
}

export default withAuthenticator (App);
