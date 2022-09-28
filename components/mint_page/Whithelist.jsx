import { ethers } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import kubicsWhitelist from "../../artifacts/kubicsWhitelist.json";
import Swal from 'sweetalert2'
import { MovingSquareLoader } from 'react-loaders-kit'
import { FormattedMessage } from "react-intl"

export default function Whitelist() {



  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [signer, setSigner] = useState(undefined);

  const contractAddress = "0x9B399A856B0016Cf91c60aaAE195B33738874C2B";

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }


  async function addToWhitelist() {

    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(contractAddress, kubicsWhitelist, signer);
      try {
        setLoading(true)
        const result = await contract.addAddressToWhitelist();
        await result.wait(1);
        Swal.fire({
          position: 'center',
          icon: 'success',
          iconColor: '#7094b1',
          title: 'Great! You have joined the whitelist!',
          showConfirmButton: false,
          timer: 2500
        })
        setLoading(false)
        setIsWhitelisted(true)
      } catch (err) {
        setLoading(false)

        if (err.code != 4001) {
          if (err.error.data.originalError.data == 0x57657b77) {
            Swal.fire({
              position: 'center',
              icon: 'warning',
              iconColor: '#7094b1',
              title: 'Address already whitelisted!',
              showConfirmButton: false,
              timer: 2500
            })
            setIsWhitelisted(true)
          }
          if (err.error.data.originalError.data == 0xfa6ef231) {
            Swal.fire({
              position: 'center',
              icon: 'warning',
              iconColor: '#7094b1',
              title: 'Whitelist closed!',
              showConfirmButton: false,
              timer: 2500
            })
          }
          if (err.error.data.originalError.data == 0xf236ce7a) {

            Swal.fire({
              position: 'center',
              icon: 'warning',
              iconColor: '#7094b1',
              title: 'Whithelist limit reached',
              showConfirmButton: false,
              timer: 2500
            })
          }
        } else {
          console.log(err)
        }
      }
    } else {
      console.log("Please install MetaMask");
      setIsWhitelisted(false)
    }
  }
  // ===================     Loader     ===================
  const [loading, setLoading] = useState(false);

  const loaderProps = {
    loading,
    size: 35,
    duration: 1,
    colors: ['#7094b1', '#E1B649']
  }

  function buttonLoading() {
    if (loading)
      return (
        <div className="flex flex-col items-center justify-center text-center">
          <MovingSquareLoader   {...loaderProps} />
          <div className="mt-3">LOADING ...</div>
        </div>
      )
    else {
      return (
        <div className="flex flex-col items-center bg-[#ffffff8a] p-5 border rounded-lg shadow-lg sm:w-[30rem]">
          <div>
            <FormattedMessage
              id='wl.connected'
              defaultMessage='Connected! Make sure you are on the ETH Chain'
            />
          </div>
          <button className="mt-4 button learn-more" onClick={() => addToWhitelist()}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text" translate="no">
              <FormattedMessage
                id='wl.join'
                defaultMessage='JOIN OUR WHITELIST'
              />
            </span>
          </button>
        </div>
      )
    }
  }
  // ========================================================
  return (
    <div className="flex">
      {hasMetamask ? (
        isConnected ? ("") : (
          <div className="flex flex-col bg-[#ffffff8a] items-center justify-center p-5 rounded-lg shadow-xl sm:w-[30rem] ">
            <div className="mb-4">
              <FormattedMessage
                id='wl.metamask'
                defaultMessage='Connect with Metamask to join our Whitelist!'
              />
            </div>
            <div className="flex flex-row items-center justify-center w-full">
              <button
                className=' buttMeta'
                type="button"
                onClick={() => connect()}
              >
                <p className="">
                  Connect
                </p>
                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="w-6 h-6 " xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                </svg>
                <Image
                  className="ml-4"
                  src='/MetaMask.png'
                  width='30'
                  height='30'
                  alt="metamask"
                />

              </button>

            </div>
            {/* </button> */}
          </div>
        )
      ) : (
        "Please install metamask"
      )}
      <div>
        {isConnected ? (
          isWhitelisted ? (
            <div>
              <div className="p-2 text-green-400 border shadow rounded-xl">
                <FormattedMessage
                  id='wl.already'
                  defaultMessage='Already whitelisted!'
                />
              </div>
            </div>) : (
            buttonLoading()
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}