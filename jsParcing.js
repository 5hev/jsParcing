<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Parcing</title>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
		<script type="text/javascript">
		function getValue()
		{
			$.ajax({
				url: 'https://m.avito.ru/i80652052/ekaterinburg/zapchasti_i_aksessuary?p=2&q=%D1%80%D0%B5%D0%BC%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%82',
				headers: {'X-Requested-With': 'XMLHttpRequest'},
				success: function (response, status, jqHRXobject) {
					$('.start').append(response);
          // $('.start').append($('article.b-item js-catalog-item-enum '));
				}
				});
		};
			
		$(document).ready(function(){  
			getValue();
        });
		</script>
	</head>
	<body>
	<div class="start"></div>
	<script type="text/javascript">
		// $( ".start" ).click(function() { $(".form").toggle(1000); });
		// $( "#url" ).blur(function() { Cookies.set('url', $("#url").val(), { expires: 7 }) });
	</script>
	</body>
</html>
