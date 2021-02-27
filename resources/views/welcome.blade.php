<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <script crossorigin src="{{ asset('js/app.js') }}" defer></script>

        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    </head>
    <body class="theme-light">
        <!-- Checking -->
        <div class="wrapper">
			<div class="side-navigation" style="padding: 10px;">
                <div class="brand-content" style="">
                    <h2>Brand</h2>
                </div>
                <ul class="nav flex-column">
                    <li class="nav-item active">
                        <a class="nav-link" href="javascript:void(0)">
                            <i class="fas fa-heart icon"></i>
                            <span class="label">Link 1</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">
                            <i class="fas fa-heart icon"></i>
                            <span class="label">Link 2</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="javascript:void(0)">
                            <i class="fas fa-heart icon"></i>
                            <span class="label">Link 3</span>
                        </a>
                    </li>
                </ul>
            </div>
			<div class="main">
                <div class="container-fluid">
                    <div class="app-bar">
                        <button class="btn btn-prmry btn-icn action-button float-right raised-button">
                            <i class="fas fa-heart"></i>
                        </button>

                        <div class="action-button float-right"></div>
                    </div>
                    <div class="main-panel">
                        <div class="text-center pt-5">
                            <h1>Components</h1>
                        </div>
                        <div class="main-panel-body">
                            <section>
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Buttons</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="pt-3 pb-5">
                                            <label>Style</label>
                                            <p>
                                                <button type="button" class="btn btn-prmry">DEFAULT</button>
                                                <button type="button" class="btn btn-outln-prmry">OUTLINE</button>
                                                <button type="button" class="btn btn-prmry disabled">DISABLED</button>
                                                <button class="btn btn-prmry">
                                                    <i class="fas fa-heart"></i> WITH ICON
                                                </button>
                                                <button class="btn btn-prmry btn-icn">
                                                    <i class="fas fa-heart"></i>
                                                </button>
                                                <button type="button" class="btn btn-lnk">SIMPLE</button>
                                            </p>
                                            <br>
                                            <label>Size</label>
                                            <p>
                                                <button type="button" class="btn btn-prmry btn-sm">Small</button>
                                                <button type="button" class="btn btn-prmry">Default</button>
                                                <button type="button" class="btn btn-prmry btn-lg">Large</button>
                                            </p>
                                            <p>
                                                <button type="button" class="btn btn-prmry wd">Wide</button>
                                                <button type="button" class="btn btn-prmry wdr">Wider</button>
                                                <button type="button" class="btn btn-prmry wdst">Widest</button>
                                            </p>
                                            <p>
                                                <button type="button" class="btn btn-prmry blck">Block</button>
                                            </p>
                                            <br>
                                            <label>Color</label>
                                            <p>
                                                <button type="button" class="btn btn-prmry">Primary</button>
                                                <button type="button" class="btn btn-scndry">Secondary</button>
                                            </p>
                                        </div>
                                        <br>
                                    </div>
                                    <div class="col-lg-4">
                                        
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Inputs</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="pt-3 pb-5">
                                            <form>
                                                <fieldset>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="first-name">Default</label>
                                                                <div class="inpt-fld">
                                                                    <input type="text" class="form-control" id="first-name" placeholder="Enter first name">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <label for="last-name">With Icon</label>
                                                                <div class="inpt-fld lft wth-icn">
                                                                    <div class="input-group">
                                                                        <div class="input-group-prepend">
                                                                            <span class="input-group-text" id="last-name-addon1">
                                                                                <i class="fas fa-user"></i>
                                                                            </span>
                                                                        </div>
                                                                        <input type="text" class="form-control" id="last-name" placeholder="Enter last name" aria-label="Enter last name" aria-describedby="last-name-addon1">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="email">With Helper</label>
                                                        <div class="inpt-fld">
                                                            <input type="email" class="form-control" id="email" aria-describedby="email_help" placeholder="Enter email">
                                                        </div>
                                                        <small id="email_help" class="form-text hlpr text-muted">We'll never share your email with anyone else.</small>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <fieldset disabled="">
                                                                    <label class="control-label" for="disabledInput">Disabled</label>
                                                                    <div class="inpt-fld">
                                                                        <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input..." disabled="">
                                                                    </div>
                                                                </fieldset>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group">
                                                                <fieldset>
                                                                    <label class="control-label" for="readOnlyInput">Readonly</label>
                                                                    <div class="inpt-fld">
                                                                        <input class="form-control" id="readOnlyInput" type="text" placeholder="Readonly input..." readonly="">
                                                                    </div>
                                                                </fieldset>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="file-input">File Input</label>
                                                        <div class="inpt-fld">
                                                            <div class="input-group">
                                                                <div class="custom-file">
                                                                    <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                                                                    <input type="file" class="form-control custom-file-input" id="inputGroupFile02">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="message">Textarea</label>
                                                        <div class="inpt-fld">
                                                            <textarea class="form-control" id="message" rows="5"></textarea>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                        <br>
                                    </div>
                                    <div class="col-lg-4 offset-lg-1">
                                        <div class="pt-3 pb-5">
                                            <form class="bs-component">
                                                <label>Size</label>
                                                <div class="form-group">
                                                    <label class="col-form-label col-form-label-lg" for="large-input">Large</label>
                                                    <div class="inpt-fld">
                                                        <input class="form-control form-control-lg" type="text" placeholder="Large input" id="large-input">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-form-label" for="default-input">Default</label>
                                                    <div class="inpt-fld">
                                                        <input type="text" class="form-control" placeholder="Default input" id="default-input">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-form-label col-form-label-sm" for="small-input">Small</label>
                                                    <div class="inpt-fld">
                                                        <input class="form-control form-control-sm" type="text" placeholder="Small input" id="small-input">
                                                    </div>
                                                </div>
                                                <div class="form-group has-success">
                                                    <label class="form-control-label" for="inputValid">Valid Input</label>
                                                    <div class="inpt-fld is-vald">
                                                        <input type="text" value="correct value" class="form-control is-valid" id="inputValid">
                                                    </div>
                                                    <div class="valid-feedback">Success! You've done it.</div>
                                                </div>
                                                <div class="form-group has-danger">
                                                    <label class="form-control-label" for="inputInvalid">Invalid Input</label>
                                                    <div class="inpt-fld is-invld">
                                                        <input type="text" value="wrong value" class="form-control is-invalid" id="inputInvalid">
                                                    </div>
                                                    <div class="invalid-feedback">Sorry, that username's taken. Try another?</div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Sliders</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="pt-3 pb-5">
                                            <fieldset class="form-group">
                                                <label for="range">Default Range</label>
                                                <input type="range" class="custom-range" id="range">
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="col-lg-6"></div>
                                </div>
                            </section>
                            <section>
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Navigation</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="pt-3 pb-5">
                                            <h3>
                                                <small>Tabs on Card</small>
                                            </h3>
                                            <br>
                                            <div class="card card-nav-tabs">
                                                <div class="card-header card-header-primary">
                                                    <div class="nav-tabs-navigation">
                                                        <div class="nav-tabs-wrapper">
                                                            <ul class="border-0 nav nav-tabs" data-tabs="tabs">
                                                                <li class="nav-item">
                                                                    <a class="nav-link active" href="#profile" data-toggle="tab">Profile</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#messages" data-toggle="tab">Messages</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#settings" data-toggle="tab">Settings</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body ">
                                                    <div class="tab-content text-center">
                                                        <div class="tab-pane active" id="profile">
                                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                                                        </div>
                                                        <div class="tab-pane" id="messages">
                                                            <p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                                                        </div>
                                                        <div class="tab-pane" id="settings">
                                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="pt-3 pb-5">
                                            <h3>
                                                <small>Tabs on Plain Card</small>
                                            </h3>
                                            <br>
                                            <div class="card card-nav-tabs card-plain">
                                                <div class="card-header card-header-danger">
                                                    <div class="nav-tabs-navigation">
                                                        <div class="nav-tabs-wrapper">
                                                            <ul class="border-0 nav nav-tabs" data-tabs="tabs">
                                                                <li class="nav-item">
                                                                    <a class="nav-link active" href="#home" data-toggle="tab">Home</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#updates" data-toggle="tab">Updates</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#history" data-toggle="tab">History</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body ">
                                                    <div class="tab-content text-center">
                                                        <div class="tab-pane active" id="home">
                                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                                        </div>
                                                        <div class="tab-pane" id="updates">
                                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                                                        </div>
                                                        <div class="tab-pane" id="history">
                                                            <p> I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 col-md-8">
                                        <div class="pt-3 pb-5">
                                            <h3>
                                                <small>Pills on Top with Icon</small>
                                            </h3>
                                            <br>
                                            <ul class="nav nav-pills nav-pills-icons" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#dashboard-1" role="tab" data-toggle="tab"><i class="fas fa-chart-bar"></i><br>Dashboard</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#schedule-1" role="tab" data-toggle="tab"><i class="fas fa-calendar-alt"></i><br>Schedule</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#tasks-1" role="tab" data-toggle="tab"><i class="fas fa-tasks"></i><br>Tasks</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content tab-space p-3">
                                                <div class="tab-pane active" id="dashboard-1">
                                                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                                                    <br><br>
                                                    Dramatically visualize customer directed convergence without revolutionary ROI.
                                                </div>
                                                <div class="tab-pane" id="schedule-1">
                                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                                                    <br><br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
                                                </div>
                                                <div class="tab-pane" id="tasks-1">
                                                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                                                    <br><br>Dynamically innovate resource-leveling customer service for state of the art customer service.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12">
                                        <div class="pt-3 pb-5">
                                            <h3>
                                                <small>Pills on Side with Icon</small>
                                            </h3>
                                            <br>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <ul class="nav nav-pills nav-pills-icons flex-column" role="tablist">
                                                        <li class="nav-item">
                                                            <a class="nav-link active" href="#dashboard-2" role="tab" data-toggle="tab"><i class="fas fa-chart-bar"></i><br>Dashboard</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="#schedule-2" role="tab" data-toggle="tab"><i class="fas fa-calendar-alt"></i><br>Schedule</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="tab-content p-3">
                                                        <div class="tab-pane active" id="dashboard-2">
                                                            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                                                            <br><br>
                                                            Dramatically visualize customer directed convergence without revolutionary ROI.
                                                        </div>
                                                        <div class="tab-pane" id="schedule-2">
                                                            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                                                            <br><br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h2>Pagination</h2>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="pt-3 pb-5">
                                                    <ul class="pagination">
                                                        <li class="page-item">
                                                            <a href="javascript:void(0);" class="page-link">&lt;&lt;</a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a href="javascript:void(0);" class="page-link">1</a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a href="javascript:void(0);" class="page-link">2</a>
                                                        </li>
                                                        <li class="active page-item">
                                                            <a href="javascript:void(0);" class="page-link">3</a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a href="javascript:void(0);" class="page-link">4</a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a href="javascript:void(0);" class="page-link">5</a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a href="javascript:void(0);" class="page-link">&gt;&gt;</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h2>Badges</h2>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="pt-3 pb-5">
                                                    <span class="badge badge-pill badge-secondary">Default</span>
                                                    <span class="badge badge-pill badge-primary">Primary</span>
                                                    <span class="badge badge-pill badge-info">Info</span>
                                                    <span class="badge badge-pill badge-success">Success</span>
                                                    <span class="badge badge-pill badge-warning">Warning</span>
                                                    <span class="badge badge-pill badge-danger">Danger</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="container-fluid p-0">
                            <section>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="container">
                                            <h2>Navbar</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="pt-3 pb-5">
                                            <nav class="navbar navbar-inverse navbar-expand-md bg-prmry navbar-dark">
                                                <div class="container">
                                                    <a class="navbar-brand" href="#0">Logo</a>
                                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                                        <span class="navbar-toggler-icon"></span>
                                                    </button>
                                                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                                        <ul class="navbar-nav ml-auto">
                                                            <li class="nav-item">
                                                                <a href="javascript:void(0);" class="nav-link">Page 1</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="javascript:void(0);" class="nav-link">Page 2</a>
                                                            </li>
                                                            <li class="nav-item d-none d-sm-none d-md-block">
                                                                <button class="btn bg-light btn-icn ml-3" data-toggle="dropdown">
                                                                    <i class="fas fa-search"></i>
                                                                </button>
                                                                <div class="dropdown-menu">
                                                                    
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </nav>
                                            <br>
                                            <nav class="navbar navbar-inverse navbar-expand-md bg-prmry navbar-dark">
                                                <div class="container">
                                                    <a class="navbar-brand" href="#0">Logo</a>
                                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar1">
                                                        <span class="navbar-toggler-icon"></span>
                                                    </button>
                                                    <div class="collapse navbar-collapse" id="collapsibleNavbar1">
                                                        <ul class="navbar-nav ml-auto">
                                                            <li class="nav-item">
                                                                <a href="javascript:void(0);" class="nav-link">Page 1</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a href="javascript:void(0);" class="nav-link">Page 2</a>
                                                            </li>
                                                            <li class="d-none d-sm-none d-md-block nav-item">
                                                                <button class="btn bg-light btn-icn ml-3" data-toggle="dropdown">
                                                                    <i class="fas fa-envelope"></i>
                                                                </button>
                                                                <div class="dropdown-menu">
                                                                    
                                                                </div>
                                                            </li>
                                                            <li class="d-none d-sm-none d-md-block dropdown nav-item">
                                                                <a href="javascript:void(0);" class="profile-photo nav-link p-0 ml-3 mr-3" data-toggle="dropdown">
                                                                    <div class="profile-photo-small">
                                                                        <img src="https://via.placeholder.com/40x40" alt="Circle Image" class="rounded-circle img-fluid">
                                                                    </div>
                                                                </a>
                                                                <div class="dropdown-menu dropdown-menu-right">
                                                                    <h6 class="dropdown-header">Dropdown header</h6>
                                                                    <a href="javascript:void(0);" class="dropdown-item">Me</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item">Settings and other stuff</a>
                                                                    <a href="javascript:void(0);" class="dropdown-item">Sign out</a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                    <br>
                                </div>
                            </section>
                        </div>
                        <div class="main-panel-body">
                            <section>
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Alerts</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="pt-3 pb-5">
                                            <div class="alert alert-dismissible alert-warning">
                                                <button type="button" class="close" data-dismiss="alert">×</button>
                                                <h4 class="alert-heading">Warning!</h4>
                                                <p class="mb-0">A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses. <a href="https://www.google.com/search?q=what+is+a+sentence" class="alert-link">Definition</a>.</p>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="alert alert-dismissible alert-danger">
                                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                                        A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses. <a href="https://www.google.com/search?q=what+is+a+sentence" class="alert-link">Definition</a>.
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="alert alert-dismissible alert-secondary">
                                                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                                                        A set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses. <a href="https://www.google.com/search?q=what+is+a+sentence" class="alert-link">Definition</a>.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Modals</h2>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="bs-component">
                                                    <div class="modal">
                                                        <div class="modal-dialog" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title">Modal title</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">×</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <p>Modal body text goes here.</p>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">DISCARD</button>
                                                                    <button type="button" class="btn btn-prmry">SAVE</button>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <div class="col-12">
                                        <h2>Cards</h2>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="pt-3 pb-5">
                                                    <h3>
                                                        <small>Default Card</small>
                                                    </h3>
                                                    <br>
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h4 class="card-title">Card Title</h4>
                                                            <p class="card-text">Card body text goes here.</p>
                                                            <br>
                                                            <br>
                                                            <a href="javascript:void(0)" class="btn btn-prmry">ACTION 1</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="pt-3 pb-5">
                                                    <h3>
                                                        <small>Profile Card</small>
                                                    </h3>
                                                    <br>
                                                    <div class="card pb-4 pt-4">
                                                        <div class="card-body text-center">
                                                            <img src="https://via.placeholder.com/100x100" class="img-fluid rounded-circle mb-4">
                                                            <h5 class="card-title">Title</h5>
                                                            <p class="card-text">Sub-title</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="pt-3 pb-5">
                                                    <h3>
                                                        <small>Card with Image Header</small>
                                                    </h3>
                                                    <br>
                                                    <div class="card with-image-header">
                                                        <img src="https://via.placeholder.com/500x200" class="card-image-header img-fluid">
                                                        <div class="card-body">
                                                            <h4 class="card-title">Card Title</h4>
                                                            <p class="card-text">Card body text goes here.</p>
                                                            <br>
                                                            <a href="javascript:void(0)" class="btn btn-prmry">ACTION 1</a>
                                                            <a href="javascript:void(0)" class="btn btn-outln-prmry">ACTION 2</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
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
