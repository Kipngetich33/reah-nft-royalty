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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const map0_ctc = ctc2;
  
  
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v51 = stdlib.protect(ctc3, interact.nftId, 'for buyer\'s interact field nftId');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc4, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v55, v56], secs: v58, time: v57, didSend: v30, from: v54 } = txn1;
  ;
  stdlib.protect(ctc0, await interact.buyNft(v51), {
    at: './index.rsh:43:24:application',
    fs: ['at ./index.rsh:41:18:application call to [unknown function] (defined at: ./index.rsh:41:22:function exp)'],
    msg: 'buyNft',
    who: 'buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v51],
    evt_cnt: 1,
    funcNum: 1,
    lct: v57,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:14:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v62], secs: v64, time: v63, didSend: v38, from: v61 } = txn2;
      
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
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v62], secs: v64, time: v63, didSend: v38, from: v61 } = txn2;
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc4 = stdlib.T_UInt;
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v49 = stdlib.protect(ctc3, interact.metadata, 'for creator\'s interact field metadata');
  const v50 = stdlib.protect(ctc4, interact.price, 'for creator\'s interact field price');
  
  stdlib.protect(ctc0, await interact.mintNft(v49, v50), {
    at: './index.rsh:26:25:application',
    fs: ['at ./index.rsh:22:20:application call to [unknown function] (defined at: ./index.rsh:22:24:function exp)'],
    msg: 'mintNft',
    who: 'creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v49, v50],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:16:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:16:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v55, v56], secs: v58, time: v57, didSend: v30, from: v54 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v55, v56], secs: v58, time: v57, didSend: v30, from: v54 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v62], secs: v64, time: v63, didSend: v38, from: v61 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA9ihkSSJbNQGBCFs1AjEZIxJBAAwxAIABAIEhr2ZCAMA2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAAnIxJEIzQBEkQ0BEkiEkw0AhIRREk1BRc1/4AE1RUZFDT/FlCwQgA+SCI0ARJENARJIhJMNAISEURJNQVJVwBANf+BQFs1/oAEG9//SzT/UDT+FlCwgaCNBogAYyM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 33,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
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
                "internalType": "struct T2",
                "name": "v55",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v56",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                "internalType": "struct T2",
                "name": "v55",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v56",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
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
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
  Bytecode: `0x6080604052604051610868380380610868833981016040819052610022916101c8565b60008055436003556040517f31dba8026bd6ebcad250c6087885e29fd7d64c77f9cb011f4ddb98276b4a29039061007e908390815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a1610092341560076100d0565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100c89260029201906100f9565b505050610282565b816100f55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461010590610247565b90600052602060002090601f016020900481019282610127576000855561016d565b82601f1061014057805160ff191683800117855561016d565b8280016001018555821561016d579182015b8281111561016d578251825591602001919060010190610152565b5061017992915061017d565b5090565b5b80821115610179576000815560010161017e565b604080519081016001600160401b03811182821017156101c257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156101db57600080fd5b6101e3610192565b83518152601f198201915060608212156101fc57600080fd5b610204610192565b604083121561021257600080fd5b61021a610192565b60208681015182526040870151818301529082526060909501518186015293810193909352509092915050565b600181811c9082168061025b57607f821691505b6020821081141561027c57634e487b7160e01b600052602260045260246000fd5b50919050565b6105d7806102916000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780633bc5b7bf1461007857806383230757146100a5578063873779a1146100ba578063ab53f2c6146100cd57005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b50610098610093366004610442565b6100f0565b60405161006f9190610488565b3480156100b157600080fd5b50600154610065565b6100526100c83660046104d5565b61011c565b3480156100d957600080fd5b506100e261024f565b60405161006f9291906104ed565b6040805160608101825260008082526020820181905291810191909152610116826102ec565b92915050565b61012c60016000541460096103c7565b6101468135158061013f57506001548235145b600a6103c7565b6000808055600280546101589061054a565b80601f01602080910402602001604051908101604052809291908181526020018280546101849061054a565b80156101d15780601f106101a6576101008083540402835291602001916101d1565b820191906000526020600020905b8154815290600101906020018083116101b457829003601f168201915b50505050508060200190518101906101e9919061057f565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a1610235341560086103c7565b6000808055600181905561024b906002906103ec565b5050565b6000606060005460028080546102649061054a565b80601f01602080910402602001604051908101604052809291908181526020018280546102909061054a565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b50505050509050915091509091565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff16600181111561033857610338610472565b14156103b8576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561037957610379610472565b600181111561038a5761038a610472565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b60008082526020820152919050565b8161024b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546103f89061054a565b6000825580601f10610408575050565b601f0160209004906000526020600020908101906104269190610429565b50565b5b8082111561043e576000815560010161042a565b5090565b60006020828403121561045457600080fd5b81356001600160a01b038116811461046b57600080fd5b9392505050565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106104ad57634e487b7160e01b600052602160045260246000fd5b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b6000604082840312156104e757600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561052157858101830151858201606001528201610505565b81811115610533576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061055e57607f821691505b602082108114156104e757634e487b7160e01b600052602260045260246000fd5b60006020828403121561059157600080fd5b8151801515811461046b57600080fdfea2646970667358221220aaf681acff2db8c83a7715a1429bd891250416c9f632a0ade469d92192a0723064736f6c634300080c0033`,
  BytecodeLen: 2152,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:46:5:after expr stmt',
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
