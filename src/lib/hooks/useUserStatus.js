import {useEffect, useState} from "react";
import axios from "axios";
import useSWR from "swr";

export const statuses = {
    "1": "request",
    "2": "invite",
    null: null,
}

export default function useUserStatus({ projectid }) {
    const {data: membership, mutate: mutateMembersip} = useSWR('/api/membership/get/'+projectid)

    function updateUserStatus() {
        switch (membership?.userstatus) {
            case statuses["1"] :
                deleteMembershipRecord();
                break;
            case statuses["2"] :
                deleteMembershipRecord();
                break;
            default:
                sendInviteRequest();
        }
    }

    async function deleteMembershipRecord() {
        await mutateMembersip(await (async () => {
            return axios
                .post("/api/membership/delete/"+projectid)
                .then(() => statuses.null)
        })())
    }

    async function sendInviteRequest() {
        await mutateMembersip(await (async () => {
            return axios
                .post("/api/membership/post", { projectid })
                .then(() => statuses["1"])
        })())
    }

    return { status: membership?.userstatus, updateUserStatus }
}