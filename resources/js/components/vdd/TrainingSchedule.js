import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default class TrainingSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            training_schedules: [],
        }
        axios.defaults.headers.common = {'X-CSRF-TOKEN': getAppDetails.csrf_token, 'X-Requested-With': 'XMLHttpRequest', 'Authorization': 'Bearer '+ getAppDetails.api_token,};
    }
    componentDidMount() {
        
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        const trainingScheduleActionBar = () => {
            return (
                <div className="d-inline-block">
                    <button className="btn btn-prmry btn-icn ml-1" onClick={
                        () => {
                            openModal('#modal_new_training_schedule', 'new')
                        }
                    }>
                        <i className="d-block d-sm-block d-md-none fas fa-plus icn"></i>
                        <span className="d-none d-sm-none d-md-block pl-3 pr-3">New Schedule</span>
                    </button>
                </div>
            );
        }
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
        return (
            <div>
                <div className="panel">
                    <div className="main-panel-body">
                        <div className="d-flex mb-4">
                            <h4 className="card-title d-inline-block flex-grow">Training Schedule</h4>
                            <span className="card-body-action-bar-top">
                                {trainingScheduleActionBar()}
                            </span>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10 mb-5">
                                <FullCalendar
                                    initialView="dayGridMonth"
                                    headerToolbar={{
                                        left: "prev, next",
                                        center: "title",
                                        right: "dayGridMonth, timeGridWeek, timeGridDay"
                                    }}
                                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                                    dateClick={
                                        (arg) => {
                                            console.log(arg)
                                            openModal('#modal_new_training_schedule', 'new')
                                        }
                                    }
                                    eventClick={
                                        (info) => {
                                            console.log(info)
                                            alert('Event: ' + info.event.title);
                                            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
                                            alert('View: ' + info.view.type);
                                            //info.el.style.borderColor = 'red';
                                        }
                                    }
                                    events={this.state.training_schedules}
                                />
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}