import React from "react";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Badge from '@material-ui/core/Badge';

function Notification({users}) {
    return (<>
        <a data-original-title="Notification" data-popover-content="#contentnotif"
            data-toggle="popover" data-placement="bottom"  tabIndex="0" role="button" 
            data-trigger="focus" style={{ outline: "none" }}>
            {users.length > 0 && <Badge color="secondary" badgeContent={3}>
                <NotificationsNoneIcon style={{ color: "white" }} />
            </Badge>}
        </a>
        <div id="contentnotif" className="hide">
            <a href="#" className="list-items flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-0">Protective services... </h5>
                    <small className="text-mute">3 days ago</small>
                </div>
                <p className="mb-1">Your submitting all requirements are approved </p>
                <small className="text-muted">click here to continue to next step</small>
            </a>            
            <hr/>
            <a href="#" className="list-items flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-0">Protective services... </h5>
                    <small className="text-mute">3 days ago</small>
                </div>
                <p className="mb-1">Your submitting all requirements are approved </p>
                <small className="text-muted">click here to continue to next step</small>
            </a>
            <hr/>
            <a href="#" className="list-items flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-0">Protective services... </h5>
                    <small className="text-mute">3 days ago</small>
                </div>
                <p className="mb-0">Your submitting all requirements are approved </p>
                <small className="text-muted">click here to continue to next step</small>
            </a>
            <hr/>
            <div className="d-flex justify-content-center">
                <a href="#">See more notification</a>
            </div>
        </div>
    </>);
}

export default Notification;
