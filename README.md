# POWsim - a proof of work simulator

https://powsim.trevorkerney.com/

## Installation

To run this app locally, open a terminal in the project directory and run the following commands:

```javascript
// with Yarn
yarn
yarn start

// with npm
npm install
npm start
```

You also need a Sass compiler to generate necessary CSS files into /src/css. This project includes predefined config for Ritwick Dey's Live Sass Compiler on VSCode.

---

## What is this?

POWsim is a proof of work simulator, but what is proof of work?

Proof of work is most notably used in the Bitcoin network as trustless consensus method, meaning it serves as a means of verifying transactions without the need for a central authority such as a bank ....but how? The answers are in cryptography.

At its core, proof of work is exactly how it sounds; it is proof that computational work (processing) was expended. But how do we expend this work and how do we prove that we did it?

When you input a string into a cryptographic hash function, it returns a binary number (i.e. 01011100) with a fixed length, no matter the input size. This number is completely random; barely differing inputs will produce vastly different outputs, so there is no way to determine the input from the output. This implies that to find a hash output with desired attributes (for example, you want it to start with 10 zeroes), there is no better method than just guessing and checking. This is what the "work" in proof of work refers to.

"Work" consists of repeatedly giving a cryptographic hash function a message combined with an incrementing (or randomized) arbitrary value until the output hash returned satisfies given requirements. Once that hash has been found, the aribitrary value that was combined with the message to create said hash IS THE PROOF that you did this work.

That arbitrary value is proof because the fact that you have it proves that you (or someone) did all that guessing and checking to find it. There is no other way to get it. You can verify that a proof of work is correct by combining it with the original message in the same format and inputting that into the same cryptographic hash function. It will output the exact hash that satisfies the given requirements of the work, proving that it is in fact, proof of work.

[This video](https://www.youtube.com/watch?v=gTfNtop9vzM) further explains the nature of cryptographic hash functions and proof of work.

---

In this app, the user provides a message and a desired number of zeroes. Three dashes and a number, N, are concatenated to it. This is the template: ```message---N```.

That string is then inputted into SHA256. The output is then checked to see whether or not it starts with the given number of zeroes. If it is, processing stops and the proof of work is found. If the hash is not satisfactory, N is incremented and it tries again. This process is repeated until the proof of work is found.

Proofs of work from this app can be verified by inputting the message and proof of work, in the same format as the template above, into any (reliable) SHA256 hash function. It will return the same satisfying hash as shown in the app when proof of work was found.
