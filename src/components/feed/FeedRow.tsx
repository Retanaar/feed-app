import React, { ReactElement } from 'react'
import { ComponentCell, FeedRowWrapper, IconCell, VerticalLine, IconWrapper, Info } from './styled';

interface Props {
    icon: ReactElement,
    children: ReactElement,
    info?: string,
}

const FeedRow = ({icon, children, info = ""}: Props) => (
    <FeedRowWrapper>
        <IconCell><Info>{info}</Info><VerticalLine /><IconWrapper>{icon}</IconWrapper></IconCell>
        <ComponentCell>
            {children}
        </ComponentCell>
    </FeedRowWrapper>
)

export default FeedRow;