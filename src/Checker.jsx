import ToggleHelper from './ToggleHelper';

export default class Checker
{

	element = {};
	options = {};
	name;
	$mainCheckbox;

	/**
	 * @param {jQuery} element
	 * @param {{activeClass: string, inactiveClass: string}} options
	 * @param {object} parentOptions
	 */
	constructor(element, options, parentOptions)
	{
		this.element = element;
		this.options = options;
		this.name = element.attr(parentOptions.nameAttr),
		this.$mainCheckbox = jQuery(parentOptions.mainSelector)
			.filter('[' + parentOptions.nameAttr + '="' + this.name + '"]');
		this.options['iconPrefix'] = this.$mainCheckbox.attr('data-icon-prefix');

		element.on({
			'click.selection': () => {
				this.toggle();
			},
			'selection-change.selection': () => {
				this.toggle();
			}
		});
	}

	toggle()
	{
		ToggleHelper.toggle(this.element, this.options);
		this.$mainCheckbox.trigger('selection-change.selection');
		this.element.trigger('change.selection');
	}

}