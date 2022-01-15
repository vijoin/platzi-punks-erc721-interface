import Web3 from 'web3';
import { InjectedConnector } from '@web-react/injected-connector';

const connector = new InjectedConnector({ supportdChainIds: [
    4 // Rinkeby
] })

function getLibrary(provider) {
    return new Web3(provider)
}

export { getLibrary };