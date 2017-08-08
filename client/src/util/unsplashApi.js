const UNSPLASH_URL = 'https://api.unsplash.com';

// export default function callApi(endpoint, method = 'get', body) {
//   console.log('in unsplash api call');
//   return fetch(`${UNSPLASH_URL}/${endpoint}`, {
//     headers: {
//       'content-type': 'application/json',
//       'Authorization': 'Client-ID 27bdb6e41c288fe0ca175782ad2de37fb452d9d184021d930d2bc45f73cc0f60'
//     },
//     method,
//     body: JSON.stringify(body),
//   })
//   .then(response => response.json().then(json => ({ json, response })))
//   .then(({ json, response }) => {
//     if (!response.ok) {
//       return Promise.reject(json);
//     }
//     return json;
//   })
//   .catch(err => {
//     console.log(err);
//   })
// }

export default function callApi(endpoint, method = 'get', body) {
   return new Promise((resolve, reject) => {
     resolve({ results:
       [{
        "foreignId" : "7oL1PR6AV8o",
        "urls" : {
            "thumb" : "https://images.unsplash.com/reserve/9nfsYstTyWEJKScHr3MV_IMG_6450.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=5dc26f04ddb1d60543147894a94914c0",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/reserve/9nfsYstTyWEJKScHr3MV_IMG_6450.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=a76b0622e65f0fd086631aac48eed6c7",
            "full" : "https://images.unsplash.com/reserve/9nfsYstTyWEJKScHr3MV_IMG_6450.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=8af982d1ff5d0c930c7ea6af3888bdda",
            "raw" : "https://images.unsplash.com/reserve/9nfsYstTyWEJKScHr3MV_IMG_6450.jpg"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "-8b50abrBGw",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1415462733994-b5036b3212c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f5853695c5a7d05db694e13fbac993eb",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1415462733994-b5036b3212c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=0ed98c15431fc87aa905ff1f6bc28c1b",
            "full" : "https://images.unsplash.com/photo-1415462733994-b5036b3212c5?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=b33ad54262fc3d1eda1167d05e911233",
            "raw" : "https://images.unsplash.com/photo-1415462733994-b5036b3212c5"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "-7nnXc4jBWU",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1478827227954-745b0daf2534?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=7941d500c8fe7414313e9dc175aa9316",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1478827227954-745b0daf2534?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=083601b8d3122d33946b88521556070c",
            "full" : "https://images.unsplash.com/photo-1478827227954-745b0daf2534?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=38febdec6ae082a4bd2f142312de30ab",
            "raw" : "https://images.unsplash.com/photo-1478827227954-745b0daf2534"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "MOuQGzINc-Y",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1473693642466-dc611bb74022?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=675e1546e8c5bffbaa4a5e36de7d40b0",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1473693642466-dc611bb74022?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f55f26c0730e235a02586b0eb3659da4",
            "full" : "https://images.unsplash.com/photo-1473693642466-dc611bb74022?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=d0e8429b0fca9534055cba1c9b274bb0",
            "raw" : "https://images.unsplash.com/photo-1473693642466-dc611bb74022"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "QrxdoMPtaBk",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1446539020262-2eb0d2f63dfb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8b802a66dcd392069e5802078a5f224c",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1446539020262-2eb0d2f63dfb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=64e1c360acb0b814b083bb4f5e9e84a9",
            "full" : "https://images.unsplash.com/photo-1446539020262-2eb0d2f63dfb?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=21b67d3a1d00e92d0febb3a37a4c057b",
            "raw" : "https://images.unsplash.com/photo-1446539020262-2eb0d2f63dfb"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "Jiyoj5B72iU",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1420393000485-4697383da9ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=9e4af94cd926f670a6fb38ecec3d9818",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1420393000485-4697383da9ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c20ca75c9ab4ef6c98f51f77d3de094e",
            "full" : "https://images.unsplash.com/photo-1420393000485-4697383da9ec?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=c365628532e1443878ca73dc00b8ada1",
            "raw" : "https://images.unsplash.com/photo-1420393000485-4697383da9ec"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "l4RL-cUDrdI",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1442128788708-15f1811dd622?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=9bf6e3c48865e3990c60570b564cadd5",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1442128788708-15f1811dd622?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=c8b4ae6b1afb5409b6ff25498db260a0",
            "full" : "https://images.unsplash.com/photo-1442128788708-15f1811dd622?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=807193f9feb06748ceb3e67a2ef8b678",
            "raw" : "https://images.unsplash.com/photo-1442128788708-15f1811dd622"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "HKMjPUC_flk",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1485975638457-e191693003d0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=45c9e7b701e8dd106f5ad049e19bb813",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1485975638457-e191693003d0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=d129a12f99a6201e5b0f5d981ff1c2f8",
            "full" : "https://images.unsplash.com/photo-1485975638457-e191693003d0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=7eadfbe1646002bb6f5cfc44d1c5a72e",
            "raw" : "https://images.unsplash.com/photo-1485975638457-e191693003d0"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "zGORXMe0Wlc",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=dddb143e1ab3c31fc75b64944318f9c9",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=ca9b9c93223df5ea35bd287f8c0f01a1",
            "full" : "https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=5f657ca45a8cdc298bcac4e77e7a01df",
            "raw" : "https://images.unsplash.com/photo-1485871882310-4ecdab8a6f94"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "Rg-YY72AK44",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1495919557782-0b189cc63e6a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=e481405cd28c53b55b486aaa71359845",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1495919557782-0b189cc63e6a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=0551b187a4fd1511fc0e4d142ef68945",
            "full" : "https://images.unsplash.com/photo-1495919557782-0b189cc63e6a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=c11eb2330fdd6249566edce954af94c0",
            "raw" : "https://images.unsplash.com/photo-1495919557782-0b189cc63e6a"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "3kYvMhs3ICA",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1486320596428-2facb6198471?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b3699896cab4cf5b02a27a164cee3c69",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1486320596428-2facb6198471?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=34b169dbc7d3b951feead82301d13a3d",
            "full" : "https://images.unsplash.com/photo-1486320596428-2facb6198471?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=f877426338a605e5f60a0fe80ec0bfb4",
            "raw" : "https://images.unsplash.com/photo-1486320596428-2facb6198471"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "l6WMgMOvbNE",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1489222499870-355327f7bad2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=e523a080d4a189893f4ec214e3c70bd9",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1489222499870-355327f7bad2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=d613531bde1e22fa9968701c7ab88ac2",
            "full" : "https://images.unsplash.com/photo-1489222499870-355327f7bad2?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=b4add90524736bab2e74c7637f48a4e2",
            "raw" : "https://images.unsplash.com/photo-1489222499870-355327f7bad2"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "Lu2pfy_8VKg",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1472235477785-4a74ac750010?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=0bf55fb2be087c6729541572ecf79a41",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1472235477785-4a74ac750010?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=3de3f5a9bf6ffa1216a75352181359d6",
            "full" : "https://images.unsplash.com/photo-1472235477785-4a74ac750010?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=4793b38efc6ace103cbb769089f405e6",
            "raw" : "https://images.unsplash.com/photo-1472235477785-4a74ac750010"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "FCIJfK0r1Xc",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1497300201756-9411d3d08327?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=1f27cb9b6472e14df5edf7be6ffdb8bd",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1497300201756-9411d3d08327?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=b3b721e951413f1c16ae34d4531950cd",
            "full" : "https://images.unsplash.com/photo-1497300201756-9411d3d08327?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=722b13208e9746984bc824089deee343",
            "raw" : "https://images.unsplash.com/photo-1497300201756-9411d3d08327"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "PdOTuFr2L88",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1474410914989-c74fa8f9a512?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=32bb7cc50331fe0d3c5e8ec9d7af12a0",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1474410914989-c74fa8f9a512?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=94e1ea444e7f377db830f708be4781a5",
            "full" : "https://images.unsplash.com/photo-1474410914989-c74fa8f9a512?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=28b73653c63a3a81fcd27d5d5b553b54",
            "raw" : "https://images.unsplash.com/photo-1474410914989-c74fa8f9a512"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "qv9BXmLdrNM",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1489583742826-346184cfd110?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a3f87a71fc9804ac6b3a70d13ed6f8c2",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1489583742826-346184cfd110?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=2c97fabe6a5e728c686a8707db9d3688",
            "full" : "https://images.unsplash.com/photo-1489583742826-346184cfd110?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=474022f86be3fab38e277192ced879db",
            "raw" : "https://images.unsplash.com/photo-1489583742826-346184cfd110"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "69SAH9ExYSw",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1499323544943-39d8e7b75615?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=683c377705e77e1166ff42ed1dd31f09",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1499323544943-39d8e7b75615?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=87cb4d4a38ec72abf0ea3d684505917c",
            "full" : "https://images.unsplash.com/photo-1499323544943-39d8e7b75615?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=56449c484600aa9b4c500fec4e0762c8",
            "raw" : "https://images.unsplash.com/photo-1499323544943-39d8e7b75615"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "uJfwRhfgSnw",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1480970653448-02835da67676?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=f0e2269125914ab660216e1d990026d9",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1480970653448-02835da67676?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=47bf7c6a45642c1f8de8fb06fa463f2f",
            "full" : "https://images.unsplash.com/photo-1480970653448-02835da67676?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=3d33c9c27e6ebacf5fa1f808b55bb4da",
            "raw" : "https://images.unsplash.com/photo-1480970653448-02835da67676"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "hET72ETjMbU",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1495895828857-6bbf2f319e73?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d195ef4687e936a88b24ca241b300267",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1495895828857-6bbf2f319e73?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=9015f84b0ba1d68c3138dae7256cff36",
            "full" : "https://images.unsplash.com/photo-1495895828857-6bbf2f319e73?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=6f4f78e09d91d14997188887127c15be",
            "raw" : "https://images.unsplash.com/photo-1495895828857-6bbf2f319e73"
        },
        "__v" : 0
    }
    ,{
        "foreignId" : "GbFCv3Uf2uE",
        "urls" : {
            "thumb" : "https://images.unsplash.com/photo-1485872987516-ec9b00fe7a65?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=191feb35a9f53a66455666991c9564c9",
            "small" : "golds_entry2.jpg",
            "regular" : "https://images.unsplash.com/photo-1485872987516-ec9b00fe7a65?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=61f7b5b8bb1b479a0b29470131889763",
            "full" : "https://images.unsplash.com/photo-1485872987516-ec9b00fe7a65?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=e7c4f720051b621766f6f6a997ee046c",
            "raw" : "https://images.unsplash.com/photo-1485872987516-ec9b00fe7a65"
        },
        "__v" : 0
    }]
  })
   })
}
