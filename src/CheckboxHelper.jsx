import ToggleHelper from './ToggleHelper';

export default class CheckboxHelper
{

	/**
	 * @param {jQuery} element
	 * @param {{activeClass: string, inactiveClass: string}} options
	 * @param {object} parentOptions
	 */
	constructor(element, options, parentOptions)
	{
		let name = element.attr(parentOptions.nameAttr),
			mainCheckbox = jQuery(parentOptions.mainSelector).filter('[' + parentOptions.nameAttr + '="' + name + '"]');

		element.find('[data-status]').on('click', function (e) {
			e.preventDefault();
			let $this = jQuery(this),
				status = $this.attr('data-status');

			options['iconPrefix'] = mainCheckbox.attr('data-icon-prefix');

			if (status === 'm_-inverse') {
				jQuery(parentOptions.itemsSelector).filter('[' + parentOptions.nameAttr + '="' + name + '"]').each(function () {
					ToggleHelper.toggle(jQuery(this), options);
				});
			} else {
				jQuery(parentOptions.itemsSelector).filter('[' + parentOptions.nameAttr + '="' + name + '"]').each(function () {
					let $this = jQuery(this),
						statuses = $this.attr('data-status').split('|'),
						isValid = false;
					for (let i = 0; i < statuses.length; i++) {
						if (status == statuses[i]) {
							ToggleHelper.active($this, options);
							isValid = true;
						}
					}
					if (!isValid) {
						ToggleHelper.inactive($this, options);
					}
				});
			}
			mainCheckbox.trigger('selection-change.selection');
			element.trigger('selection-change.selection');
		});
	}

}