@php 

    $url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]/";
	
@endphp

<!DOCTYPE html>
<html lang="en" url="{{ $url }}">

	@include('vdd.include.head')
	
	<body class="theme-light">
	
		@yield('content')
	
		<script>
			window.getAppDetails = {!! json_encode(['csrf_token' => csrf_token(), 'api_token' => Auth::user()->api_token ?? null]) !!};
			window.getUserDetails = {!! json_encode(['user_name' => Auth::user()->first_name .' '. Auth::user()->middle_name .' '. Auth::user()->last_name ?? null, 'role' => Auth::user()->account_type ?? null]) !!};
		</script>
		<script src="{{ asset('js/vdd/app.js') }}"></script>

    </body>
</html>