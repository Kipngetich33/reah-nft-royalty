// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (d3fd55fe)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc2 = stdlib.T_Null;
  
  
  const v54 = stdlib.protect(ctc0, interact.nftId, 'for buyer\'s interact field nftId');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc1, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v58, v59, v60], secs: v62, time: v61, didSend: v32, from: v57 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.buyNft(v54), {
    at: './index.rsh:47:24:application',
    fs: ['at ./index.rsh:45:18:application call to [unknown function] (defined at: ./index.rsh:45:22:function exp)'],
    msg: 'buyNft',
    who: 'buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v54],
    evt_cnt: 1,
    funcNum: 1,
    lct: v61,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:14:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v66], secs: v68, time: v67, didSend: v40, from: v65 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v66], secs: v68, time: v67, didSend: v40, from: v65 } = txn2;
  ;
  return;
  
  
  
  
  };
export async function creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  
  
  const v51 = stdlib.protect(ctc0, interact.metadata, 'for creator\'s interact field metadata');
  const v52 = stdlib.protect(ctc1, interact.price, 'for creator\'s interact field price');
  const v53 = stdlib.protect(ctc1, interact.royalty, 'for creator\'s interact field royalty');
  
  stdlib.protect(ctc2, await interact.mintNft(v51, v53), {
    at: './index.rsh:28:25:application',
    fs: ['at ./index.rsh:23:20:application call to [unknown function] (defined at: ./index.rsh:23:24:function exp)'],
    msg: 'mintNft',
    who: 'creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v51, v52, v53],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:16:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:16:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v58, v59, v60], secs: v62, time: v61, didSend: v32, from: v57 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v58, v59, v60], secs: v62, time: v61, didSend: v32, from: v57 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v66], secs: v68, time: v67, didSend: v40, from: v65 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA7ShkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACcjEkQjNAESRDQESSISTDQCEhFESTUFFzX/gATVFRkUNP8WULBCAEhIIjQBEkQ0BEkiEkw0AhIRREk1BUlJVwBANf+BQFs1/oFIWzX9gATzQzt+NP9QNP4WUDT9FlCwgaCNBogAYyM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v58",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v58",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516106d03803806106d0833981016040819052610022916101c6565b60008055436003556040805182518152602080840151805180518385015282015183850152908101516060830152820151608082015290517f3f162810a3d162d9571c01d99e36030354d71a8799c5273b71176843550b68569181900360a00190a1610090341560076100ce565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100c69260029201906100f7565b5050506102b5565b816100f35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101039061027a565b90600052602060002090601f016020900481019282610125576000855561016b565b82601f1061013e57805160ff191683800117855561016b565b8280016001018555821561016b579182015b8281111561016b578251825591602001919060010190610150565b5061017792915061017b565b5090565b5b80821115610177576000815560010161017c565b604080519081016001600160401b03811182821017156101c057634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360a08112156101d957600080fd5b6101e1610190565b83518152601f198201915060808212156101fa57600080fd5b604051606081016001600160401b038111828210171561022a57634e487b7160e01b600052604160045260246000fd5b604090815283121561023b57600080fd5b610243610190565b6020868101518252604080880151828401529183526060870151838201526080909601519082015293810193909352509092915050565b600181811c9082168061028e57607f821691505b602082108114156102af57634e487b7160e01b600052602260045260246000fd5b50919050565b61040c806102c46000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610303565b6100b8565b3480156100a157600080fd5b506100aa6101eb565b60405161006492919061031b565b6100c86001600054146009610288565b6100e2813515806100db57506001548235145b600a610288565b6000808055600280546100f490610378565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610378565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103ad565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101d134156008610288565b600080805560018190556101e7906002906102ad565b5050565b60006060600054600280805461020090610378565b80601f016020809104026020016040519081016040528092919081815260200182805461022c90610378565b80156102795780601f1061024e57610100808354040283529160200191610279565b820191906000526020600020905b81548152906001019060200180831161025c57829003601f168201915b50505050509050915091509091565b816101e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b990610378565b6000825580601f106102c9575050565b601f0160209004906000526020600020908101906102e791906102ea565b50565b5b808211156102ff57600081556001016102eb565b5090565b60006040828403121561031557600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034f57858101830151858201606001528201610333565b81811115610361576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038c57607f821691505b6020821081141561031557634e487b7160e01b600052602260045260246000fd5b6000602082840312156103bf57600080fd5b815180151581146103cf57600080fd5b939250505056fea2646970667358221220aa74c48bbc7c3ea64eacee8d7073faed2a6a56b51fd6e9a7e209c95f000ba66d64736f6c634300080c0033`,
  BytecodeLen: 1744,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:50:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "buyer": buyer,
  "creator": creator
  };
export const _APIs = {
  };
