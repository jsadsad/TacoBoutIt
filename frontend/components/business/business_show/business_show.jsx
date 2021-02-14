import React from 'react'
import NavbarContainer from '../../navbar/navbar_container'

class BusinessShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render() {
        return (
            <div>
                <NavbarContainer />
                <div>
                    This is the business show page
                </div>
            </div>
        )
    }
}

export default BusinessShow