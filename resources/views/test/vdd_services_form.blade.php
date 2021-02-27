<!DOCTYPE html>
<html lang="en">
	<head>
        <title>Test Services Application Form</title>
        
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        
	</head>
	<body>
		<div class="jumbotron text-center">
			<h1>Test Services Application Form</h1>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-sm-2"></div>
				<div class="col-sm-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-5 text-center">
                                <h4>{{ $program['program'] }} - Application Form</h4>
                            </div>
                            <form id="vdd_services_form">
                                <div class="mb-2">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="first_name">First Name</label>
                                                <input type="text" class="form-control first_name" name="first_name">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="middle_name">Middle Name</label>
                                                <input type="text" class="form-control middle_name" name="middle_name">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="last_name">Last Name</label>
                                                <input type="text" class="form-control last_name" name="last_name">
                                            </div> 
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="contact_number">Contact Number</label>
                                                <input type="text" class="form-control contact_number" name="contact_number">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="email">Email</label>
                                                <input type="email" class="form-control email" name="email">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="message">Message</label>
                                                <textarea class="form-control" rows="2" name="message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <button type="button" class="btn btn-primary" id="vdd_services_form_submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
				</div>
				<div class="col-sm-2"></div>
			</div>
        </div>
        
        <script>
            $(function() {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr("content"), 
                    }
                });
                $(document).on('submit', '#vdd_services_form', function(event) {
                    event.preventDefault();
                });
                $(document).on('click', '#vdd_services_form_submit', function() {
                    $.ajax({
                        type: 'post', 
                        url: '/test/services/services_form/submit', 
                        data: $('#vdd_services_form').serialize(), 
                        success: function(response) {
                            if(response['error_count'] == 0) {
                                $('#vdd_services_form').trigger('reset');
                            }
                            alert(response['data']['message']);
                        },
                        error: function(response) {
                            console.log(response);
                        }
                    });
                });
            });
        </script>

	</body>
</html>