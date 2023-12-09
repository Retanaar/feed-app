import CircleIcon from "../circleIcon";
import { FeedLineWrapper } from './styled';
import { getTypeIcon } from '../utils';

export enum FeedType {
    MESSAGE = 'message',
    PHONE = 'phone',
    COFFEE = 'coffee',
    BEER = 'beer',
    MEETING = 'meeting',
}

interface Props {
    setFeedType: (type: FeedType) => void;
    selectedType: FeedType;
}

function FeedTypes({ setFeedType, selectedType }: Props){
    return (
        <FeedLineWrapper>
            <div onClick={() => setFeedType(FeedType.MESSAGE)} data-testid='message-icon'>
                <CircleIcon icon={getTypeIcon(FeedType.MESSAGE)} selected={selectedType === FeedType.MESSAGE} />
            </div>
            <div onClick={() => setFeedType(FeedType.PHONE)} data-testid='phone-icon'>
                <CircleIcon icon={getTypeIcon(FeedType.PHONE)} selected={selectedType === FeedType.PHONE} />
            </div>
            <div onClick={() => setFeedType(FeedType.COFFEE)} data-testid='coffee-icon'>
                <CircleIcon icon={getTypeIcon(FeedType.COFFEE)} selected={selectedType === FeedType.COFFEE} />
            </div>
            <div onClick={() => setFeedType(FeedType.BEER)} data-testid='beer-icon'>
                <CircleIcon icon={getTypeIcon(FeedType.BEER)} selected={selectedType === FeedType.BEER} />
            </div>
            <div onClick={() => setFeedType(FeedType.MEETING)} data-testid='meeting-icon'>
                <CircleIcon icon={getTypeIcon(FeedType.MEETING)} selected={selectedType === FeedType.MEETING} />
            </div>
        </FeedLineWrapper>
    )
}

export default FeedTypes;