import { connect } from 'react-redux';

import TermsWeights from '../components/TermsWeights';


const mapStateToProps = (state) => {
    return {
        open:true
    }
}

const TermsWeightsContainer = connect(
    mapStateToProps
)(TermsWeights);

export default TermsWeightsContainer;