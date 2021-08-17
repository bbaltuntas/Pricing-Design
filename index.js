var switchStatus = false;
$("#togBtn").on('change', function () {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');
        console.log(switchStatus)
        $("#basic").text("$199.99")
        $("#prof").text("$249.99")
        $("#master").text("$399.99")
    } else {
        switchStatus = $(this).is(':checked');
        console.log(switchStatus)
        $("#basic").text("$19.99")
        $("#prof").text("$24.99")
        $("#master").text("$39.99")
    }
});