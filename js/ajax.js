$(document).ready(function () {
	$.ajax(
			'php/request_ajax_data.php',
			{
				type: "POST",
				dataType: "html",
				data: $('#formB').serialize(),
				success: function(data) {
					result = $.parseJSON(data);
					$('#').html(result.name);
				}
			}
		);

	$('#button').on("click", function (e) {
		e.preventDefault();
		$.ajax(
			'php/request_ajax_data.php',
			{
				type: "POST",
				dataType: "html",
				data: $('#form').serialize(),
				success: function(data) {
					result = $.parseJSON(data);
					$('#res_name').html(result.name);
					$('#res_phone').html(result.number);
				}
			}
		);
		return false;
	});
});

