import React from 'react'
import NavbarContainer from '../../navbar/navbar_container'

class BusinessShow extends React.Component {

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render() {
        const { business } = this.props
        if (!business) return (<h1>Loading...</h1>)

        return (
            <div>
                <NavbarContainer />
                <div className="biz-show-container">
                    <div>
                        <p>{business.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BusinessShow