import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ?
        <div>
          <h1>Account: {authUser.email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      : <p>Please sign in first</p>
    }
  </AuthUserContext.Consumer>

export default AccountPage;
