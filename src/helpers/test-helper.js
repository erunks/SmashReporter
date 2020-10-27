import React from 'react';
import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import { IKContext } from 'imagekitio-react';
import { RecoilRoot } from 'recoil';

const wrapper = (component, options = {
  initializeState: () => {},
}) => {
  const initialStateMethod = options.initializeState;

  return (
    <IKContext
      publicKey="public_DfZPshOEvWdxzvxS8HGNWPJCo70="
      urlEndpoint="https://ik.imagekit.io/ozcerk4wii"
    >
      <RecoilRoot initializeState={ initialStateMethod }>
        { component }
      </RecoilRoot>
    </IKContext>
  );
};

const mountWrapper = (component, options) => mount(wrapper(component, options));
const shallowWrapper = (component, options) => shallow(wrapper(component, options));
const wrappedRender = (component, options = {}) => {
  const initialStateMethod = options && options.initializeState;

  const Wrapper = ({ children }) => (
    <IKContext
      publicKey="public_DfZPshOEvWdxzvxS8HGNWPJCo70="
      urlEndpoint="https://ik.imagekit.io/ozcerk4wii"
    >
      <RecoilRoot initializeState={ initialStateMethod }>
        { children }
      </RecoilRoot>
    </IKContext>
  );

  return render(component, { wrapper: Wrapper, ...options });
};


export * from '@testing-library/react';

export {
  mountWrapper,
  shallowWrapper,
  wrappedRender
};
