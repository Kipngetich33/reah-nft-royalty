// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '59'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Object({
    creator: ctc0,
    metadata: ctc1,
    owner: ctc0,
    price: ctc2,
    royalty: ctc2
    });
  const ctc4 = stdlib.T_Null;
  
  
  const v86 = stdlib.protect(ctc3, interact.nft, 'for buyer\'s interact field nft');
  const v90 = v86.price;
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v36, from: v95 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v86],
    evt_cnt: 1,
    funcNum: 1,
    lct: v97,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v90, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v109], secs: v111, time: v110, didSend: v57, from: v108 } = txn2;
      
      const v112 = v109.price;
      sim_r.txns.push({
        amt: v112,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v116 = v109.owner;
      sim_r.txns.push({
        amt: v112,
        kind: 'from',
        to: v116,
        tok: undefined /* Nothing */
        });
      
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
  const {data: [v109], secs: v111, time: v110, didSend: v57, from: v108 } = txn2;
  const v112 = v109.price;
  ;
  const v116 = v109.owner;
  ;
  stdlib.protect(ctc4, await interact.buyNft(v109), {
    at: './index.rsh:53:29:application',
    fs: ['at ./index.rsh:53:29:application call to [unknown function] (defined at: ./index.rsh:53:29:function exp)', 'at ./index.rsh:53:29:application call to "liftedInteract" (defined at: ./index.rsh:53:29:application)'],
    msg: 'buyNft',
    who: 'buyer'
    });
  
  return;
  
  
  
  
  };
export async function creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '59'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    creator: ctc2,
    metadata: ctc0,
    owner: ctc2,
    price: ctc1,
    royalty: ctc1
    });
  const ctc4 = stdlib.T_Null;
  
  
  const v83 = stdlib.protect(ctc0, interact.metadata, 'for creator\'s interact field metadata');
  const v84 = stdlib.protect(ctc1, interact.price, 'for creator\'s interact field price');
  const v85 = stdlib.protect(ctc1, interact.royalty, 'for creator\'s interact field royalty');
  
  const v92 = ctc.selfAddress();
  
  const v94 = {
    creator: v92,
    metadata: v83,
    owner: v92,
    price: v84,
    royalty: v85
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v94],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v36, from: v95 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v36, from: v95 } = txn1;
  ;
  stdlib.protect(ctc4, await interact.mintNft(v96), {
    at: './index.rsh:44:32:application',
    fs: ['at ./index.rsh:44:32:application call to [unknown function] (defined at: ./index.rsh:44:32:function exp)', 'at ./index.rsh:44:32:application call to "liftedInteract" (defined at: ./index.rsh:44:32:application)'],
    msg: 'mintNft',
    who: 'creator'
    });
  
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v109], secs: v111, time: v110, didSend: v57, from: v108 } = txn2;
  const v112 = v109.price;
  ;
  const v116 = v109.owner;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA8yhkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAEQjEkQjNAESRDQESSISTDQCEhFESTUFNf+ABO88fIs0/1CwNP+Be1s1/jT+iACgsSKyATT+sggjshA0/1dbILIHs0IAMUgiNAESRDQESSISTDQCEhFESTUFNf+ABBSs+vY0/1CwgaCNBogAYyM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                    "internalType": "address payable",
                    "name": "_creator",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes27",
                        "name": "elem1",
                        "type": "bytes27"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_metadata",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_royalty",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v96",
                "type": "tuple"
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                    "internalType": "address payable",
                    "name": "_creator",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes27",
                        "name": "elem1",
                        "type": "bytes27"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_metadata",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_royalty",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v96",
                "type": "tuple"
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                    "internalType": "address payable",
                    "name": "_creator",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes27",
                        "name": "elem1",
                        "type": "bytes27"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_metadata",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_royalty",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v109",
                "type": "tuple"
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
                    "internalType": "address payable",
                    "name": "_creator",
                    "type": "address"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes27",
                        "name": "elem1",
                        "type": "bytes27"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_metadata",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_owner",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_price",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_royalty",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v109",
                "type": "tuple"
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
  Bytecode: `0x60806040526040516108b03803806108b08339810160408190526100229161027c565b6000805543600355604080513381528251602080830191909152808401515180516001600160a01b039081168486015281830151805160608087019190915293015164ffffffffff19166080808601919091528286015190911660a08501529181015160c0840152015160e082015290517f0909997645124d3efe4aea437280dfc986fa71a8fe9297a33c4a2ed72464d4d9918190036101000190a16100ca34156007610108565b60016000818155439091556040805160208082018490528251808303820181529183019092528051610100926002920190610131565b505050610388565b8161012d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461013d9061034d565b90600052602060002090601f01602090048101928261015f57600085556101a5565b82601f1061017857805160ff19168380011785556101a5565b828001600101855582156101a5579182015b828111156101a557825182559160200191906001019061018a565b506101b19291506101b5565b5090565b5b808211156101b157600081556001016101b6565b604080519081016001600160401b03811182821017156101fa57634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156101fa57634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b03811182821017156101fa57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461027757600080fd5b919050565b600081830360e081121561028f57600080fd5b6102976101ca565b8351815260c0601f19830112156102ad57600080fd5b6102b5610200565b6102bd610230565b6102c960208701610260565b81526040603f19850112156102dd57600080fd5b6102e56101ca565b935060408601518452606086015164ffffffffff198116811461030757600080fd5b8060208601525083602082015261032060808701610260565b604082015260a0860151606082015260c09095015160808601529384526020810193909352509092915050565b600181811c9082168061036157607f821691505b6020821081141561038257634e487b7160e01b600052602260045260246000fd5b50919050565b610519806103976000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063ab53f2c614610082578063cfcb35a8146100a557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b34801561008e57600080fd5b506100976100b8565b60405161006492919061034f565b6100476100b33660046103ac565b610155565b6000606060005460028080546100cd906103c4565b80601f01602080910402602001604051908101604052809291908181526020018280546100f9906103c4565b80156101465780601f1061011b57610100808354040283529160200191610146565b820191906000526020600020905b81548152906001019060200180831161012957829003601f168201915b50505050509050915091509091565b61016560016000541460096102d4565b61017f8135158061017857506001548235145b600a6102d4565b600080805560028054610191906103c4565b80601f01602080910402602001604051908101604052809291908181526020018280546101bd906103c4565b801561020a5780601f106101df5761010080835404028352916020019161020a565b820191906000526020600020905b8154815290600101906020018083116101ed57829003601f168201915b505050505080602001905181019061022291906103f9565b90507fc09720ab7844b8db535c2f31f45a5a8c73097dacfaed103529b33b08c5670d32338360405161025592919061043e565b60405180910390a161026e3460a08401351460086102d4565b61027e60a08301608084016104c8565b6040516001600160a01b03919091169060a084013580156108fc02916000818181858888f193505050501580156102b9573d6000803e3d6000fd5b50600080805560018190556102d0906002906102f9565b5050565b816102d05760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610305906103c4565b6000825580601f10610315575050565b601f0160209004906000526020600020908101906103339190610336565b50565b5b8082111561034b5760008155600101610337565b5090565b82815260006020604081840152835180604085015260005b8181101561038357858101830151858201606001528201610367565b81811115610395576000606083870101525b50601f01601f191692909201606001949350505050565b600060e082840312156103be57600080fd5b50919050565b600181811c908216806103d857607f821691505b602082108114156103be57634e487b7160e01b600052602260045260246000fd5b60006020828403121561040b57600080fd5b8151801515811461041b57600080fd5b9392505050565b80356001600160a01b038116811461043957600080fd5b919050565b60006101008201905060018060a01b038085168352833560208401528061046760208601610422565b16604084015260408401356060840152606084013564ffffffffff19811680821461049157600080fd5b8060808601525050806104a660808601610422565b1660a08401525060a083013560c083015260c083013560e08301529392505050565b6000602082840312156104da57600080fd5b61041b8261042256fea2646970667358221220d7003e423e14802418381b58caa9aedb0a6d38682a9d80f426c433377ce6c21264736f6c634300080c0033`,
  BytecodeLen: 2224,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:45:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:54:5:after expr stmt',
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
