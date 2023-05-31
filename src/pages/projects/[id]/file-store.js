import ProjectLayout from "../../../components/project/ProjectLayout";
import {useRouter} from "next/router";
import Search from "../../../components/search/Search";
import {useEffect, useState} from "react";
import FilesContainer from "../../../components/files-container/FilesContainer";
import FileLoaderAPI from "../../../features/file-loader/FileLoaderAPI";
import axios from "axios";
import useFiles from "../../../lib/hooks/useFiles";

export default function FileStorePage() {
    const router = useRouter();

    const {files, reload} = useFiles(router.query.id);

    function SearchHandle(text) {
        //query
        //setFiles
    }

    return (
        <ProjectLayout projectId={router.query.id}>
            <Search onSearch={SearchHandle} />
            <FileLoaderAPI reload={reload} />
            <FilesContainer files={files} />
        </ProjectLayout>
    )
}