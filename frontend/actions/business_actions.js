import *  BusinessAPIUtil from '../util/business_api_util'

export const RECEIVE_BUSINESS = `RECEIVE_BUSINESS`
export const RECEIVE_BUSINESSES = `RECEIVE_BUSINESSES`

const receiveBusiness = business => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
}

const receiveBusinesses = businesses => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
}

export const fetchBusinesses = () => dispatch => {
    return BusinessAPIUtil.fetchBusinesses()
        .then(businesses => dispatch(receivebusinesses(business)))
}

export const fetchBusinesses = (businessId) => dispatch => {
    return BusinessAPIUtil.fetchBusiness(businessId)
        .then(business => dispatch(receiveBusiness(business)))
}