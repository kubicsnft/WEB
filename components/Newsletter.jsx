import { useState } from "react"
import axios from "axios"
import { FormattedMessage } from "react-intl"


export default function Newsletters(props) {
    // Button subcribe styles
    const style = {
        color: props.color,
        style: '  butt '
    }
    // ---------------------

    const [email, setEmail] = useState("")
    const [state, setState] = useState("IDLE")
    const [errorMessage, setErrorMessage] = useState(null)

    const subscribe = async () => {
        setState("LOADING")
        setErrorMessage(null)
        try {
            const response = await axios.post("/api/newsletter", { email })
            setState("SUCCESS")
        } catch (e) {
            setErrorMessage(e.response.data.error)
            setState("ERROR")
        }
    }

    return (
        <div className="flex flex-col items-center w-full">

            <p className="text.md md:text-xl text-center">
                <FormattedMessage
                    id='app.text3'
                    defaultMessage='JOIN OUR NEWSLETTERS'
                />
            </p>
            <div className="flex flex-col items-center justify-center w-7/12 mt-2 md:w-4/12 lg:flex-row">
                <input
                    className="w-full px-4 py-1 mb-2 mr-3 leading-tight text-gray-700 bg-white border rounded appearance-none lg:mb-0 lg:w-2/3 border-primary focus:outline-none focus:border-gray-600 "
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* <button
                    className={`lg:ml-2 w-full lg:w-1/3 shadow bg-brand2  text-center text-white font-bold border  rounded  bg-[#7098b7] hover:text-[#E1B649] transition hover:-translate-y-1 hover:scale-105 ease-in-out hover:shadow-xl  duration-300${state === "LOADING" ? "button-gradient-loading" : ""
                        }`}
                    type="button"
                    disabled={state === "LOADING"}
                    onClick={subscribe}
                >
                    <FormattedMessage
                        id='app.button'
                        defaultMessage='To Subcribe'
                    />
                </button> */}
                <button
                    className={`${style.color}${style.style}`}
                    type="button"
                    disabled={state === "LOADING"}
                    onClick={subscribe}>
                    <p className="">
                        Subscribe
                    </p>
                    <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </button>
            </div>
            <div className="flex justify-center text-sm text-center">
                {state === "ERROR" && <p className="mt-2 text-red-600 ">{errorMessage}</p>}
                {state === "SUCCESS" && <p className="w-1/2 mt-2 text-green-600">Success!</p>}
            </div>
        </div>
    )
}
