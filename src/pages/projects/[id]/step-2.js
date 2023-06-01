import StepLayout from "../../../components/step/StepLayout";
import Button from "../../../components/button/Button";
import useProjectStep from "../../../lib/hooks/useProjectStep";
import {useRouter} from "next/router";
import css from "../../../styles/pages/ProjectStep.module.scss";
import {useState} from "react";
import Link from "next/link";

export default function Step2Page() {
    const router = useRouter();
    const [isEnable, setIsEnable] = useState(false);

    const {NextStep, PrevStep} = useProjectStep({
        projectid: router.query.id,
        initStep: 2
    });

    return (
        <StepLayout projectId={router.query.id}>
            <StepLayout.Main>

                <h2>Файлов загружено: 0</h2>
                <Link href={`/projects/${router.query.id}/file-store`}>
                    Перейти к хранилищу файлов
                </Link>

                <div className={css.buttons}>
                    <Button onClick={PrevStep}>
                        <Button.Label>Предыдуший</Button.Label>
                    </Button>
                    <Button isEnable={isEnable} onClick={NextStep}>
                        <Button.Label>Следующий этап</Button.Label>
                    </Button>
                </div>
            </StepLayout.Main>
            <StepLayout.SideTip>
                <span>Этап 2</span>
                <h1>Исследование источников</h1>
                <p>
                    На данном этапе вам необходимо исследовать предложенные источники и загрузить данные в хранилище
                    проекта.
                </p>

                <ul>
                    <li>
                        <Link href={"https://earthexplorer.usgs.gov/"}>
                            https://earthexplorer.usgs.gov/
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://glovis.usgs.gov/app?fullscreen=0;"}>
                            https://glovis.usgs.gov/app?fullscreen=0;
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://scihub.copernicus.eu/dhus/"}>
                            https://scihub.copernicus.eu/dhus/
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.openstreetmap.org/"}>
                            https://www.openstreetmap.org/
                        </Link>
                    </li>
                    <li>
                        <Link href={"http://www.forestforum.ru/fires.php."}>
                            http://www.forestforum.ru/fires.php.
                        </Link>
                    </li>
                </ul>
            </StepLayout.SideTip>
        </StepLayout>
    )
}