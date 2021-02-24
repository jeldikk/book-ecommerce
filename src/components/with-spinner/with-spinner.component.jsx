import {Spinner} from "react-bootstrap"

import "./with-spinner.styles.scss"

function withSpinner(ComponentToBeRendered){
    return ({isLoading, ...otherProps}) => {
        if(isLoading){
            return (
                <div className="spinner-container">
                    <Spinner animation="border" variant="primary" />
                </div>
            )
        }
        else{
            return <ComponentToBeRendered {...otherProps} />
        }
    }
}

export default withSpinner