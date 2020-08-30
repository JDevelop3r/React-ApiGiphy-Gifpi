import React, {Suspense} from "react";

import "./styles.css";
import useNearScreen from "hooks/useNearScreen";
import Spinner from '../Spinner/Spinner';

const Trends = React.lazy(
  () => import('./TrendingSearches')
);

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen();

  return <div ref={fromRef}>
    <Suspense fallback={<Spinner />}>
      {isNearScreen ? <Trends /> : <Spinner />}
    </Suspense>
  </div>;
}
