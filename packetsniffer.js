const pcap = require("pcap");
const pcapSession = pcap.createSession("en0", "tcp");

pcapSession.on("packet", (rawPacket) => {
  const packet = pcap.decode.packet(rawPacket);
  console.log(
    "[+] Http Request >> " +
      packet.payload.payload.sport +
      packet.payload.payload.dport
  );
});

pcapSession.on("complete", function () {
  console.log("Packet capture complete.");
});
