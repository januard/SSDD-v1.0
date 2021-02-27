@php 

    $url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]/";
	
@endphp

<!DOCTYPE html>
<html lang="en" url="{{ $url }}">

	@include('admin.include.head')
	
	<body class="theme-light">
	
		@yield('content')
	
		<script>window.getAppDetails = {!! json_encode(['csrf_token' => csrf_token(), 'api_token' => Auth::user()->api_token ?? null]) !!};</script>
		<script src="{{ asset('js/admin/app.js') }}"></script>

    </body>
</html>