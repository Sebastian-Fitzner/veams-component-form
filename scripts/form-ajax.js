/**
 * Represents a ajax form class.
 *
 * @module FormAjax
<<<<<<< HEAD:js/form-ajax.js
 * @version v3.0.3
=======
 * @version v1.0.0
>>>>>>> dev:scripts/form-ajax.js
 *
 * @author Sebastian Fitzner
 */
import $ from '@veams/query';
import Component from '@veams/component';

class FormAjax extends Component {
	/**
	 * General Properties
	 */

	// Elements in Markup
	$el = $(this.el);
	fields = $('input', this.$el);
	selects = $('select', this.$el);
	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			submitOnLoad: false,
			submitOnChange: true,
			loadingClass: null,
			successClass: 'is-success',
			errorClass: 'is-error',
			eventName: Veams.EVENTS.form.complete
		};

		super(obj, options);
	}

	/**
	 * Get module information
	 */
	static get info() {
		return {
<<<<<<< HEAD:js/form-ajax.js
			version: '3.0.3',
=======
			version: '1.0.0',
>>>>>>> dev:scripts/form-ajax.js
			vc: true,
			mod: false // set to true if source was modified in project
		};
	}

	/** =================================================
	 * STANDARD METHODS
	 * ================================================= */
	didMount() {
		// Fetch data if option is true
		if (this.options.submitOnLoad) {
			this.fetchData(this.$el);
		}

		// call super
		super.initialize();
	}

	/**
	 * Bind all events
	 */
	bindEvents() {
		let fnFetchData = this.fetchData.bind(this);
		let fnReset = this.resetFilters.bind(this);
		/**
		 * On submit event fetch data
		 */
		this.$el.on(this.context.EVENTS.submit + ' ' + this.context.EVENTS.reset, fnFetchData);

		/**
		 * Reset filters on reset event
		 */
		this.context.Vent.on(this.context.EVENTS.form.reset, fnReset);

		/**
		 * If submitOnChange is true
		 *
		 * fetch data
		 * show reset button
		 *
		 */
		if (this.options.submitOnChange) {
			this.$el.on(this.context.EVENTS.blur + ' ' + this.context.EVENTS.change, this.fields, fnFetchData);
		}
	}


	/**
	 * Ajax call to get data object with results or error message.
	 *
	 * @param {Object} e - object or event.
	 * @param {object} currentTarget - Target to which listener was attached.
	 */
	fetchData(e, currentTarget) {
		let el;

		if (e && typeof e.preventDefault === 'function') {
			e.preventDefault();
			el = currentTarget || e.currentTarget ;
		} else {
			el = e;
		}

		if (this.options.loadingClass) {
			this.$el.addClass(this.options.loadingClass);
		}

		let action = this.$el.attr('action');
		let method = this.$el.attr('method');
		let serialize = this.$el.serialize();
		let url = action + '?' + serialize;

		$.ajax({
			url: url,
			dataType: 'json',
			success: (data) => {
				this.onSuccess(data, el);
			},
			error: (status, statusText) => {
				this.onError(status, statusText)
			}
		});

	}

	onSuccess(data, el) {
		this.fields = $('input', this.$el);
		this.selects = $('select', this.$el);

		this.context.Vent.trigger(this.options.eventName, {
			data: data,
			el: el
		});

		if (this.options.loadingClass) {
			this.$el.removeClass(this.options.loadingClass);
		}

		this.$el.addClass(this.options.successClass);
	}

	onError(status, statusText) {

		if (this.options.loadingClass) {
			this.$el.removeClass(this.options.loadingClass);
		}

		this.$el.addClass(this.options.errorClass);

		console.warn('FormAjax:', statusText, '(' + status + ')');
	}

	/**
	 * Reset filters, currently supported
	 *
	 * checkboxes
	 * selects
	 */
	resetFilters() {
		this.resetChecks();
		this.resetSelects();
	}

	/**
	 * Reset checkboxes
	 */
	resetChecks() {
		this.fields.each(function () {
			$(this).prop('checked', false);
		});
	}

	/**
	 * Resest selects
	 */
	resetSelects() {
		this.selects.each(function () {
			$(this).prop('selectedIndex', 0);
		});
	}
}

// Returns constructor
export default FormAjax;
