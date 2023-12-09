import { Paper } from "@mui/material";
import { FeedItem } from "../../../hooks/useFeeds";
import { Caption, Name, Notes, SubmenuWrapper, Wrapper } from "./styled";
import Submenu from "./submenu";

interface Props {
    feed: FeedItem;
    removeFeed: (timestamp: number) => void;
}

function FeedContent({feed, removeFeed}: Props) {
    return (
        <Paper elevation={0}>
            <Wrapper>
                <Caption><Name>{feed.owner}</Name> had a {feed.feedType} with <Name>{feed.contact}</Name></Caption>
                <Notes>{feed.note}</Notes>
                <SubmenuWrapper><Submenu handler={() => removeFeed(feed.timestamp)} /></SubmenuWrapper>
            </Wrapper>
        </Paper>
    )
}

export default FeedContent;