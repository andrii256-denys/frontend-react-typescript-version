import * as navigationActionCreators from './navigation';
import * as goodsActionCreators from './goods';
import * as filtersActionCreators from './filters';
import * as statisticsActionCreators from './statistics';

export const actionCreators = {
	...navigationActionCreators,
	...goodsActionCreators,
	...filtersActionCreators,
	...statisticsActionCreators,
}
