import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Wrap } from './Router.styles';

/**
 * React.lazy로 코드 Code Splitting을 할 경우에 가끔 흰화면이 뜰 때 있음.
 * 그 경우엔 import를 다시 시도 해보는 함수.
 * 최댜 10번까지 재시도를 해본 후 안되면 Error가 뜨게끔 되어 있다.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
const retry = (
	fn: any, // 재시도 함수
	retriesLeft: number = 10, // 최대 재시도 횟수
	interval: number = 1000, // 재시도 시간 간격
): Promise<{
	default: React.ComponentType<any>;
}> => {
	return new Promise((resolve, reject) => {
		fn()
			.then(resolve)
			.catch(() => {
				setTimeout((error) => {
					if (retriesLeft === 1) {
						reject(error);
						return;
					}
					retry(fn, retriesLeft - 1, interval).then(resolve, reject);
				}, interval);
			});
	});
};
const Home = lazy(() => retry(() => import('../../pages/home')));

const Router = (): JSX.Element => {
	return (
		<Suspense fallback={<div>로딩중..</div>}>
			<Wrap>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Wrap>
		</Suspense>
	);
};

export default Router;
