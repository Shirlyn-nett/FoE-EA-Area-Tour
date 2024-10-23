var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.24568182105589642,
        "pitch": 0.07657395798481659,
        "fov": 1.2051640687040213
      },
      "linkHotspots": [
        {
          "yaw": 0.3095271920481828,
          "pitch": -0.3235885493925359,
          "rotation": 13.351768777756625,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0784955745636147,
          "pitch": -0.17446565714172024,
          "title": "Building",
          "text": "University Cultural Centre!"
        },
        {
          "yaw": 0.6229476941646368,
          "pitch": 0.009980197793378665,
          "title": "Welcome to ENGINEERING!",
          "text": "Enjoy your tiny tour of this space."
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1329406149214023,
          "pitch": 0.012744410604936363,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.685525248900234,
          "pitch": -0.12128336945464113,
          "rotation": 10.210176124166829,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4453623428072522,
          "pitch": 0.0344048115581117,
          "title": "Additional directions",
          "text": "This leads to the Engineering bus stop, and you can get to Techno Edge in this direction as well."
        },
        {
          "yaw": -0.9064021021425361,
          "pitch": -0.4769179390596179,
          "title": "T-Labs",
          "text": "Should be?"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1372666181626183,
          "pitch": 0.12336109369527648,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1295659787090493,
          "pitch": -0.2794300477005667,
          "title": "Ex-Cafe: Spinelli",
          "text": "This cafe is now replaced by He Brews Cafe."
        },
        {
          "yaw": 1.5330025171050243,
          "pitch": 0.49186222557940695,
          "title": "Ex-Fixture",
          "text": "This has been removed."
        }
      ]
    }
  ],
  "name": "FoE Area",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
