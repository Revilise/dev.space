import {useEffect, useState} from "react";
import axios from "axios";

export const statuses = {
    request: "request",
    invite: "invite",
    null: null,
}

export default function useUserStatus({init_status = null, projectid }) {
    const [status, setStatus] = useState(init_status);

    function updateUserStatus() {
        switch (statuses[status]) {
            case statuses.request :
                deleteMembershipRecord();
                break;
            case statuses.invite :
                deleteMembershipRecord();
                break;
            case statuses.null :
                sendInviteRequest();
                break;
            default: throw new Error("unexpected status: " + status);
        }
    }

    function deleteMembershipRecord() {
        axios
            .post("/api/membership/delete/", { projectid })
            .then(() => setStatus(statuses.null))
    }

    function sendInviteRequest() {
        axios
            .post("/api/membership/post", { projectid })
            .then(() => setStatus(statuses.request))
    }

    useEffect(() => {}, [status, projectid])

    return { status, updateUserStatus }
}