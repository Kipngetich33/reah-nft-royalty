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
      1: [ctc0, ctc3],
      4: [ctc0, ctc0, ctc1]
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
export async function NFT_API_changeOwner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for NFT_API_changeOwner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for NFT_API_changeOwner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Null;
  
  
  const [v129, v136, v140] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc0, ctc1]);
  const v160 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:61:11:application call to [unknown function] (defined at: ./index.rsh:61:11:function exp)', 'at ./index.rsh:61:11:application call to [unknown function] (defined at: ./index.rsh:61:11:function exp)'],
    msg: 'in',
    who: 'NFT_API_changeOwner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v129, v136, v140, v160],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v164], secs: v166, time: v165, didSend: v84, from: v163 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "NFT_API_changeOwner"
        });
      ;
      const v168 = await txn1.getOutput('NFT_API_changeOwner', 'v163', ctc0, v163);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v164], secs: v166, time: v165, didSend: v84, from: v163 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v168 = await txn1.getOutput('NFT_API_changeOwner', 'v163', ctc0, v163);
  if (v84) {
    stdlib.protect(ctc3, await interact.out(v164, v168), {
      at: './index.rsh:62:9:application',
      fs: ['at ./index.rsh:62:9:application call to [unknown function] (defined at: ./index.rsh:62:9:function exp)', 'at ./index.rsh:68:14:application call to "k" (defined at: ./index.rsh:65:9:function exp)', 'at ./index.rsh:65:9:application call to [unknown function] (defined at: ./index.rsh:65:9:function exp)'],
      msg: 'out',
      who: 'NFT_API_changeOwner'
      });
    }
  else {
    }
  
  return;
  
  
  
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
  const ctc5 = stdlib.T_Tuple([]);
  
  
  const v124 = stdlib.protect(ctc0, interact.nftId, 'for buyer\'s interact field nftId');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v130], secs: v132, time: v131, didSend: v32, from: v129 } = txn1;
  ;
  const v135 = v130.price;
  
  const txn2 = await (ctc.sendrecv({
    args: [v129, v130, v124],
    evt_cnt: 1,
    funcNum: 1,
    lct: v131,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v135, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v137], secs: v139, time: v138, didSend: v44, from: v136 } = txn2;
      
      const v140 = v130.price;
      sim_r.txns.push({
        amt: v140,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v143 = v130.creator;
      
      const v146 = v143;
      const v147 = v138;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        
        sim_r.txns.push({
          amt: v140,
          kind: 'from',
          to: v129,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v137], secs: v139, time: v138, didSend: v44, from: v136 } = txn2;
  const v140 = v130.price;
  ;
  const v143 = v130.creator;
  stdlib.protect(ctc4, await interact.changeowner(v143), {
    at: './index.rsh:57:34:application',
    fs: ['at ./index.rsh:57:34:application call to [unknown function] (defined at: ./index.rsh:57:34:function exp)', 'at ./index.rsh:57:34:application call to "liftedInteract" (defined at: ./index.rsh:57:34:application)'],
    msg: 'changeowner',
    who: 'buyer'
    });
  
  let v146 = v143;
  let v147 = v138;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v164], secs: v166, time: v165, didSend: v84, from: v163 } = txn3;
    undefined /* setApiDetails */;
    ;
    await txn3.getOutput('NFT_API_changeOwner', 'v163', ctc1, v163);
    const cv146 = v136;
    const cv147 = v165;
    
    v146 = cv146;
    v147 = cv147;
    
    continue;
    
    }
  stdlib.protect(ctc4, await interact.changeowner(v146), {
    at: './index.rsh:73:34:application',
    fs: ['at ./index.rsh:73:34:application call to [unknown function] (defined at: ./index.rsh:73:34:function exp)', 'at ./index.rsh:73:34:application call to "liftedInteract" (defined at: ./index.rsh:73:34:application)'],
    msg: 'changeowner',
    who: 'buyer'
    });
  
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Object({
    creator: ctc3,
    id: ctc1,
    metadata: ctc0,
    owner: ctc3,
    price: ctc1,
    royalty: ctc1
    });
  const ctc5 = stdlib.T_Tuple([]);
  
  
  const v121 = stdlib.protect(ctc0, interact.metadata, 'for creator\'s interact field metadata');
  const v122 = stdlib.protect(ctc1, interact.price, 'for creator\'s interact field price');
  const v123 = stdlib.protect(ctc1, interact.royalty, 'for creator\'s interact field royalty');
  
  const v125 = ctc.selfAddress();
  const v127 = {
    creator: v125,
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1),
    metadata: v121,
    owner: v125,
    price: v122,
    royalty: v123
    };
  stdlib.protect(ctc2, await interact.mintNft(v127), {
    at: './index.rsh:47:25:application',
    fs: ['at ./index.rsh:35:20:application call to [unknown function] (defined at: ./index.rsh:35:24:function exp)'],
    msg: 'mintNft',
    who: 'creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v127],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:16:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:16:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v130], secs: v132, time: v131, didSend: v32, from: v129 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v130], secs: v132, time: v131, didSend: v32, from: v129 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v137], secs: v139, time: v138, didSend: v44, from: v136 } = txn2;
  const v140 = v130.price;
  ;
  const v143 = v130.creator;
  let v146 = v143;
  let v147 = v138;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v164], secs: v166, time: v165, didSend: v84, from: v163 } = txn3;
    undefined /* setApiDetails */;
    ;
    await txn3.getOutput('NFT_API_changeOwner', 'v163', ctc3, v163);
    const cv146 = v136;
    const cv147 = v165;
    
    v146 = cv146;
    v147 = cv147;
    
    continue;
    
    }
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`NFT_API_changeOwner()address`],
    pure: [],
    sigs: [`NFT_API_changeOwner()address`]
    },
  appApproval: `BiAEAAEDBCYDAQAAAQEiNQAxGEEBmSlkSSJbNQGBCFs1AjYaABdJQQARIjUEIzUGgY3OgQoSRClCABw2GgIXNQQ2GgM2GgEXSSMMQACoSSQMQABRJBJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDVyAgNf9JNQU1/oAEyJoPuzT+ULCACAAAAAAAAACjMQBQsDEANQc0A1cAIDT/NAOBQFs0/zIGQgCWIxJEIzQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDVyCYNf9JNQUXNf6ABNUVGRQ0/hZQsDT/gYgBWzX9NP2IANU0A1cAIDEANP00/1cAIDIGQgBFSCI0ARJENARJIhJMNAISEURJNQU1/4AEOW1CRzT/ULCBoI0GiACbMQA0/1AoSwFXAH9nKksBV385Z0gjNQEyBjUCQgBANf81/jX9NfxJNfs0/FA0/RZQKEsBVwBIZ0glNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 184,
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
                "name": "v130",
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
                "name": "v130",
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
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "internalType": "bool",
                "name": "v164",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v163",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "NFT_API_changeOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
                "internalType": "bool",
                "name": "v164",
                "type": "bool"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f7a38038062000f7a8339810160408190526200002691620002ae565b60008055436003556040517f9d2ef02f3c8d7e9253d2cf79ee49e5410c89b5c0a26f14c37f8843225913d66d906200006090839062000382565b60405180910390a1620000763415600762000128565b620000d06040805180820182526000808252825160c08101845281815260208181018390528451808601865283815280820184905294820194909452606081018290526080810182905260a0810191909152909182015290565b338152602080830151518183015260016000819055439055604051620000f991839101620003f8565b604051602081830303815290604052600290805190602001906200011f92919062000152565b505050620004a9565b816200014e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000160906200046c565b90600052602060002090601f016020900481019282620001845760008555620001cf565b82601f106200019f57805160ff1916838001178555620001cf565b82800160010185558215620001cf579182015b82811115620001cf578251825591602001919060010190620001b2565b50620001dd929150620001e1565b5090565b5b80821115620001dd5760008155600101620001e2565b604080519081016001600160401b03811182821017156200022957634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200022957634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156200022957634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620002a957600080fd5b919050565b6000818303610100811215620002c357600080fd5b620002cd620001f8565b8351815260e0601f1983011215620002e457600080fd5b620002ee6200022f565b620002f862000260565b620003066020870162000291565b81526040868101516020830152605f19850112156200032457600080fd5b6200032e620001f8565b935060608601518452608086015160208501528360408201526200035560a0870162000291565b606082015260c0860151608082015260e09095015160a08601529384526020810193909352509092915050565b600061010082019050825182526020830151620003f160208401825160018060a01b0380825116835260208201516020840152604082015180516040850152602081015160608501525080606083015116608084015250608081015160a083015260a081015160c08301525050565b5092915050565b81516001600160a01b03168152602080830151610100830191620003f19084018260018060a01b0380825116835260208201516020840152604082015180516040850152602081015160608501525080606083015116608084015250608081015160a083015260a081015160c08301525050565b600181811c908216806200048157607f821691505b60208210811415620004a357634e487b7160e01b600052602260045260246000fd5b50919050565b610ac180620004b96000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806382322bd51461008357806383230757146100a3578063873779a1146100b8578063ab53f2c6146100cb578063e2186a08146100ee57005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61008b610101565b6040516001600160a01b03909116815260200161007a565b3480156100af57600080fd5b50600154610070565b61005d6100c636600461073b565b61013f565b3480156100d757600080fd5b506100e061016a565b60405161007a92919061075e565b61005d6100fc36600461073b565b610207565b604080516020810190915260008082529061011a61065b565b6040805160208082019092526000815290820152610138818361022a565b5051919050565b60408051602081019091526000815261016661016036849003840184610854565b82610407565b5050565b60006060600054600280805461017f906108a4565b80601f01602080910402602001604051908101604052809291908181526020018280546101ab906108a4565b80156101f85780601f106101cd576101008083540402835291602001916101f8565b820191906000526020600020905b8154815290600101906020018083116101db57829003601f168201915b50505050509050915091509091565b604080516020810190915260008152610166610228368490038401846108d9565b825b61023a600460005414600c6105ac565b815161025590158061024e57508251600154145b600d6105ac565b600080805560028054610267906108a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610293906108a4565b80156102e05780601f106102b5576101008083540402835291602001916102e0565b820191906000526020600020905b8154815290600101906020018083116102c357829003601f168201915b50505050508060200190518101906102f89190610954565b6040805185518152602080870151511515908201529192507f46fa595f7924075e82e3f58fa001775f50eda2857c56728dafc78ec80de66f49910160405180910390a16103473415600b6105ac565b6040513381527f421a3a8010b6497735386bcbfe3bac0a40f41af50b0d1c06399e2c8cb46f542f9060200160405180910390a13382526040805160a0810182526000818301818152606083018290526080830182905282528251808401909352808352602080840191909152810191909152815181516001600160a01b03918216905260208084018051845190841690830152604080860151855190910152518184018051919093169052905143910152610401816105d1565b50505050565b61041760016000541460096105ac565b815161043290158061042b57508251600154145b600a6105ac565b600080805560028054610444906108a4565b80601f0160208091040260200160405190810160405280929190818152602001828054610470906108a4565b80156104bd5780601f10610492576101008083540402835291602001916104bd565b820191906000526020600020905b8154815290600101906020018083116104a057829003601f168201915b50505050508060200190518101906104d591906109ca565b604080518551815260208087015151908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a161052b816020015160800151341460086105ac565b6040805160a0810182526000818301818152606083018290526080830182905282528251808401909352808352602080840191909152810191909152815181516001600160a01b03918216905281513360209182015280840180516080015184516040015251518184018051919093169052905143910152610401816105d1565b816101665760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b0390811680885289518501518216845289518901518352600490955543600155875180850195909552915190911683870152518284015284518083039093018352608090910190935280519192610656926002929091019061068a565b505050565b60405180604001604052806000815260200161068560405180602001604052806000151581525090565b905290565b828054610696906108a4565b90600052602060002090601f0160209004810192826106b857600085556106fe565b82601f106106d157805160ff19168380011785556106fe565b828001600101855582156106fe579182015b828111156106fe5782518255916020019190600101906106e3565b5061070a92915061070e565b5090565b5b8082111561070a576000815560010161070f565b60006040828403121561073557600080fd5b50919050565b60006040828403121561074d57600080fd5b6107578383610723565b9392505050565b82815260006020604081840152835180604085015260005b8181101561079257858101830151858201606001528201610776565b818111156107a4576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff811182821017156107ec57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156107ec57634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff811182821017156107ec57634e487b7160e01b600052604160045260246000fd5b6000818303604081121561086757600080fd5b61086f6107bb565b833581526020601f198301121561088557600080fd5b61088d6107f2565b602094850135815293810193909352509092915050565b600181811c908216806108b857607f821691505b6020821081141561073557634e487b7160e01b600052602260045260246000fd5b600081830360408112156108ec57600080fd5b6108f46107bb565b833581526020601f198301121561090a57600080fd5b6109126107f2565b91506020840135801515811461092757600080fd5b825260208101919091529392505050565b80516001600160a01b038116811461094f57600080fd5b919050565b60006060828403121561096657600080fd5b6040516060810181811067ffffffffffffffff8211171561099757634e487b7160e01b600052604160045260246000fd5b6040526109a383610938565b81526109b160208401610938565b6020820152604083015160408201528091505092915050565b60008183036101008112156109de57600080fd5b6109e66107bb565b6109ef84610938565b815260e0601f1983011215610a0357600080fd5b610a0b610823565b610a1760208601610938565b81526040858101516020830152605f1984011215610a3457600080fd5b610a3c6107bb565b92506060850151835260808501516020840152826040820152610a6160a08601610938565b606082015260c0850151608082015260e09094015160a0850152602081019390935250909291505056fea2646970667358221220ac5d94e1b7f230bc8a2c6c2fb8377bccf397f3dfef60e6b759e9c7a341bf1aae64736f6c634300080c0033`,
  BytecodeLen: 3962,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:50:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:77:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:58:35:after expr stmt semicolon',
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
  "NFT_API_changeOwner": NFT_API_changeOwner,
  "buyer": buyer,
  "creator": creator
  };
export const _APIs = {
  NFT_API: {
    changeOwner: NFT_API_changeOwner
    }
  };
