//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery Unobtrusive extensions for hps.web.mvc.extensions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function ($) {
    $.unobtrusive = {
        bind: function () {
            /// <summary>
            ///     Binds format and cascading dropdown jQuery extensions unobtrusively on the document using html attributes for parameters
            ///     &#10;&#10;  Format Attributes:
            ///     &#10;           data-format = "custom" | "phone" | "zip" | "routingnumber" | "ein" | 
            ///     &#10;                         "ssn" | "date" | "tin" | "acctnum" | "amexse" | "dln" | "alpha" |
            ///     &#10;                         "alphanumeric" | "numeric" | "decimal" | "url" | "email"
            ///     &#10;           data-format-options = "{ onCompleted: null,
            ///     &#10;                                    onError: null,
            ///     &#10;                                    watermark: 'watermark',
            ///     &#10;                                    applyWatermark: true,
            ///     &#10;                                    mask: '',
            ///     &#10;                                    maxValue: null,
            ///     &#10;                                    minValue: null,
            ///     &#10;                                    maxDecimalPlaces: null,
            ///     &#10;                                    decimalPlaceHolder: null,
            ///     &#10;                                    prefix:null,
            ///     &#10;                                    suffix:null,
            ///     &#10;                                    insertCommas: true,
            ///     &#10;                                    format: dataformat,
            ///     &#10;                                    errorMessage: errorMessage,
            ///     &#10;                                    watermarkText: watermarkText,
            ///     &#10;                                    defaultValue:'',
            ///     &#10;                                    maxDate:null,
            ///     &#10;                                    minDate:null,
            ///     &#10;                                    dateFormat:'mm/dd/yy',
            ///     &#10;                                    allowNegative:true,
            ///     &#10;                                    replaceZeroWithDefault:true }"
            ///     &#10;&#10;  Cascading Dropdown Attributes:
            ///     &#10;           data-cascading-id - the id of the cascading dropdown set
            ///     &#10;           data-cascading-parent - the id of the parent (data-cascading-id) for the dropdown
            ///     &#10;           data-cascading-url - the url to load data from based on parent selection
            /// </summary>
            /// <returns type="jQuery" />
            return document;
        }
    };

    $.fn.extend({
        unobtrusive: function () {
            /// <summary>
            ///     Binds format and cascading dropdown jQuery extensions unobtrusively on the selector using html attributes for parameters
            ///     &#10;&#10;  Format Attributes:
            ///     &#10;           data-format = "custom" | "phone" | "zip" | "routingnumber" | "ein" | 
            ///     &#10;                         "ssn" | "date" | "tin" | "acctnum" | "amexse" | "dln" | "alpha" |
            ///     &#10;                         "alphanumeric" | "numeric" | "decimal" | "url" | "email"
            ///     &#10;           data-format-options = "{ onCompleted: null,
            ///     &#10;                                    onError: null,
            ///     &#10;                                    watermark: 'watermark',
            ///     &#10;                                    applyWatermark: true,
            ///     &#10;                                    mask: '',
            ///     &#10;                                    maxValue: null,
            ///     &#10;                                    minValue: null,
            ///     &#10;                                    maxDecimalPlaces: null,
            ///     &#10;                                    decimalPlaceHolder: null,
            ///     &#10;                                    prefix:null,
            ///     &#10;                                    suffix:null,
            ///     &#10;                                    insertCommas: true,
            ///     &#10;                                    format: dataformat,
            ///     &#10;                                    errorMessage: errorMessage,
            ///     &#10;                                    watermarkText: watermarkText,
            ///     &#10;                                    defaultValue:'',
            ///     &#10;                                    maxDate:null,
            ///     &#10;                                    minDate:null,
            ///     &#10;                                    dateFormat:'mm/dd/yy',
            ///     &#10;                                    allowNegative:true,
            ///     &#10;                                    replaceZeroWithDefault:true }"
            ///     &#10;&#10;  Cascading Dropdown Attributes:
            ///     &#10;           data-cascading-id - the id of the cascading dropdown set
            ///     &#10;           data-cascading-parent - the id of the parent (data-cascading-id) for the dropdown
            ///     &#10;           data-cascading-url - the url to load data from based on parent selection
            /// </summary>
            /// <returns type="jQuery" />
            return this;
        }
    });
})(jQuery);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery.autosave intellisense
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function ($) {
    $.fn.extend({
        autosave: function (settings) {
            /// <summary>
            ///     Accepts a settings object that allows for the following events and properties
            ///     &#10;&#10;    onSave event: function(form, e) { return (true or false) }
            ///     &#10;       form: the form that autosave was attached to
            ///     &#10;       e: the element that triggered autosave
            ///     &#10;&#10;    onSuccess event: function(data, e) { }
            ///     &#10;       data: the data returned from the form post action
            ///     &#10;       e: the element that triggered autosave 
            ///     &#10;&#10;    onError event: function(data, e) { }
            ///     &#10;       data: the data returned from the form post action
            ///     &#10;       e: the element that triggered autosave
            ///     &#10;&#10;    onValidateError event: function(e) { }
            ///     &#10;       e: the element that triggered autosave
            ///     &#10;&#10;    validate event: function(e) { return (true or false) }
            ///     &#10;       e: the element that triggered autosave
            ///     &#10;&#10;    validateBlock event: function(elements, blockName) { return (true or false) }
            ///     &#10;       elements: the elements of the autosave block
            ///     &#10;       blockName: the blockName of the block that triggered autosave
            ///     &#10;&#10;    postDisabledFields property: (true or false)
            ///     &#10;       This will post disabled fields on the form to the form post action 
            /// </summary>
            /// <param name="settings" type="Object">
            ///     The settings object and is optional.  There are defaults for every option in the settings object.
            /// </param>
            /// <returns type="jQuery" />
            settings = $.extend({
                onSave: function (form, e) { return true; },
                onSuccess: function (data, e) { },
                onError: function (data, e) { },
                onValidationError: function (e) { },
                validate: function (e) { return true; },
                validateBlock: function (elements, blockName) { return true; },
                postDisabledFields: false
            }, settings);

            return this.each(function () { });
        }
    });
})(jQuery);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery.menu intellisense
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function ($) {
    $.fn.extend({
        getMenuItem: function () {
            /// <summary>
            ///     Gets the menu item for the selected sub item. 
            /// </summary>
            /// <returns type="jQuery" />
            return this;
        },
        menuItem: function (definition, position, onOpen) {
            /// <summary>
            ///     Adds a menu to a DOM element 
            /// </summary>
            /// <param name="definition" type="dynamic">
            ///     Has overrides for multiple scenarios
            ///     &#10;   "bind": will bind a new click handler for the menu item
            ///     &#10;   "unbind": will unbind the click handler for the menu item
            ///     &#10;   Array: Array of menu items, must be an array of the following objects { text: "Menu Item Title", action: url or method }
            ///     &#10;   jQuery: Div containing menu definition
            /// </param>
            /// <param name="position" type="string">
            ///     Position of where the menu will display, options are:
            ///     &#10;   "bottom-left"
            ///     &#10;   "left"
            ///     &#10;   "center-right"
            ///     &#10;   "center-left"
            ///     &#10;   "top-center"
            ///     &#10;   "bottom-center"
            ///     &#10;   "bottom-left-align"
            ///     &#10;   "bottom-right-align"
            ///     &#10;   "top-right"
            ///     &#10;   "top-left"
            /// </param>
            /// <param name="onOpen" type="function">
            ///     Method that is called when the menu is clicked, allows for stoping the menu from showing if method returns false
            /// </param>
            /// <returns type="jQuery" />
            return this.each(function () { });
        }
    });
})(jQuery);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ajax Extensions Intellisense
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery.ajaxQueue = function (o) {
        /// <summary>
        ///     Runs all ajax request in order by using a default queue
        /// </summary>
        /// <param name="o" type="object">
        ///     A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) below for a complete list of all settings.
        /// </param>
};

function AjaxQueue(id) {
    /// <summary>
    ///     Creates a queue to process ajax requests
    /// </summary>
    /// <param name="id" type="string">
    ///     The id of the ajax queue
    /// </param>
    /// <returns type="AjaxQueue" />
};

AjaxQueue.prototype.ajax = function (o) {
    /// <summary>
    ///     Runs all ajax request in order by using a queue created for the AjaxQueue object
    /// </summary>
    /// <param name="o" type="object">
    ///     A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) below for a complete list of all settings.
    /// </param>
};
    
function AjaxSync() {
    /// <summary>
    ///     Creates an AjaxSync object that makes sure the most recent ajax request makes it to the server, any pending requests will be ignored.
    ///     &#10;Best used for autosave scenarios where only the most recent request is important.
    /// </summary>
    /// <returns type="AjaxSync" />
};

AjaxSync.prototype.ajax = function (o) {
    /// <summary>
    ///     Runs most recent ajax request submitted ignoring all previous requests
    /// </summary>
    /// <param name="o" type="object">
    ///     A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup(). See jQuery.ajax( settings ) below for a complete list of all settings.
    /// </param>
};

AjaxSync.prototype.isRequestRunning = function () {
    /// <summary>
    ///     Allows for checking current state of an AjaxSync object
    /// </summary>
    /// <returns type="bool" />    
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jquery.format.js
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$.getDocHeight = function () {
    /// <summary>
    ///     Gets the document height based on browser quirks
    /// </summary>
    /// <returns type="int" />
};

$.htmlHelper = {
    getHtmlId: function (value, elementType) {
        /// <summary>
        ///     Gets the html id that is generated by Html and HtmlEx extensions methods
        /// </summary>
        /// <param name="value" type="string">
        ///     The property name from the model that you wish to create the id from
        /// </param>
        /// <param name="elementType" type="string">
        ///     The element type the id was generated for, valid types are:
        ///     &#10;   section
        ///     &#10;   display
        ///     &#10;   modal
        ///     &#10;Any other element type does not need to be passed in
        /// </param>
        /// <returns type="string" />
    }
};

$.formatUtilities = {
    addCommasToNumber: function (value, defaultDecimalValue, prefix, suffix, defaultValue, maxDecimalPlaces, replaceZeroWithDefault) {
        /// <summary>
        ///     Adds commas to numeric values
        /// </summary>
        /// <param name="value" type="string">
        ///     The numeric value you wish to add commas to, this is expected to be casted to a string
        /// </param>
        /// <param name="defaultDecimalValue" type="string">
        ///     Added to the result as the decimal placeholder if the number does not have a decimal value (ex: '00')
        /// </param>
        /// <param name="prefix" type="string">
        ///     Prefix added to the number after formatting (ex. $, #, *), this can be any value you want
        /// </param>
        /// <param name="suffix" type="string">
        ///     Suffix added to the number after formatting (ex. %, USD, #, *), this can be any value you want
        /// </param>
        /// <param name="defaultValue" type="string">
        ///     The default value passed back for invalid numeric values or when replaceZeroWithDefault is 'true'
        /// </param>
        /// <param name="maxDecimalPlaces" type="int">
        ///     The maximum decimal places that the value will be taken out to.
        ///     &#10;This will only limit the decimal places, any value with less decimal places than this will be unchanged
        /// </param>
        /// <param name="replaceZeroWithDefault" type="bool">
        ///     If set to 'true' this will replace zero with the defaulValue
        /// </param>
        /// <returns type="string" />
    },
    removeCommasFromNumber: function (value, defaultDecimalValue, prefix, suffix) {
        /// <summary>
        ///     Removes commas from numeric values
        /// </summary>
        /// <param name="value" type="string">
        ///     The numeric value you wish to remove commas from
        /// </param>
        /// <param name="defaultDecimalValue" type="string">
        ///     Removed from result if the decimal value matches it (ex: '00')
        /// </param>
        /// <param name="prefix" type="string">
        ///     Prefix removed from the formatted number (ex. $, #, *), this can be any value you want
        /// </param>
        /// <param name="suffix" type="string">
        ///     Suffix removed from the formatted number (ex. %, USD, #, *), this can be any value you want
        /// </param>
        /// <returns type="string" />
    },
    getFullDate: function (val, format) {
        /// <summary>
        ///     Gets the fully formatted date from the value passed based on a format
        /// </summary>
        /// <param name="val" type="string">
        ///     The date to fully format
        /// </param>
        /// <param name="format" type="string">
        ///     The format of the date passed in, supported formats are:
        ///     &#10;   dd/mm/yy
        ///     &#10;   mm/yy
        /// </param>
        /// <returns type="string" />
    }
};

(function ($) {
    $.fn.extend({
        toObject: function(sendDisabled) {
		    ///	<summary>
		    ///		Serializes a set of input elements into a string of data.
		    ///	</summary>
            /// <param name="sendDisabled" type="bool?">
            ///     Posts disabled fields with other fields on form
            /// </param>
		    ///	<returns type="String">The serialized result</returns>

		    return jQuery.param(this.toObjectArray(sendDisabled));
	    },

	    toObjectArray: function(sendDisabled) {
		    ///	<summary>
		    ///		Serializes all forms and form elements but returns a JSON data structure.
		    ///	</summary>
            /// <param name="sendDisabled" type="bool?">
            ///     Posts disabled fields with other fields on form
            /// </param>
		    ///	<returns type="String">A JSON data structure representing the serialized items.</returns>

		    return this.map(function() {
			    return this.elements ? jQuery.makeArray(this.elements) : this;
		    })
		    .filter(function() {
			    return this.name && (!this.disabled || sendDisabled) &&  $(this).is(":maskedfieldvalid") &&
				    (this.checked || rselectTextarea.test(this.nodeName) ||
					    rinput.test(this.type));
		    })
		    .map(function( i, elem ) {
                var val = jQuery(this).val();
                
                return val == null ?
				    null :
				    jQuery.isArray(val) ?
					    jQuery.map( val, function( val, i ) {
						    return { name: elem.name, value: val };
					    }) :
					    { name: elem.name, value: val };
		    }).get();
	    },

        serializeObject: function(sendDisabled){
            ///	<summary>
		    ///		Serializes a set of input elements into a string of data and then applies JSON.stringify to the result.
		    ///	</summary>
            /// <param name="sendDisabled" type="bool?">
            ///     Posts disabled fields with other fields on form
            /// </param>
		    ///	<returns type="String">The serialized result stringified.</returns>

            return JSON.stringify(this.toObject(sendDisabled));
        },

        serializeObjectArray: function(sendDisabled) {
            ///	<summary>
		    ///		Serializes all forms and form elements but returns a JSON data structure and applies JSON.stringify to it.
		    ///	</summary>
            /// <param name="sendDisabled" type="bool?">
            ///     Posts disabled fields with other fields on form
            /// </param>
		    ///	<returns type="String">A JSON data structure representing the serialized items stringified.</returns>

            return JSON.stringify(this.toObjectArray(sendDisabled));
        },

        rawVal: function(value) {
            /// <summary>
            ///     1: Get the current value of the first element in the set of matched elements including formatting.
            ///     &#10;    1.1 - rawVal()
            ///     &#10;2: Set the value of each element in the set of matched elements without applying formatting.
            ///     &#10;    2.1 - rawVal(value) 
            ///     &#10;    2.2 - rawVal(function(index, value))
            /// </summary>
            /// <param name="value" type="string">
            ///     A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
            /// </param>
            /// <returns type="jQuery" />
            
            return this;
        },

        val: function(value) {
            /// <summary>
            ///     1: Get the current value of the first element in the set of matched elements removing formatting.
            ///     &#10;    1.1 - val()
            ///     &#10;2: Set the value of each element in the set of matched elements and applies formatting to it.
            ///     &#10;    2.1 - val(value) 
            ///     &#10;    2.2 - val(function(index, value))
            /// </summary>
            /// <param name="value" type="string">
            ///     A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
            /// </param>
            /// <returns type="jQuery" />
        },

        formatOptions: function (dataformat, settings) {
            /// <summary>
            ///     Applies formatting to selected element.
            /// </summary>
            /// <param name="dataformat" type="string">
            ///     Possible values:
            ///     &#10;   "custom" | "phone" | "zip" | "routingnumber" | "ein" | 
            ///     &#10;   "ssn" | "date" | "tin" | "acctnum" | "amexse" | "dln" | "alpha" |
            ///     &#10;   "alphanumeric" | "numeric" | "decimal" | "url" | "email"
            /// </param>
            /// <param name="settings" type="object">
            ///     Settings object to apply to the format
            ///     &#10;&#10;Default object -
            ///     &#10;   { onCompleted: null,
            ///     &#10;     onError: null,
            ///     &#10;     watermark: 'watermark',
            ///     &#10;     applyWatermark: true,
            ///     &#10;     mask: '',
            ///     &#10;     maxValue: null,
            ///     &#10;     minValue: null,
            ///     &#10;     maxDecimalPlaces: null,
            ///     &#10;     decimalPlaceHolder: null,
            ///     &#10;     prefix:null,
            ///     &#10;     suffix:null,
            ///     &#10;     insertCommas: true,
            ///     &#10;     format: dataformat,
            ///     &#10;     errorMessage: errorMessage,
            ///     &#10;     watermarkText: watermarkText,
            ///     &#10;     defaultValue:'',
            ///     &#10;     maxDate:null,
            ///     &#10;     minDate:null,
            ///     &#10;     dateFormat:'mm/dd/yy',
            ///     &#10;     allowNegative:true,
            ///     &#10;     replaceZeroWithDefault:true }
            /// </param>
            /// <returns type="jQuery" />
            return this;
        },

        format: function () {
            /// <summary>
            ///     Applies formatting to selected element based on the unobtrusive attributes for the element.
            ///     &#10;   data-format = "custom" | "phone" | "zip" | "routingnumber" | "ein" | 
            ///     &#10;                 "ssn" | "date" | "tin" | "acctnum" | "amexse" | "dln" | "alpha" |
            ///     &#10;                 "alphanumeric" | "numeric" | "decimal" | "url" | "email"
            ///     &#10;   data-format-options = "{ onCompleted: null,
            ///     &#10;                            onError: null,
            ///     &#10;                            watermark: 'watermark',
            ///     &#10;                            applyWatermark: true,
            ///     &#10;                            mask: '',
            ///     &#10;                            maxValue: null,
            ///     &#10;                            minValue: null,
            ///     &#10;                            maxDecimalPlaces: null,
            ///     &#10;                            decimalPlaceHolder: null,
            ///     &#10;                            prefix:null,
            ///     &#10;                            suffix:null,
            ///     &#10;                            insertCommas: true,
            ///     &#10;                            format: dataformat,
            ///     &#10;                            errorMessage: errorMessage,
            ///     &#10;                            watermarkText: watermarkText,
            ///     &#10;                            defaultValue:'',
            ///     &#10;                            maxDate:null,
            ///     &#10;                            minDate:null,
            ///     &#10;                            dateFormat:'mm/dd/yy',
            ///     &#10;                            allowNegative:true,
            ///     &#10;                            replaceZeroWithDefault:true }"
            /// </summary>
            /// <returns type="jQuery" />
            var dataformat = $(this).attr("data-format");
            var optionsDef = $(this).attr("data-format-options");
            var settings = null;
            if (optionsDef === undefined) {
                settings = {
                    noOptions: true
                };
            } else {
                eval("settings = " + optionsDef);
            }
            settings = $.extend(settings, $.formatOptionDefaults);

            return this.formatOptions(dataformat, settings);
        }
    });
})(jQuery);