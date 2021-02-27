<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Test VDD Services</title>
        
        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        
	</head>
	<body>
		<div class="jumbotron text-center">
			<h1>Test VDD Services</h1>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-sm-2"></div>
				<div class="col-sm-8">
                    <div class="list-group">
                        @foreach($programs as $program)
                            <a href="/test/vdd_services/services_form/{{ $program['program_id'] }}" class="list-group-item list-group-item-action">{{ $program['program'] }}</a>
                        @endforeach
                    </div>
				</div>
				<div class="col-sm-2"></div>
			</div>
        </div>
        
        <script>
            $(function() {
                $(document).on('click', '.not-available', function() {
                    alert('This services is not available this time');
                });
            });
        </script>

	</body>
</html>