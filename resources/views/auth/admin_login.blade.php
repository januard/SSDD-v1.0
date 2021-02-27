@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card card-auth">
                <div class="card-body" style="padding: 3rem;">
                    <div class="text-center">
                        <h3>
                            <b>{{ __('Sign In') }}</b>
                        </h3>
                    </div>
                    <div class="pb-2 pt-2"></div>
                    <form method="POST" action="{{ route('login') }}">
                        
                        @csrf
                        
                        <div class="form-group">
                            <div class="border-0 inpt-fld lft wth-icn @error('email') is-invld @enderror">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="addon_1">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" id="email" placeholder="Email" name="email" aria-label="Email" aria-describedby="addon_1">
                                </div>
                            </div>

                            @error('email')

                                <small class="form-text hlpr text-danger">{{ $message }}</small>

                            @enderror

                        </div>

                        <div class="form-group">
                            <div class="border-0 inpt-fld lft wth-icn @error('password') is-invld @enderror">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="addon_2">
                                            <i class="fas fa-lock"></i>
                                        </span>
                                    </div>
                                    <input type="password" class="form-control" id="password" name="password" placeholder="Password" aria-label="Password" aria-describedby="addon_2" required autocomplete="current-password">
                                </div>
                            </div>

                            @if(Route::has('password.request'))

                                <a class="btn btn-lnk float-right" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                                <div class="clearfix"></div>

                            @endif

                            @error('password')

                                <small class="form-text hlpr text-danger">{{ $message }}</small>

                            @enderror

                        </div>

                        <div class="form-group">
                            <div class="text-center">
                                <button type="submit" class="btn btn-prmry wdr">
                                    {{ __('Login') }}
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="text-center">
                                <p>Or Sign in with social platforms</p>
                                <button class="btn btn-outln-prmry btn-icn ml-2 mr-2">
                                    <i class="fab fa-facebook-f"></i>
                                </button>
                                <button class="btn btn-outln-prmry btn-icn ml-2 mr-2">
                                    <i class="fab fa-twitter"></i>
                                </button>
                                <button class="btn btn-outln-prmry btn-icn ml-2 mr-2">
                                    <i class="fab fa-google"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
