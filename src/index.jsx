import Selection from './Selection.jsx';
import 'mesour-core/dist/mesour.min.js';

(function(mesour) {
	mesour.createWidget(
		'selection',
		new Selection(mesour.selection && mesour.selection.userOptions ? mesour.selection.userOptions : {})
	);
})(window.mesour);

import './../sass/style.sass';

export default Selection;