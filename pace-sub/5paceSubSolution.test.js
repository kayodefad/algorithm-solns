const paceSub = require("./paceSubSolution");

test('a simple case where paceSub("abcdefgh","cab", 3) to expect "fde"', () => {
  expect(paceSub("abcdefgh","cab", 3)).toBe("fde");
});

test('a simple case where paceSub("aiwtdhoursnyedd", "tension", 4) to expect "uiddhnd"', () => {
  expect(paceSub("aiwthoursnyed", "tonsion", 4)).toBe("rnadona");
});

test('a simple case where paceSub("olredtivswabu", "redis", 7) to expect "wabor"', () => {
  expect(paceSub("olredtivswabu", "redet", 7)).toBe("wabau");
});



