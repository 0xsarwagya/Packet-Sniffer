# JavaScript Packet Sniffer

This is a basic packet sniffer implemented in JavaScript using the pcap library. It listens for HTTP requests on a specified network interface and logs the host and path of the request. It also checks the raw payload of the packet for keywords related to usernames and passwords, and logs any possible username/password combinations.

## Usage

To run the sniffer, you'll need to have Node.js installed on your system. You can then clone the repository and run npm install to install the necessary dependencies.

Once the dependencies are installed, you can run the sniffer using node index.js <interface>. Replace <interface> with the network interface you want to use for sniffing packets.

## Prevention from Packet Sniffers

* It's important to be aware of the potential security risks of packet sniffers and to take steps to prevent sensitive information from being intercepted. Here are some best practices for protecting against packet sniffing:

* Use encryption: Whenever possible, use encrypted protocols like HTTPS or SSH to protect your communications. This makes it much more difficult for a packet sniffer to intercept and interpret your data.

* Avoid public Wi-Fi: Public Wi-Fi networks are often insecure, and it's easy for someone to set up a rogue access point and use a packet sniffer to intercept your data. Whenever possible, use a private, secure network or a VPN.

* Be cautious with sensitive information: Be mindful of the information you transmit over the network, and avoid sending sensitive information (like passwords or credit card numbers) over unencrypted connections.

* Keep your software up-to-date: Make sure to keep your operating system, browser, and other software up-to-date with the latest security updates and patches. This helps protect against security vulnerabilities that could be exploited by attackers using packet sniffers.