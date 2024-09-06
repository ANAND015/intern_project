import React, { lazy, Suspense } from 'react';

const LazyTheme = lazy(() => import('./Theme'));

const Theme = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTheme {...props} />
  </Suspense>
);

export default Theme;
