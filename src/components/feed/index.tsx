import { Paper, TextField, Button } from "@mui/material";
import FeedRow from "./FeedRow";
import { ActionBlock } from "./styled";
import FeedTypes, { FeedType } from "./feedTypes";
import { useState } from "react";
import ListIcon from '@mui/icons-material/List';
import CircleIcon from "./circleIcon";
import useFeeds from "../../hooks/useFeeds";
import { getDaysFromNow, getTypeIcon } from "./utils";
import FeedContent from "./feedContent";

interface FeedsProps {
    owner: string;
    contactName: string;
}

function Feeds({ owner, contactName }: FeedsProps){
    const [feedType, setFeedType] = useState(FeedType.MESSAGE)
    const [note, updateNote] = useState('');
    const {feeds, saveFeed, removeFeed} = useFeeds();

    function save() {
        saveFeed({
            owner,
            contact: contactName,
            feedType: feedType,
            note
        });
        updateNote('');
    }
    

    return (
    <>
        <FeedRow icon={<CircleIcon icon={<ListIcon />} />} >
                <Paper elevation={0}>
                    <TextField 
                        multiline 
                        rows={2} 
                        sx={{width: '100%'}}
                        inputProps={{style: {fontSize: '12px'}}} 
                        value={note} 
                        onChange={(e) => updateNote(e.target.value)}
                        placeholder={`Add note about ${contactName}`}
                        />
                    <ActionBlock>
                        <FeedTypes selectedType={feedType} setFeedType={setFeedType} />
                        <Button variant="contained" size="small" color="secondary" onClick={save}>
                            Submit
                        </Button>
                    </ActionBlock>
                </Paper>
        </FeedRow>
        {feeds.map(row => (
            <FeedRow 
                key={row.timestamp} 
                icon={<CircleIcon icon={getTypeIcon(row.feedType)}/>}
                info={getDaysFromNow(row.timestamp) + 'd'}
                >
                <FeedContent feed={row} removeFeed={removeFeed} />
            </FeedRow>
        ))}
        </>)
}

export default Feeds;