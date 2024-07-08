const Sequelize = require("sequelize");
const Config = require("../dbs");

require("dotenv").config();

const sequelize = new Sequelize(
  Config[process.env.DB_ENV]?.database,
  Config[process.env.DB_ENV]?.username,
  Config[process.env.DB_ENV]?.password,
  {
    host: Config[process.env.DB_ENV]?.host,
    port: Config[process.env.DB_ENV]?.port,
    dialect: "postgres",
    //     dialectOptions: {
    //       ssl: {
    //         require: true,
    //         rejectUnauthorized: false,
    //         cert: `-----BEGIN CERTIFICATE-----
    // MIIEQTCCAqmgAwIBAgIUYm9jlvFidGrfovYpA+BecDxVZTwwDQYJKoZIhvcNAQEM
    // BQAwOjE4MDYGA1UEAwwvMTg1NDQ1ODctMjUwMy00NTcxLTg2NWMtNWVlODhhNzVi
    // YjhkIFByb2plY3QgQ0EwHhcNMjQwNjI4MTEwOTI5WhcNMzQwNjI2MTEwOTI5WjA6
    // MTgwNgYDVQQDDC8xODU0NDU4Ny0yNTAzLTQ1NzEtODY1Yy01ZWU4OGE3NWJiOGQg
    // UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAK8I+1jS
    // S219W5THv3l82eSkIdDrSVU2tABOpoJf2Wm2HW68TCg7BXHzaq+DVXwu5i4t8rkV
    // 0+0rv933Ya1/iWeXanFK3esPZetyO87rS+RI7Fa+/gI3QTf27hGHV9FYL+jAq4bQ
    // ohY8TABNaBhbnTazCp1Nuf6k3JGXJM3qXBwthGSwpel1eQe7yXVIdGs+vo76kwqS
    // CYtUJuLr9hGFuEIVmG5soU1YI5AcAewtBsekdpFYpX6Cyb1Q8jRqiyjh/PAqZKQm
    // 7sgiRHm9UWF/WQ/fkWMrA7PkdKIZSffQWHJv9A1m8Y7vqTJlEocawZepyiW0H1dZ
    // rDzX1baCmYupm72qGRqfWoc33VKaIiv/waQ9qFOVgp1miQCwB3JF+FIaAtYIfhRZ
    // +yCoXR9TCRaVpkDOzqXnRRB6SU9ohCeEXvKx9VOy51k4NwsLvNwF7ZQ7QDA26nPx
    // MmGMUExyqHl38xdp9yuWX6UJbNuDRWIC+Yb5FY0bb98u8wmHLaiAK92huwIDAQAB
    // oz8wPTAdBgNVHQ4EFgQU2L6uedYANKeypbJJfFJX/oD/kCQwDwYDVR0TBAgwBgEB
    // /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAJ0i2Jt4JDvh87hE
    // jmsZPGDTjisrk+OcpoeQ7e/4fOTu2yUk00pFLDfapeEKjN3gY//Fcl4+sdi8rtNG
    // cMBZ2d0dQ5OE1H/iqKBhYeTRlgWQVV92MU0D/l67asvKzI6sfWEQ1y9pBx5edSyq
    // FLt5xpA/5816GL5i4DH0dV3CChm2rpfToVYr1W07bquz2GWjV7bGulDxn97yY+ry
    // L5B1DMQEiglBFZIMOuLkTA9CmO6DcOZ+jpCYrZc2UItXUX40x6aHwp0/Eenhz4QY
    // 2GH42SjbOz9dDhjMZx3rLAdupX0S1cbk0+RbUdrdlmb6P5W/LLl1Se21/JVuNB59
    // 1syusx/NWO+LSKLB1GnpZGJqYE/MJuac0m8M3sNReorlpucz4ZPyKbsWac4Up9vp
    // h64wZ18FmiBF5L9ssrXS8vqgiRT1F8QePJ46W4soBRTC+TXPjLAtBxapWoVQXb59
    // dd9n/beu4ra/8bDphKv9IzIRTub6JW22fVegjTyud39VXKhDfQ==
    // -----END CERTIFICATE-----`,
    //       },
    //     },
  }
);

module.exports = sequelize;
