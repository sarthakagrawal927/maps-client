import { REACT_QUERY_KEYS } from '../helpers/constants';
import GetComponent from './common/getComponent';

// Only one network request is made in this case -> cached
const ReactQueryTest = () => {
    return <>
        <GetComponent getReqHandler={REACT_QUERY_KEYS.TEST} />
        <GetComponent getReqHandler={REACT_QUERY_KEYS.TEST} />
        <GetComponent getReqHandler={REACT_QUERY_KEYS.TEST} />
    </>
};

export default ReactQueryTest;