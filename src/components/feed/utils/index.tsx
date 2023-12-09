import { FeedType } from "../feedTypes"
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import PersonIcon from '@mui/icons-material/Person';

export const getTypeIcon = (type: FeedType) => {
    switch (type) {
        case FeedType.MESSAGE: return <MapsUgcIcon />;
        case FeedType.PHONE: return <LocalPhoneIcon />;
        case FeedType.BEER: return <SportsBarIcon />;
        case FeedType.COFFEE: return <LocalCafeIcon />;
        case FeedType.MEETING: return <PersonIcon />;
    }
}

export const getDaysFromNow = (timestamp: number) => {
    const date = new Date();
    const diff = date.getTime() - timestamp;
    return Math.floor(diff / (24 * 60 * 60 * 1000))
}