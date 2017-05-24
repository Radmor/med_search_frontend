import { connect } from 'react-redux';

import LoadingModal from '../components/LoadingModal';


const mapStateToProps = (state) => {
    return {
        open: state.search.isFetching
    }
}

const LoadingModalContainer = connect(
    mapStateToProps
)(LoadingModal)

export default LoadingModalContainer;