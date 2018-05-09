<p align="right">
   <a href="https://badge.fury.io/js/@veams/component-form"><img src="https://badge.fury.io/js/@veams/component-form.svg" alt="npm version" height="18"></a>
    <a href="https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"><img src="https://badges.gitter.im/Sebastian-Fitzner/Veams.svg" alt="Gitter Chat" /></a>
</p>

# Form

The form component is a complete solution for your forms. It provides 
- ajax functionality
- a date picker (pikaday.js)
- custom styles for checkboxes and radio buttons
- jQuery-free.

-----------

## Requirements
- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.

-----------

## Installation 

### Installation with Veams

``` bash
veams install component form
```
``` bash
veams -i c form
```

----------- 

## Usage

### JavaScript Options:

#### submitOnLoad
`Type: boolean` | `Default: false`

Submit form on page load.

#### submitOnChange
`Type: boolean` | `Default: true`

Submit form on change.

#### loadingClass
`Type: string` | `Default: null`

Optional class to be set while fetching data from server.

#### successClass
`Type: string` | `Default: 'is-success'`

Class to be set after data was fetched successfully.

#### errorClass
`Type: string` | `Default: 'is-error'`

Class to be set after fetching data failed for some reason.
