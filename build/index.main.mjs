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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Object({
    creator: ctc0,
    id: ctc1,
    metadata: ctc2,
    owner: ctc0,
    price: ctc1,
    royalty: ctc1
    });
  const ctc4 = stdlib.T_Null;
  
  
  const v90 = stdlib.protect(ctc3, interact.nft, 'for buyer\'s interact field nft');
  const v95 = v90.price;
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v101], secs: v103, time: v102, didSend: v37, from: v100 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v90],
    evt_cnt: 1,
    funcNum: 1,
    lct: v102,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v95, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v115], secs: v117, time: v116, didSend: v59, from: v114 } = txn2;
      
      const v118 = v115.price;
      sim_r.txns.push({
        amt: v118,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v122 = v115.owner;
      sim_r.txns.push({
        amt: v118,
        kind: 'from',
        to: v122,
        tok: undefined /* Nothing */
        });
      const v127 = v115.creator;
      const v128 = v115.id;
      const v129 = v115.metadata;
      const v132 = v115.royalty;
      
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
  const {data: [v115], secs: v117, time: v116, didSend: v59, from: v114 } = txn2;
  const v118 = v115.price;
  ;
  const v122 = v115.owner;
  ;
  const v127 = v115.creator;
  const v128 = v115.id;
  const v129 = v115.metadata;
  const v132 = v115.royalty;
  const v134 = {
    creator: v127,
    id: v128,
    metadata: v129,
    owner: v114,
    price: v118,
    royalty: v132
    };
  stdlib.protect(ctc4, await interact.buyNft(v134), {
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Object({
    creator: ctc2,
    id: ctc1,
    metadata: ctc0,
    owner: ctc2,
    price: ctc1,
    royalty: ctc1
    });
  const ctc4 = stdlib.T_Null;
  
  
  const v87 = stdlib.protect(ctc0, interact.metadata, 'for creator\'s interact field metadata');
  const v88 = stdlib.protect(ctc1, interact.price, 'for creator\'s interact field price');
  const v89 = stdlib.protect(ctc1, interact.royalty, 'for creator\'s interact field royalty');
  
  const v97 = ctc.selfAddress();
  
  const v99 = {
    creator: v97,
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
    metadata: v87,
    owner: v97,
    price: v88,
    royalty: v89
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v99],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v101], secs: v103, time: v102, didSend: v37, from: v100 } = txn1;
      
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v101], secs: v103, time: v102, didSend: v37, from: v100 } = txn1;
  ;
  stdlib.protect(ctc4, await interact.mintNft(v101), {
    at: './index.rsh:46:32:application',
    fs: ['at ./index.rsh:46:32:application call to [unknown function] (defined at: ./index.rsh:46:32:function exp)', 'at ./index.rsh:46:32:application call to "liftedInteract" (defined at: ./index.rsh:46:32:application)'],
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
  const {data: [v115], secs: v117, time: v116, didSend: v59, from: v114 } = txn2;
  const v118 = v115.price;
  ;
  const v122 = v115.owner;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA8yhkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAEQjEkQjNAESRDQESSISTDQCEhFESTUFNf+ABIFcZws0/1CwNP+BaFs1/jT+iACgsSKyATT+sggjshA0/1dIILIHs0IAMUgiNAESRDQESSISTDQCEhFESTUFNf+ABA42ZNc0/1CwgaCNBogAYyM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
                "name": "v101",
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
                "name": "v101",
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
                "name": "v115",
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
                "name": "v115",
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
  Bytecode: `0x608060405260405161088038038061088083398101604081905261002291610278565b6000805543600355604080513381528251602080830191909152808401515180516001600160a01b03908116848601529181015160608085019190915281850151516080808601919091529082015190921660a0808501919091529181015160c0840152015160e082015290517ff337f79be2e153d8d5bbf678d959641692e5cc686dc373921fdb9a3ec1dabdb5918190036101000190a16100c634156007610104565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100fc92600292019061012d565b505050610370565b816101295760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461013990610335565b90600052602060002090601f01602090048101928261015b57600085556101a1565b82601f1061017457805160ff19168380011785556101a1565b828001600101855582156101a1579182015b828111156101a1578251825591602001919060010190610186565b506101ad9291506101b1565b5090565b5b808211156101ad57600081556001016101b2565b604080519081016001600160401b03811182821017156101f657634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156101f657634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156101f657634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461027357600080fd5b919050565b600081830360e081121561028b57600080fd5b6102936101c6565b8351815260c0601f19830112156102a957600080fd5b6102b16101fc565b6102b961022c565b6102c56020870161025c565b8152604086015160208201526020605f19850112156102e357600080fd5b6102eb6101fc565b9350606086015184528360408201526103066080870161025c565b606082015260a0860151608082015260c086015160a08201528082525080602083015250809250505092915050565b600181811c9082168061034957607f821691505b6020821081141561036a57634e487b7160e01b600052602260045260246000fd5b50919050565b6105018061037f6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806334fd934c1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b36600461034f565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610237565b604051610064929190610367565b6100c860016000541460096102d4565b6100e2813515806100db57506001548235145b600a6102d4565b6000808055600280546100f4906103c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103c4565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103f9565b90507f0a36de77700be2f8e996c49a668152488e155cffc5ed29a33869fae48742528833836040516101b892919061043e565b60405180910390a16101d13460a08401351460086102d4565b6101e160a08301608084016104b0565b6040516001600160a01b03919091169060a084013580156108fc02916000818181858888f1935050505015801561021c573d6000803e3d6000fd5b5060008080556001819055610233906002906102f9565b5050565b60006060600054600280805461024c906103c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610278906103c4565b80156102c55780601f1061029a576101008083540402835291602001916102c5565b820191906000526020600020905b8154815290600101906020018083116102a857829003601f168201915b50505050509050915091509091565b816102335760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610305906103c4565b6000825580601f10610315575050565b601f0160209004906000526020600020908101906103339190610336565b50565b5b8082111561034b5760008155600101610337565b5090565b600060e0828403121561036157600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561039b5785810183015185820160600152820161037f565b818111156103ad576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103d857607f821691505b6020821081141561036157634e487b7160e01b600052602260045260246000fd5b60006020828403121561040b57600080fd5b8151801515811461041b57600080fd5b9392505050565b80356001600160a01b038116811461043957600080fd5b919050565b60006101008201905060018060a01b038085168352833560208401528061046760208601610422565b16604084015260408401356060840152606084013560808401528061048e60808601610422565b1660a08401525060a083013560c083015260c083013560e08301529392505050565b6000602082840312156104c257600080fd5b61041b8261042256fea2646970667358221220f1c5769a18b4dc9632819fe9182737de681cc6cb489f69108805196a6977882c64736f6c634300080c0033`,
  BytecodeLen: 2176,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:48:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:59:5:after expr stmt',
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
