import { ReactElement } from "react";
import { Wrapper } from "./styled";

interface Props {
    icon: ReactElement,
    selected?: boolean
}

function CircleIcon({icon, selected = false}: Props) {
    return (
        <Wrapper $selected={selected}>
            {icon}
        </Wrapper>
    )
}

export default CircleIcon;