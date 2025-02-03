import { useState } from 'react';

import './Info.scss'

const Info = () => {

  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const infoChangeHandler = (): void => {
    setIsInfoOpen((prev) => {
      console.log(prev);
      return !prev;
    });
  }

  return (
    <div id='info'>
      <button
        id='this'
        onClick={infoChangeHandler}
      >
        What is this?
      </button>
      <div
        id='what'
        style={
          (isInfoOpen) 
          ? {
            maxHeight: '4320px'
          } : {
            maxHeight: '0'
          }
        }
      >

        <p>POWWsim is a proof of work simulator.</p>

        <p>Proof of work is most notable for its use in the Bitcoin network as trustless consensus method. It serves as a means of verifying financial transactions without the need for a central authority (like a bank) by means of complex mathematics & cryptography.</p>
        
        <p>At its core, proof of work is exactly how it sounds; it is proof that computational work (processing) was expended.</p>
        
        <p>Work is everything your computer does. When you open a browser and go to a website, it has to work a little to load the browser and then load the website. Granted, that work in particular consists of mostly of network communication and data transmission, and the part that doesn't is insignificant. A better example would be something like compressing files, video/3D rendering, playing graphics intensive video games, etc... all of which consist of mostly CPU (and GPU) processing.</p>
        
        <p>The key here is that time is required to perform this work.</p>
        
        <p>Now for a bit of a tangent...</p>
        
        <p>There is a concept in software, really just math in general, called a cryptographic hashing function. They sound complicated and they usually are very complicated, but you really don't need to worry about how they work unless you want to make one, which is far beyond the scope of this explanation. What's more important is what they do. SHA-256, a very popular cryptographic hashing function used by Bitcoin and POWsim, takes a string (text) as input, and outputs another string. The output string is created by applying highly complex mathematical and cryptographic principles to the given input string.</p>

        <p>The outputted string and the methods used to obtain it have some important properties:</p>

        <ul>
          <li>The same input always gives the same output.</li>
          <li>Different inputs never give the same output.</li>
          <li>The output is a binary number (i.e. 01011101) with a fixed length of 256 digits, no matter the input size.</li>
          <li>It is impossible to go in reverse and determine the input from the output. Slightly differing inputs will produce vastly different outputs. Understanding why this is would required understanding how cryptographic hash functions work, which again, is out of scope.</li>
        </ul>

        <p>Keeping all this in mind, let's get back to work...</p>

        <p>Say you wanted to find an output with certain attributes, like you want it to start with 10 zeros. Remember, you can't determine an input from an output. You can't just take a 256 digit binary number that starts with 10 zeros and do some simple reversal procedure to find the input used to create said output in SHA-256, because there is no known way to do this . To find an output that fits this criteria, there is no better way whatsoever than trial and error.</p>
        
        <p>This implies that, to find a hash output with desired attributes (for example, you want it to start with 10 zeroes), there is no better method than just guessing and checking. This is what the "work" in proof of work refers to.</p>
        
        <p>"Work", in this particular context, consists of repeatedly giving a cryptographic hash function a message combined with an incrementing (or randomized) arbitrary value until the output hash returned satisfies given requirements. Once that hash has been found, the aribitrary value that was combined with the message to create said hash IS THE PROOF that you did this work.</p>
        
        <p>That arbitrary value is proof because the fact that you have it proves that you (or someone) did all that guessing and checking to find it. There is no other way to get it. You can verify that a proof of work is correct by combining it with the original message in the same format and inputting that into the same cryptographic hash function. It will output the exact hash that satisfies the given requirements of the work, proving that it is in fact, proof of work.</p>
        
        <p><a href="https://www.youtube.com/watch?v=gTfNtop9vzM">This video</a> further explains the nature of cryptographic hash functions and proof of work.</p>
        
        <p>In this app, the user provides a message and a desired number of zeroes. Three dashes and a number, N, are concatenated to it. This is the template: <span id='template'>message---N</span>.</p>
        
        <p>That string is then inputted into SHA256. The output is then checked to see whether or not it starts with the given number of zeroes. If it is, processing stops and the proof of work is found. If the hash is not satisfactory, N is incremented and it tries again. This process is repeated until the proof of work is found.</p>
        
        <p>Proofs of work from this app can be verified by inputting the message and proof of work, in the same format as the template above, into any (reliable) SHA256 hash function. It will return the same satisfying hash as shown in the app when proof of work was found.</p>

      </div>
    </div>
  );
}

export default Info;
