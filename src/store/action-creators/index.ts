import * as navigationActionCreators from './navigation';
import * as goodsActionCreators from './goods';
import * as filtersActionCreators from './filters';

export const actionCreators = {
	...navigationActionCreators,
	...goodsActionCreators,
	...filtersActionCreators
}
