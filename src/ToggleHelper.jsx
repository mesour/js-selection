import Constants from './Constants';

export default class ToggleHelper
{

	static toggle(el, options)
	{
		if (el.hasClass('btn-default')) {
			ToggleHelper.active(el, options);
		} else {
			ToggleHelper.inactive(el, options);
		}
	}

	static active(el, options, icon)
	{
		icon = !icon ? Constants.ICON_CHECKED : icon;
		el.removeClass(options.inactiveClass).addClass(options.activeClass);
		el.html('<span class="' + options['iconPrefix'] + mesour.selection.getIcon(icon) + '"></span>');
	}

	static inactive(el, options)
	{
		el.addClass(options.inactiveClass).removeClass(options.activeClass);
		el.html('&nbsp;&nbsp;&nbsp;&nbsp;');
	}

}