import Constants from './Constants';
import ToggleHelper from './ToggleHelper';

export default class MainChecker
{

	element;
	options = {};
	parentOptions = {};
	name;

	/**
	 * @param {jQuery} element
	 * @param {{activeClass: string, inactiveClass: string}} options
	 * @param {object} parentOptions
	 */
	constructor(element, options, parentOptions)
	{
		this.element = element;
		this.options = options;
		this.parentOptions = parentOptions;
		this.name = element.attr(parentOptions.nameAttr);
		this.options['iconPrefix'] = element.attr('data-icon-prefix');

		this.element.on({
			'click.selection': (e) => {
				e.preventDefault();
				e.stopPropagation();
				this.toggle(true);
			},
			'selection-change.selection': () => {
				this.toggle();
			}
		});
	}

	toggle(fromMain)
	{
		let one = false,
			all = true,
			no = 0,
			count = 0,
			values = mesour.selection.getValues(this.name);

		jQuery.each(values, function (id, isChecked) {
			if (isChecked) {
				one = true;
			} else {
				no++;
				all = false;
			}
			count++;
		});
		let nothing = count === no;
		let _this = this;
		if (fromMain) {
			if (this.element.hasClass('btn-default') || this.element.hasClass("btn-indeterminate")) {
				jQuery(this.parentOptions.itemsSelector)
					.filter('[' + this.parentOptions.nameAttr + '="' + _this.name + '"]')
					.each(function () {
					let $this = jQuery(this);
					ToggleHelper.active($this, _this.options);
				});
				all = true;
			} else {
				jQuery(this.parentOptions.itemsSelector)
					.filter('[' + this.parentOptions.nameAttr + '="' + _this.name + '"]')
					.each(function () {
					let $this = jQuery(this);
					ToggleHelper.inactive($this, _this.options);
				});
				all = false;
				one = false;
			}
		}
		this.element.removeClass('btn-indeterminate');
		if (all) {
			ToggleHelper.active(this.element, this.options);
		} else if (one && !nothing) {
			ToggleHelper.active(this.element, this.options, Constants.ICON_MINUS);
			this.element.addClass('btn-indeterminate');
		} else {
			ToggleHelper.inactive(this.element, this.options);
		}
		this.element.trigger('change.selection');
	};

}