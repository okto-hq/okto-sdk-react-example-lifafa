export type Lifafa = {
  "version": "0.1.0",
  "name": "lifafa",
  "instructions": [
    {
      "name": "createSolLifafa",
      "accounts": [
        {
          "name": "lifafa",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "timeLimitInSeconds",
          "type": "i64"
        },
        {
          "name": "maxClaims",
          "type": "u16"
        },
        {
          "name": "ownerName",
          "type": "string"
        },
        {
          "name": "desc",
          "type": "string"
        }
      ]
    },
    {
      "name": "claimSolLifafa",
      "accounts": [
        {
          "name": "lifafa",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteSolLifafa",
      "accounts": [
        {
          "name": "lifafa",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "lifafa",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "timeLimit",
            "type": "i64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "ownerName",
            "type": "string"
          },
          {
            "name": "claimed",
            "type": {
              "vec": {
                "array": [
                  "u8",
                  8
                ]
              }
            }
          },
          {
            "name": "maxClaims",
            "type": "u16"
          },
          {
            "name": "mintOfTokenBeingSent",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "desc",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TimeLimitExpired",
      "msg": "TimeLimit has expired"
    },
    {
      "code": 6001,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    },
    {
      "code": 6002,
      "name": "AlreadyClaimed",
      "msg": "Already claimed"
    },
    {
      "code": 6003,
      "name": "MaxClaimsReached",
      "msg": "Max Claims Reached"
    },
    {
      "code": 6004,
      "name": "MaxClaimsLimitExceeded",
      "msg": "Max claims limit exceeded"
    },
    {
      "code": 6005,
      "name": "OwnerNameTooLong",
      "msg": "Owner name too long"
    },
    {
      "code": 6006,
      "name": "DescriptionTooLong",
      "msg": "Description too long"
    }
  ]
};

export const IDL: Lifafa = {
  "version": "0.1.0",
  "name": "lifafa",
  "instructions": [
    {
      "name": "createSolLifafa",
      "accounts": [
        {
          "name": "lifafa",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "timeLimitInSeconds",
          "type": "i64"
        },
        {
          "name": "maxClaims",
          "type": "u16"
        },
        {
          "name": "ownerName",
          "type": "string"
        },
        {
          "name": "desc",
          "type": "string"
        }
      ]
    },
    {
      "name": "claimSolLifafa",
      "accounts": [
        {
          "name": "lifafa",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteSolLifafa",
      "accounts": [
        {
          "name": "lifafa",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "lifafa",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "timeLimit",
            "type": "i64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "ownerName",
            "type": "string"
          },
          {
            "name": "claimed",
            "type": {
              "vec": {
                "array": [
                  "u8",
                  8
                ]
              }
            }
          },
          {
            "name": "maxClaims",
            "type": "u16"
          },
          {
            "name": "mintOfTokenBeingSent",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "desc",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "TimeLimitExpired",
      "msg": "TimeLimit has expired"
    },
    {
      "code": 6001,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    },
    {
      "code": 6002,
      "name": "AlreadyClaimed",
      "msg": "Already claimed"
    },
    {
      "code": 6003,
      "name": "MaxClaimsReached",
      "msg": "Max Claims Reached"
    },
    {
      "code": 6004,
      "name": "MaxClaimsLimitExceeded",
      "msg": "Max claims limit exceeded"
    },
    {
      "code": 6005,
      "name": "OwnerNameTooLong",
      "msg": "Owner name too long"
    },
    {
      "code": 6006,
      "name": "DescriptionTooLong",
      "msg": "Description too long"
    }
  ]
};

export const programId = "AXBZp473xo61tmpSryZfuZMGBs2c1q2MdVh2yW7GLS1z";