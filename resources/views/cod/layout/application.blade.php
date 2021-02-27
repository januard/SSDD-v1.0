@php 
    $url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]/";
@endphp

<!DOCTYPE html>
<html lang="en" url="{{ $url }}">
	@include('cod.include.head')
	<body class="theme-light">
		@yield('content')
		<script src="{{ asset('js/cod/backend/app.js') }}"></script>
    </body>
</html>