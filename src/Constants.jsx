export default class Constants
{

	static get ICON_MINUS()
	{
		return 'minus';
	}

	static get ICON_CHECKED()
	{
		return 'check';
	}

	static get DEFAULT_OPTIONS()
	{
		return {
			'itemsSelector': '.mesour-select-checkbox',
			'mainSelector': '.mesour-main-checkbox',
			'dropDownSelector': '.selection-dropdown',
			'nameAttr': 'data-name',
			'idAttr': 'data-id',
			'statusAttr': 'data-status',
			'item': {
				'activeClass': 'btn-warning',
				'inactiveClass': 'btn-default'
			}
		};
	}

}
