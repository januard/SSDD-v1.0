$(function() {
    $('[data-toggle="popover"]').popover({
        container: "body",
        html: true,
        content: function() {
            return $($(this).data("popover-content"))
                .clone(true)
                .removeClass("hide");
        }
    });
});