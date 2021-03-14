import React from 'react'
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        axios.gt('api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            Landing Page
        </div>
    )
}

export default LandingPage
