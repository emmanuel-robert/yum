import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#bababa',
        windowWidth: 300,
        canvasWidth: 384.058562476831,
        windowHeight: 530,
    },
});
