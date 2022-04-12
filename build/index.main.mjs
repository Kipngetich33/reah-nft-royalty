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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc3 = stdlib.T_Object({
    creator: ctc1,
    id: ctc0,
    metadata: ctc2,
    owner: ctc1,
    price: ctc0,
    royalty: ctc0
    });
  const ctc4 = stdlib.T_Null;
  
  
  const v69 = stdlib.protect(ctc0, interact.nftId, 'for buyer\'s interact field nftId');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v75], secs: v77, time: v76, didSend: v32, from: v74 } = txn1;
  ;
  const v80 = v75.price;
  
  const txn2 = await (ctc.sendrecv({
    args: [v75, v69],
    evt_cnt: 1,
    funcNum: 1,
    lct: v76,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v80, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v82], secs: v84, time: v83, didSend: v44, from: v81 } = txn2;
      
      const v85 = v75.price;
      sim_r.txns.push({
        amt: v85,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v89 = v75.owner;
      sim_r.txns.push({
        amt: v85,
        kind: 'from',
        to: v89,
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
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v44, from: v81 } = txn2;
  const v85 = v75.price;
  ;
  const v89 = v75.owner;
  ;
  stdlib.protect(ctc4, await interact.buyNft(v81, v82, v85), {
    at: './index.rsh:56:29:application',
    fs: ['at ./index.rsh:56:29:application call to [unknown function] (defined at: ./index.rsh:56:29:function exp)', 'at ./index.rsh:56:29:application call to "liftedInteract" (defined at: ./index.rsh:56:29:application)'],
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
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
  
  
  const v66 = stdlib.protect(ctc0, interact.metadata, 'for creator\'s interact field metadata');
  const v67 = stdlib.protect(ctc1, interact.price, 'for creator\'s interact field price');
  const v68 = stdlib.protect(ctc1, interact.royalty, 'for creator\'s interact field royalty');
  
  const v70 = ctc.selfAddress();
  const v72 = {
    creator: v70,
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1),
    metadata: v66,
    owner: v70,
    price: v67,
    royalty: v68
    };
  stdlib.protect(ctc2, await interact.mintNft(v72), {
    at: './index.rsh:42:25:application',
    fs: ['at ./index.rsh:30:20:application call to [unknown function] (defined at: ./index.rsh:30:24:function exp)'],
    msg: 'mintNft',
    who: 'creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v72],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:44:16:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:16:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v75], secs: v77, time: v76, didSend: v32, from: v74 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v75], secs: v77, time: v76, didSend: v32, from: v74 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v44, from: v81 } = txn2;
  const v85 = v75.price;
  ;
  const v89 = v75.owner;
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
                "name": "v75",
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
                "name": "v75",
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
                "name": "v82",
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
                "name": "v82",
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
  Bytecode: `0x6080604052604051620009e2380380620009e283398101604081905261002491610277565b60008055436003556040517f9d2ef02f3c8d7e9253d2cf79ee49e5410c89b5c0a26f14c37f8843225913d66d9061005c90839061033c565b60405180910390a161007034156007610103565b6040805160e081018252600060208083018281528385018390528451808601865283815280830184905260608501526080840183905260a0840183905260c0840183905283528481015151835260019182905543909155915190916100d7918391016103b0565b604051602081830303815290604052600290805190602001906100fb92919061012c565b505050610450565b816101285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461013890610415565b90600052602060002090601f01602090048101928261015a57600085556101a0565b82601f1061017357805160ff19168380011785556101a0565b828001600101855582156101a0579182015b828111156101a0578251825591602001919060010190610185565b506101ac9291506101b0565b5090565b5b808211156101ac57600081556001016101b1565b604080519081016001600160401b03811182821017156101f557634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156101f557634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156101f557634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461027257600080fd5b919050565b600081830361010081121561028b57600080fd5b6102936101c5565b8351815260e0601f19830112156102a957600080fd5b6102b16101fb565b6102b961022b565b6102c56020870161025b565b81526040868101516020830152605f19850112156102e257600080fd5b6102ea6101c5565b9350606086015184526080860151602085015283604082015261030f60a0870161025b565b606082015260c0860151608082015260e09095015160a08601529384526020810193909352509092915050565b815181526020808301516101008301916103a990840182805160018060a01b0380825116845260208201516020850152604082015180516040860152602081015160608601525080606083015116608085015250608081015160a084015260a081015160c0840152505050565b5092915050565b60e0810161040f8284805160018060a01b0380825116845260208201516020850152604082015180516040860152602081015160608601525080606083015116608085015250608081015160a084015260a081015160c0840152505050565b92915050565b600181811c9082168061042957607f821691505b6020821081141561044a57634e487b7160e01b600052602260045260246000fd5b50919050565b61058280620004606000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b61004761009036600461034e565b6100b8565b3480156100a157600080fd5b506100aa610236565b604051610064929190610366565b6100c860016000541460096102d3565b6100e2813515806100db57506001548235145b600a6102d3565b6000808055600280546100f4906103c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103c3565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906104ad565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a18051608001516101d890341460086102d3565b805160608101516080909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561021b573d6000803e3d6000fd5b5060008080556001819055610232906002906102f8565b5050565b60006060600054600280805461024b906103c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610277906103c3565b80156102c45780601f10610299576101008083540402835291602001916102c4565b820191906000526020600020905b8154815290600101906020018083116102a757829003601f168201915b50505050509050915091509091565b816102325760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610304906103c3565b6000825580601f10610314575050565b601f0160209004906000526020600020908101906103329190610335565b50565b5b8082111561034a5760008155600101610336565b5090565b60006040828403121561036057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561039a5785810183015185820160600152820161037e565b818111156103ac576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103d757607f821691505b6020821081141561036057634e487b7160e01b600052602260045260246000fd5b6040516020810167ffffffffffffffff8111828210171561042957634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c0810167ffffffffffffffff8111828210171561042957634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561042957634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146104a857600080fd5b919050565b600081830360e08112156104c057600080fd5b6104c86103f8565b6104d061042f565b6104d985610491565b8152602085015160208201526040603f19840112156104f757600080fd5b6104ff610460565b9250604085015183526060850151602084015282604082015261052460808601610491565b606082015260a0850151608082015260c085015160a08201528082525080925050509291505056fea2646970667358221220d6ef1a328fe300828540e56b8720532094c4befa2b42eae14f4ae1ecf1e1a45164736f6c634300080c0033`,
  BytecodeLen: 2530,
  Which: `oD`,
  version: 6,
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
    at: './index.rsh:63:5:after expr stmt',
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
