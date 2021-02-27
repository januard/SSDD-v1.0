@php 

    $url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]/";
	
@endphp

<!DOCTYPE html>
<html lang="en" url="{{ $url }}">

	@include('spd.include.head')
	
	<body>
	
		@yield('content')
	
		<script src="{{ asset('js/spd/app.js') }}"></script>

    </body>
</html>