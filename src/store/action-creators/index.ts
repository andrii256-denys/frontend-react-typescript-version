import * as navigationActionCreators from './navigation';
import * as goodsActionCreators from './goods';

export const actionCreators = {
	...navigationActionCreators,
	...goodsActionCreators,
}
