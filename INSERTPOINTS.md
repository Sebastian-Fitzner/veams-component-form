### Include: Page

``` hbs
{{! @INSERT :: START @id: form, @tag: component-partial }}
{{! WrapWith START: Form Wrapper }}
{{#with form-bp.variations.fields}}
    {{#wrapWith "c-form" settings=settings}}
        {{#each content.fieldsets}}
            {{> c-form__fieldset}}
        {{/each}}
    {{/wrapWith}}
{{/with}}
{{! WrapWith END: Form Wrapper }}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import 
@import "components/_c-form";
@import "components/_c-form__datepicker";
// @INSERT :: END

// @INSERT :: START @tag: scss-import-self-contained  
@import "../templating/partials/components/form/scss/_c-form";
@import "../templating/partials/components/form/scss/_c-form__datepicker";
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import 
import FormAjax from './modules/form/form-ajax';
import FormDatepicker from './modules/form/form-datepicker';
// @INSERT :: END// 

@INSERT :: START @tag: js-import-self-contained 
import FormAjax from '../templating/partials/components/form/js/form-ajax';
import FormDatepicker from '../templating/partials/components/form/js/form-datepicker';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 
/**
 * Init AJAX Form
 */
Helpers.loadModule({
	el: '[data-js-module="form-ajax"]',
	module: FormAjax,
	context: context
});

/**
 * Init Form Datepicker
 */
Helpers.loadModule({
	el: '[data-js-module="form-datepicker"]',
	module: FormDatepicker,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3  
/**
 * Init AJAX Form
 */
Helpers.loadModule({
	domName: 'form-ajax',
	module: FormAjax,
	context: context
});

/**
 * Init Form Datepicker
 */
Helpers.loadModule({
	domName: 'form-datepicker',
	module: FormDatepicker,
	context: context
});
// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events Form
 */
EVENTS.form = {
	complete: 'form:complete',
	reset: 'form:reset'
};
// @INSERT :: END
```