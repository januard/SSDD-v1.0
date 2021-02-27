<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Test Front End</title>
        
        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        
	</head>
	<body>
		<div class="jumbotron text-center">
			<h1>Test Front End</h1>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-sm-2"></div>
				<div class="col-sm-8">
					<div class="row">
                        <div class="col-sm-6">
                            <a href="/test/vdd_services">
                                <div class="card mb-3 p-5 text-center">
                                    <div class="card-body">VDD Services</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6">
                            <a href="javascript:void(0)" class="not-available">
                                <div class="card mb-3 p-5 text-center">
                                    <div class="card-body">Services 2</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <a href="javascript:void(0)" class="not-available">
                                <div class="card mb-3 p-5 text-center">
                                    <div class="card-body">Services 3</div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6">
                            <a href="javascript:void(0)" class="not-available">
                                <div class="card mb-3 p-5 text-center">
                                    <div class="card-body">Services 4</div>
                                </div>
                            </a>
                        </div>
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