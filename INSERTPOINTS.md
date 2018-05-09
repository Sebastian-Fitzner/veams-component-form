## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: form, @tag: component-partial }}
{{! WrapWith START: Form Wrapper }}
<<<<<<< HEAD
{{#with form-bp.variations.default}}
    {{#wrapWith "c-form" settings=settings}}
=======
{{#with form.variations.default}}
    {{#wrapWith "form" settings=settings}}
>>>>>>> dev
        {{#each content.fieldsets}}
            {{> form__fieldset}}
        {{/each}}
    {{/wrapWith}}
{{/with}}
{{! WrapWith END: Form Wrapper }}
{{! @INSERT :: END }}
```

<<<<<<< HEAD
### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-form";
@import "components/_c-form__datepicker";
// @INSERT :: END //

// @INSERT :: START @tag: scss-self-contained-import //   
@import "../templating/partials/components/form/scss/_c-form";
@import "../templating/partials/components/form/scss/_c-form__datepicker";
// @INSERT :: END //
```

### Include: JavaScript

#### Import
``` js
// @INSERT :: START @tag: js-import //
import FormAjax from './modules/form/form-ajax';
import FormDatepicker from './modules/form/form-datepicker';
// @INSERT :: END// 

// @INSERT :: START @tag: js-self-contained-import // 
import FormAjax from '../templating/partials/components/form/js/form-ajax';
import FormDatepicker from '../templating/partials/components/form/js/form-datepicker';
// @INSERT :: END //
```
=======
### Include: JavaScript

#### Initializing in Veams (@veams/plugin-modules v1.x)
>>>>>>> dev

``` js
<<<<<<< HEAD
// @INSERT :: START @tag: js-init-v5 //
    ,
    /**
     * Init AJAX Form
     */
    {
        namespace: 'form-ajax',
        module: FormAjax
    }//,
	 /**
	  * Init Form Datepicker (requires moment.js and pikaday.js)
	  */
	 //{
	    //namespace: 'form-datepicker',
	    //module: FormDatepicker
	 //}
=======
// @INSERT :: START @tag: js-init-modules-@1 //
// Init AJAX Form
Veams.modules.add({ namespace: 'form-ajax', module: FormAjax });

// Init Form Datepicker (requires moment.js and pikaday.js)
// Veams.modules.add({ namespace: 'form-datepicker', module: FormDatepicker });
>>>>>>> dev
// @INSERT :: END //
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
// @INSERT :: END //
```