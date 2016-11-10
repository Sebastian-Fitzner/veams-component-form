# Form

This blueprint is based on the blueprint of Veams-Components.

## Version
Latest version is ```v2.0.0```

### JavaScript
- `Veams-JS >= v4.0.0`

## Usage

### Options:

#### submitOnLoad
`Type: boolean` | `Default: false`

Submit form on page load

#### submitOnChange
`Type: boolean` | `Default: true`

Submit form on change

#### loadingClass
`Type: string` | `Default: null`

Optional class to be set while fetching data from server

#### successClass
`Type: string` | `Default: 'is-success'`

Class to be set after data was fetched successfully

#### errorClass
`Type: string` | `Default: 'is-error'`

Class to be set after fetching data failed for some reason

### Include: Page

``` hbs
{{! @INSERT :: START @id: form, @tag: component-partial }}
{{! WrapWith START: Form Wrapper }}
{{#with form-bp}}
    {{#wrapWith "c-form" settings=this.settings}}
        {{#each fieldsets}}
            {{> c-form__fieldset }}
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
// @INSERT :: END
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import 
import FormAjax from './modules/form/form-ajax';
// @INSERT :: END
```

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 
/**
 * Init Form
 */
Helpers.loadModule({
	el: '[data-js-module="form-ajax"]',
	module: FormAjax,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3  
/**
 * Init Form
 */
Helpers.loadModule({
	domName: 'form-ajax',
	module: FormAjax,
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
