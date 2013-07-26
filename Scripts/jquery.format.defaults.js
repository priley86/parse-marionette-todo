$.formatOptionDefaults = {
    onComplete: function (input) {
        input.removeClass("input-format-error")
        $("label[for='" + input.attr("id") + "']", input.closest("form")).removeClass("input-format-error");
    },
    onError: function (input, error) {
        $("label[for='" + input.attr("id") + "']", input.closest("form")).addClass("input-format-error");
        input.addClass("input-format-error");
        setTimeout(function () {
            input.focus();
        }, 0);
    }
};