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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc3 = stdlib.T_Object({
    creator: ctc0,
    id: ctc1,
    metadata: ctc2,
    owner: ctc0,
    price: ctc1,
    royalty: ctc1
    });
  
  return {
    infos: {
      },
    views: {
      1: [ctc3]
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
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc3 = stdlib.T_Object({
    creator: ctc1,
    id: ctc0,
    metadata: ctc2,
    owner: ctc1,
    price: ctc0,
    royalty: ctc0
    });
  const ctc4 = stdlib.T_Null;
  
  
  const v79 = stdlib.protect(ctc0, interact.nftId, 'for buyer\'s interact field nftId');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v32, from: v84 } = txn1;
  ;
  const v90 = v85.price;
  
  const txn2 = await (ctc.sendrecv({
    args: [v85, v79],
    evt_cnt: 1,
    funcNum: 1,
    lct: v86,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v90, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v92], secs: v94, time: v93, didSend: v44, from: v91 } = txn2;
      
      const v95 = v85.price;
      sim_r.txns.push({
        amt: v95,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v99 = v85.owner;
      sim_r.txns.push({
        amt: v95,
        kind: 'from',
        to: v99,
        tok: undefined /* Nothing */
        });
      const v105 = v85.id;
      
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v92], secs: v94, time: v93, didSend: v44, from: v91 } = txn2;
  const v95 = v85.price;
  ;
  const v99 = v85.owner;
  ;
  const v105 = v85.id;
  stdlib.protect(ctc4, await interact.changeowner(v99, v91), {
    at: './index.rsh:56:34:application',
    fs: ['at ./index.rsh:56:34:application call to [unknown function] (defined at: ./index.rsh:56:34:function exp)', 'at ./index.rsh:56:34:application call to "liftedInteract" (defined at: ./index.rsh:56:34:application)'],
    msg: 'changeowner',
    who: 'buyer'
    });
  
  stdlib.protect(ctc4, await interact.buyNft(v91, v105, v95), {
    at: './index.rsh:57:29:application',
    fs: ['at ./index.rsh:57:29:application call to [unknown function] (defined at: ./index.rsh:57:29:function exp)', 'at ./index.rsh:57:29:application call to "liftedInteract" (defined at: ./index.rsh:57:29:application)'],
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '64'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    creator: ctc3,
    id: ctc1,
    metadata: ctc0,
    owner: ctc3,
    price: ctc1,
    royalty: ctc1
    });
  
  
  const v76 = stdlib.protect(ctc0, interact.metadata, 'for creator\'s interact field metadata');
  const v77 = stdlib.protect(ctc1, interact.price, 'for creator\'s interact field price');
  const v78 = stdlib.protect(ctc1, interact.royalty, 'for creator\'s interact field royalty');
  
  const v80 = ctc.selfAddress();
  const v82 = {
    creator: v80,
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
    metadata: v76,
    owner: v80,
    price: v77,
    royalty: v78
    };
  stdlib.protect(ctc2, await interact.mintNft(v82), {
    at: './index.rsh:43:25:application',
    fs: ['at ./index.rsh:31:20:application call to [unknown function] (defined at: ./index.rsh:31:24:function exp)'],
    msg: 'mintNft',
    who: 'creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v82],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v85], secs: v87, time: v86, didSend: v32, from: v84 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v32, from: v84 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v92], secs: v94, time: v93, didSend: v44, from: v91 } = txn2;
  const v95 = v85.price;
  ;
  const v99 = v85.owner;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAwABAAEBIjUAMRhBAREoZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQABRIxJEIzQBEkQ0BEkiEkw0AhIRRClkKmRQSTUDNf9JNQUXNf6ABNUVGRQ0/hZQsDT/gYgBWzX9NP2IALGxIrIBNP2yCCOyEDT/V2ggsgezQgBCSCI0ARJENARJIhJMNAISEURJNQU1/4AEOW1CRzT/ULCBoI0GiAB0NP8pSwFXAH9nKksBV38ZZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 152,
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
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
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
                    "internalType": "struct T0",
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
                "internalType": "struct T1",
                "name": "v85",
                "type": "tuple"
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
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
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
                    "internalType": "struct T0",
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
                "internalType": "struct T1",
                "name": "v85",
                "type": "tuple"
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
                "internalType": "uint256",
                "name": "v92",
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
                "name": "v92",
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
  Bytecode: `0x608060405260405162000a2f38038062000a2f833981016040819052620000269162000296565b60008055436003556040517fd2489ab216818b0df8d4d4854ce22fde7972e86ece95aade1546d4d95996e9a4906200006290339084906200036a565b60405180910390a1620000783415600762000110565b6040805160e081018252600060208083018281528385018390528451808601865283815280830184905260608501526080840183905260a0840183905260c084018390528352848101515183526001918290554390915591519091620000e191839101620003f1565b60405160208183030381529060405260029080519060200190620001079291906200013a565b50505062000494565b81620001365760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001489062000457565b90600052602060002090601f0160209004810192826200016c5760008555620001b7565b82601f106200018757805160ff1916838001178555620001b7565b82800160010185558215620001b7579182015b82811115620001b75782518255916020019190600101906200019a565b50620001c5929150620001c9565b5090565b5b80821115620001c55760008155600101620001ca565b604080519081016001600160401b03811182821017156200021157634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200021157634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156200021157634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200029157600080fd5b919050565b6000818303610100811215620002ab57600080fd5b620002b5620001e0565b8351815260e0601f1983011215620002cc57600080fd5b620002d662000217565b620002e062000248565b620002ee6020870162000279565b81526040868101516020830152605f19850112156200030c57600080fd5b62000316620001e0565b935060608601518452608086015160208501528360408201526200033d60a0870162000279565b606082015260c0860151608082015260e09095015160a08601529384526020810193909352509092915050565b6001600160a01b03831681528151602080830191909152820151610120820190620003e96040840182805160018060a01b0380825116845260208201516020850152604082015180516040860152602081015160608601525080606083015116608085015250608081015160a084015260a081015160c0840152505050565b509392505050565b60e08101620004518284805160018060a01b0380825116845260208201516020850152604082015180516040860152602081015160608601525080606083015116608085015250608081015160a084015260a081015160c0840152505050565b92915050565b600181811c908216806200046c57607f821691505b602082108114156200048e57634e487b7160e01b600052602260045260246000fd5b50919050565b61058b80620004a46000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610357565b6100b8565b3480156100a157600080fd5b506100aa61023f565b60405161006492919061036f565b6100c860016000541460096102dc565b6100e2813515806100db57506001548235145b600a6102dc565b6000808055600280546100f4906103cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103cc565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906104b6565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a18051608001516101e190341460086102dc565b805160608101516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610224573d6000803e3d6000fd5b506000808055600181905561023b90600290610301565b5050565b600060606000546002808054610254906103cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610280906103cc565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b50505050509050915091509091565b8161023b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461030d906103cc565b6000825580601f1061031d575050565b601f01602090049060005260206000209081019061033b919061033e565b50565b5b80821115610353576000815560010161033f565b5090565b60006040828403121561036957600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103a357858101830151858201606001528201610387565b818111156103b5576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103e057607f821691505b6020821081141561036957634e487b7160e01b600052602260045260246000fd5b6040516020810167ffffffffffffffff8111828210171561043257634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c0810167ffffffffffffffff8111828210171561043257634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561043257634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146104b157600080fd5b919050565b600081830360e08112156104c957600080fd5b6104d1610401565b6104d9610438565b6104e28561049a565b8152602085015160208201526040603f198401121561050057600080fd5b610508610469565b9250604085015183526060850151602084015282604082015261052d6080860161049a565b606082015260a0850151608082015260c085015160a08201528082525080925050509291505056fea2646970667358221220d3a18d749d9fbabde6560cfa48b90ef6a58bd74a4f679c82b1e2f9851b3afcb664736f6c634300080c0033`,
  BytecodeLen: 2607,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:47:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:58:5:after expr stmt',
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
