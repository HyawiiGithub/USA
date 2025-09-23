const { Client, Account } = require('appwrite');

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('YOUR_PROJECT_ID');

const account = new Account(client);

const users = [
  { email: 'enigma@cabinet.gov', password: 'P7r$En1gmA-K1ngM4cD0n4ld$Tr3asUr3!', name: 'Enigma' },
  { email: 'kingofmcdonalds@cabinet.gov', password: 'V1c3Pr3s-K1ngM4cD0n4ld$ArCh1u$St4t3$B3nn1!', name: 'king of mcdonalds' },
  { email: 'hyawii@cabinet.gov', password: 'WhCh13f-Hy4w11$St4t3ArCh1u$Tr34sUr3B3nn1$D3f3n$3!', name: 'Hyawii' },
  { email: 'archiusdornius@cabinet.gov', password: 'St4t3ArCh1u$D0rn1u$Tr3a$Ur3B3nn1$Sh4m3l3s$!', name: 'ArchiusDornius' },
  { email: 'benni@cabinet.gov', password: 'Tr345Ur3B3nn1$Sh4m3l3s$AtT0rn3yG3n3r4l$F3r14n!', name: 'Benni' },
  { email: 'shameless@cabinet.gov', password: '4tT0rn3yG3n-Sh4m3l3s$F3r14nD3f3n$3$T3chSyn!', name: 'Shameless' },
  { email: 'ferian@cabinet.gov', password: 'D3f3n$3F3r14n$T3chn0cr4t1c$SynD1c4l1sT$TrvT!', name: 'Ferian' },
  { email: 'technocraticsyndicalist@cabinet.gov', password: 'Int3r10rT3chSyn$TrvTk0$4gr1cuLtur3$3m4n0n!', name: 'TechnocraticSyndicalist' },
  { email: 'trvtko@cabinet.gov', password: '4gr1CuL-TrvTk0$3m4n0nC0mm3rc3$Kl0b1$!', name: 'Trvtko' },
  { email: 'emanon@cabinet.gov', password: 'C0mm3rc3-3m4n0n$Kl0b1$kuM$Un4mbB1g1r0n!', name: 'Emanon' },
  { email: 'klobiskum@cabinet.gov', password: 'H34lthKl0b1$kuM$Hy4w11$Tr4n$Sp0rtF3nt4nyl!', name: 'Klobiskum' },
  { email: 'fentanyl@cabinet.gov', password: 'Tr4n$Sp0rtF3nt4nyl$S4mw1$3$Epa4dm1n!', name: 'fentanyl' },
  { email: 'samwise@cabinet.gov', password: '3p4-S4mw1$3$3n3rGyJ3n$0$1m4t3!', name: 'Samwise' },
  { email: 'jens@cabinet.gov', password: '3n3rGyJ3n$0$1m4t3EduC4t10n$F4lk3n!', name: 'Jens' },
  { email: 'osimate@cabinet.gov', password: '3duC4t10n0$1m4t3$F4lk3nH0m3L4nd!', name: 'Osimate' },
  { email: 'falken@cabinet.gov', password: 'H0m3L4ndF4lk3n$Squ33dDni$Th0rGr1m!', name: 'falken' },
  { email: 'bigiron@cabinet.gov', password: 'Un4mbB1g1r0n$Squ33dD1r3ct0rN4t10n4l!', name: 'Big Iron' },
  { email: 'squeed@cabinet.gov', password: 'Dn1-Squ33d$Th0rGr1mC14D1r3ct0r!', name: 'Squeed' },
  { email: 'thorgrim@cabinet.gov', password: 'C14Th0rGr1m$D1r3ct0r0fC3nTr4l1nt3ll!', name: 'Thorgrim' }
];

async function createUsers() {
  for (const user of users) {
    try {
      await account.create(user.email, user.password, user.name);
      console.log(`Created user: ${user.email}`);
    } catch (error) {
      console.error(`Error creating ${user.email}:`, error.message);
    }
  }
}

createUsers();
