import CheckboxHelper from './CheckboxHelper';
import Checker from './Checker';
import Constants from './Constants';
import MainChecker from './MainChecker';

export default class Selection
{

	icons = {};
	options = {};

	constructor(options)
	{
		if (typeof options !== 'object') {
			throw new Error('Options must be object.');
		} else {
			this.options = jQuery.extend({}, Constants.DEFAULT_OPTIONS, options);
			this.options.item = jQuery.extend({}, Constants.DEFAULT_OPTIONS.item, options.item);
		}
		this.icons[Constants.ICON_MINUS] = Constants.ICON_MINUS;
		this.icons[Constants.ICON_CHECKED] = Constants.ICON_CHECKED;
	}

	getValues(name)
	{
		let values = {},
			_this = this;
		jQuery(this.options.itemsSelector)
			.filter('[' + this.options.nameAttr + '="' + name + '"]')
			.each(function() {
				let $this = jQuery(this);
				values[$this.attr(_this.options.idAttr)] = $this.hasClass(_this.options.item.activeClass);
			});
		return values;
	}

	getItems(name)
	{
		return jQuery(this.options.itemsSelector).filter('[' + this.options.nameAttr + '="' + name + '"]');
	}

	getMainCheckbox(name)
	{
		return jQuery(this.options.mainSelector).filter('[' + this.options.nameAttr + '="' + name + '"]');
	}

	setIcon(iconName, icon)
	{
		this.icons[iconName] = icon;
	}

	getIcon(iconName)
	{
		return this.icons[iconName];
	}

	live()
	{
		let _this = this;
		jQuery(this.options.itemsSelector).each(function () {
			let $this = jQuery(this),
				instance = $this.data('_m-selection');
			if (!instance) {
				instance = new Checker($this, _this.options.item, _this.options);
			}
		});
		jQuery(this.options.mainSelector).each(function () {
			let $this = jQuery(this),
				instance = $this.data('_m-selection');
			if (!instance) {
				instance = new MainChecker($this, _this.options.item, _this.options);
			}
		});
		jQuery(this.options.dropDownSelector).each(function () {
			let $this = jQuery(this),
				instance = $this.data('_m-selection');
			if (!instance) {
				instance = new CheckboxHelper($this, _this.options.item, _this.options);
			}
		});
	};

}