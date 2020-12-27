import React,{useState,useEffect} from 'react'

function Error(props) {

    const [errMsg, setErr] = useState('')
    useEffect(() => {
        setErr(props.match.params.errmsg);
        setTimeout(()=>{
            props.history.push('/main')
        },4000)
    })
    
    return (
        <div className="errorPage">
            <h1>{errMsg.substr(1)}</h1>
            <h3>Redirecting to Main page</h3>
        </div>
    )
}

export default Error
