<!DOCTYPE html>
<html lang="en">
	<head>
        
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <title>Front End</title>

        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" crossorigin="anonymous" />    
		<link href="{{ asset('css/app.css') }}" rel="stylesheet" />
		
		<style>
			.home-page-banner {
				background: url('/images/banner/banner_1.jpg') no-repeat fixed center 100px / 100%;
				height: 456px;
				position: relative;
			}
			.banner-text {
				left: 50%;
				position: absolute;
				top: 50%;
				transform: translate(-50%, -50%);
				width: 100%;
				z-index: 1;
			}
			.overlay {
				background: rgba(0,0,0,.2);
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
			}
			.color-white {backdrop-color: #FFFFFF}
			.main {
				position: relative;
				margin: 0 auto;
				min-height: 50vh;
				transition: all 0.3s;
				width: 100%;
			}
			.main-body {
				position: absolute;
				z-index: 2;
				top: -30px;
				left: 0;
				width: 100%;
				-webkit-box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
				background-color: #fff;
				border-radius: 1.375em;
				box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
			}
			.txt-prmry {color: #115272;}
		</style>
        
	</head>
	<body>
		<nav class="fixed-top navbar navbar-expand-sm bg-dark navbar-dark" style="background-color: #115272!important;">
			<a class="navbar-brand" href="#">
				<img src="/images/logo/qc_logo.png" alt="logo">
			</a>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#"></a>
				</li>
			</ul>
		</nav>
		<div class="home-page-banner text-center">
			<div class="text-light banner-text">
				<br>
				<h3>WELCOME TO</h3>
				<h1>QC-S
					ERVICES.GOV.PH</h1>
			</div>
			<div class="overlay"></div>
		</div>

		

		<div class="container main mb-5 pb-5">
			<div class="main-body mb-5">
				<div class="container text-center" style="padding: 30px;">
					<h2>Services</h2>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-sm-4">
							<a href="javascript:void(0)">
								<div class="card mb-3">
									<div class="card-body text-center">
										<img src="https://via.placeholder.com/100x100" class="img-fluid rounded-circle mb-4">
										<h5 class="card-title txt-prmry">Service 1</h5>
									</div>
								</div>
							</a>
						</div>
						<div class="col-sm-4">
							<a href="javascript:void(0)">
								<div class="card mb-3">
									<div class="card-body text-center">
										<img src="https://via.placeholder.com/100x100" class="img-fluid rounded-circle mb-4">
										<h5 class="card-title txt-prmry">Service 2</h5>
									</div>
								</div>
							</a>
						</div>
						<div class="col-sm-4">
							<a href="javascript:void(0)">
								<div class="card mb-3">
									<div class="card-body text-center">
										<img src="https://via.placeholder.com/100x100" class="img-fluid rounded-circle mb-4">
										<h5 class="card-title txt-prmry">Service 3</h5>
									</div>
								</div>
							</a>
						</div>
						<div class="col-sm-4">
							<a href="javascript:void(0)">
								<div class="card mb-3">
									<div class="card-body text-center">
										<img src="https://via.placeholder.com/100x100" class="img-fluid rounded-circle mb-4">
										<h5 class="card-title txt-prmry">Service 3</h5>
									</div>
								</div>
							</a>
						</div>
						<div class="col-sm-4">
							<a href="javascript:void(0)">
								<div class="card mb-3">
									<div class="card-body text-center">
										<img src="https://via.placeholder.com/100x100" class="img-fluid rounded-circle mb-4">
										<h5 class="card-title txt-prmry">Service 3</h5>
									</div>
								</div>
							</a>
						</div>
						<div class="col-sm-4">
							<a href="javascript:void(0)">
								<div class="card mb-3">
									<div class="card-body text-center">
										<img src="https://via.placeholder.com/100x100" class="img-fluid rounded-circle mb-4">
										<h5 class="card-title txt-prmry">Service 3</h5>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

	</body>
</html>