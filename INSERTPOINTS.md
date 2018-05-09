## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: form, @tag: component-partial }}
{{! WrapWith START: Form Wrapper }}
{{#with form.variations.default}}
    {{#wrapWith "form" settings=settings}}
        {{#each content.fieldsets}}
            {{> form__fieldset}}
        {{/each}}
    {{/wrapWith}}
{{/with}}
{{! WrapWith END: Form Wrapper }}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams (@veams/plugin-modules v1.x)

``` js
// @INSERT :: START @tag: js-init-modules-@1 //
// Init AJAX Form
Veams.modules.add({ namespace: 'form-ajax', module: FormAjax });

// Init Form Datepicker (requires moment.js and pikaday.js)
// Veams.modules.add({ namespace: 'form-datepicker', module: FormDatepicker });
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