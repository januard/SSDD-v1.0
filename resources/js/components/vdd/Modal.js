import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class Modal extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            programs: [], 
            program_details: [
                {'id': 1, 'label': 'Program Number', 'name': 'program_id'},
                {'id': 2, 'label': 'Code', 'name': 'code'},
                {'id': 3, 'label': 'Program', 'name': 'program'},
                {'id': 4, 'label': 'Description', 'name': 'description'},
                {'id': 5, 'label': 'Status', 'name': 'status'},
                {'id': 6, 'label': 'Created By', 'name': 'created_by'},
                {'id': 7, 'label': 'Date Created', 'name': 'created_at'},
                {'id': 8, 'label': 'Last Update', 'name': 'updated_at'},
            ], 
            services_applications: [], 
            appointments: [],
            certifications: [],
            assitance_request: [],
            certificates: [],
            assistances: [],
            assistance_details: [
                {'id': 1, 'label': 'Assistance Number', 'name': 'assistance_id'},
                {'id': 2, 'label': 'Name', 'name': 'first_name'},
                {'id': 3, 'label': 'Contact Number', 'name': 'contact_number'},
                {'id': 4, 'label': 'Email', 'name': 'email'},
                {'id': 5, 'label': 'Approved By', 'name': 'approved_by'},
                {'id': 6, 'label': 'Created By', 'name': 'created_by'},
            ], 
            referrals: [],
            referral_details: [
                {'id': 1, 'label': 'Referral Number', 'name': 'referral_id'},
                {'id': 2, 'label': 'Name', 'name': 'code'},
                {'id': 3, 'label': 'Contact Number', 'name': 'program'},
                {'id': 4, 'label': 'Email', 'name': 'description'},
                {'id': 5, 'label': 'Referred By', 'name': 'status'},
                {'id': 6, 'label': 'Status', 'name': 'created_by'},
                {'id': 6, 'label': 'CV', 'name': 'created_by'},
                {'id': 7, 'label': 'Created By', 'name': 'created_at'},
                {'id': 7, 'label': 'Date Created', 'name': 'created_at'},
                {'id': 8, 'label': 'Last Update', 'name': 'updated_at'},
            ], 
            office_hours: [
                {'id': 1, 'label': '06:00 AM', 'value': '06:00:00'},
                {'id': 2, 'label': '07:00 AM', 'value': '07:00:00'},
                {'id': 3, 'label': '08:00 AM', 'value': '08:00:00'},
                {'id': 4, 'label': '09:00 AM', 'value': '09:00:00'},
                {'id': 5, 'label': '10:00 AM', 'value': '10:00:00'},
                {'id': 6, 'label': '11:00 AM', 'value': '11:00:00'},
                {'id': 7, 'label': '12:00 PM', 'value': '12:00:00'},
                {'id': 8, 'label': '01:00 PM', 'value': '13:00:00'},
                {'id': 9, 'label': '02:00 PM', 'value': '14:00:00'},
                {'id': 10, 'label': '03:00 PM', 'value': '15:00:00'},
                {'id': 11, 'label': '04:00 PM', 'value': '16:00:00'},
                {'id': 12, 'label': '05:00 PM', 'value': '17:00:00'},
            ],
            services_applications_for_appointment: [],
            start_date: new Date(),
            end_date: new Date(),
        };

        this.createProgram = this.createProgram.bind(this);
        this.createServicesApplication = this.createServicesApplication.bind(this);
        this.createAppointment = this.createAppointment.bind(this);
        this.createCertification = this.createCertification.bind(this);
        this.createAssistanceRequest = this.createAssistanceRequest.bind(this);
        this.createReferral = this.createReferral.bind(this);

        this.updateProgram = this.updateProgram.bind(this);
        this.updateServicesApplication = this.updateServicesApplication.bind(this);
        this.updateAppointment = this.updateAppointment.bind(this);
        this.updateCertification = this.updateCertification.bind(this);
        this.updateAssistanceRequest = this.updateAssistanceRequest.bind(this);
        this.updateReferral = this.updateReferral.bind(this);

        this.onRefreshPrograms = this.onRefreshPrograms.bind(this);

        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};

    }

    componentDidMount() {
        axios.get('/api/vdd/program/show_programs')
        .then(response => {
            this.setState({
                programs: response.data.data,
            });
        });
        axios.get('/api/vdd/services_application/show_services_applications?status=2')
        .then(response => {
            this.setState({
                services_applications_for_appointment: response.data.data,
            });
        });
    }

    createProgram(event) {
        event.preventDefault();
        let form = document.getElementById('form_new_program');
        let data = new FormData(form);
        axios.post('/api/vdd/program/store_program', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_new_program').modal('hide');
                let programs = {};
                this.onRefreshPrograms(programs);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    createServicesApplication(event) {
        event.preventDefault();
        let form = document.getElementById('form_new_services_application');
        let data = new FormData(form);
        axios.post('/api/vdd/services_application/store_services_application', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_new_services_application').modal('hide');
                let services_applications = {};
                this.updateComponentSApplication(services_applications);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    createAppointment(event) {
        event.preventDefault();
        let form = document.getElementById('form_new_appointment');
        let data = new FormData(form);
        axios.post('/api/vdd/appointment/store_appointment', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_new_appointment').modal('hide');
                let appointments = {};
                this.updateComponentCalendar(appointments);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    createCertification(event) {
        event.preventDefault();
        let form = document.getElementById('form_new_certification');
        let data = new FormData(form);
        axios.post('/api/vdd/training/certification/store_certificate', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_new_certification').modal('hide');
                let certificates = {};
                this.updateComponentCertificate(certificates);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    createAssistanceRequest(event) {
        event.preventDefault();
        let form = document.getElementById('form_new_assistance_request');
        let data = new FormData(form);
        axios.post('/api/vdd/assistance/store_assistance', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_new_assistance_request').modal('hide');
                let assistances = {};
                this.updateComponentAssistance(assistances);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    createReferral(event) {
        event.preventDefault();
        let form = document.getElementById('form_new_referral');
        let data = new FormData(form);
        axios.post('/api/vdd/referral/store_referral', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_new_referral').modal('hide');
                let referrals = {};
                this.updateComponentReferral(referrals);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    updateProgram(event) {
        event.preventDefault();
        let form = document.getElementById('form_edit_program');
        let data = new FormData(form);
        axios.post('/api/vdd/program/update_program', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_edit_program').modal('hide');
                let programs = {};
                this.onRefreshPrograms(programs);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    updateServicesApplication(event) {
        event.preventDefault();
        let form = document.getElementById('form_edit_service_application');
        let data = new FormData(form);
        if(!$('#form_edit_service_application #view_remarks').val()) {
            alert('Please add remarks');
        }
        else {
            axios.post('/api/vdd/services_application/update_services_application', data)
            .then(response => {
                alert(response.data.data.message);
                if(response.data.error_count == 0) {
                    $('#modal_view_services_application_details').modal('hide');
                    if(response.data.data.status == 1) {
                        let modal_reference = '#modal_new_appointment';
                        let modal_content_container = $(document).find(modal_reference +' .modal-content');
                        modal_content_container.find('.content').addClass('d-none');
                        modal_content_container.find('.modal-loader').removeClass('d-none');
                        $(modal_reference).modal('show');
                        modal_content_container.find('.modal-loader').addClass('d-none');
                        modal_content_container.find('.content').removeClass('d-none');
                        $('#modal_new_appointment').find('#appointment_sevices_application').val(response.data.data.services_application_id);
                        $('#modal_new_appointment').find('#appointment_sevices_application_value').val(response.data.data.services_application);
                    }
                    let services_applications = {};
                    this.updateComponentSApplication(services_applications);
                }
            }).catch(error => {
                console.log(error.data);
            });
        }
    }

    updateAppointment(event) {
        event.preventDefault();
        let form = document.getElementById('form_edit_appointment');
        let data = new FormData(form);
        axios.post('/api/vdd/training/appointment/update_appointment', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_edit_appointment').modal('hide');
                let appointments = {};
                //this.onRefreshReferral(appointments);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    updateCertification(event) {
        event.preventDefault();
        let form = document.getElementById('form_edit_certification');
        let data = new FormData(form);
        axios.post('/api/vdd/training/certification/update_certification', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_edit_certification').modal('hide');
                let certifications = {};
                //this.onRefreshReferral(certifications);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    updateAssistanceRequest(event) {
        event.preventDefault();
        let form = document.getElementById('form_edit_assistance');
        let data = new FormData(form);
        axios.post('/api/vdd/assistance/update_assistance', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_edit_assistance').modal('hide');
                let assistances = {};
                //this.onRefreshReferral(assistances);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    updateReferral(event) {
        event.preventDefault();
        let form = document.getElementById('form_edit_referral');
        let data = new FormData(form);
        axios.post('/api/vdd/referral/update_referral', data)
        .then(response => {
            alert(response.data.data.message);
            if(response.data.error_count == 0) {
                $('#modal_edit_referral').modal('hide');
                let programs = {};
                //this.onRefreshReferral(referrals);
            }
        }).catch(error => {
            console.log(error.data);
        });
    }

    onRefreshPrograms(programs) {
        this.props.handleRefreshPrograms(programs);
    }

    updateComponentSApplication(services_applications) {
        this.props.handleUpdateComponentSApplication(services_applications);
    }

    updateComponentCalendar(appointments) {
        this.props.handleUpdateComponentCalendar(appointments);
    }

    updateComponentCertificate(certificates) {
        this.props.handleUpdateComponentCertificate(certificates);
    }

    updateComponentAssistance(assistances) {
        this.props.handleUpdateComponentAssistance(assistances);
    }

    updateComponentReferral(referrals) {
        this.props.handleUpdateComponentReferral(referrals);
    }

    render() {

        const openModal = (modal_reference, type) => {
            let modal_content_container = $(document).find(modal_reference +' .modal-content');
            modal_content_container.find('.content').addClass('d-none');
            modal_content_container.find('.modal-loader').removeClass('d-none');
            $(modal_reference).modal('show');
            if(type == 'new') {
                setTimeout(function() {
                    modal_content_container.find('.modal-loader').addClass('d-none');
                    modal_content_container.find('.content').removeClass('d-none');
                }, 1500);
            }
        }

        let modal_loader = <div className="modal-loader d-none">
            <div className="modal-header">
                <div className="header-loader"></div>
                <h4 className="modal-title">&nbsp;</h4>
            </div>
            <div className="modal-body">
                <div className="loader-body-1"></div>
                <div className="loader-body-2"></div>
                <div className="loader-body-3"></div>
                <div className="loader-body-4"></div>
                <div className="clearfix"></div>
            </div>
        </div>

        return(
            <div>
                <div className="modal" id="modal_new_program">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.createProgram} id="form_new_program">
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <h4 className="modal-title">New Program</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="program" className="form-control" placeholder="Program Title" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="code" className="form-control" placeholder="Program Code" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <textarea name="description" className="form-control" rows="5" placeholder="Description"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-prmry">Create</button>
                                    </div>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
                <div className="modal" id="modal_new_services_application">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.createServicesApplication} id="form_new_services_application">
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <h4 className="modal-title">New Services Application</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                    <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="first_name" className="form-control" placeholder="First Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="middle_name" className="form-control" placeholder="Middle Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="last_name" className="form-control" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="contact_number" className="form-control" placeholder="Contact Number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="hidden" name="program" id="services_application_program" value="" readOnly />
                                                            <input type="text" name="program_value" placeholder="Program" className="form-control" id="services_application_program_value" aria-label="Program" aria-describedby="services-application-program-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text dropdown" id="services-application-program-addon1">
                                                                    <a href="#" data-toggle="dropdown">
                                                                        <i className="fas fa-caret-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        {
                                                                            this.state.programs.map(
                                                                                program => {
                                                                                    return(
                                                                                        <a key={program.program_id} href="#" className="dropdown-item program-selection" onClick={
                                                                                            () => {
                                                                                                document.getElementById('services_application_program').value = program.program_id;
                                                                                                document.getElementById('services_application_program_value').value = program.program;
                                                                                            }
                                                                                        } data-code={program.code}>{program.program}</a>
                                                                                    )
                                                                                }
                                                                            )
                                                                        }
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <textarea name="message" className="form-control" rows="5" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-prmry">Create</button>
                                    </div>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
                <div className="modal" id="modal_new_certificate">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.createCertification} id="form_new_certification">
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <h4 className="modal-title">New Certificate</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="first_name" className="form-control" placeholder="Firstname" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="middle_name" className="form-control" placeholder="Middlename" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="last_name" className="form-control" placeholder="Lastname" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="hidden" name="program" id="certification_program" value="" readOnly />
                                                            <input type="text" name="program_value" placeholder="Program" className="form-control" id="certification_program_value" aria-label="Program" aria-describedby="certification-program-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text dropdown" id="certification-program-addon1">
                                                                    <a href="#" data-toggle="dropdown">
                                                                        <i className="fas fa-caret-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        {
                                                                            this.state.programs.map(
                                                                                program => {
                                                                                    return(
                                                                                        <a key={program.program_id} href="#" className="dropdown-item" onClick={
                                                                                            () => {
                                                                                                document.getElementById('certification_program').value = program.program_id;
                                                                                                document.getElementById('certification_program_value').value = program.program;
                                                                                            }
                                                                                        }>{program.program}</a>
                                                                                    )
                                                                                }
                                                                            )
                                                                        }
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="hidden" name="certificate_template" id="certificate-template" value="0" readOnly />
                                                            <input type="text" name="certificate_template_value" placeholder="Certificate Template" className="form-control" id="certificate_template_value" aria-label="Role" aria-describedby="certificate-template-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text dropdown" id="certificate-template-addon1">
                                                                    <a href="#" data-toggle="dropdown">
                                                                        <i className="fas fa-caret-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right w-100">
                                                                        
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="date_of_certification" className="form-control" placeholder="Date Certification YYYY/MM/DD" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="other_1" className="form-control" placeholder="Other 1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="other_2" className="form-control" placeholder="Other 2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <textarea name="description" className="form-control" rows="5" placeholder="Description"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-prmry">Create</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal" id="modal_new_assistance_request">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.createAssistanceRequest} id="form_new_assistance_request">
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <h4 className="modal-title">New Assistance Request</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="first_name" className="form-control" placeholder="First Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="middle_name" className="form-control" placeholder="Middle Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="last_name" className="form-control" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="contact_number" className="form-control" placeholder="Contact Number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="hidden" name="program" id="assistance_program" value="" readOnly />
                                                            <input type="text" name="program_value" placeholder="Program" className="form-control" id="assistance_program_value" aria-label="Program" aria-describedby="assistance-program-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text dropdown" id="assistance-program-addon1">
                                                                    <a href="#" data-toggle="dropdown">
                                                                        <i className="fas fa-caret-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        {
                                                                            this.state.programs.map(
                                                                                program => {
                                                                                    return(
                                                                                        <a key={program.program_id} href="#" className="dropdown-item program-selection" onClick={
                                                                                            () => {
                                                                                                document.getElementById('assistance_program').value = program.program_id;
                                                                                                document.getElementById('assistance_program_value').value = program.program;
                                                                                            }
                                                                                        } data-code={program.code}>{program.program}</a>
                                                                                    )
                                                                                }
                                                                            )
                                                                        }
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <div className="input-group">
                                                            <div className="custom-file">
                                                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                                                <input type="file" name="attachment" className="form-control custom-file-input" id="inputGroupFile01" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-prmry">Create</button>
                                    </div>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
                <div className="modal" id="modal_new_referral">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.createReferral} id="form_new_referral">
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <h4 className="modal-title">New Referral</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="first_name" className="form-control" placeholder="Firstname" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="middle_name" className="form-control" placeholder="Middlename" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="last_name" className="form-control" placeholder="Lastname" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="contact_number" className="form-control" placeholder="Contact Number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="email" name="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="referred_by" className="form-control" placeholder="Referred By" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <div className="input-group">
                                                            <div className="custom-file">
                                                                <label className="custom-file-label">Choose file</label>
                                                                <input type="file" name="cv" className="form-control custom-file-input" id="inputGroupFile02" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-prmry">Create</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal" id="modal_new_appointment">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.createAppointment} id="form_new_appointment">
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <h4 className="modal-title">New Appointment</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="appointment" className="form-control" placeholder="Event Title" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <textarea name="description" className="form-control" rows="3" placeholder="Description"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="hidden" name="type" id="event_type" readOnly />
                                                            <input type="text" name="type_value" placeholder="Type" className="form-control" id="event_type_value" value="Services Event" aria-label="Program" aria-describedby="event-type-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text dropdown" id="event-type-addon1">
                                                                    <a href="#" data-toggle="dropdown">
                                                                        <i className="fas fa-caret-down"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right">
                                                                        <a href="#" className="dropdown-item event-type-selection" onClick={
                                                                            () => {
                                                                                document.getElementById('event_type').value = 'Services Event';
                                                                                document.getElementById('event_type_value').value = 'Services Event';
                                                                                document.getElementById('appointment_services_application_event').style.display = 'block';
                                                                            }
                                                                        }>Services Event</a>
                                                                        <a href="#" className="dropdown-item event-type-selection" onClick={
                                                                            () => {
                                                                                document.getElementById('event_type').value = 'Special Event';
                                                                                document.getElementById('event_type_value').value = 'Special Event';
                                                                                document.getElementById('appointment_services_application_event').style.display = 'none';
                                                                            }
                                                                        }>Special Event</a>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" id="appointment_services_application_event">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld rght wth-icn">
                                                        <div className="input-group">
                                                            <input type="hidden" name="sevices_application_id" id="appointment_sevices_application" readOnly />
                                                            <input type="text" name="sevices_application" placeholder="Find Services Application" className="form-control" id="appointment_sevices_application_value" aria-label="Program" aria-describedby="appointment-sevices-addon1" readOnly />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text" id="appointment-sevices-addon1">
                                                                    <a href="#" onClick={
                                                                        () => {
                                                                            openModal('#modal_search_services_application', 'new')
                                                                        }
                                                                    }>
                                                                        <i className="fas fa-search"></i>
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <DatePicker 
                                                            selected={this.state.start_date} 
                                                            dateFormat='yyyy-MM-dd'
                                                            name='start_date'
                                                            placeholderText='Start Date'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <DatePicker 
                                                            selected={this.state.start_date} 
                                                            dateFormat='yyyy-MM-dd'
                                                            name='end_date'
                                                            placeholderText='End Date'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-prmry">Create</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="modal" id="modal_edit_program">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.updateProgram} id="form_edit_program">
                            <input type="hidden" name="program_id" id="edit_program_id" />
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Edit Program</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="program" className="form-control" id="edit_program" placeholder="Program Title" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <input type="text" name="code" className="form-control" id="edit_program_code" placeholder="Program Code" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <textarea name="description" className="form-control" id="edit_program_description" rows="5" placeholder="Description"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-prmry">Update</button>
                                    </div>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
                
                <div className="modal" id="modal_view_program_details">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {modal_loader}
                            <div className="content d-none">
                                <div className="modal-header">
                                    <h4 className="modal-title">Program Details</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    {
                                        this.state.program_details.map(
                                            (details, index) => {
                                                return(
                                                    <div key={index} className="row">
                                                        <div className="col-lg-4 col-md-5 col-4">
                                                            <label>{details.label}</label>
                                                        </div>
                                                        <div className="col-lg-8 col-md-7 col-8">
                                                            <label id="view_program_id" id={`view_`+ details.name}></label>
                                                        </div>
                                                    </div>                
                                                )
                                            }
                                        )
                                    }
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-prmry" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" id="modal_view_services_application_details">
                    <div className="modal-dialog modal-lg">
                        <form onSubmit={this.updateServicesApplication} id="form_edit_service_application">
                            <input type="hidden" name="services_application_id" id="view_services_application_id" />
                            <input type="hidden" name="status" id="view_services_application_status" value="1" />
                            <div className="modal-content">
                                {modal_loader}
                                <div className="content d-none">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Services Application Details</h4>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <label className="ellipsis ellipsis-1">Client Name: <b><span id="view_name"></span></b></label>
                                            </div>
                                            <div className="col-md-5">
                                                <label className="ellipsis ellipsis-1">Date Created: <b><span id="view_created_at"></span></b></label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label className="ellipsis ellipsis-1">Program: <b><span id="view_program"></span></b></label>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-12">
                                                <label>Message: </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <b>
                                                    <label id="view_message"></label>
                                                </b>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="inpt-fld">
                                                        <textarea name="remarks" className="form-control" id="view_remarks" rows="5" placeholder="Remarks"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-scndry" onClick={
                                            () => {
                                                $('#view_services_application_status').val(3)
                                            }
                                        }>Decline Application</button>
                                        <button type="submit" className="btn btn-prmry" onClick={
                                            () => {
                                                $('#view_services_application_status').val(2)
                                            }
                                        }>New Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal" id="modal_view_certificate">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            {modal_loader}
                            <div className="content d-none">
                                <div className="modal-header">
                                    <h4 className="modal-title">Certification</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="border border-radius-default">
                                        <div className="border border-radius-default">
                                            <br /><br /><br /><br /><br /><br /><br />
                                            <br /><br /><br /><br /><br /><br /><br />
                                            <br /><br /><br /><br />
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-prmry" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" id="modal_view_assistance_details">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {modal_loader}
                            <div className="content d-none">
                                <div className="modal-header">
                                    <h4 className="modal-title">Assistance Details</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    {
                                        this.state.assistance_details.map(
                                            (details, index) => {
                                                return(
                                                    <div key={index} className="row">
                                                        <div className="col-lg-4 col-md-5 col-4">
                                                            <label>{details.label}</label>
                                                        </div>
                                                        <div className="col-lg-8 col-md-7 col-8">
                                                            <label id="view_program_id" id={`view_`+ details.name}></label>
                                                        </div>
                                                    </div>                
                                                )
                                            }
                                        )
                                    }
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-prmry" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" id="modal_view_referral_details">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {modal_loader}
                            <div className="content d-none">
                                <div className="modal-header">
                                    <h4 className="modal-title">Referral Details</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    {
                                        this.state.referral_details.map(
                                            (details, index) => {
                                                return(
                                                    <div key={index} className="row">
                                                        <div className="col-lg-4 col-md-5 col-4">
                                                            <label>{details.label}</label>
                                                        </div>
                                                        <div className="col-lg-8 col-md-7 col-8">
                                                            <label id="view_program_id" id={`view_`+ details.name}></label>
                                                        </div>
                                                    </div>                
                                                )
                                            }
                                        )
                                    }
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-prmry" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal" id="modal_edit_certificate">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {modal_loader}
                            <div className="content d-none">
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit Certificate</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="inpt-fld">
                                                    <input type="text" className="form-control" placeholder="Firstname" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="inpt-fld">
                                                    <input type="text" className="form-control" placeholder="Lastname" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <div className="inpt-fld">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-prmry" data-dismiss="modal">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal" id="modal_remove_certificate">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {modal_loader}
                            <div className="content d-none">
                                <div className="modal-header">
                                    <h4 className="modal-title">Remove Certificate</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure do you want to remove this certificate?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn" data-dismiss="modal">DISCARD</button>
                                    <button type="button" className="btn btn-scndry" data-dismiss="modal">REMOVE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="modal" id="modal_search_services_application">
                    <div className="modal-dialog modal-xl">
                        <input type="hidden" id="appointment_selected_application" />
                        <input type="hidden" id="appointment_selected_application_value" />
                        <div className="modal-content">
                            {modal_loader}
                            <div className="content d-none">
                                <div className="modal-header">
                                    <h4 className="modal-title">Search Services Application</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <div className="inpt-fld rght wth-icn">
                                                    <div className="input-group">
                                                        <input type="hidden" name="sevices_application_id" id="search_appointment_sa" readOnly />
                                                        <input type="text" name="sevices_application" placeholder="Find Services Application" className="form-control" id="search_appointment_sa_value" aria-label="Program" aria-describedby="search-appointment-sevices-addon1" readOnly />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text" id="search-appointment-sevices-addon1">
                                                                <a href="#" className="">
                                                                    <i className="fas fa-search"></i>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Client Name</th>
                                                            <th>Program</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.state.services_applications_for_appointment.map(
                                                                (sa_for_appointment, index) => {
                                                                    return(
                                                                        <tr key={index}>
                                                                            <td className="width-px-150">
                                                                                <button className="btn btn-outln-prmry btn-sm appointment-services-application-select" data-id={sa_for_appointment.services_application_id} data={sa_for_appointment.name +`, `+ sa_for_appointment.program}>
                                                                                    <span>Select</span>
                                                                                </button>
                                                                            </td>
                                                                            <td>{sa_for_appointment.name}</td>
                                                                            <td>{sa_for_appointment.program}</td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="float-right"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-prmry" onClick={
                                        () => {

                                            if($('#appointment_selected_application').val() == '') {

                                                alert('Please select services application');

                                            }
                                            else {

                                                $('#modal_search_services_application').modal('hide');
                                                $('#appointment_sevices_application_value').val($('#appointment_selected_application_value').val());
                                                $('#appointment_sevices_application').val($('#appointment_selected_application').val());

                                            }
                                            
                                        }
                                    }>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );

    }

}