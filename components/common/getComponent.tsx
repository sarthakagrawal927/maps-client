// PURPOSE : TESTING GET APIs
import PropTypes, { InferProps } from 'prop-types';
import { useQuery } from 'react-query';
import { JSONTree } from 'react-json-tree';

const GetComponentPropTypes = {
    getReqHandler: PropTypes.shape({
        key: PropTypes.string.isRequired,
        handler: PropTypes.func.isRequired
    }).isRequired
}

const GetComponent = ({ getReqHandler }: InferProps<typeof GetComponentPropTypes>) => {
    const { isLoading, error, data } = useQuery(getReqHandler.key, getReqHandler.handler);

    if (isLoading) return <>Loading...</>
    if (error) return <>{`ERROR: ${JSON.stringify(error)} `}</>

    return <JSONTree data={data} />
};

GetComponent.propTypes = GetComponentPropTypes

export default GetComponent;