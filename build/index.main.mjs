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
  
  
  const v52 = stdlib.protect(ctc0, interact.nftId, 'for buyer\'s interact field nftId');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc1, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v56, v57], secs: v59, time: v58, didSend: v30, from: v55 } = txn1;
  ;
  const v62 = {
    creator: v55,
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1),
    metadata: v56,
    owner: v55,
    price: v57
    };
  stdlib.protect(ctc2, await interact.buyNft(v62), {
    at: './index.rsh:50:24:application',
    fs: ['at ./index.rsh:48:18:application call to [unknown function] (defined at: ./index.rsh:48:22:function exp)'],
    msg: 'buyNft',
    who: 'buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v52],
    evt_cnt: 1,
    funcNum: 1,
    lct: v58,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:14:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v64], secs: v66, time: v65, didSend: v39, from: v63 } = txn2;
      
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
  const {data: [v64], secs: v66, time: v65, didSend: v39, from: v63 } = txn2;
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
  
  
  const v50 = stdlib.protect(ctc0, interact.metadata, 'for creator\'s interact field metadata');
  const v51 = stdlib.protect(ctc1, interact.price, 'for creator\'s interact field price');
  
  stdlib.protect(ctc2, await interact.mintNft(v50, v51), {
    at: './index.rsh:33:25:application',
    fs: ['at ./index.rsh:29:20:application call to [unknown function] (defined at: ./index.rsh:29:24:function exp)'],
    msg: 'mintNft',
    who: 'creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v50, v51],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:16:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:16:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v56, v57], secs: v59, time: v58, didSend: v30, from: v55 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v56, v57], secs: v59, time: v58, didSend: v30, from: v55 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v64], secs: v66, time: v65, didSend: v39, from: v63 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA4yhkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACcjEkQjNAESRDQESSISTDQCEhFESTUFFzX/gATVFRkUNP8WULBCAD5IIjQBEkQ0BEkiEkw0AhIRREk1BUlXAEA1/4FAWzX+gAQb3/9LNP9QNP4WULCBoI0GiABjIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v56",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v57",
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
                "name": "v56",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v57",
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
                "name": "v64",
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
                "name": "v64",
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
  Bytecode: `0x608060405260405161069d38038061069d833981016040819052610022916101c8565b60008055436003556040517f31dba8026bd6ebcad250c6087885e29fd7d64c77f9cb011f4ddb98276b4a29039061007e908390815181526020918201518051805184840152830151604083015290910151606082015260800190565b60405180910390a1610092341560076100d0565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100c89260029201906100f9565b505050610282565b816100f55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461010590610247565b90600052602060002090601f016020900481019282610127576000855561016d565b82601f1061014057805160ff191683800117855561016d565b8280016001018555821561016d579182015b8281111561016d578251825591602001919060010190610152565b5061017992915061017d565b5090565b5b80821115610179576000815560010161017e565b604080519081016001600160401b03811182821017156101c257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156101db57600080fd5b6101e3610192565b83518152601f198201915060608212156101fc57600080fd5b610204610192565b604083121561021257600080fd5b61021a610192565b60208681015182526040870151818301529082526060909501518186015293810193909352509092915050565b600181811c9082168061025b57607f821691505b6020821081141561027c57634e487b7160e01b600052602260045260246000fd5b50919050565b61040c806102916000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b610047610090366004610303565b6100b8565b3480156100a157600080fd5b506100aa6101eb565b60405161006492919061031b565b6100c86001600054146009610288565b6100e2813515806100db57506001548235145b600a610288565b6000808055600280546100f490610378565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610378565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103ad565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16101d134156008610288565b600080805560018190556101e7906002906102ad565b5050565b60006060600054600280805461020090610378565b80601f016020809104026020016040519081016040528092919081815260200182805461022c90610378565b80156102795780601f1061024e57610100808354040283529160200191610279565b820191906000526020600020905b81548152906001019060200180831161025c57829003601f168201915b50505050509050915091509091565b816101e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b990610378565b6000825580601f106102c9575050565b601f0160209004906000526020600020908101906102e791906102ea565b50565b5b808211156102ff57600081556001016102eb565b5090565b60006040828403121561031557600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561034f57858101830151858201606001528201610333565b81811115610361576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061038c57607f821691505b6020821081141561031557634e487b7160e01b600052602260045260246000fd5b6000602082840312156103bf57600080fd5b815180151581146103cf57600080fd5b939250505056fea26469706673582212202a97fceea0bec5a2fb2c19e0ebfc225d728bdb627c4a08f7877fd63b49efef6b64736f6c634300080c0033`,
  BytecodeLen: 1693,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:46:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:53:5:after expr stmt',
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
