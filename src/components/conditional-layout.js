import React from 'react';
import Layout from './Layout';
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing';

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) =>
      modal ? (
        <React.Fragment>
          <Link
            to={closeTo}
            style={{
              color: '#000000',
              fontWeight: 'bold'
            }}
          >
            CLOSE
          </Link>
          {children}
        </React.Fragment>
      ) : (
        <Layout {...rest}>{children}</Layout>
      )
    }
  </ModalRoutingContext.Consumer>
);

export default ConditionalLayout;