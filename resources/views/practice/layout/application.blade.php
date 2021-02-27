@php 

    $url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]/";
	
@endphp

<!DOCTYPE html>
<html lang="en" url="{{ $url }}">

	@include('practice.include.head')
	
	<body>
	
		@yield('content')
	
		<script src="{{ asset('js/practice/app.js') }}"></script>

    </body>
</html>